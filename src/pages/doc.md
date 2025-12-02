---
layout: ../layouts/DocLayout.astro
title: "Documentação"
---
# 1. Sobre

## **1.1 O que é um Gêmeo Digital ?**

Um **Gêmeo Digital** é uma representação virtual dinâmica de um ambiente real, atualizada continuamente a partir de dados coletados em campo. Ele cria uma conexão direta entre o mundo físico e o digital, permitindo observar, analisar e reagir a eventos da cidade de forma rápida e eficiente.

No contexto urbano, a cidade é transformada em um organismo observável: infraestrutura, mobilidade, clima, sensores, obras e alertas passam a dialogar entre si, compondo uma visão unificada e viva do território. Esse modelo permite identificar padrões, medir impactos e orientar ações com base em informações reais.

O **Gêmeo Digital de Niterói (GDN)** segue esse conceito. Ele reflete, em tempo real, os principais aspectos da dinâmica urbana associados à mobilidade, oferecendo uma plataforma interativa e atualizada continuamente.

---

### 1.1.1 A relação com o Escritório de Dados de Niterói (EDN)

Toda essa alimentação constante de dados serve como base analítica operada pelo **EDN**, que transforma essas informações em conhecimento aplicável. O Escritório de Dados pode utilizar esse ecossistema para realizar análises integradas, apoiar ações táticas em campo, produzir diagnósticos e orientar políticas públicas. 

Assim fica claro entender que com o GDN, o Escritório de Dados obtém:

- uma visão consolidada e atualizada dos principais indicadores urbanos;
    
- insumos para análises operacionais e estudos de médio e longo prazo;
    
- suporte para orientar decisões, políticas públicas e ações emergenciais;
    
- uma base unificada que fortalece toda a infraestrutura de dados do município.
    

Pode se dizer que o Gêmeo Digital funciona como o **painel vivo**, enquanto o EDN atua como o **cérebro analítico ou núcleo interpretativo** , transformando dados em decisões.

---

## **1.2. Objetivo do Projeto**

O principal objetivo do GDN é **representar a cidade de Niterói em tempo real**, oferecendo uma visão integrada do território para apoiar equipes técnicas, pesquisadores e cidadãos a compreender o funcionamento urbano de forma clara e integrada e auxiliar em operações, planejamento e tomada de decisão em situações críticas.

O foco atual está na mobilidade urbana, onde os dados se combinam para fornecer uma leitura precisa da movimentação da cidade. A plataforma não apenas exibe informações, mas facilita o entendimento de como esses elementos se relacionam entre si, contribuindo para decisões mais assertivas e embasadas. Assim podemos usar o Gêmeo para:

- entender fluxos urbanos de forma sistêmica;
    
- antecipar pontos críticos e riscos operacionais;
    
- orientar intervenções rápidas;
    
- aprimorar políticas públicas com dados reais;
    
- demonstrar transparência e inovação tecnológica para a população.
    

---

## **1.3. Dados Disponíveis na Plataforma**

O GDN integra diversas fontes oficiais, cada uma com critérios e formatos específicos.  
Abaixo estão as categorias atualmente mapeadas:

### 🚌 **1.3.1 Ônibus (MobNit - SEMOBI)**

- posição em tempo real (atualizada a cada ~30s)
    
- linha, sentido, rota
    
- paradas correspondentes e trajeto selecionado
    
- apenas veículos municipais das linhas Transoceânica e TransNit
    

---

### 🚨 **1.3.2 Alertas de Trânsito (Waze)**

- atualização a cada ~2 minutos
    
- tipo e subtipo (acidentes, obras em pista, alagamentos e carros parados na pista)
    
- localização georreferenciada

---

### 🚦 **1.3.3 Tráfego / Fluxo Viário (Waze)**

- atualização a cada ~2 minutos
    
- posição dos segmentos, velocidade média e nível de retenção
  
---

### 🎥 **1.3.4 Câmeras Urbanas (NitTrans)**

- localização geográfica
    
- último minuto de vídeo disponível
 

---

### 🌧️ **1.3.5 Pluviômetros (SVIDA - SMCDCR)**

- posição dos sensores
    
- nível de chuva (janela móvel de 15 minutos)
    
- área de influência calculada por **polígonos de Voronoi**
    
- impacto condicionado à bacia hidrográfica
    

---

### 🏙️ **1.3.6 Edificações 3D (SMU)**

O modelo tridimensional da cidade utiliza dados de mapeamento por **LiDAR** (Light Detection and Ranging).  
A tecnologia emite pulsos de laser e calcula o tempo de retorno para gerar uma **nuvem de pontos 3D** extremamente precisa, representando:

- contornos de edifícios para o ano de 2019
    
- topografia
    
- volumes e alturas
    
- estruturas urbanas complexas
    

Esses dados oferecem profundidade ao mapa, permitindo análises realistas da paisagem urbana.

---

## **1.4. Como esses dados se unem no GDN**

Todos esses elementos — mobilidade, trânsito, clima, câmeras, arquitetura 3D — se sobrepõem em uma plataforma única.  
As camadas conversam entre si, permitindo que o usuário compreenda **não apenas o que está acontecendo**, mas **como diferentes fatores se influenciam mutuamente**.

Por exemplo: Um evento isolado — como chuva intensa, uma obra ou um engarrafamento — pode ser interpretado dentro do contexto territorial, das rotas afetadas e das condições das vias. Isso ajuda a identificar padrões, explicar gargalos, antecipar riscos e compreender a dinâmica urbana de forma completa. O mapa torna-se não apenas uma interface visual: ele se transforma em um instrumento de análise e tomada de decisão baseada em evidências.

O resultado é um painel integrado, que ajuda tanto profissionais quanto cidadãos a compreender o funcionamento da cidade de forma clara, baseada em evidências.

---

# 2. Visão Geral


O **Gêmeo Digital de Niterói (GDN)** é uma plataforma que combina dados urbanos, visualização 3D e processamento contínuo para representar a cidade em tempo real. Nesta seção, apresentamos de forma direta como o sistema funciona “por baixo do capô”, complementando a parte conceitual explicada na aba _Sobre_. A intenção aqui é introduzir o ecossistema técnico sem excesso de detalhe, preparando o leitor para as seções específicas de frontend, backend e pipelines.



## **2.1 Frontend — Visualização e Interatividade**

O frontend é a interface principal do GDN. Ele exibe o mapa 3D, recebe atualizações contínuas e mantém a experiência fluida mesmo com centenas de entidades móveis. Tudo isso acontece a partir de uma WebScene ArcGIS renderizada em React, sincronizada com os dados recebidos via SSE — transmissões contínuas que evitam requisições repetidas.

Para lidar com essas atualizações, o estado é organizado em estruturas `Map`, mantidas pelo Zustand. Isso permite consultas rápidas e comparações eficientes, essenciais para manter o mapa sempre atualizado. A sincronização com o ArcGIS acontece de forma incremental, graças ao algoritmo _syncViewport_, que calcula apenas o que precisa ser adicionado, atualizado ou removido, aplicando tudo de uma vez através do `applyEdits`.  
O resultado é uma experiência leve, rápida e sem recarregamentos desnecessários.

---

## **2.2 Backend BFF — Transmissão de Estado em Tempo Real**

Entre o frontend e o backend principal está o BFF, uma camada intermediária responsável por transmitir o estado urbano consolidado para todos os navegadores conectados. Ele funciona como um “hub” de distribuição: recebe dados já processados, valida sua estrutura e envia para cada cliente usando Server-Sent Events.  
Isso garante que cada usuário receba as atualizações no exato ritmo em que o backend as produz, sem sobrecarregar o servidor com múltiplas requisições.

A validação de dados é feita com Zod, garantindo consistência do contrato entre front e back. Logs, monitoramento e tratamento de erros ficam centralizados, mantendo a estabilidade da conexão mesmo com grande volume de usuários simultâneos.

---

## **2.3 Backend Principal — Ingestão, Processamento e Estado Urbano**

O backend principal coleta, trata e cruza todas as fontes de dados que compõem o GDN. É aqui que acontece a lógica geoespacial — desde a ingestão de APIs externas até o processamento com ArcPy e GPService.  
Cada atualização consolida o estado da cidade, cruzando ônibus, alertas, tráfego e polígonos de Voronoi, antes de armazenar tudo no Redis. Esse cache é a camada final antes da transmissão ao BFF, garantindo velocidade e previsibilidade.

A manutenção das camadas ArcGIS, o versionamento de dados e as validações internas também fazem parte dessa responsabilidade, permitindo que a plataforma seja expandida com segurança e novas fontes de dados no futuro.

---

## **2.4 Pipelines Automáticas — Orquestração com Prefect**

A automação do GDN é realizada pelo Prefect, responsável por manter o sistema atualizado. A cada ciclo, ele coleta informações externas, normaliza os dados, trata falhas, executa processos geoespaciais e atualiza as camadas ArcGIS utilizadas pelo backend.  
Essas pipelines funcionam como o coração do sistema: bombeiam os dados que alimentam todo o ecossistema, garantindo que o estado urbano esteja sempre fresco, válido e pronto para ser consumido pelo frontend.

## **2.5 Tecnologias usadas na organização  manutenção do projeto**

### Além do pipeline operacional, o GDN utiliza ferramentas modernas


### 2.5.1 Monorepo

O projeto é estruturado como **monorepo**, contendo:

- aplicações principais (`apps/`),
- bibliotecas internas compartilhadas (`packages/`),
- documentação integrada.

Isso melhora a visibilidade do ecossistema, reduz redundância e facilita CI/CD.

---

### 2.5.2 PNPM

O PNPM é usado como gerenciador de pacotes devido a:

- desempenho superior,
- economia de espaço em disco,
- suporte nativo a workspaces,
- consistência entre ambientes,
- eficiência com pacotes pesados como `@arcgis/core`.

---

### 2.5.3 Zod e Tipagem Compartilhada com Typescript

Os schemas Zod estão centralizados em `packages/shared`, permitindo:

- validação tipada no backend e no frontend,
- contratos de dados unificados,
- zero redundância entre tipos e validações,
- maior segurança e consistência.

---

## 2.6 Resumo da Plataforma

O GDN combina:

- **mapas 3D avançados**
- **streaming de dados via SSE**
- **pipelines automatizadas com Prefect**
- **processamento contínuo no backend**
- **renderização otimizada no frontend**
- **arquitetura modular e escalável**

resultando em uma solução robusta, moderna e preparada para evoluir conforme a cidade cresce e novas integrações se tornam necessárias.

# 3. Metodologia


## **3.1. Fontes de Dados e Critérios Gerais**

O GDN utiliza apenas **fontes oficiais**, garantindo precisão e confiabilidade.  
Na mobilidade, por exemplo, são exibidos exclusivamente os ônibus municipais das linhas **Transoceânica** e **TransNit**, fornecidos pela **MobNit**. Cada veículo traz dados essenciais — posição, direção e linha — permitindo acompanhar a operação em tempo real.  
Quando o usuário seleciona uma linha, o mapa destaca automaticamente **sua rota e suas paradas**, facilitando a compreensão do trajeto.

Cada informação exibida segue critérios próprios, evitando sobrecarga visual e garantindo que apenas o que realmente importa apareça no mapa.

---

## **3.2. Alertas de Trânsito e Áreas de Influência**

Os alertas no mapa seguem uma lógica espacial pensada para reduzir ruído e aumentar a relevância.  
Cada alerta possui um **raio de ação de 150 metros**, ativando-se apenas quando realmente influencia veículos, vias ou áreas de interesse próximas. Isso mantém o mapa limpo e direcionado ao que impacta o dia a dia.

Além disso, há categorias especiais de alertas, como:

- alertas gerais de trânsito
    
- veículos parados em pista/acostamento
    
- obras e intervenções viárias
    
- alagamentos e trechos inundados
    

Esses grupos ajudam operadores e cidadãos a identificar rapidamente o tipo e a gravidade da ocorrência.

---

## **3.3. Congestionamentos e Detecção de Fluxo Lento**

O sistema identifica congestionamentos, com velocidade média inferior a **5km/h**, com base na proximidade entre o veículo e uma linha de tráfego congestionado.  
Um ônibus é considerado dentro de engarrafamento quando está a **até 12 metros** dos pontos que compõem o trecho lento.  
Essa lógica espacial simples e eficiente evita falsos positivos e relaciona o veículo diretamente ao estado real da via.


---

## **3.4. Monitoramento de Chuva e Bacias Hidrográficas**

A chuva é tratada com especial cuidado.  
Quando um pluviômetro registra chuva forte com mais de **6,2 mm em 15 minutos**, o sistema ativa um alerta de chuva intensa.  Utilizamos **polígonos de Voronoi**, que definem a área de influência de cada pluviômetro.

Assim, o alerta só afeta **ônibus e regiões dentro da mesma bacia hidrográfica**, garantindo precisão geográfica e aderência às características naturais do território.

---

## **3.5. Estados de Atenção e Informações no HUD**

Os estados de "Atenção" exibidos no HUD resultam da **combinação** de diferentes fatores:

- condições de chuva
    
- congestionamentos
    
- alertas de trânsito
 

Esse painel integrado ajuda operadores e cidadãos a compreender rapidamente a situação da cidade em um único olhar, sem necessidade de navegar entre múltiplas camadas ou menus.

Ônibus que não estão sob essas condições estarão classificados como "No Horário".

---

## **3.6. Câmeras Urbanas e Último Minuto de Vídeo**

As câmeras públicas também fazem parte do ecossistema de informações.  
Elas são posicionadas no mapa com apoio de uma camada geoespacial.
As imagens apresentadas representam sempre o **último minuto disponível**, fornecido pela **NITTRANS**, garantindo atualidade e confiabilidade.