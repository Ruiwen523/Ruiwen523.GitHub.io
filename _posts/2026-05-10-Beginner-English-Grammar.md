---
title: Beginner-English-Grammar
author: ruiwen
date: 2026-05-10 23:35:00 +0800
last_modified_at: 2026-05-14 00:00:00 +0800
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

| 主格 | 受格 | 所有格形容詞 | 所有格代名詞 | 反身代名詞 |
| ---- | ---- | ------------ | ------------ | ---------- |
| I    | me   | my           | mine         | myself     |
| you  | you  | your         | yours        | yourself   |
| he   | him  | his          | his          | himself    |
| she  | her  | her          | hers         | herself    |
| it   | it   | its          | its          | itself     |
| we   | us   | our          | ours         | ourselves  |
| you  | you  | your         | yours        | yourselves |
| they | them | their        | theirs       | themselves |

> 所有格形容詞後面要接名詞，例如 `my book`、`her teacher`；所有格代名詞可單獨使用，例如 `This book is mine.`。

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
{% include grammar/pronoun-card.html title="Question 3" question="___ is a teacher." prompt_translation="___ 是老師。" translation="他是老師。" options=beginner_subject_options answer="He" correct_answers="He|She|It" answer_translations='{"He":"他是老師。","She":"她是老師。","It":"它是老師。"}' analysis='[{"word":"He / She / It","label":"Subj","desc":"He、She、It 都是第三人稱單數主格，可以搭配 is。"},{"word":"is","label":"Be","desc":"第三人稱單數主詞要搭配 is。"},{"word":"a teacher","label":"N","desc":"名詞片語。"},{"label":"Note","desc":"這題練習的是 be 動詞搭配。He is、She is、It is 在文法上都正確；實際語意要看上下文。"}]' %}
{% include grammar/pronoun-card.html title="Question 4" question="___ is my sister." prompt_translation="___ 是我的姐姐/妹妹。" translation="她是我的姐姐/妹妹。" options=beginner_subject_options answer="She" analysis='[{"word":"She","label":"Subj","desc":"主格，表示她。"},{"word":"is","label":"Be","desc":"She 要搭配 is。"},{"word":"my sister","label":"N","desc":"名詞片語。"}]' %}
{% include grammar/pronoun-card.html title="Question 5" question="___ is a dog." prompt_translation="___ 是一隻狗。" translation="它是一隻狗。" options=beginner_subject_options answer="It" correct_answers="He|She|It" answer_translations='{"He":"牠是一隻公狗。","She":"牠是一隻母狗。","It":"它是一隻狗。"}' analysis='[{"word":"He / She / It","label":"Subj","desc":"He、She、It 都是第三人稱單數主格，可以搭配 is。"},{"word":"is","label":"Be","desc":"第三人稱單數主詞要搭配 is。"},{"word":"a dog","label":"N","desc":"名詞片語。"},{"label":"Note","desc":"如果知道動物性別，可以用 he 或 she；不知道或不強調性別時，通常用 it。"}]' %}
{% include grammar/pronoun-card.html title="Question 6" question="___ are students." prompt_translation="___ 是學生。" translation="我們是學生。" options=beginner_subject_options answer="We" correct_answers="You|We|They" answer_translations='{"You":"你們是學生。","We":"我們是學生。","They":"他們是學生。"}' analysis='[{"word":"You / We / They","label":"Subj","desc":"You、We、They 都可以搭配 are。"},{"word":"are","label":"Be","desc":"are 可搭配 you、we、they。"},{"word":"students","label":"N","desc":"複數名詞。"},{"label":"Note","desc":"這題練習的是 are 的主詞搭配。You are、We are、They are 在文法上都正確；中文意思會依選到的主詞改變。"}]' %}
{% include grammar/pronoun-card.html title="Question 7" question="___ are my classmates." prompt_translation="___ 是我的同學。" translation="他們是我的同學。" options=beginner_subject_options answer="They" correct_answers="You|They" answer_translations='{"You":"你們是我的同學。","They":"他們是我的同學。"}' analysis='[{"word":"You / They","label":"Subj","desc":"You 和 They 都可以搭配 are，後面也可以接複數名詞 classmates。"},{"word":"are","label":"Be","desc":"are 可搭配 you 或 they。"},{"word":"my classmates","label":"N","desc":"複數名詞片語。"},{"label":"Note","desc":"You are my classmates. 文法算正確；They are my classmates. 通常是更標準的預設答案。They 是由「語意邏輯」和「情境機率」決定的：這句話通常帶有「介紹」性質，說話者多半是在向第三者介紹一群不在對話中的人。"}]' %}

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

{% include grammar/pronoun-card.html title="Question 1" question="Please help ___." prompt_translation="請幫 ___。" translation="請幫我。" options=beginner_object_options answer="me" correct_answers="me|you|him|her|it|us|them" answer_translations='{"me":"請幫我。","you":"請幫你。","him":"請幫他。","her":"請幫她。","it":"請幫它。","us":"請幫我們。","them":"請幫他們。"}' analysis='[{"word":"me / you / him / her / it / us / them","label":"Obj","desc":"這一格在動詞 help 後面，所以只要是受格，文法上都可以。"},{"word":"help","label":"V","desc":"動詞，表示幫助。"},{"label":"Note","desc":"這題練習的是受格位置。空格在動詞 help 後面，所以所有受格選項都可以算正確。"}]' %}
{% include grammar/pronoun-card.html title="Question 2" question="I like ___." prompt_translation="我喜歡 ___。" translation="我喜歡你。" options=beginner_object_options answer="you" correct_answers="me|you|him|her|it|us|them" answer_translations='{"me":"我喜歡我。","you":"我喜歡你。","him":"我喜歡他。","her":"我喜歡她。","it":"我喜歡它。","us":"我喜歡我們。","them":"我喜歡他們。"}' analysis='[{"word":"me / you / him / her / it / us / them","label":"Obj","desc":"這一格在動詞 like 後面，所以只要是受格，文法上都可以。"},{"word":"like","label":"V","desc":"動詞，後面接受格。"},{"label":"Note","desc":"這題練習的是受格位置。空格在 like 後面，所以所有受格選項都可以算正確。"}]' %}
{% include grammar/pronoun-card.html title="Question 3" question="She sees ___." prompt_translation="她看見 ___。" translation="她看見他。" options=beginner_object_options answer="him" correct_answers="me|you|him|her|it|us|them" answer_translations='{"me":"她看見我。","you":"她看見你。","him":"她看見他。","her":"她看見她。","it":"她看見它。","us":"她看見我們。","them":"她看見他們。"}' analysis='[{"word":"me / you / him / her / it / us / them","label":"Obj","desc":"這一格在動詞 sees 後面，所以只要是受格，文法上都可以。"},{"word":"sees","label":"V","desc":"動詞，後面接受格。"},{"label":"Note","desc":"這題練習的是位置判斷，不是特定語意。因為空格在 sees 後面，所以 me、you、him、her、it、us、them 都是受格，都可以算正確。"}]' %}
{% include grammar/pronoun-card.html title="Question 4" question="He knows ___." prompt_translation="他認識 ___。" translation="他認識她。" options=beginner_object_options answer="her" correct_answers="me|you|him|her|it|us|them" answer_translations='{"me":"他認識我。","you":"他認識你。","him":"他認識他。","her":"他認識她。","it":"他認識它。","us":"他認識我們。","them":"他認識他們。"}' analysis='[{"word":"me / you / him / her / it / us / them","label":"Obj","desc":"這一格在動詞 knows 後面，所以只要是受格，文法上都可以。"},{"word":"knows","label":"V","desc":"動詞，後面接受格。"},{"label":"Note","desc":"這題練習的是受格位置。空格在 knows 後面，所以所有受格選項都可以算正確。"}]' %}
{% include grammar/pronoun-card.html title="Question 5" question="I have ___." prompt_translation="我有 ___。" translation="我有它。" options=beginner_object_options answer="it" correct_answers="me|you|him|her|it|us|them" answer_translations='{"me":"我有我。","you":"我有你。","him":"我有他。","her":"我有她。","it":"我有它。","us":"我有我們。","them":"我有他們。"}' analysis='[{"word":"me / you / him / her / it / us / them","label":"Obj","desc":"這一格在動詞 have 後面，所以只要是受格，文法上都可以。"},{"word":"have","label":"V","desc":"動詞，後面接受格。"},{"label":"Note","desc":"這題練習的是受格位置。空格在 have 後面，所以所有受格選項都可以算正確；實際意思要看上下文。"}]' %}
{% include grammar/pronoun-card.html title="Question 6" question="The teacher teaches ___." prompt_translation="老師教 ___。" translation="老師教我們。" options=beginner_object_options answer="us" correct_answers="me|you|him|her|it|us|them" answer_translations='{"me":"老師教我。","you":"老師教你。","him":"老師教他。","her":"老師教她。","it":"老師教它。","us":"老師教我們。","them":"老師教他們。"}' analysis='[{"word":"me / you / him / her / it / us / them","label":"Obj","desc":"這一格在動詞 teaches 後面，所以只要是受格，文法上都可以。"},{"word":"teaches","label":"V","desc":"動詞，後面接受格。"},{"label":"Note","desc":"這題練習的是受格位置。空格在 teaches 後面，所以所有受格選項都可以算正確。"}]' %}
{% include grammar/pronoun-card.html title="Question 7" question="I play with ___." prompt_translation="我和 ___ 玩。" translation="我和他們玩。" options=beginner_object_options answer="them" correct_answers="me|you|him|her|it|us|them" answer_translations='{"me":"我和我玩。","you":"我和你玩。","him":"我和他玩。","her":"我和她玩。","it":"我和它玩。","us":"我和我們玩。","them":"我和他們玩。"}' analysis='[{"word":"me / you / him / her / it / us / them","label":"Obj","desc":"這一格在介系詞 with 後面，所以只要是受格，文法上都可以。"},{"word":"with","label":"Prep","desc":"介系詞，後面接受格。"},{"label":"Note","desc":"這題練習的是介系詞後面接受格。with 後面可以接 me、you、him、her、it、us、them。"}]' %}

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

{% include grammar/pronoun-card.html title="Question 1" question="___ name is Tom." prompt_translation="___ 的名字是 Tom。" translation="我的名字是 Tom。" options=beginner_possessive_options answer="my" correct_answers="my|your|his|her|its|our|their" answer_translations='{"my":"我的名字是 Tom。","your":"你的名字是 Tom。","his":"他的名字是 Tom。","her":"她的名字是 Tom。","its":"它的名字是 Tom。","our":"我們的名字是 Tom。","their":"他們的名字是 Tom。"}' analysis='[{"word":"my / your / his / her / its / our / their","label":"Poss","desc":"這一格在名詞 name 前面，所以只要是所有格，文法上都可以。"},{"word":"name","label":"N","desc":"名詞，前面用所有格修飾。"},{"label":"Note","desc":"這題練習的是所有格位置。空格後面直接接名詞 name，所以所有所有格選項都可以算正確。"}]' %}
{% include grammar/pronoun-card.html title="Question 2" question="___ book is here." prompt_translation="___ 的書在這裡。" translation="你的書在這裡。" options=beginner_possessive_options answer="your" correct_answers="my|your|his|her|its|our|their" answer_translations='{"my":"我的書在這裡。","your":"你的書在這裡。","his":"他的書在這裡。","her":"她的書在這裡。","its":"它的書在這裡。","our":"我們的書在這裡。","their":"他們的書在這裡。"}' analysis='[{"word":"my / your / his / her / its / our / their","label":"Poss","desc":"這一格在名詞 book 前面，所以只要是所有格，文法上都可以。"},{"word":"book","label":"N","desc":"名詞，前面用所有格修飾。"},{"label":"Note","desc":"這題練習的是所有格位置。空格後面直接接名詞 book，所以所有所有格選項都可以算正確。"}]' %}
{% include grammar/pronoun-card.html title="Question 3" question="___ car is red." prompt_translation="___ 的車是紅色的。" translation="他的車是紅色的。" options=beginner_possessive_options answer="his" correct_answers="my|your|his|her|its|our|their" answer_translations='{"my":"我的車是紅色的。","your":"你的車是紅色的。","his":"他的車是紅色的。","her":"她的車是紅色的。","its":"它的車是紅色的。","our":"我們的車是紅色的。","their":"他們的車是紅色的。"}' analysis='[{"word":"my / your / his / her / its / our / their","label":"Poss","desc":"這一格在名詞 car 前面，所以只要是所有格，文法上都可以。"},{"word":"car","label":"N","desc":"名詞，前面用所有格修飾。"},{"label":"Note","desc":"這題練習的是所有格位置。空格後面直接接名詞 car，所以所有所有格選項都可以算正確。"}]' %}
{% include grammar/pronoun-card.html title="Question 4" question="___ bag is black." prompt_translation="___ 的包包是黑色的。" translation="她的包包是黑色的。" options=beginner_possessive_options answer="her" correct_answers="my|your|his|her|its|our|their" answer_translations='{"my":"我的包包是黑色的。","your":"你的包包是黑色的。","his":"他的包包是黑色的。","her":"她的包包是黑色的。","its":"它的包包是黑色的。","our":"我們的包包是黑色的。","their":"他們的包包是黑色的。"}' analysis='[{"word":"my / your / his / her / its / our / their","label":"Poss","desc":"這一格在名詞 bag 前面，所以只要是所有格，文法上都可以。"},{"word":"bag","label":"N","desc":"名詞，前面用所有格修飾。"},{"label":"Note","desc":"這題練習的是所有格位置。空格後面直接接名詞 bag，所以所有所有格選項都可以算正確。"}]' %}
{% include grammar/pronoun-card.html title="Question 5" question="___ tail is short." prompt_translation="___ 的尾巴很短。" translation="它的尾巴很短。" options=beginner_possessive_options answer="its" correct_answers="my|your|his|her|its|our|their" answer_translations='{"my":"我的尾巴很短。","your":"你的尾巴很短。","his":"他的尾巴很短。","her":"她的尾巴很短。","its":"它的尾巴很短。","our":"我們的尾巴很短。","their":"他們的尾巴很短。"}' analysis='[{"word":"my / your / his / her / its / our / their","label":"Poss","desc":"這一格在名詞 tail 前面，所以只要是所有格，文法上都可以。"},{"word":"tail","label":"N","desc":"名詞，前面用所有格修飾。"},{"label":"Note","desc":"這題練習的是所有格位置。空格後面直接接名詞 tail，所以所有所有格選項都可以算正確；實際語意要看上下文。"}]' %}
{% include grammar/pronoun-card.html title="Question 6" question="___ teacher is kind." prompt_translation="___ 的老師很親切。" translation="我們的老師很親切。" options=beginner_possessive_options answer="our" correct_answers="my|your|his|her|its|our|their" answer_translations='{"my":"我的老師很親切。","your":"你的老師很親切。","his":"他的老師很親切。","her":"她的老師很親切。","its":"它的老師很親切。","our":"我們的老師很親切。","their":"他們的老師很親切。"}' analysis='[{"word":"my / your / his / her / its / our / their","label":"Poss","desc":"這一格在名詞 teacher 前面，所以只要是所有格，文法上都可以。"},{"word":"teacher","label":"N","desc":"名詞，前面用所有格修飾。"},{"label":"Note","desc":"這題練習的是所有格位置。空格後面直接接名詞 teacher，所以所有所有格選項都可以算正確。"}]' %}
{% include grammar/pronoun-card.html title="Question 7" question="___ house is big." prompt_translation="___ 的房子很大。" translation="他們的房子很大。" options=beginner_possessive_options answer="their" correct_answers="my|your|his|her|its|our|their" answer_translations='{"my":"我的房子很大。","your":"你的房子很大。","his":"他的房子很大。","her":"她的房子很大。","its":"它的房子很大。","our":"我們的房子很大。","their":"他們的房子很大。"}' analysis='[{"word":"my / your / his / her / its / our / their","label":"Poss","desc":"這一格在名詞 house 前面，所以只要是所有格，文法上都可以。"},{"word":"house","label":"N","desc":"名詞，前面用所有格修飾。"},{"label":"Note","desc":"這題練習的是所有格位置。空格後面直接接名詞 house，所以所有所有格選項都可以算正確。"}]' %}

</section>

## 人稱代名詞 - 所有格代名詞練習

所有格代名詞也表示「誰的」，但它可以自己當一個名詞用，後面不要再接名詞。初學時先記住這一組：

```text
mine / yours / his / hers / its / ours / theirs
```

看到「be 動詞 + 空格」或句尾空格時，如果前面已經提過物品，通常可以選所有格代名詞。

```text
This book is ___.
這本書是我的。

The house is ___.
那間房子是他們的。
```

{% assign beginner_possessive_pronoun_options = "mine|yours|his|hers|its|ours|theirs" %}
{% capture beginner_possessive_pronoun_analysis_notes %}{"mine":"my 是所有格形容詞，後面要接名詞；mine 是所有格代名詞，可以單獨使用。","yours":"your 是所有格形容詞，後面要接名詞；yours 是所有格代名詞，可以單獨使用。","his":"his 可以是所有格形容詞，也可以是所有格代名詞；這裡後面沒有名詞，所以是所有格代名詞。","hers":"her 是所有格形容詞，後面要接名詞；hers 是所有格代名詞，可以單獨使用。","its":"its 作所有格形容詞時較常見，例如 its toy；作所有格代名詞時也可單獨使用，但較少見。","ours":"our 是所有格形容詞，後面要接名詞；ours 是所有格代名詞，可以單獨使用。","theirs":"their 是所有格形容詞，後面要接名詞；theirs 是所有格代名詞，可以單獨使用。"}{% endcapture %}

<section class="grammar-card-group">

{% include grammar/pronoun-card.html title="Question 1" question="This book is ___." prompt_translation="這本書是 ___ 的。" translation="這本書是我的。" options=beginner_possessive_pronoun_options answer="mine" correct_answers="mine|yours|his|hers|ours|theirs" answer_translations='{"mine":"這本書是我的。","yours":"這本書是你的/你們的。","his":"這本書是他的。","hers":"這本書是她的。","ours":"這本書是我們的。","theirs":"這本書是他們的。"}' analysis_notes=beginner_possessive_pronoun_analysis_notes analysis='[{"word":"mine / yours / his / hers / ours / theirs","label":"Poss Pron","desc":"這一格在句尾，後面沒有名詞，所以要用所有格代名詞。"},{"word":"book","label":"N","desc":"前面已經提到物品 book，後面不用再接 book。"},{"label":"Note","desc":"這題練習所有格代名詞的位置。多個所有格代名詞都能成立，中文意思會依選項改變。its 作所有格代名詞很少用在這種句型，因此初學先避免。"}]' %}
{% include grammar/pronoun-card.html title="Question 2" question="Is this pen ___?" prompt_translation="這支筆是 ___ 的嗎？" translation="這支筆是你的嗎？" options=beginner_possessive_pronoun_options answer="yours" correct_answers="mine|yours|his|hers|ours|theirs" answer_translations='{"mine":"這支筆是我的嗎？","yours":"這支筆是你的/你們的嗎？","his":"這支筆是他的嗎？","hers":"這支筆是她的嗎？","ours":"這支筆是我們的嗎？","theirs":"這支筆是他們的嗎？"}' analysis_notes=beginner_possessive_pronoun_analysis_notes analysis='[{"word":"mine / yours / his / hers / ours / theirs","label":"Poss Pron","desc":"空格在句尾，後面沒有名詞，所以用所有格代名詞。"},{"word":"pen","label":"N","desc":"pen 已經出現在前面，不需要再說 your pen。"},{"label":"Note","desc":"這題有多個文法上可接受答案；選不同答案時，中文意思會改變。"}]' %}
{% include grammar/pronoun-card.html title="Question 3" question="The red car is ___." prompt_translation="那台紅色的車是 ___ 的。" translation="那台紅色的車是他的。" options=beginner_possessive_pronoun_options answer="his" correct_answers="mine|yours|his|hers|ours|theirs" answer_translations='{"mine":"那台紅色的車是我的。","yours":"那台紅色的車是你的/你們的。","his":"那台紅色的車是他的。","hers":"那台紅色的車是她的。","ours":"那台紅色的車是我們的。","theirs":"那台紅色的車是他們的。"}' analysis_notes=beginner_possessive_pronoun_analysis_notes analysis='[{"word":"his","label":"Poss Pron","desc":"his 可以是所有格形容詞，也可以是所有格代名詞。這裡後面沒有名詞，所以是所有格代名詞。"},{"word":"is","label":"Be","desc":"be 動詞後面可以接所有格代名詞，表示歸屬。"},{"label":"Note","desc":"這題重點是句尾不再接名詞，因此不能用 my、your、her、our、their。"}]' %}
{% include grammar/pronoun-card.html title="Question 4" question="That bag is ___." prompt_translation="那個包包是 ___ 的。" translation="那個包包是她的。" options=beginner_possessive_pronoun_options answer="hers" correct_answers="mine|yours|his|hers|ours|theirs" answer_translations='{"mine":"那個包包是我的。","yours":"那個包包是你的/你們的。","his":"那個包包是他的。","hers":"那個包包是她的。","ours":"那個包包是我們的。","theirs":"那個包包是他們的。"}' analysis_notes=beginner_possessive_pronoun_analysis_notes analysis='[{"word":"hers","label":"Poss Pron","desc":"hers 表示「她的東西」，後面不能再接名詞。"},{"word":"bag","label":"N","desc":"bag 已經在前面出現，空格只需要表示所有權。"},{"label":"Note","desc":"her bag 是「她的包包」；The bag is hers. 是「包包是她的」。"}]' %}
{% include grammar/pronoun-card.html title="Question 5" question="This classroom is ___." prompt_translation="這間教室是 ___ 的。" translation="這間教室是我們的。" options=beginner_possessive_pronoun_options answer="ours" correct_answers="mine|yours|his|hers|ours|theirs" answer_translations='{"mine":"這間教室是我的。","yours":"這間教室是你的/你們的。","his":"這間教室是他的。","hers":"這間教室是她的。","ours":"這間教室是我們的。","theirs":"這間教室是他們的。"}' analysis_notes=beginner_possessive_pronoun_analysis_notes analysis='[{"word":"ours","label":"Poss Pron","desc":"ours 表示「我們的」，可以單獨放在句尾。"},{"word":"classroom","label":"N","desc":"classroom 已經出現在前面，所以後面不用接名詞。"},{"label":"Note","desc":"our 是所有格形容詞，後面要接名詞；ours 是所有格代名詞，可以單獨使用。"}]' %}
{% include grammar/pronoun-card.html title="Question 6" question="The house is ___." prompt_translation="那間房子是 ___ 的。" translation="那間房子是他們的。" options=beginner_possessive_pronoun_options answer="theirs" correct_answers="mine|yours|his|hers|ours|theirs" answer_translations='{"mine":"那間房子是我的。","yours":"那間房子是你的/你們的。","his":"那間房子是他的。","hers":"那間房子是她的。","ours":"那間房子是我們的。","theirs":"那間房子是他們的。"}' analysis_notes=beginner_possessive_pronoun_analysis_notes analysis='[{"word":"theirs","label":"Poss Pron","desc":"theirs 表示「他們的」，後面不接名詞。"},{"word":"house","label":"N","desc":"house 已經在主詞中出現。"},{"label":"Note","desc":"their house 是「他們的房子」；The house is theirs. 是「房子是他們的」。"}]' %}
{% include grammar/pronoun-card.html title="Question 7" question="The old toy is ___." prompt_translation="那個舊玩具是 ___ 的。" translation="那個舊玩具是它的。" options=beginner_possessive_pronoun_options answer="its" correct_answers="mine|yours|his|hers|its|ours|theirs" answer_translations='{"mine":"那個舊玩具是我的。","yours":"那個舊玩具是你的/你們的。","his":"那個舊玩具是他的。","hers":"那個舊玩具是她的。","its":"那個舊玩具是它的。","ours":"那個舊玩具是我們的。","theirs":"那個舊玩具是他們的。"}' analysis_notes=beginner_possessive_pronoun_analysis_notes analysis='[{"word":"its","label":"Poss Pron","desc":"its 可以表示「它的」，但作所有格代名詞時不如 mine、yours、his、hers、ours、theirs 常見。"},{"word":"toy","label":"N","desc":"toy 已經在前面出現，所以空格可用所有格代名詞。"},{"label":"Note","desc":"這題把 its 也列入練習，是為了對照表格中的完整形式；實際使用時，初學者更常看到 its + 名詞，例如 its toy。"}]' %}

</section>

## 人稱代名詞 - 反身代名詞練習

反身代名詞常用來表示「自己」。主詞和受詞是同一個人或同一個東西時，就會用反身代名詞。初學時先記住這一組：

```text
myself / yourself / himself / herself / itself / ourselves / yourselves / themselves
```

看到 `by ___` 時，常表示「獨自地」；看到主詞和受詞指同一個人時，也要用反身代名詞。

```text
I did it by ___.
我自己做的。

She looked at ___.
她看著她自己。
```

{% assign beginner_reflexive_options = "myself|yourself|himself|herself|itself|ourselves|yourselves|themselves" %}

<section class="grammar-card-group">

{% include grammar/pronoun-card.html title="Question 1" question="I did it by ___." prompt_translation="我自己做了這件事。" translation="我自己做了這件事。" options=beginner_reflexive_options answer="myself" analysis='[{"word":"I","label":"Subj","desc":"主詞是 I。"},{"word":"myself","label":"Refl","desc":"主詞 I 對應反身代名詞 myself。"},{"word":"by myself","label":"Phrase","desc":"by myself 表示「我自己、獨自」。"}]' %}
{% include grammar/pronoun-card.html title="Question 2" question="You can do it by ___." prompt_translation="你可以自己做這件事。" translation="你可以自己做這件事。" options=beginner_reflexive_options answer="yourself" analysis='[{"word":"You","label":"Subj","desc":"這裡的 You 依中文提示表示「你」。"},{"word":"yourself","label":"Refl","desc":"單數 you 對應反身代名詞 yourself。"},{"label":"Note","desc":"如果中文是「你們可以自己做這件事」，答案才會是 yourselves。"}]' %}
{% include grammar/pronoun-card.html title="Question 3" question="He hurt ___." prompt_translation="他弄傷了他自己。" translation="他弄傷了他自己。" options=beginner_reflexive_options answer="himself" analysis='[{"word":"He","label":"Subj","desc":"主詞是 He。"},{"word":"hurt","label":"V","desc":"hurt 後面接受詞。"},{"word":"himself","label":"Refl","desc":"受詞和主詞是同一個人，所以用 himself。"}]' %}
{% include grammar/pronoun-card.html title="Question 4" question="She looked at ___." prompt_translation="她看著她自己。" translation="她看著她自己。" options=beginner_reflexive_options answer="herself" analysis='[{"word":"She","label":"Subj","desc":"主詞是 She。"},{"word":"at","label":"Prep","desc":"介系詞 at 後面要接受詞。"},{"word":"herself","label":"Refl","desc":"她看的對象是她自己，所以用 herself。"}]' %}
{% include grammar/pronoun-card.html title="Question 5" question="The door closed by ___." prompt_translation="門自己關上了。" translation="門自己關上了。" options=beginner_reflexive_options answer="itself" analysis='[{"word":"The door","label":"Subj","desc":"主詞是事物，可以用 it 代替。"},{"word":"itself","label":"Refl","desc":"it 的反身代名詞是 itself。"},{"word":"by itself","label":"Phrase","desc":"by itself 表示「自己、沒有外力」。"}]' %}
{% include grammar/pronoun-card.html title="Question 6" question="We made dinner by ___." prompt_translation="我們自己做了晚餐。" translation="我們自己做了晚餐。" options=beginner_reflexive_options answer="ourselves" analysis='[{"word":"We","label":"Subj","desc":"主詞是 We。"},{"word":"ourselves","label":"Refl","desc":"We 對應反身代名詞 ourselves。"},{"word":"by ourselves","label":"Phrase","desc":"by ourselves 表示「我們自己、我們獨自」。"}]' %}
{% include grammar/pronoun-card.html title="Question 7" question="They cleaned the room by ___." prompt_translation="他們自己打掃了房間。" translation="他們自己打掃了房間。" options=beginner_reflexive_options answer="themselves" analysis='[{"word":"They","label":"Subj","desc":"主詞是 They。"},{"word":"themselves","label":"Refl","desc":"They 對應反身代名詞 themselves。"},{"word":"by themselves","label":"Phrase","desc":"by themselves 表示「他們自己、他們獨自」。"}]' %}

</section>

<!-- ## 腳註 -->

<!-- [^1]: 這是腳註可以進行補充說明 -->
