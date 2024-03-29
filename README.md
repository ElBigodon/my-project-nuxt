# Pacote para desenvolvimento inicial em Nuxt 3

Siga as documentações abaixo para não se perder no desenvolvimento! (Esses pacotes abaixo já vem pré-configurado):

- [Nuxt 3](https://nuxt.com/docs/getting-started/introduction) (Versão 3.3.1)
- [VueUse](https://vueuse.org)
- [@vueuse/motion](https://motion.vueuse.org)
- [Naive-UI](https://www.naiveui.com/en-US/os-theme)
- [Tailwindcss](https://tailwindcss.com/)
- [Nuxt DevTools](https://devtools.nuxtjs.org/) (Atualmente em modo expermental)

## Iniciando

Você pode usar qualquer gestor de pacotes que desejar.

Instalando todas a dependencias do projeto:

```bash
# yarn
yarn install

# npm
npm i

# pnpm
pnpm i
```

## Iniciando o servidor de desenvolvimento


Servidor iniciará por padrão na porta `3000`, caso a porta não esteja disponível, ele fará a alteração da porta automaticamente.

Para Iniciar o servidor de desenvolvimento, execute os comandos abaixo:

```bash
npm run dev
```
ou
```bash
pnpm dev
```

## Botando no Ar (Modo produção)

Para buildar (construir) a aplicação execute este comando abaixo:

```bash
npm run build
```
ou
```bash
pnpm build
```

Para visualizar o aplicativo em modo produção, execute o comando abaixo:

```bash
npm run preview
```
```bash
pnpm preview
```

Caso tenha dúvidas de como subir a sua aplicação em produção, dê uma olhada nessa [documentação](https://nuxt.com/docs/getting-started/deployment).
