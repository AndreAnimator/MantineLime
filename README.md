1. Estrutura de componentes e tipagem com TypeScript

   Inicializar o projeto com Vite no template React + TypeScript.
   `Inicializei o projeto com npm create vite e usei o template React + Typescript (eu uso npm em vez de yarn)`
   Organizar a interface em componentes funcionais desacoplados, com tipagem clara de props (sem uso de any), composição com children e organização modular de estilos (Mantine UI ou CSS Modules).

2. Estado reativo, imutabilidade e ciclo de vida

   Gerenciar estados locais com useState, respeitando a imutabilidade ao atualizar objetos e arrays (usando spread ...).
   Usar useEffect com o array de dependências configurado de forma precisa e incluir funções de limpeza (cleanup) quando houver timers, subscrições ou ouvintes de evento.

3. Estado global com Context API e Custom Hooks

   Criar e prover contextos globais via Context API para dados compartilhados (como sessão do usuário, carrinho, tema ou favoritos).
   Abstrair o consumo desse contexto em um Custom Hook dedicado (como useAuth ou useCart) com validação que avise caso ele seja usado fora do Provider correspondente.

4. Roteamento e layouts com React Router

   Configurar rotas declarativas com React Router.
   Implementar layout com cabeçalho e navegação persistentes, renderizando as páginas filhas via <Outlet />.
   Usar navegação declarativa com <NavLink> (com indicação de rota ativa), navegação programática com useNavigate() e rotas dinâmicas capturadas com useParams() (ex: /produtos/:id).

5. Interface gráfica e formulários com Mantine UI

   Configurar o <MantineProvider> e (opcionalmente) o tema da aplicação.
   Montar layouts responsivos com os componentes do Mantine.
   Construir formulários com @mantine/form, listagens/tabelas com paginação e feedback de carregamento com indicador de loading ou overlay.

6. Fluxo de autenticação JWT e rotas protegidas

   Implementar a tela de login consumindo POST /auth/login da DummyJSON.
   Persistir o token JWT no navegador (localStorage ou sessionStorage), sincronizar o status no contexto global e bloquear o acesso à área administrativa para usuários que não estiverem logados.

7. Consumo de API REST, interceptors e validação com Zod

   Centralizar o Axios em src/services/api.ts com baseURL: 'https://dummyjson.com', tratando explicitamente os estados de carregamento, sucesso e erro.
   Configurar interceptor de requisição para injetar o token JWT (Authorization: Bearer <token>) e interceptor de resposta para capturar e exibir falhas de rede de forma amigável.
   Definir schemas com Zod (z.object), inferir tipos com z.infer, validar respostas com .safeParse() e integrar os schemas aos formulários Mantine usando zodResolver.

8. Testes automatizados com Vitest e RTL

   Escrever testes unitários e de componentes com Vitest e React Testing Library (RTL).
   Priorizar a visão do usuário com consultas acessíveis (getByRole, getByText), simular interações com @testing-library/user-event e isolar dependências com wrappers de contexto em memória.

9. Testes ponta a ponta com Playwright

   Configurar o Playwright e automatizar pelo menos dois fluxos completos da aplicação em navegador real (por exemplo: fluxo de autenticação com redirecionamento e fluxo de busca, visualização de detalhes ou cadastro de item).
   Usar localizadores semânticos e garantir que os testes rodem com sucesso em modo headless.

10. Pipeline de CI/CD e deploy em produção

    Configurar workflows no GitHub Actions (.github/workflows/):
    CI: checkout, setup do Node.js, instalação com lockfile congelado (yarn install --frozen-lockfile) e execução dos testes do Vitest e do Playwright a cada push e pull request.
    CD: build de produção e deploy automatizado no GitHub Pages (certifique-se de que o repositório é público!).
    Ajustar a propriedade base no vite.config.ts e configurar o fallback para rotas de SPA (404.html), garantindo que links diretos e recarregamentos de página funcionem sem erro.
    Ativar regras de proteção para a branch main, exigindo abertura de Pull Request e aprovação nos testes de CI antes de integrar o código.
