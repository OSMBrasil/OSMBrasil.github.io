# Site da OpenStreetMap Brasil

Este é o repositório do site da OpenStreetMap Brasil, uma associação de mapeadores brasileiros.

## Como ajudar?

O site é feito em Jekyll. Para testá-lo localmente, clone o repositório, rode o comando `jekyll serve --watch`, e então acesse [localhost:4000](http://localhost:4000).

Caso precise instalar o Jekyll, siga as instruções para o seu sistema operacional (abaixo).

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

### Jekyll em Ubuntu

1) Instalar
```sh
$ sudo apt-get install ruby ruby-dev make gcc nodejs
$ sudo gem install jekyll --no-rdoc --no-ri
$ sudo gem install github-pages --no-rdoc --no-ri
```
