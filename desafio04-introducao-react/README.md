# Desafio: Introdução ao React

Crie uma aplicação do zero utilizado **Webpack**, **Babel**, **Webpack Dev Server** e **ReactJS**.

Desenvolver uma **interface** semelhante a do Facebook utilizando React.

As informações contidas são **estáticas** e não precisa refletir nenhuma API REST ou back-end.

## Layout

O layout está no arquivo `layout.sketch` que pode ser aberto pela ferramenta online:
https://www.figma.com

## Componentes

Deverão ser criados os seguintes componentes:

### Header

Responsável por exibir a logo e o link para acessar o perfil.

### PostList

Responsável por armazenar os dados da listagem de post. Estes dados devem ficar dentro do `state` do componente. Por exemplo:

```
class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'http://url-da-imagem.com/imagem.jpg'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'http://url-da-imagem.com/imagem.jpg'
            },
            content: "Conteúdo do comentário"
          }
        ],
      },
      {
        id: 2,
        // Restante dos dados de um novo post
      }
    ]
  };
}
```

### Post

Responsável por exibir os dados do post, a partir do componente PostList. Por exemplo:

```
post.map(post => <Post key={post.id} data={post} />)
```

### Comment

Responsável por exibir um comentário, a partir do componente Post. Por exemplo:

```
data.comments.map(comment => <Comment key={comment.id} data={comment} />)
```
