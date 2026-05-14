"""
Gera os CSVs de demanda mensal (Jan/2021 - Dez/2025) para a Prática "A Tormenta Perfeita".
6 cenários × 2 itens cada. Modelo multiplicativo: D(t) = T(t) × S(t) × C(t) × (1 + ε)
"""
import random
import math
import csv
import os

random.seed(42)

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "pratica_tormenta")
os.makedirs(OUTPUT_DIR, exist_ok=True)

MONTHS = 60  # Jan 2021 to Dec 2025


def normalize_seasonal(indices):
    """Normalize so indices sum to 12 (multiplicative convention)."""
    s = sum(indices)
    return [i * 12 / s for i in indices]


def generate_demand(params, seed_offset=0):
    rng = random.Random(42 + seed_offset)
    data = []
    for t in range(MONTHS):
        trend = params["base"] + params["trend_slope"] * t
        seasonal = params["seasonal_norm"][t % 12]
        cycle = 1 + params["cycle_amplitude"] * math.sin(
            2 * math.pi * (t + params["cycle_phase"]) / params["cycle_period"]
        )
        noise = 1 + rng.gauss(0, params["noise_cv"])
        demand = trend * seasonal * cycle * noise
        data.append(max(1, round(demand)))
    return data


scenarios = {
    "C1_estaleiro_do_abismo": {
        "GEL-01": {
            "base": 120, "trend_slope": 1.8,
            "seasonal": [0.75, 0.80, 0.90, 0.95, 1.05, 1.25, 1.30, 1.20, 1.05, 0.95, 0.90, 0.80],
            "cycle_period": 30, "cycle_amplitude": 0.15, "cycle_phase": 5,
            "noise_cv": 0.08,
        },
        "BRC-04": {
            "base": 50, "trend_slope": 0.6,
            "seasonal": [0.80, 0.85, 0.95, 1.00, 1.10, 1.20, 1.15, 1.10, 1.00, 0.95, 0.90, 0.80],
            "cycle_period": 30, "cycle_amplitude": 0.12, "cycle_phase": 5,
            "noise_cv": 0.10,
        },
    },
    "C2_forte_da_corrente_negra": {
        "OXD-11": {
            "base": 100, "trend_slope": 0.8,
            "seasonal": [0.85, 0.90, 1.25, 1.30, 1.25, 1.05, 0.95, 0.85, 0.75, 0.78, 0.85, 0.92],
            "cycle_period": 28, "cycle_amplitude": 0.08, "cycle_phase": 10,
            "noise_cv": 0.10,
        },
        "TRV-08": {
            "base": 40, "trend_slope": 0.4,
            "seasonal": [0.85, 0.88, 1.20, 1.25, 1.20, 1.05, 0.98, 0.88, 0.78, 0.80, 0.88, 0.95],
            "cycle_period": 28, "cycle_amplitude": 0.07, "cycle_phase": 10,
            "noise_cv": 0.12,
        },
    },
    "C3_deposito_do_vortice": {
        "PLG-21": {
            "base": 130, "trend_slope": 0.4,
            "seasonal": [0.80, 0.82, 0.85, 0.90, 0.95, 1.00, 1.05, 1.25, 1.30, 1.25, 0.95, 0.78],
            "cycle_period": 32, "cycle_amplitude": 0.18, "cycle_phase": 8,
            "noise_cv": 0.07,
        },
        "FBR-15": {
            "base": 55, "trend_slope": 0.2,
            "seasonal": [0.82, 0.85, 0.88, 0.92, 0.98, 1.02, 1.08, 1.22, 1.25, 1.20, 0.92, 0.80],
            "cycle_period": 32, "cycle_amplitude": 0.15, "cycle_phase": 8,
            "noise_cv": 0.09,
        },
    },
    "C4_arsenal_da_baia_sombria": {
        "CMP-31": {
            "base": 110, "trend_slope": 2.0,
            "seasonal": [0.92, 0.94, 0.98, 1.02, 1.05, 1.08, 1.05, 1.02, 0.98, 0.95, 0.92, 0.95],
            "cycle_period": 30, "cycle_amplitude": 0.12, "cycle_phase": 3,
            "noise_cv": 0.15,
        },
        "ANT-06": {
            "base": 45, "trend_slope": 0.8,
            "seasonal": [0.93, 0.95, 0.98, 1.02, 1.04, 1.06, 1.04, 1.02, 0.98, 0.96, 0.93, 0.95],
            "cycle_period": 30, "cycle_amplitude": 0.10, "cycle_phase": 3,
            "noise_cv": 0.18,
        },
    },
    "C5_oficina_do_recife_perdido": {
        "TRB-18": {
            "base": 140, "trend_slope": 1.0,
            "seasonal": [0.85, 0.88, 0.95, 1.15, 1.20, 1.18, 1.10, 0.98, 0.90, 0.85, 0.82, 0.85],
            "cycle_period": 34, "cycle_amplitude": 0.15, "cycle_phase": 12,
            "noise_cv": 0.09,
        },
        "ISO-09": {
            "base": 60, "trend_slope": 0.5,
            "seasonal": [0.88, 0.90, 0.98, 1.12, 1.18, 1.15, 1.08, 0.98, 0.90, 0.88, 0.85, 0.88],
            "cycle_period": 34, "cycle_amplitude": 0.12, "cycle_phase": 12,
            "noise_cv": 0.11,
        },
    },
    "C6_bateria_do_cabo_tormentoso": {
        "REG-44": {
            "base": 115, "trend_slope": 0.3,
            "seasonal": [0.78, 0.82, 0.88, 0.95, 1.18, 1.25, 1.28, 1.22, 1.15, 0.92, 0.82, 0.75],
            "cycle_period": 26, "cycle_amplitude": 0.20, "cycle_phase": 0,
            "noise_cv": 0.07,
        },
        "GRX-03": {
            "base": 48, "trend_slope": 0.15,
            "seasonal": [0.80, 0.84, 0.90, 0.98, 1.15, 1.22, 1.25, 1.20, 1.12, 0.90, 0.84, 0.78],
            "cycle_period": 26, "cycle_amplitude": 0.18, "cycle_phase": 0,
            "noise_cv": 0.09,
        },
    },
}

years = [2021 + m // 12 for m in range(MONTHS)]
month_nums = [1 + m % 12 for m in range(MONTHS)]

seed_counter = 0
for scenario_name, items in scenarios.items():
    item_names = list(items.keys())

    for iname, params in items.items():
        params["seasonal_norm"] = normalize_seasonal(params["seasonal"])

    demands = {}
    for iname, params in items.items():
        demands[iname] = generate_demand(params, seed_offset=seed_counter)
        seed_counter += 1

    filename = f"{scenario_name}_demanda.csv"
    filepath = os.path.join(OUTPUT_DIR, filename)

    with open(filepath, "w", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(["ano", "mes"] + item_names)
        for t in range(MONTHS):
            writer.writerow([years[t], month_nums[t]] + [demands[n][t] for n in item_names])

    print(f"OK  {filename}  ({item_names[0]}: {min(demands[item_names[0]])}–{max(demands[item_names[0]])}  "
          f"{item_names[1]}: {min(demands[item_names[1]])}–{max(demands[item_names[1]])})")

print("\nDone.")
