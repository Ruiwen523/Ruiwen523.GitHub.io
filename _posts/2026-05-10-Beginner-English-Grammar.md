---
title: Beginner-English-Grammar
author: ruiwen
date: 2026-05-10 23:35:00 +0800
last_modified_at: 2026-05-13 00:00:00 +0800
categories: [Blogging, Tutorial]
tags: [English, Grammar]
render_with_liquid: true
custom_css:
  - /assets/css/custom/grammar.css
custom_js:
  - /assets/js/custom/grammar.js
---


## English Grammar 基礎

學習英文時，BE 動詞是最重要的基礎之一。

BE 動詞包含：

- am
- is
- are

它們會依據不同的人稱代名詞進行搭配。

---

## 人稱代名詞與Be動詞

| Pronoun              | Be Verb |
| -------------------- | ------- |
| I (我)               | am      |
| You (你)             | are     |
| He/She/It (他/她/它) | is      |
| We (我們)            | are     |
| You (你們)           | are     |
| They (他們)          | are     |

---

## Examples

### I am

```text
I am a student.
我是學生。

I am happy.
我很開心。
```

### He is

```text
He is a doctor.
他是醫生。

He is tired.
他很累。
```

### They are

```text
They are friends.
他們是朋友。

They are ready.
他們準備好了。
```

---

## 練習題

{% include grammar/be-verb-practice.html %}

## 人稱代名詞的主格/受格/所有格

人稱代名詞會因為位置不同而改變形式。先用下面這張表做快速判斷：

| 位置          | 選擇   | 範例                            |
| ------------- | ------ | ------------------------------- |
| 空格 + 動詞   | 主格   | `She` works here.               |
| 空格 + 名詞   | 所有格 | `Her` manager called.           |
| 動詞 + 空格   | 受格   | I called `her`.                 |
| 介系詞 + 空格 | 受格   | `to him`, `for us`, `with them` |

最實用的解題順序是：

1. 找動詞。
2. 判斷空格是在動詞前、動詞後，還是名詞前。
3. 再選主格、所有格、受格。

另外要注意：`you` 和 `it` 的主格、受格長得一樣，所以要靠位置判斷它的功能，不是靠外型。

## 人稱代名詞 - 主格練習

主格是句子的主詞，通常放在動詞前面。初學時先記住這一組：

```text
I / You / He / She / It / We / They
```

看到「空格 + be 動詞 / 一般動詞」時，通常要選主格。

```text
___ am a student.
我是學生。

___ is my brother.
他是我的哥哥。
```

{% assign beginner_subject_options = "I|You|He|She|It|We|They" %}

<section class="grammar-card-group">

{% include grammar/pronoun-card.html title="Question 1" question="___ am happy." prompt_translation="___ 很開心。" translation="我很開心。" options=beginner_subject_options answer="I" analysis='[{"word":"I","label":"Subj","desc":"主格，表示我。"},{"word":"am","label":"Be","desc":"I 要搭配 am。"},{"word":"happy","label":"Adj","desc":"形容詞，表示開心。"}]' %}
{% include grammar/pronoun-card.html title="Question 2" question="___ are my friend." prompt_translation="___ 是我的朋友。" translation="你是我的朋友。" options=beginner_subject_options answer="You" analysis='[{"word":"You","label":"Subj","desc":"主格，可表示你。"},{"word":"are","label":"Be","desc":"You 要搭配 are。"},{"word":"my friend","label":"N","desc":"名詞片語。"}]' %}
{% include grammar/pronoun-card.html title="Question 3" question="___ is a teacher." prompt_translation="___ 是老師。" translation="他是老師。" options=beginner_subject_options answer="He" analysis='[{"word":"He","label":"Subj","desc":"主格，表示他。"},{"word":"is","label":"Be","desc":"He 要搭配 is。"},{"word":"a teacher","label":"N","desc":"名詞片語。"}]' %}
{% include grammar/pronoun-card.html title="Question 4" question="___ is my sister." prompt_translation="___ 是我的姐姐/妹妹。" translation="她是我的姐姐/妹妹。" options=beginner_subject_options answer="She" analysis='[{"word":"She","label":"Subj","desc":"主格，表示她。"},{"word":"is","label":"Be","desc":"She 要搭配 is。"},{"word":"my sister","label":"N","desc":"名詞片語。"}]' %}
{% include grammar/pronoun-card.html title="Question 5" question="___ is a dog." prompt_translation="___ 是一隻狗。" translation="它是一隻狗。" options=beginner_subject_options answer="It" analysis='[{"word":"It","label":"Subj","desc":"主格，表示它。"},{"word":"is","label":"Be","desc":"It 要搭配 is。"},{"word":"a dog","label":"N","desc":"名詞片語。"}]' %}
{% include grammar/pronoun-card.html title="Question 6" question="___ are students." prompt_translation="___ 是學生。" translation="我們是學生。" options=beginner_subject_options answer="We" analysis='[{"word":"We","label":"Subj","desc":"主格，表示我們。"},{"word":"are","label":"Be","desc":"We 要搭配 are。"},{"word":"students","label":"N","desc":"複數名詞。"}]' %}
{% include grammar/pronoun-card.html title="Question 7" question="___ are my classmates." prompt_translation="___ 是我的同學。" translation="他們是我的同學。" options=beginner_subject_options answer="They" acceptable_answers="You" acceptable_message="文法正確，但不是最標準答案。" analysis='[{"word":"They","label":"Subj","desc":"主格，表示他們。"},{"word":"are","label":"Be","desc":"They 要搭配 are。"},{"word":"my classmates","label":"N","desc":"複數名詞片語。"},{"label":"Note","desc":"You are my classmates. 文法算正確，但在缺少對話情境時並非最標準答案。They 是由「語意邏輯」和「情境機率」決定的：這句話通常帶有「介紹」性質，說話者多半是在向第三者介紹一群不在對話中的人，所以標準答案選 They。"}]' %}

</section>

## 人稱代名詞 - 受格練習

受格常放在動詞後面，或介系詞後面，表示動作的對象。初學時先記住這一組：

```text
me / you / him / her / it / us / them
```

看到「動詞 + 空格」或「to / for / with + 空格」時，通常要選受格。

```text
I like ___.
我喜歡他。

Please help ___.
請幫助我們。
```

{% assign beginner_object_options = "me|you|him|her|it|us|them" %}

<section class="grammar-card-group">

{% include grammar/pronoun-card.html title="Question 1" question="Please help ___." prompt_translation="請幫 ___。" translation="請幫我。" options=beginner_object_options answer="me" analysis='[{"word":"me","label":"Obj","desc":"I 的受格，放在動詞 help 後面。"},{"word":"help","label":"V","desc":"動詞，表示幫助。"}]' %}
{% include grammar/pronoun-card.html title="Question 2" question="I like ___." prompt_translation="我喜歡 ___。" translation="我喜歡你。" options=beginner_object_options answer="you" analysis='[{"word":"you","label":"Obj","desc":"You 的受格和主格同形。"},{"word":"like","label":"V","desc":"動詞，後面接受格。"}]' %}
{% include grammar/pronoun-card.html title="Question 3" question="She sees ___." prompt_translation="她看見 ___。" translation="她看見他。" options=beginner_object_options answer="him" analysis='[{"word":"him","label":"Obj","desc":"He 的受格。"},{"word":"sees","label":"V","desc":"動詞，後面接受格。"}]' %}
{% include grammar/pronoun-card.html title="Question 4" question="He knows ___." prompt_translation="他認識 ___。" translation="他認識她。" options=beginner_object_options answer="her" analysis='[{"word":"her","label":"Obj","desc":"She 的受格。"},{"word":"knows","label":"V","desc":"動詞，後面接受格。"}]' %}
{% include grammar/pronoun-card.html title="Question 5" question="I have ___." prompt_translation="我有 ___。" translation="我有它。" options=beginner_object_options answer="it" analysis='[{"word":"it","label":"Obj","desc":"It 作受格，表示它。"},{"word":"have","label":"V","desc":"動詞，後面接受格。"}]' %}
{% include grammar/pronoun-card.html title="Question 6" question="The teacher teaches ___." prompt_translation="老師教 ___。" translation="老師教我們。" options=beginner_object_options answer="us" analysis='[{"word":"us","label":"Obj","desc":"We 的受格。"},{"word":"teaches","label":"V","desc":"動詞，後面接受格。"}]' %}
{% include grammar/pronoun-card.html title="Question 7" question="I play with ___." prompt_translation="我和 ___ 玩。" translation="我和他們玩。" options=beginner_object_options answer="them" analysis='[{"word":"them","label":"Obj","desc":"They 的受格。"},{"word":"with","label":"Prep","desc":"介系詞，後面接受格。"}]' %}

</section>

## 人稱代名詞 - 所有格練習

所有格用來表示「誰的」，後面通常會直接接名詞。初學時先記住這一組：

```text
my / your / his / her / its / our / their
```

看到「空格 + 名詞」時，通常要選所有格。

```text
___ book is new.
我的書是新的。

___ house is big.
他們的房子很大。
```

{% assign beginner_possessive_options = "my|your|his|her|its|our|their" %}

<section class="grammar-card-group">

{% include grammar/pronoun-card.html title="Question 1" question="___ name is Tom." prompt_translation="___ 的名字是 Tom。" translation="我的名字是 Tom。" options=beginner_possessive_options answer="my" analysis='[{"word":"my","label":"Poss","desc":"I 的所有格，表示我的。"},{"word":"name","label":"N","desc":"名詞，前面用所有格修飾。"}]' %}
{% include grammar/pronoun-card.html title="Question 2" question="___ book is here." prompt_translation="___ 的書在這裡。" translation="你的書在這裡。" options=beginner_possessive_options answer="your" analysis='[{"word":"your","label":"Poss","desc":"You 的所有格，表示你的。"},{"word":"book","label":"N","desc":"名詞，前面用所有格修飾。"}]' %}
{% include grammar/pronoun-card.html title="Question 3" question="___ car is red." prompt_translation="___ 的車是紅色的。" translation="他的車是紅色的。" options=beginner_possessive_options answer="his" analysis='[{"word":"his","label":"Poss","desc":"He 的所有格，表示他的。"},{"word":"car","label":"N","desc":"名詞，前面用所有格修飾。"}]' %}
{% include grammar/pronoun-card.html title="Question 4" question="___ bag is black." prompt_translation="___ 的包包是黑色的。" translation="她的包包是黑色的。" options=beginner_possessive_options answer="her" analysis='[{"word":"her","label":"Poss","desc":"She 的所有格，表示她的。"},{"word":"bag","label":"N","desc":"名詞，前面用所有格修飾。"}]' %}
{% include grammar/pronoun-card.html title="Question 5" question="___ tail is short." prompt_translation="___ 的尾巴很短。" translation="它的尾巴很短。" options=beginner_possessive_options answer="its" analysis='[{"word":"its","label":"Poss","desc":"It 的所有格，表示它的。"},{"word":"tail","label":"N","desc":"名詞，前面用所有格修飾。"}]' %}
{% include grammar/pronoun-card.html title="Question 6" question="___ teacher is kind." prompt_translation="___ 的老師很親切。" translation="我們的老師很親切。" options=beginner_possessive_options answer="our" analysis='[{"word":"our","label":"Poss","desc":"We 的所有格，表示我們的。"},{"word":"teacher","label":"N","desc":"名詞，前面用所有格修飾。"}]' %}
{% include grammar/pronoun-card.html title="Question 7" question="___ house is big." prompt_translation="___ 的房子很大。" translation="他們的房子很大。" options=beginner_possessive_options answer="their" analysis='[{"word":"their","label":"Poss","desc":"They 的所有格，表示他們的。"},{"word":"house","label":"N","desc":"名詞，前面用所有格修飾。"}]' %}

</section>

<!-- ## 腳註 -->

<!-- [^1]: 這是腳註可以進行補充說明 -->
