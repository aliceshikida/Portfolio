
---

# 🚀 Instruções de Execução do Portfólio Profissional

Este guia detalha os passos necessários para configurar, instalar e rodar o seu portfólio profissional localmente. O projeto foi desenvolvido seguindo as diretrizes de design responsivo e internacionalização (PT/EN).

## 1. Pré-requisitos

* **Node.js**: Versão 18.x ou superior.
* **NPM**: Gerenciador de pacotes oficial do Node.js.
* **Chaves EmailJS**: Necessárias para o funcionamento do formulário de contato.



## 2. Estrutura do Projeto

Ao contrário do sistema de drones, este projeto é uma **Single Page Application (SPA)** focada no front-end.

| Camada | Tecnologia Principal | Porta de Execução |
| --- | --- | --- |
| **Front-end** | React v18 + Vite | 5173 (Vite) |
| **Estilização** | Tailwind CSS v3.4 | - |
| **Animações** | Framer Motion | - |

## 3. Configuração Inicial e Instalação

Abra o terminal na pasta raiz do seu projeto e execute os comandos abaixo:

### 3.1. Clone o repositório:

```bash
git clone https://github.com/MatheusFelipeCorrea/portfolio.git
cd portfolio

```

### 3.2. Instale as dependências do projeto:

```bash
npm install

```

## 4. Configuração das Variáveis de Ambiente

Para que o formulário de contato funcione e não exponha suas chaves no GitHub, utilize o arquivo `.env`.

1. Crie um arquivo na raiz do projeto chamado **`.env`**.
2. Adicione suas credenciais do **EmailJS** (conforme o modelo em `.env.example`):

```text
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key

```

## 5. Execução do Projeto

Para iniciar o ambiente de desenvolvimento local:

```bash
npm run dev

```

**Resultado esperado**: O terminal indicará que o site está rodando em `http://localhost:5173/`. Ao acessar, você verá a interface Neon com a sua foto e a seção **Sobre Mim**.


## 6. Roteiro de Validação (Requisitos PUC Minas)

Siga este roteiro para garantir que todos os itens avaliados pelo professor estejam funcionando:

### 6.1. Validação de Internacionalização (i18n)

* **Ação**: Clique no botão de troca de idioma na Navbar.
* **Resultado Esperado**: Todo o conteúdo das seções **Sobre Mim**, **Experiências** e **Projetos** deve alternar instantaneamente entre Português e Inglês.



### 6.2. Validação da Linha do Tempo (Timeline)

* **Ação**: Navegue até a seção **Jornada** ou **Experiências**.
* **Resultado Esperado**:
1. Os itens devem aparecer em ordem cronológica.
2. As logos da **PUC Minas** e **dti digital** devem estar visíveis e nítidas.

### 6.3. Validação de Projetos e Modais

* **Ação**: Clique em um projeto na seção de **Projetos**.
* **Resultado Esperado**:
1. Um modal deve abrir exibindo a descrição longa, tecnologias e uma imagem/GIF do projeto.
2. O botão "Ver Projeto" deve redirecionar corretamente para o repositório no **GitHub**.

### 6.4. Validação do Formulário de Contato

* **Ação**: Preencha o formulário na seção **Contato** e clique em enviar.
* **Resultado Esperado**:
1. O botão deve exibir um estado de "Enviando...".
2. Uma mensagem de sucesso deve aparecer após o envio.
3. Verifique sua caixa de entrada para confirmar o recebimento do e-mail via **EmailJS**.

---

