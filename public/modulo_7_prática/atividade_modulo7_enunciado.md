# Prática Integrada — O Almoxarifado do Fim do Mundo

## Enredo polido

O **Coronel Aviador Davy Jones**, piloto do *Flying Dutchman* e comandante do **Grupamento de Apoio do Fim do Mundo**, acaba de lhe nomear chefe do almoxarifado.

A situação é crítica: a unidade vem sofrendo **rupturas de estoque**, as equipes operacionais reclamam de indisponibilidade de material e ninguém consegue explicar com segurança se o problema está no consumo, no fornecedor, no lead time ou no próprio parâmetro de reposição.

Ao assumir a função, você descobre que a documentação foi perdida em meio às tempestades do estreito. Restaram apenas duas bases de dados:

1. **Histórico diário de estoque** de dois itens;
2. **Histórico de pedidos ao fornecedor** desses mesmos itens.

Você sabe que existem apenas **dois itens em análise**:

- **Item 1 — must-have:** material crítico, cuja falta compromete a operação;
- **Item 2 — need-to-have:** material importante, cuja falta degrada a eficiência, mas não interrompe imediatamente a missão.

O Coronel foi direto no briefing:

> “Descubra por que estamos rompendo estoque, proponha novos parâmetros e me diga quanto custa manter esse nível de prontidão. Falhe... e você fará parte da tripulação.”

Seu trabalho é reconstruir a lógica do estoque a partir dos dados disponíveis e apresentar uma recomendação objetiva ao Coronel.

---

## Missão dos discentes

Com base **somente** nos arquivos de estoque e pedidos recebidos, cada grupo deverá:

### Etapa 1 — Reconstrução operacional
1. Identificar, para cada pedido:
   - o que foi **pedido**;
   - o que foi **recebido corretamente**;
   - o que veio **a menos**.
2. Calcular o **lead time** de cada pedido.
3. Consolidar a **média** e o **desvio padrão do lead time** por item.

### Etapa 2 — Reconstrução do consumo
Usando o histórico diário de estoque, calcular o consumo diário por item pela relação:

**Consumo do dia = Estoque inicial + Entradas do dia - Estoque final**

Depois disso, calcular para cada item:
- consumo médio diário;
- desvio padrão do consumo diário;
- dias com indício de ruptura;
- observações sobre comportamento do item.

### Etapa 3 — Diagnóstico logístico
Classificar os dois itens:
- qual é o **must-have**;
- qual é o **need-to-have**.

Em seguida, discutir:
- o problema principal parece ser **subdimensionamento do estoque**, **variabilidade da demanda**, **variabilidade do lead time**, **entrega parcial do fornecedor** ou uma combinação desses fatores?
- qual item deve receber política mais conservadora?

### Etapa 4 — Proposta de parâmetros
Cada grupo deverá propor, para cada item:
- **nível de serviço desejado**;
- o significado operacional desse nível de serviço;
- **estoque de segurança**;
- **ponto de ressuprimento (ROP)**;
- **ponto máximo esperado de estoque**;
- justificativa do lote proposto.

Sugestão de fórmula quando demanda e lead time variam:

**ES = Z × √((LT médio × σ² da demanda) + (demanda média² × σ² do LT))**

**ROP = demanda média × LT médio + ES**

Para a atividade, vocês podem adotar:

**Ponto máximo esperado = ROP + lote proposto**

### Etapa 5 — Custo da prontidão
Estimar o **custo anual de manter o nível de estoque proposto**.  
Caso o professor não forneça outra convenção, use:

**Custo anual de posse ≈ estoque médio × custo unitário × taxa anual de posse**

Onde:
- **estoque médio** pode ser aproximado por **ponto máximo / 2**;
- a taxa anual de posse será informada pelo professor ou assumida pelo grupo.

### Etapa 6 — Briefing ao Coronel
Ao final, cada grupo deverá consolidar tudo em um briefing executivo de no máximo 5 minutos, respondendo:

1. O que está acontecendo com o almoxarifado?
2. Qual item representa maior risco à missão?
3. Quanto estoque vocês recomendam manter?
4. Quanto custa essa decisão?
5. O que o Coronel ganha ao aceitar a proposta?

---

## Critérios de avaliação sugeridos

- Correção dos cálculos;
- Clareza na leitura dos dados;
- Coerência da política de estoque proposta;
- Relação entre custo e risco;
- Qualidade da comunicação executiva.
