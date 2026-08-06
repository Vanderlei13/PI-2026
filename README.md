# 🌽 MaizeAI

Sistema web com Inteligência Artificial para diagnóstico foliar em plantações de milho.

## 📖 Sobre o Projeto

O **MaizeAI** é um projeto desenvolvido para a disciplina de **Projeto Integrador**, com o objetivo de aplicar conceitos de **Inteligência Artificial**, **Visão Computacional** e **Desenvolvimento Web** para auxiliar na identificação de doenças em folhas de milho.

A proposta do sistema é oferecer uma solução:

* ✅ Simples
* ✅ Moderna
* ✅ Acessível
* ✅ Rápida
* ✅ Intuitiva

Por meio da câmera do dispositivo, o usuário pode capturar uma imagem da folha e enviá-la para análise, recebendo um possível diagnóstico gerado pela Inteligência Artificial.

---

## 🎯 Objetivo

O projeto busca auxiliar produtores, estudantes e profissionais da área agrícola no diagnóstico inicial de doenças foliares, contribuindo para:

* Redução do tempo de análise;
* Diminuição de custos de monitoramento;
* Identificação precoce de problemas na lavoura;
* Apoio à agricultura inteligente;
* Aplicação prática da Inteligência Artificial no agronegócio.

---

## ⚙️ Como Funciona

### 1. Captura da Imagem

O usuário acessa a tela principal e utiliza a câmera do dispositivo para fotografar uma folha de milho.

### 2. Processamento

Após a captura, a imagem é convertida para o formato Base64 e enviada ao modelo de Inteligência Artificial hospedado na plataforma Roboflow.

Para aumentar a confiabilidade da análise, o sistema gera diferentes versões da mesma imagem (como espelhamento e rotação) e envia todas para o modelo de IA. As predições retornadas são combinadas e o diagnóstico é baseado na detecção com maior nível de confiança.

O modelo é capaz de identificar padrões visuais relacionados a:

- Cercosporiose;
- Folhas saudáveis;
- Manchas foliares;
- Alterações na coloração.

### 3. Resultado

Após a análise, o sistema apresenta um possível diagnóstico ao usuário.

---

## 🔍 Fluxo de Funcionamento

O funcionamento do MaizeAI é dividido em sete etapas principais:

1. O usuário acessa o aplicativo e seleciona a opção **Tirar foto da planta**.
2. A câmera traseira do dispositivo é iniciada automaticamente.
3. A folha de milho é posicionada no centro da tela e a imagem é capturada.
4. O sistema converte a imagem para o formato Base64 e gera diferentes versões (original, espelhada e rotacionada) para aumentar a confiabilidade da análise.
5. As imagens são enviadas para o modelo de Inteligência Artificial hospedado no **Roboflow**, que realiza a inferência.
6. As predições retornadas são comparadas e o sistema seleciona o diagnóstico com o maior nível de confiança.
7. O resultado é exibido ao usuário, informando se a folha está saudável ou se foi identificada uma doença, juntamente com a porcentagem de confiança da detecção.

---

## 🖥️ Tecnologias Utilizadas

### Front-end

- React
- Vite
- JavaScript (ES6+)
- Tailwind CSS
- CSS3

### Interface

- Lucide React
- Design Responsivo
- Mobile First

### Inteligência Artificial

- Roboflow
- Computer Vision
- Machine Learning
- Modelo de Detecção de Objetos
- API REST para inferência
---

### 📂 Estrutura do Projeto

```
MaizeAI
├── public/
├── src/
│   ├── img/
│   │   └── logo.png
│   ├── MaizeApp.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

---

## 📱 Funcionalidades

### 🌿 Diagnóstico Foliar

- Captura de imagens pela câmera;
- Conversão automática da imagem para Base64;
- Geração de múltiplas versões da imagem para aumentar a precisão da IA;
- Integração com modelo treinado no Roboflow;
- Exibição do nível de confiança da detecção;
- Identificação automática entre folha saudável e folha com Cercosporiose.

### 📷 Sistema de Câmera

- Acesso automático à câmera traseira do dispositivo;
- Captura em alta resolução (até 1920x1080 quando disponível);
- Ajuste automático para dispositivos com menor resolução;
- Interface otimizada para dispositivos móveis.

### 🏠 Navegação

- Tela Inicial;
- Tela de Captura;
- Tela de Créditos.

### 🎨 Interface

- Layout responsivo;
- Design moderno;
- Mobile First;
- Feedback visual durante a análise da IA;
- Mensagens de sucesso, erro e processamento;
- Navegação intuitiva com barra inferior.

---

## 👥 Equipe de Desenvolvimento

| Integrante               | Função                    |
| ------------------------ | ------------------------- |
| Ana Luisa Paixão Panho   | Líder e Treinamento de IA |
| Kemily de Santi          | Treinamento de IA         |
| Manuela Caldeira Machado | Treinamento de IA         |
| Tiago Bernieri Dal Belo  | Vice-Líder e Programação  |
| Vanderlei Rossoni Pittan | Design e Programação      |

---

## 🧠 Conceitos Aplicados

### Inteligência Artificial

Utilização de um modelo treinado para reconhecer automaticamente padrões visuais em folhas de milho.

### Visão Computacional

Processamento de imagens capturadas pela câmera para identificação de sintomas de doenças.

### Dataset

Mais de 2000 imagens utilizadas no treinamento do modelo de IA.

### Inferência

Processo no qual a imagem capturada é enviada ao Roboflow, que realiza a análise e retorna as predições juntamente com seus níveis de confiança.

### Computer Vision

Aplicação de técnicas de reconhecimento de objetos para localizar regiões da folha que apresentam características compatíveis com Cercosporiose.
---

## 🌱 Impacto do Projeto

O MaizeAI contribui para:

* Agricultura de precisão;
* Monitoramento mais eficiente;
* Redução de perdas na produção;
* Democratização do acesso à tecnologia no campo;
* Incentivo ao uso da Inteligência Artificial na agricultura.

---

## 🚀 Melhorias Futuras

* Histórico de diagnósticos;
* Dashboard com estatísticas;
* Armazenamento em nuvem;
* Geração de relatórios;
* Suporte para novas culturas agrícolas;
* Identificação de múltiplas doenças;
* Publicação em lojas de aplicativos.

---

## ▶️ Como Executar

### Clone o repositório

```bash
git clone https://github.com/Vanderlei13/PI-2026
```

### Acesse a pasta

```bash
cd MaizeAI
```

### Instale as dependências

```bash
npm install
```

### Execute o projeto

```bash
npm run dev
```

### Abra no navegador

```text
http://localhost:5173
```

---

## 📄 Licença

Projeto desenvolvido exclusivamente para fins educacionais e acadêmicos.

---

## 🌟 Considerações Finais

O MaizeAI demonstra como tecnologias modernas como React, Inteligência Artificial e Visão Computacional podem ser aplicadas para criar soluções acessíveis e inovadoras para o agronegócio, promovendo eficiência, sustentabilidade e transformação digital no campo.
