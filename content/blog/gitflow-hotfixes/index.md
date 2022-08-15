---
title: Git Flow - Hotfixes [pt-BR]
date: 2022-08-15 18:04:00
author: Danilo Silva
tags: ['gitflow', 'git']
---

Continuando nossa jornada sobre GitFlow vamos aprender para que servem os branches chamados de hotfixes e como aplicar o uso deles em correções urgentes em produção. 😯

---
## Definição

**Hotfixes** são _branches_ usados para <u>resolver rapidamente as mudanças necessárias no branch principal</u> _(master)_. São destinados para a realização de alguma(s) <u>correção(ões) crítica(s) encontrada(s) em produção</u>.

Por convenção elas têm o prefixo **hotfix/**.
Por exemplo:

- _hotfix/1.0.1_

Importante ressaltar que as _hotfixes_ (vamos nos acostumar a chamá-lás assim) são criadas *sempre* à partir da _branch_ *master*.

![Git Flow create hotfix in action](images/animate-gitflow-hotfix.gif)

> 📝 _Descrição da imagem:_ <br/>
Após haver uma versão em produção _(master)_, é **criada uma hotfix** _(H - Nova hotfix)_ onde há correções imediatas do código a partir do branch principal e por fim, **a mesclagem com o branch master** _(M - Merge)_ e o código atualizado volta a ser integrado também, à **develop**.

---
## Hotfixes na prática 😎

### Pré-requisitos

- Ter o GIT instalado
- Qualquer repositório com o fluxo do Git Flow inicializado e configurado.

### 1. Criação de hotfixes

Para criar uma hotfix é bem simples:

```console
git flow hotfix start <número-versão-proposta-de-correção>
```

Com um comando neste padrão, **será criada uma nova branch através da develop** com o prefixo _hotfix/_, seguido do número de versão que você inserir.
Execute:

```console
git flow hotfix start 1.0.1
```

O retorno do comando é uma nova _branch_ entitulado **hotfix/1.0.1** e já é realizado _checkout_ nessa nova _branch_.

```console
[saída do console]                                                       
Switched to a new branch 'hotfix/1.0.1'

Summary of actions:
- A new branch 'hotfix/1.0.1' was created, bases on 'master'
- You are now on branch 'hotfix/1.0.1'

Follow-up actions:
- Bump the version number now!
- Start commtting last-minute in preparing your hotfix
- When done, run:

      git flow hotfix finish '1.0.1' 
```

### 2. Finalização de hotfixes

Após finalizar as **correções urgentes no código que está em produção**, a _branch_ estará pronta para ser **finalizada** e **mesclada** tanto na _master_ quanto na _develop_.

Então você verificou que **está na hotfix, não há nenhum commit a ser feito e nenhum arquivo pendente...**

```console
git checkout hotfix/1.0.1
git status
```

```console
[saída do console]                         
No ramo hotfix/1.0.1              
nothing to commit, working tree clean
```

**Para finalizar uma hotfix**, basta:

```console
git flow hotfix finish <número-versão-proposta>
```

> O número da versão da hotfix é opcional quando você já está presente(checkout) nela.

Execute:

```console
git flow hotfix finish
```

Após esta instruçao, **aparecerá a possibilidade de escrever uma mensagem** que descreverá a versão lançada _(nota de versão)_.

```console
                                                    
#
# Write a message for tag:
#  1.0.1
# Lines starting with '#' will be ignored.
```

> ⚠️ A finalização de uma hotfix marca a **criação de uma tag** correspondente ao número de versão entitulado na branch hotfix.

Depois de escrever a mensagem, a hotfix **será meclada(merge) à master E à develop**, em seguida deletada _tanto localmente como remotamente_.

```console
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
To <url-repositorito-remoto>
 -  [deleted]                          hotfix/1.0.1
Deleted branch hotfix/1.0.1 (was 713d5ac).

Summary of actions:
- Hotfix branch 'hotfix/1.0.1' has been merged into 'master'
- The hotfix was tagged '1.0.1'
- Hotfix branch 'hotfix/1.0.1' has been locally deleted
- You are now on branch 'develop'
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

Pronto, para trabalhar com hotfixes de forma simples e rápida, é isto!!

> ⚡ Nesta **seção sobre Git Flow** você encontrará explicações e usos práticos sobre ***features, releases, tags*** e muito mais.

---
**Obrigado por chegar até aqui!** 😄

![The Author](../global/profile-picture-danilo.png)