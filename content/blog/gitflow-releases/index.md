---
title: Git Flow - Releases [pt-BR]
date: 2022-08-15 17:48:00
author: Danilo Silva
tags: ['gitflow', 'git']
---

Vamos aprender para que servem os branches chamados de releases e como aplicar o uso deles ao lançamento de uma versão no ambiente de produção.

---
## Definição

**Releases** são _branches_ de preparação de um <u>novo lançamento em produção</u> e elas permitem pequenas correções de bugs e preparação de metadados para publicação (número da versão, datas de construção, entre outras definições).

Por convenção elas têm o prefixo **release/**.
Por exemplo:

- _release/0.1.0_

Importante ressaltar que as _releases_ (vamos nos acostumar a chamá-lás assim) são criadas *sempre* à partir da _branch_ *develop*.

> 📌 O <u>momento ideal</u> para criar uma nova _branch_ **release** é quando o desenvolvimento (quase) reflete o estado desejado do novo lançamento. Pelo menos todos os recursos que são direcionados para o lançamento a ser construído devem estar presentes no _branch_ **develop**.

![Git Flow create release in action](images/animate-gitflow-release.gif)

> 📝 _Descrição da imagem:_ <br/>
Criação de uma feature a partir da develop _(F - Nova feature)_ e no final do desenvolvimento da funcionalidade _(C - Commit)_ é realizada a mesclagem com a develop _(M - Merge)_. <br/>
Logo após é **criada uma release** _(R - Nova release)_, onde pode haver alteração do número de versão e outras definições e por fim, **a mesclagem com o branch master** _(M - Merge)_ e o código atualizado volta a ser integrado também, à **develop**.

---
## Releases na prática 😎

### Pré-requisitos

- Ter o GIT instalado
- Qualquer repositório com o fluxo do Git Flow inicializado e configurado.

### 1. Criação de releases

Para criar uma release é bem simples:

```console
git flow releases start <número-versão-proposta>
```

Com um comando neste padrão, **será criada uma nova branch através da develop** com o prefixo _release/_, seguido do número de versão que você inserir.
Execute:

```console
git flow release start 0.1.0
```

O retorno do comando é uma nova _branch_ entitulado **release/0.1.0** e já é realizado _checkout_ nessa nova _branch_.

```console
[saída do console]                                                       
Switched to a new branch 'release/0.1.0'

Summary of actions:
- A new branch 'release/0.1.0' was created, bases on 'develop'
- You are now on branch 'release/0.1.0'

Follow-up actions:
- Bump the version number now!
- Start commtting last-minute in preparing your release
- When done, run:

      git flow release finish '0.1.0' 
```

### 2. Finalização de releases

Após terminar o **preparação da aplicação para ser lançada em produção**, a _branch_ estará pronta para ser **finalizada** e **mesclada** à _develop_.

Então você verificou que **está na release, não há nenhum commit a ser feito e nenhum arquivo pendente...**

```console
git checkout release/0.1.0
git status
```

```console
[saída do console]                         
No ramo release/0.1.0              
nothing to commit, working tree clean
```

**Para finalizar uma release**, basta:

```console
git flow release finish <número-versão-proposta>
```

> O número da versão da release é opcional quando você já está presente(checkout) nela.

Execute:

```console
git flow release finish
```

Após esta instruçao, **aparecerá a possibilidade de escrever uma mensagem** que descreverá a versão lançada _(nota de versão)_.

```console
                                                    
#
# Write a message for tag:
#  0.1.0
# Lines starting with '#' will be ignored.
```

> ⚠️ A finalização de uma release marca a **criação de uma tag** correspondente ao número de versão entitulado na branch release.

Depois de escrever a mensagem, a release **será meclada(merge) à master E à develop**, em seguida deletada _tanto localmente como remotamente_.

```console
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
To <url-repositorito-remoto>
 -  [deleted]                          release/0.1.0
Deleted branch release/0.1.0 (was 713d5ac).

Summary of actions:
- Release branch 'release/0.1.0' has been merged into 'master'
- The release was tagged '0.1.0'
- Release branch 'release/0.1.0' has been locally deleted; it has been remotely deleted from 'origin'
- You are now on branch 'master'
```

---
## Considerações finais

✅ _Para garantir que o repositório remoto estará atualizado baseando no status da sua estação de trabalho local, execute os comandos abaixo:_

**EMPURRE (push) as atualizações de todos os branches**
```console
  git push --all
```
**SUBA (push) a tag recentemente criada**
```console
  git push --tags
```

Pronto, para trabalhar com releases de forma simples e rápida, é isto!!

> ⚡ Nesta **seção sobre Git Flow** você encontrará explicações e usos práticos sobre ***features, hotfixes, tags*** e muito mais.

---
**Obrigado por chegar até aqui!** 😄

![The Author](../global/profile-picture-danilo.png)