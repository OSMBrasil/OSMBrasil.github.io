# Site da OpenStreetMap Brasil

Este é o repositório do site da OpenStreetMap Brasil, uma associação de mapeadores brasileiros.

## Como ajudar?

O site é feito em Jekyll. Para rodar localmente, clone o repositório e rode `jekyll serve --watch`.

Se você precisa instalar o Jekyll, siga a instrução específica de seu sistema operacional (abaixo).

### Jekyll em Arch Linux

1) Instalar
```sh
$ sudo pacman -S ruby
$ sudo pacman -S nodejs
$ sudo gem install jekyll
$ sudo gem update github-pages
```

2) Configurar no final do arquivo `~/.bashrc`:
```sh
$ alias jekyll='~/.gem/ruby/2.2.0/bin/jekyll'
```

3) Carregar a nova configuração:
```sh
$ source ~/.bashrc
```

4) Executar
```sh
$ jekyll serve --watch
```

5) Então acessar [localhost:4000](http://localhost:4000)
