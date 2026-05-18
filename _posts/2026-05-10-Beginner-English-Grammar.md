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

## English Grammar

學習英文時，BE 動詞是最重要的基礎之一。

BE 動詞包含：

- am
- is
- are

它們會依據不同的人稱代名詞進行搭配。

---

## 人稱代名詞與Be動詞

肯定句句型是：`Pronoun + be verb + 補充說明`。

| Pronoun     | Be Verb | 縮寫型式與KK音標 |
| ----------- | ------- | ---------------- |
| I (我)      | am      | I'm `[aɪm]`      |
| You (你)    | are     | you're `[jʊr]`   |
| He (他)     | is      | he's `[hiz]`     |
| She (她)    | is      | she's `[ʃiz]`    |
| It (它)     | is      | it's `[ɪts]`     |
| We (我們)   | are     | we're `[wɪr]`    |
| You (你們)  | are     | you're `[jʊr]`   |
| They (他們) | are     | they're `[ðɛr]`  |

Be 動詞後面可以接名詞或形容詞。接名詞時，要注意單數和複數：

- 單數可數名詞前面通常要有 `a` 或 `an`，例如 `I am a student.`、`She is a teacher.`
- 複數名詞通常會加 `-s` 或 `-es`，例如 `They are students.`、`We are friends.`
- Be 動詞主要看主詞決定：`He is a student.`、`They are students.`；前面是單數主詞用 `is`，複數主詞多用 `are`。

Be 動詞的否定句是在 be 動詞後面加 `not`。句型是：`Pronoun + be verb + not + 補充說明`。

| Pronoun     | Be Verb 否定句 | 縮寫型式與KK音標                                   |
| ----------- | -------------- | -------------------------------------------------- |
| I (我)      | I am not       | I'm not `[aɪm nɑt]`                                |
| You (你)    | You are not    | you're not `[jʊr nɑt]` / you aren't `[ju ɑrənt]`   |
| He (他)     | He is not      | he's not `[hiz nɑt]` / he isn't `[hi ɪzənt]`       |
| She (她)    | She is not     | she's not `[ʃiz nɑt]` / she isn't `[ʃi ɪzənt]`     |
| It (它)     | It is not      | it's not `[ɪts nɑt]` / it isn't `[ɪt ɪzənt]`       |
| We (我們)   | We are not     | we're not `[wɪr nɑt]` / we aren't `[wi ɑrənt]`     |
| You (你們)  | You are not    | you're not `[jʊr nɑt]` / you aren't `[ju ɑrənt]`   |
| They (他們) | They are not   | they're not `[ðɛr nɑt]` / they aren't `[ðe ɑrənt]` |

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

## Be 動詞練習題

{% include grammar/be-verb-practice.html %}

### Be動詞與常見地點介系詞

Be 動詞也常和地點介系詞片語一起使用，用來說明「某人或某物在哪裡」。句型是：`主詞 + be verb + 地點介系詞片語`。

七種常見地點介系詞：

| Preposition | 中文意思 | 用法說明                 | 範例                 |
| ----------- | -------- | ------------------------ | -------------------- |
| in          | 在裡面   | 在某個空間、範圍或容器裡 | `in` the classroom   |
| on          | 在上面   | 接觸某個表面             | `on` the desk        |
| under       | 在下面   | 在某物下方               | `under` the chair    |
| near        | 在附近   | 靠近某地，但不一定緊鄰   | `near` the school    |
| at          | 在某地點 | 指明確位置或集合點       | `at` the bus stop    |
| next to     | 在旁邊   | 緊鄰某人或某物           | `next to` the window |
| behind      | 在後面   | 位於某物後方             | `behind` the door    |

句型結構：

| 句型                          | 範例                        | 中文意思       |
| ----------------------------- | --------------------------- | -------------- |
| 主詞 + be 動詞 + in + 地點    | She is in the classroom.    | 她在教室裡。   |
| 主詞 + be 動詞 + on + 地點    | The book is on the desk.    | 書在桌上。     |
| 主詞 + be 動詞 + under + 地點 | The cat is under the chair. | 貓在椅子下面。 |

{% assign beginner_be_place_options = "in|on|under|near|at|next to|behind" %}

{% include grammar/card-group-start.html %}

{% include grammar/pronoun-card.html title="Question 1" question="I am ___ the classroom." prompt_translation="我在教室裡。" translation="我在教室裡。" options=beginner_be_place_options answer="in" analysis='[{"word":"I am","label":"Be","desc":"I 搭配 am。"},{"word":"in","label":"Prep","desc":"in 表示在某個空間裡。"},{"word":"the classroom","label":"Place","desc":"教室是一個空間，所以用 in。"}]' %}
{% include grammar/pronoun-card.html title="Question 2" question="The book is ___ the desk." prompt_translation="書在桌上。" translation="書在桌上。" options=beginner_be_place_options answer="on" analysis='[{"word":"The book is","label":"Be","desc":"The book 是單數名詞，搭配 is。"},{"word":"on","label":"Prep","desc":"on 表示在表面上。"},{"word":"the desk","label":"Place","desc":"書在桌子的表面上，所以用 on。"}]' %}
{% include grammar/pronoun-card.html title="Question 3" question="The cat is ___ the chair." prompt_translation="貓在椅子下面。" translation="貓在椅子下面。" options=beginner_be_place_options answer="under" analysis='[{"word":"The cat is","label":"Be","desc":"The cat 是單數名詞，搭配 is。"},{"word":"under","label":"Prep","desc":"under 表示在下面。"},{"word":"the chair","label":"Place","desc":"貓的位置在椅子下方，所以用 under。"}]' %}
{% include grammar/pronoun-card.html title="Question 4" question="They are ___ the school." prompt_translation="他們在學校附近。" translation="他們在學校附近。" options=beginner_be_place_options answer="near" analysis='[{"word":"They are","label":"Be","desc":"They 搭配 are。"},{"word":"near","label":"Prep","desc":"near 表示在附近。"},{"word":"the school","label":"Place","desc":"靠近學校但不一定在學校裡，所以用 near。"}]' %}
{% include grammar/pronoun-card.html title="Question 5" question="We are ___ the bus stop." prompt_translation="我們在公車站。" translation="我們在公車站。" options=beginner_be_place_options answer="at" analysis='[{"word":"We are","label":"Be","desc":"We 搭配 are。"},{"word":"at","label":"Prep","desc":"at 常表示在某個明確地點。"},{"word":"the bus stop","label":"Place","desc":"公車站是一個明確位置，所以用 at。"}]' %}
{% include grammar/pronoun-card.html title="Question 6" question="She is ___ the window." prompt_translation="她在窗戶旁邊。" translation="她在窗戶旁邊。" options=beginner_be_place_options answer="next to" analysis='[{"word":"She is","label":"Be","desc":"She 搭配 is。"},{"word":"next to","label":"Prep","desc":"next to 表示在旁邊。"},{"word":"the window","label":"Place","desc":"她的位置在窗戶旁邊，所以用 next to。"}]' %}
{% include grammar/pronoun-card.html title="Question 7" question="The bags are ___ the door." prompt_translation="那些包包在門後面。" translation="那些包包在門後面。" options=beginner_be_place_options answer="behind" analysis='[{"word":"The bags are","label":"Be","desc":"The bags 是複數名詞，搭配 are。"},{"word":"behind","label":"Prep","desc":"behind 表示在後面。"},{"word":"the door","label":"Place","desc":"包包的位置在門後面，所以用 behind。"}]' %}

{% include grammar/card-group-end.html %}

## 人稱代名詞的相關說明與練習[^1]

人稱代名詞會因為位置和用途不同而改變形式。下面會把主格、受格、所有格、所有格代名詞、反身代名詞分開練習；每個章節底下都有自己的快速判斷表和解題順序。

另外要注意：`you` 和 `it` 的主格、受格長得一樣，所以要靠位置判斷它的功能，不是靠外型。
> 所有格形容詞後面要接名詞，例如 `my book`、`her teacher`；
> 所有格代名詞可單獨使用，例如 `This book is mine.`。

## 人稱代名詞 - 主格練習

主格是句子的主詞，通常放在動詞前面。初學時先記住這一組：

```text
I / You / He / She / It / We / They
```

看到「空格 + be 動詞 / 一般動詞」時，通常要選主格。

快速判斷：

| 位置/用途       | 選擇 | 範例              |
| --------------- | ---- | ----------------- |
| 空格 + be 動詞  | 主格 | `She` is here.    |
| 空格 + 一般動詞 | 主格 | `They` work here. |
| 空格是句子主詞  | 主格 | `I` am happy.     |

最實用的解題順序：

1. 先找動詞。
2. 如果空格在動詞前面，先判斷它是不是主詞位置。
3. 看動詞形式：`am` 搭配 `I`，`is` 常搭配 `he / she / it`，`are` 常搭配 `you / we / they`。
4. 再依中文意思選出正確的人稱。

```text
___ am a student.
我是學生。

___ is my brother.
他是我的哥哥。
```

{% assign beginner_subject_options = "I|You|He|She|It|We|They" %}

{% include grammar/card-group-start.html %}

{% include grammar/pronoun-card.html title="Question 1" question="___ am happy." prompt_translation="___ 很開心。" translation="我很開心。" options=beginner_subject_options answer="I" analysis='[{"word":"I","label":"Subj","desc":"主格，表示我。"},{"word":"am","label":"Be","desc":"I 要搭配 am。"},{"word":"happy","label":"Adj","desc":"形容詞，表示開心。"}]' %}
{% include grammar/pronoun-card.html title="Question 2" question="___ are my friend." prompt_translation="___ 是我的朋友。" translation="你是我的朋友。" options=beginner_subject_options answer="You" analysis='[{"word":"You","label":"Subj","desc":"主格，可表示你。"},{"word":"are","label":"Be","desc":"You 要搭配 are。"},{"word":"my friend","label":"N","desc":"名詞片語。"}]' %}
{% include grammar/pronoun-card.html title="Question 3" question="___ is a teacher." prompt_translation="___ 是老師。" translation="他是老師。" options=beginner_subject_options answer="He" correct_answers="He|She|It" answer_translations='{"He":"他是老師。","She":"她是老師。","It":"它是老師。"}' analysis='[{"word":"He / She / It","label":"Subj","desc":"He、She、It 都是第三人稱單數主格，可以搭配 is。"},{"word":"is","label":"Be","desc":"第三人稱單數主詞要搭配 is。"},{"word":"a teacher","label":"N","desc":"名詞片語。"},{"label":"Note","desc":"這題練習的是 be 動詞搭配。He is、She is、It is 在文法上都正確；實際語意要看上下文。"}]' %}
{% include grammar/pronoun-card.html title="Question 4" question="___ is my sister." prompt_translation="___ 是我的姐姐/妹妹。" translation="她是我的姐姐/妹妹。" options=beginner_subject_options answer="She" analysis='[{"word":"She","label":"Subj","desc":"主格，表示她。"},{"word":"is","label":"Be","desc":"She 要搭配 is。"},{"word":"my sister","label":"N","desc":"名詞片語。"}]' %}
{% include grammar/pronoun-card.html title="Question 5" question="___ is a dog." prompt_translation="___ 是一隻狗。" translation="它是一隻狗。" options=beginner_subject_options answer="It" correct_answers="He|She|It" answer_translations='{"He":"牠是一隻公狗。","She":"牠是一隻母狗。","It":"它是一隻狗。"}' analysis='[{"word":"He / She / It","label":"Subj","desc":"He、She、It 都是第三人稱單數主格，可以搭配 is。"},{"word":"is","label":"Be","desc":"第三人稱單數主詞要搭配 is。"},{"word":"a dog","label":"N","desc":"名詞片語。"},{"label":"Note","desc":"如果知道動物性別，可以用 he 或 she；不知道或不強調性別時，通常用 it。"}]' %}
{% include grammar/pronoun-card.html title="Question 6" question="___ are students." prompt_translation="___ 是學生。" translation="我們是學生。" options=beginner_subject_options answer="We" correct_answers="You|We|They" answer_translations='{"You":"你們是學生。","We":"我們是學生。","They":"他們是學生。"}' analysis='[{"word":"You / We / They","label":"Subj","desc":"You、We、They 都可以搭配 are。"},{"word":"are","label":"Be","desc":"are 可搭配 you、we、they。"},{"word":"students","label":"N","desc":"複數名詞。"},{"label":"Note","desc":"這題練習的是 are 的主詞搭配。You are、We are、They are 在文法上都正確；中文意思會依選到的主詞改變。"}]' %}
{% include grammar/pronoun-card.html title="Question 7" question="___ are my classmates." prompt_translation="___ 是我的同學。" translation="他們是我的同學。" options=beginner_subject_options answer="They" correct_answers="You|They" answer_translations='{"You":"你們是我的同學。","They":"他們是我的同學。"}' analysis='[{"word":"You / They","label":"Subj","desc":"You 和 They 都可以搭配 are，後面也可以接複數名詞 classmates。"},{"word":"are","label":"Be","desc":"are 可搭配 you 或 they。"},{"word":"my classmates","label":"N","desc":"複數名詞片語。"},{"label":"Note","desc":"You are my classmates. 文法算正確；They are my classmates. 通常是更標準的預設答案。They 是由「語意邏輯」和「情境機率」決定的：這句話通常帶有「介紹」性質，說話者多半是在向第三者介紹一群不在對話中的人。"}]' %}

{% include grammar/card-group-end.html %}

## 人稱代名詞 - 受格練習

受格常放在動詞後面，或介系詞後面，表示動作的對象。初學時先記住這一組：

```text
me / you / him / her / it / us / them
```

看到「動詞 + 空格」或「to / for / with + 空格」時，通常要選受格。

快速判斷：

| 位置/用途     | 選擇 | 範例              |
| ------------- | ---- | ----------------- |
| 動詞 + 空格   | 受格 | I called `her`.   |
| 介系詞 + 空格 | 受格 | with `them`       |
| 動作的接受者  | 受格 | Please help `me`. |

最實用的解題順序：

1. 先找動詞或介系詞。
2. 如果空格在動詞後面，通常是動作的對象，選受格。
3. 如果空格在 `to / for / with / at` 等介系詞後面，選受格。
4. 再依中文意思選出正確的人稱。

```text
I like ___.
我喜歡他。

Please help ___.
請幫助我們。
```

{% assign beginner_object_options = "me|you|him|her|it|us|them" %}

{% include grammar/card-group-start.html %}

{% include grammar/pronoun-card.html title="Question 1" question="Please help ___." prompt_translation="請幫 ___。" translation="請幫我。" options=beginner_object_options answer="me" correct_answers="me|you|him|her|it|us|them" answer_translations='{"me":"請幫我。","you":"請幫你。","him":"請幫他。","her":"請幫她。","it":"請幫它。","us":"請幫我們。","them":"請幫他們。"}' analysis='[{"word":"me / you / him / her / it / us / them","label":"Obj","desc":"這一格在動詞 help 後面，所以只要是受格，文法上都可以。"},{"word":"help","label":"V","desc":"動詞，表示幫助。"},{"label":"Note","desc":"這題練習的是受格位置。空格在動詞 help 後面，所以所有受格選項都可以算正確。"}]' %}
{% include grammar/pronoun-card.html title="Question 2" question="I like ___." prompt_translation="我喜歡 ___。" translation="我喜歡你。" options=beginner_object_options answer="you" correct_answers="me|you|him|her|it|us|them" answer_translations='{"me":"我喜歡我。","you":"我喜歡你。","him":"我喜歡他。","her":"我喜歡她。","it":"我喜歡它。","us":"我喜歡我們。","them":"我喜歡他們。"}' analysis='[{"word":"me / you / him / her / it / us / them","label":"Obj","desc":"這一格在動詞 like 後面，所以只要是受格，文法上都可以。"},{"word":"like","label":"V","desc":"動詞，後面接受格。"},{"label":"Note","desc":"這題練習的是受格位置。空格在 like 後面，所以所有受格選項都可以算正確。"}]' %}
{% include grammar/pronoun-card.html title="Question 3" question="She sees ___." prompt_translation="她看見 ___。" translation="她看見他。" options=beginner_object_options answer="him" correct_answers="me|you|him|her|it|us|them" answer_translations='{"me":"她看見我。","you":"她看見你。","him":"她看見他。","her":"她看見她。","it":"她看見它。","us":"她看見我們。","them":"她看見他們。"}' analysis='[{"word":"me / you / him / her / it / us / them","label":"Obj","desc":"這一格在動詞 sees 後面，所以只要是受格，文法上都可以。"},{"word":"sees","label":"V","desc":"動詞，後面接受格。"},{"label":"Note","desc":"這題練習的是位置判斷，不是特定語意。因為空格在 sees 後面，所以 me、you、him、her、it、us、them 都是受格，都可以算正確。"}]' %}
{% include grammar/pronoun-card.html title="Question 4" question="He knows ___." prompt_translation="他認識 ___。" translation="他認識她。" options=beginner_object_options answer="her" correct_answers="me|you|him|her|it|us|them" answer_translations='{"me":"他認識我。","you":"他認識你。","him":"他認識他。","her":"他認識她。","it":"他認識它。","us":"他認識我們。","them":"他認識他們。"}' analysis='[{"word":"me / you / him / her / it / us / them","label":"Obj","desc":"這一格在動詞 knows 後面，所以只要是受格，文法上都可以。"},{"word":"knows","label":"V","desc":"動詞，後面接受格。"},{"label":"Note","desc":"這題練習的是受格位置。空格在 knows 後面，所以所有受格選項都可以算正確。"}]' %}
{% include grammar/pronoun-card.html title="Question 5" question="I have ___." prompt_translation="我有 ___。" translation="我有它。" options=beginner_object_options answer="it" correct_answers="me|you|him|her|it|us|them" answer_translations='{"me":"我有我。","you":"我有你。","him":"我有他。","her":"我有她。","it":"我有它。","us":"我有我們。","them":"我有他們。"}' analysis='[{"word":"me / you / him / her / it / us / them","label":"Obj","desc":"這一格在動詞 have 後面，所以只要是受格，文法上都可以。"},{"word":"have","label":"V","desc":"動詞，後面接受格。"},{"label":"Note","desc":"這題練習的是受格位置。空格在 have 後面，所以所有受格選項都可以算正確；實際意思要看上下文。"}]' %}
{% include grammar/pronoun-card.html title="Question 6" question="The teacher teaches ___." prompt_translation="老師教 ___。" translation="老師教我們。" options=beginner_object_options answer="us" correct_answers="me|you|him|her|it|us|them" answer_translations='{"me":"老師教我。","you":"老師教你。","him":"老師教他。","her":"老師教她。","it":"老師教它。","us":"老師教我們。","them":"老師教他們。"}' analysis='[{"word":"me / you / him / her / it / us / them","label":"Obj","desc":"這一格在動詞 teaches 後面，所以只要是受格，文法上都可以。"},{"word":"teaches","label":"V","desc":"動詞，後面接受格。"},{"label":"Note","desc":"這題練習的是受格位置。空格在 teaches 後面，所以所有受格選項都可以算正確。"}]' %}
{% include grammar/pronoun-card.html title="Question 7" question="I play with ___." prompt_translation="我和 ___ 玩。" translation="我和他們玩。" options=beginner_object_options answer="them" correct_answers="me|you|him|her|it|us|them" answer_translations='{"me":"我和我玩。","you":"我和你玩。","him":"我和他玩。","her":"我和她玩。","it":"我和它玩。","us":"我和我們玩。","them":"我和他們玩。"}' analysis='[{"word":"me / you / him / her / it / us / them","label":"Obj","desc":"這一格在介系詞 with 後面，所以只要是受格，文法上都可以。"},{"word":"with","label":"Prep","desc":"介系詞，後面接受格。"},{"label":"Note","desc":"這題練習的是介系詞後面接受格。with 後面可以接 me、you、him、her、it、us、them。"}]' %}

{% include grammar/card-group-end.html %}

## 人稱代名詞 - 所有格練習

所有格用來表示「誰的」，後面通常會直接接名詞。初學時先記住這一組：

```text
my / your / his / her / its / our / their
```

看到「空格 + 名詞」時，通常要選所有格。

快速判斷：

| 位置/用途        | 選擇         | 範例                  |
| ---------------- | ------------ | --------------------- |
| 空格 + 名詞      | 所有格形容詞 | `Her` manager called. |
| 表示「誰的東西」 | 所有格形容詞 | `My` book is new.     |
| 空格後面有名詞   | 所有格形容詞 | `Their` house is big. |

最實用的解題順序：

1. 先看空格後面是不是直接接名詞。
2. 如果空格後面有名詞，而且意思是「誰的」，選所有格形容詞。
3. 不要選 `mine / yours / hers / ours / theirs`，因為它們後面不能再接名詞。
4. 再依中文意思選出正確的人稱。

```text
___ book is new.
我的書是新的。

___ house is big.
他們的房子很大。
```

{% assign beginner_possessive_options = "my|your|his|her|its|our|their" %}

{% include grammar/card-group-start.html %}

{% include grammar/pronoun-card.html title="Question 1" question="___ name is Tom." prompt_translation="___ 的名字是 Tom。" translation="我的名字是 Tom。" options=beginner_possessive_options answer="my" correct_answers="my|your|his|her|its|our|their" answer_translations='{"my":"我的名字是 Tom。","your":"你的名字是 Tom。","his":"他的名字是 Tom。","her":"她的名字是 Tom。","its":"它的名字是 Tom。","our":"我們的名字是 Tom。","their":"他們的名字是 Tom。"}' analysis='[{"word":"my / your / his / her / its / our / their","label":"Poss","desc":"這一格在名詞 name 前面，所以只要是所有格，文法上都可以。"},{"word":"name","label":"N","desc":"名詞，前面用所有格修飾。"},{"label":"Note","desc":"這題練習的是所有格位置。空格後面直接接名詞 name，所以所有所有格選項都可以算正確。"}]' %}
{% include grammar/pronoun-card.html title="Question 2" question="___ book is here." prompt_translation="___ 的書在這裡。" translation="你的書在這裡。" options=beginner_possessive_options answer="your" correct_answers="my|your|his|her|its|our|their" answer_translations='{"my":"我的書在這裡。","your":"你的書在這裡。","his":"他的書在這裡。","her":"她的書在這裡。","its":"它的書在這裡。","our":"我們的書在這裡。","their":"他們的書在這裡。"}' analysis='[{"word":"my / your / his / her / its / our / their","label":"Poss","desc":"這一格在名詞 book 前面，所以只要是所有格，文法上都可以。"},{"word":"book","label":"N","desc":"名詞，前面用所有格修飾。"},{"label":"Note","desc":"這題練習的是所有格位置。空格後面直接接名詞 book，所以所有所有格選項都可以算正確。"}]' %}
{% include grammar/pronoun-card.html title="Question 3" question="___ car is red." prompt_translation="___ 的車是紅色的。" translation="他的車是紅色的。" options=beginner_possessive_options answer="his" correct_answers="my|your|his|her|its|our|their" answer_translations='{"my":"我的車是紅色的。","your":"你的車是紅色的。","his":"他的車是紅色的。","her":"她的車是紅色的。","its":"它的車是紅色的。","our":"我們的車是紅色的。","their":"他們的車是紅色的。"}' analysis='[{"word":"my / your / his / her / its / our / their","label":"Poss","desc":"這一格在名詞 car 前面，所以只要是所有格，文法上都可以。"},{"word":"car","label":"N","desc":"名詞，前面用所有格修飾。"},{"label":"Note","desc":"這題練習的是所有格位置。空格後面直接接名詞 car，所以所有所有格選項都可以算正確。"}]' %}
{% include grammar/pronoun-card.html title="Question 4" question="___ bag is black." prompt_translation="___ 的包包是黑色的。" translation="她的包包是黑色的。" options=beginner_possessive_options answer="her" correct_answers="my|your|his|her|its|our|their" answer_translations='{"my":"我的包包是黑色的。","your":"你的包包是黑色的。","his":"他的包包是黑色的。","her":"她的包包是黑色的。","its":"它的包包是黑色的。","our":"我們的包包是黑色的。","their":"他們的包包是黑色的。"}' analysis='[{"word":"my / your / his / her / its / our / their","label":"Poss","desc":"這一格在名詞 bag 前面，所以只要是所有格，文法上都可以。"},{"word":"bag","label":"N","desc":"名詞，前面用所有格修飾。"},{"label":"Note","desc":"這題練習的是所有格位置。空格後面直接接名詞 bag，所以所有所有格選項都可以算正確。"}]' %}
{% include grammar/pronoun-card.html title="Question 5" question="___ tail is short." prompt_translation="___ 的尾巴很短。" translation="它的尾巴很短。" options=beginner_possessive_options answer="its" correct_answers="my|your|his|her|its|our|their" answer_translations='{"my":"我的尾巴很短。","your":"你的尾巴很短。","his":"他的尾巴很短。","her":"她的尾巴很短。","its":"它的尾巴很短。","our":"我們的尾巴很短。","their":"他們的尾巴很短。"}' analysis='[{"word":"my / your / his / her / its / our / their","label":"Poss","desc":"這一格在名詞 tail 前面，所以只要是所有格，文法上都可以。"},{"word":"tail","label":"N","desc":"名詞，前面用所有格修飾。"},{"label":"Note","desc":"這題練習的是所有格位置。空格後面直接接名詞 tail，所以所有所有格選項都可以算正確；實際語意要看上下文。"}]' %}
{% include grammar/pronoun-card.html title="Question 6" question="___ teacher is kind." prompt_translation="___ 的老師很親切。" translation="我們的老師很親切。" options=beginner_possessive_options answer="our" correct_answers="my|your|his|her|its|our|their" answer_translations='{"my":"我的老師很親切。","your":"你的老師很親切。","his":"他的老師很親切。","her":"她的老師很親切。","its":"它的老師很親切。","our":"我們的老師很親切。","their":"他們的老師很親切。"}' analysis='[{"word":"my / your / his / her / its / our / their","label":"Poss","desc":"這一格在名詞 teacher 前面，所以只要是所有格，文法上都可以。"},{"word":"teacher","label":"N","desc":"名詞，前面用所有格修飾。"},{"label":"Note","desc":"這題練習的是所有格位置。空格後面直接接名詞 teacher，所以所有所有格選項都可以算正確。"}]' %}
{% include grammar/pronoun-card.html title="Question 7" question="___ house is big." prompt_translation="___ 的房子很大。" translation="他們的房子很大。" options=beginner_possessive_options answer="their" correct_answers="my|your|his|her|its|our|their" answer_translations='{"my":"我的房子很大。","your":"你的房子很大。","his":"他的房子很大。","her":"她的房子很大。","its":"它的房子很大。","our":"我們的房子很大。","their":"他們的房子很大。"}' analysis='[{"word":"my / your / his / her / its / our / their","label":"Poss","desc":"這一格在名詞 house 前面，所以只要是所有格，文法上都可以。"},{"word":"house","label":"N","desc":"名詞，前面用所有格修飾。"},{"label":"Note","desc":"這題練習的是所有格位置。空格後面直接接名詞 house，所以所有所有格選項都可以算正確。"}]' %}

{% include grammar/card-group-end.html %}

## 人稱代名詞 - 所有格代名詞練習

所有格代名詞也表示「誰的」，但它可以自己當一個名詞用，後面不要再接名詞。初學時先記住這一組：

```text
mine / yours / his / hers / its / ours / theirs
```

看到「be 動詞 + 空格」或句尾空格時，如果前面已經提過物品，通常可以選所有格代名詞。

快速判斷：

| 位置/用途                  | 選擇         | 範例                 |
| -------------------------- | ------------ | -------------------- |
| be 動詞 + 空格，後面無名詞 | 所有格代名詞 | This book is `mine`. |
| 空格在句尾，表示「誰的」   | 所有格代名詞 | Is this pen `yours`? |
| 前面已出現被擁有的東西     | 所有格代名詞 | The house is `ours`. |

最實用的解題順序：

1. 先看空格後面有沒有名詞。
2. 如果空格後面沒有名詞，但句子要表達「是誰的」，選所有格代名詞。
3. 對照所有格形容詞：`my -> mine`、`your -> yours`、`her -> hers`、`our -> ours`、`their -> theirs`。
4. 再依中文意思選出正確的人稱。

```text
This book is ___.
這本書是我的。

The house is ___.
那間房子是他們的。
```

{% assign beginner_possessive_pronoun_options = "mine|yours|his|hers|its|ours|theirs" %}
{% capture beginner_possessive_pronoun_analysis_notes %}{"mine":"my 是所有格形容詞，後面要接名詞；mine 是所有格代名詞，可以單獨使用。","yours":"your 是所有格形容詞，後面要接名詞；yours 是所有格代名詞，可以單獨使用。","his":"his 可以是所有格形容詞，也可以是所有格代名詞；這裡後面沒有名詞，所以是所有格代名詞。","hers":"her 是所有格形容詞，後面要接名詞；hers 是所有格代名詞，可以單獨使用。","its":"its 作所有格形容詞時較常見，例如 its toy；作所有格代名詞時也可單獨使用，但較少見。","ours":"our 是所有格形容詞，後面要接名詞；ours 是所有格代名詞，可以單獨使用。","theirs":"their 是所有格形容詞，後面要接名詞；theirs 是所有格代名詞，可以單獨使用。"}{% endcapture %}

{% include grammar/card-group-start.html %}

{% include grammar/pronoun-card.html title="Question 1" question="This book is ___." prompt_translation="這本書是 ___ 的。" translation="這本書是我的。" options=beginner_possessive_pronoun_options answer="mine" correct_answers="mine|yours|his|hers|ours|theirs" answer_translations='{"mine":"這本書是我的。","yours":"這本書是你的/你們的。","his":"這本書是他的。","hers":"這本書是她的。","ours":"這本書是我們的。","theirs":"這本書是他們的。"}' analysis_notes=beginner_possessive_pronoun_analysis_notes analysis='[{"word":"mine / yours / his / hers / ours / theirs","label":"Poss Pron","desc":"這一格在句尾，後面沒有名詞，所以要用所有格代名詞。"},{"word":"book","label":"N","desc":"前面已經提到物品 book，後面不用再接 book。"},{"label":"Note","desc":"這題練習所有格代名詞的位置。多個所有格代名詞都能成立，中文意思會依選項改變。its 作所有格代名詞很少用在這種句型，因此初學先避免。"}]' %}
{% include grammar/pronoun-card.html title="Question 2" question="Is this pen ___?" prompt_translation="這支筆是 ___ 的嗎？" translation="這支筆是你的嗎？" options=beginner_possessive_pronoun_options answer="yours" correct_answers="mine|yours|his|hers|ours|theirs" answer_translations='{"mine":"這支筆是我的嗎？","yours":"這支筆是你的/你們的嗎？","his":"這支筆是他的嗎？","hers":"這支筆是她的嗎？","ours":"這支筆是我們的嗎？","theirs":"這支筆是他們的嗎？"}' analysis_notes=beginner_possessive_pronoun_analysis_notes analysis='[{"word":"mine / yours / his / hers / ours / theirs","label":"Poss Pron","desc":"空格在句尾，後面沒有名詞，所以用所有格代名詞。"},{"word":"pen","label":"N","desc":"pen 已經出現在前面，不需要再說 your pen。"},{"label":"Note","desc":"這題有多個文法上可接受答案；選不同答案時，中文意思會改變。"}]' %}
{% include grammar/pronoun-card.html title="Question 3" question="The red car is ___." prompt_translation="那台紅色的車是 ___ 的。" translation="那台紅色的車是他的。" options=beginner_possessive_pronoun_options answer="his" correct_answers="mine|yours|his|hers|ours|theirs" answer_translations='{"mine":"那台紅色的車是我的。","yours":"那台紅色的車是你的/你們的。","his":"那台紅色的車是他的。","hers":"那台紅色的車是她的。","ours":"那台紅色的車是我們的。","theirs":"那台紅色的車是他們的。"}' analysis_notes=beginner_possessive_pronoun_analysis_notes analysis='[{"word":"his","label":"Poss Pron","desc":"his 可以是所有格形容詞，也可以是所有格代名詞。這裡後面沒有名詞，所以是所有格代名詞。"},{"word":"is","label":"Be","desc":"be 動詞後面可以接所有格代名詞，表示歸屬。"},{"label":"Note","desc":"這題重點是句尾不再接名詞，因此不能用 my、your、her、our、their。"}]' %}
{% include grammar/pronoun-card.html title="Question 4" question="That bag is ___." prompt_translation="那個包包是 ___ 的。" translation="那個包包是她的。" options=beginner_possessive_pronoun_options answer="hers" correct_answers="mine|yours|his|hers|ours|theirs" answer_translations='{"mine":"那個包包是我的。","yours":"那個包包是你的/你們的。","his":"那個包包是他的。","hers":"那個包包是她的。","ours":"那個包包是我們的。","theirs":"那個包包是他們的。"}' analysis_notes=beginner_possessive_pronoun_analysis_notes analysis='[{"word":"hers","label":"Poss Pron","desc":"hers 表示「她的東西」，後面不能再接名詞。"},{"word":"bag","label":"N","desc":"bag 已經在前面出現，空格只需要表示所有權。"},{"label":"Note","desc":"her bag 是「她的包包」；The bag is hers. 是「包包是她的」。"}]' %}
{% include grammar/pronoun-card.html title="Question 5" question="This classroom is ___." prompt_translation="這間教室是 ___ 的。" translation="這間教室是我們的。" options=beginner_possessive_pronoun_options answer="ours" correct_answers="mine|yours|his|hers|ours|theirs" answer_translations='{"mine":"這間教室是我的。","yours":"這間教室是你的/你們的。","his":"這間教室是他的。","hers":"這間教室是她的。","ours":"這間教室是我們的。","theirs":"這間教室是他們的。"}' analysis_notes=beginner_possessive_pronoun_analysis_notes analysis='[{"word":"ours","label":"Poss Pron","desc":"ours 表示「我們的」，可以單獨放在句尾。"},{"word":"classroom","label":"N","desc":"classroom 已經出現在前面，所以後面不用接名詞。"},{"label":"Note","desc":"our 是所有格形容詞，後面要接名詞；ours 是所有格代名詞，可以單獨使用。"}]' %}
{% include grammar/pronoun-card.html title="Question 6" question="The house is ___." prompt_translation="那間房子是 ___ 的。" translation="那間房子是他們的。" options=beginner_possessive_pronoun_options answer="theirs" correct_answers="mine|yours|his|hers|ours|theirs" answer_translations='{"mine":"那間房子是我的。","yours":"那間房子是你的/你們的。","his":"那間房子是他的。","hers":"那間房子是她的。","ours":"那間房子是我們的。","theirs":"那間房子是他們的。"}' analysis_notes=beginner_possessive_pronoun_analysis_notes analysis='[{"word":"theirs","label":"Poss Pron","desc":"theirs 表示「他們的」，後面不接名詞。"},{"word":"house","label":"N","desc":"house 已經在主詞中出現。"},{"label":"Note","desc":"their house 是「他們的房子」；The house is theirs. 是「房子是他們的」。"}]' %}
{% include grammar/pronoun-card.html title="Question 7" question="The old toy is ___." prompt_translation="那個舊玩具是 ___ 的。" translation="那個舊玩具是它的。" options=beginner_possessive_pronoun_options answer="its" correct_answers="mine|yours|his|hers|its|ours|theirs" answer_translations='{"mine":"那個舊玩具是我的。","yours":"那個舊玩具是你的/你們的。","his":"那個舊玩具是他的。","hers":"那個舊玩具是她的。","its":"那個舊玩具是它的。","ours":"那個舊玩具是我們的。","theirs":"那個舊玩具是他們的。"}' analysis_notes=beginner_possessive_pronoun_analysis_notes analysis='[{"word":"its","label":"Poss Pron","desc":"its 可以表示「它的」，但作所有格代名詞時不如 mine、yours、his、hers、ours、theirs 常見。"},{"word":"toy","label":"N","desc":"toy 已經在前面出現，所以空格可用所有格代名詞。"},{"label":"Note","desc":"這題把 its 也列入練習，是為了對照表格中的完整形式；實際使用時，初學者更常看到 its + 名詞，例如 its toy。"}]' %}

{% include grammar/card-group-end.html %}

## 人稱代名詞 - 反身代名詞練習

反身代名詞常用來表示「自己」。主詞和受詞是同一個人或同一個東西時，就會用反身代名詞。初學時先記住這一組：

```text
myself / yourself / himself / herself / itself / ourselves / yourselves / themselves
```

看到 `by ___` 時，常表示「獨自地」；看到主詞和受詞指同一個人時，也要用反身代名詞。

快速判斷：

| 位置/用途             | 選擇       | 範例                         |
| --------------------- | ---------- | ---------------------------- |
| by + 空格             | 反身代名詞 | I did it by `myself`.        |
| 主詞和受詞是同一人/物 | 反身代名詞 | She looked at `herself`.     |
| 表示「自己、獨自」    | 反身代名詞 | The door closed by `itself`. |

最實用的解題順序：

1. 先找主詞。
2. 如果看到 `by ___`，先判斷是否表示「自己、獨自」。
3. 如果受詞和主詞是同一人或同一物，選反身代名詞。
4. 依主詞配對：`I -> myself`、`he -> himself`、`she -> herself`、`we -> ourselves`、`they -> themselves`。
5. 再確認單數或複數，例如 `yourself` 和 `yourselves`。

```text
I did it by ___.
我自己做的。

She looked at ___.
她看著她自己。
```

{% assign beginner_reflexive_options = "myself|yourself|himself|herself|itself|ourselves|yourselves|themselves" %}

{% include grammar/card-group-start.html %}

{% include grammar/pronoun-card.html title="Question 1" question="I did it by ___." prompt_translation="我自己做了這件事。" translation="我自己做了這件事。" options=beginner_reflexive_options answer="myself" analysis='[{"word":"I","label":"Subj","desc":"主詞是 I。"},{"word":"myself","label":"Refl","desc":"主詞 I 對應反身代名詞 myself。"},{"word":"by myself","label":"Phrase","desc":"by myself 表示「我自己、獨自」。"}]' %}
{% include grammar/pronoun-card.html title="Question 2" question="You can do it by ___." prompt_translation="你可以自己做這件事。" translation="你可以自己做這件事。" options=beginner_reflexive_options answer="yourself" analysis='[{"word":"You","label":"Subj","desc":"這裡的 You 依中文提示表示「你」。"},{"word":"yourself","label":"Refl","desc":"單數 you 對應反身代名詞 yourself。"},{"label":"Note","desc":"如果中文是「你們可以自己做這件事」，答案才會是 yourselves。"}]' %}
{% include grammar/pronoun-card.html title="Question 3" question="He hurt ___." prompt_translation="他弄傷了他自己。" translation="他弄傷了他自己。" options=beginner_reflexive_options answer="himself" analysis='[{"word":"He","label":"Subj","desc":"主詞是 He。"},{"word":"hurt","label":"V","desc":"hurt 後面接受詞。"},{"word":"himself","label":"Refl","desc":"受詞和主詞是同一個人，所以用 himself。"}]' %}
{% include grammar/pronoun-card.html title="Question 4" question="She looked at ___." prompt_translation="她看著她自己。" translation="她看著她自己。" options=beginner_reflexive_options answer="herself" analysis='[{"word":"She","label":"Subj","desc":"主詞是 She。"},{"word":"at","label":"Prep","desc":"介系詞 at 後面要接受詞。"},{"word":"herself","label":"Refl","desc":"她看的對象是她自己，所以用 herself。"}]' %}
{% include grammar/pronoun-card.html title="Question 5" question="The door closed by ___." prompt_translation="門自己關上了。" translation="門自己關上了。" options=beginner_reflexive_options answer="itself" analysis='[{"word":"The door","label":"Subj","desc":"主詞是事物，可以用 it 代替。"},{"word":"itself","label":"Refl","desc":"it 的反身代名詞是 itself。"},{"word":"by itself","label":"Phrase","desc":"by itself 表示「自己、沒有外力」。"}]' %}
{% include grammar/pronoun-card.html title="Question 6" question="We made dinner by ___." prompt_translation="我們自己做了晚餐。" translation="我們自己做了晚餐。" options=beginner_reflexive_options answer="ourselves" analysis='[{"word":"We","label":"Subj","desc":"主詞是 We。"},{"word":"ourselves","label":"Refl","desc":"We 對應反身代名詞 ourselves。"},{"word":"by ourselves","label":"Phrase","desc":"by ourselves 表示「我們自己、我們獨自」。"}]' %}
{% include grammar/pronoun-card.html title="Question 7" question="They cleaned the room by ___." prompt_translation="他們自己打掃了房間。" translation="他們自己打掃了房間。" options=beginner_reflexive_options answer="themselves" analysis='[{"word":"They","label":"Subj","desc":"主詞是 They。"},{"word":"themselves","label":"Refl","desc":"They 對應反身代名詞 themselves。"},{"word":"by themselves","label":"Phrase","desc":"by themselves 表示「他們自己、他們獨自」。"}]' %}

{% include grammar/card-group-end.html %}

## 簡單式的疑問句

簡單式疑問句常見有兩種：be 動詞疑問句、一般動詞疑問句。

be 動詞疑問句把 be 動詞放到句首：

| 肯定句             | 疑問句             | 中文意思         |
| ------------------ | ------------------ | ---------------- |
| You are a student. | Are you a student? | 你是學生嗎？     |
| He is busy.        | Is he busy?        | 他很忙嗎？       |
| They are ready.    | Are they ready?    | 他們準備好了嗎？ |

一般動詞疑問句要用 `Do` 或 `Does` 放句首：

| 主詞                | 助動詞 | 疑問句                | 中文意思       |
| ------------------- | ------ | --------------------- | -------------- |
| I / you / we / they | Do     | Do you like English?  | 你喜歡英文嗎？ |
| he / she / it       | Does   | Does he like English? | 他喜歡英文嗎？ |

要注意：用了 `Does` 之後，後面的動詞要回到原形。

```text
He likes English.
Does he like English?

She works here.
Does she work here?
```

快速判斷：

| 原句動詞      | 疑問句開頭    | 範例                 |
| ------------- | ------------- | -------------------- |
| am / is / are | Am / Is / Are | Is she your teacher? |
| 一般動詞      | Do / Does     | Do they play tennis? |

{% assign beginner_simple_question_options = "Am|Is|Are|Do|Does" %}

{% include grammar/card-group-start.html %}

{% include grammar/pronoun-card.html title="Question 1" question="___ you a student?" prompt_translation="你是學生嗎？" translation="你是學生嗎？" options=beginner_simple_question_options answer="Are" analysis='[{"word":"Are","label":"Be","desc":"主詞是 you，be 動詞疑問句用 Are 開頭。"},{"word":"you","label":"Subj","desc":"主詞。"},{"word":"a student","label":"N","desc":"名詞片語。"}]' %}
{% include grammar/pronoun-card.html title="Question 2" question="___ she your teacher?" prompt_translation="她是你的老師嗎？" translation="她是你的老師嗎？" options=beginner_simple_question_options answer="Is" analysis='[{"word":"Is","label":"Be","desc":"主詞是 she，be 動詞疑問句用 Is 開頭。"},{"word":"she","label":"Subj","desc":"第三人稱單數主詞。"},{"word":"your teacher","label":"N","desc":"名詞片語。"}]' %}
{% include grammar/pronoun-card.html title="Question 3" question="___ they ready?" prompt_translation="他們準備好了嗎？" translation="他們準備好了嗎？" options=beginner_simple_question_options answer="Are" analysis='[{"word":"Are","label":"Be","desc":"主詞是 they，be 動詞疑問句用 Are 開頭。"},{"word":"they","label":"Subj","desc":"複數主詞。"},{"word":"ready","label":"Adj","desc":"形容詞。"}]' %}
{% include grammar/pronoun-card.html title="Question 4" question="___ you like English?" prompt_translation="你喜歡英文嗎？" translation="你喜歡英文嗎？" options=beginner_simple_question_options answer="Do" analysis='[{"word":"Do","label":"Aux","desc":"一般動詞 like 的疑問句，主詞 you 用 Do。"},{"word":"you","label":"Subj","desc":"主詞。"},{"word":"like","label":"V","desc":"一般動詞原形。"}]' %}
{% include grammar/pronoun-card.html title="Question 5" question="___ he play tennis?" prompt_translation="他打網球嗎？" translation="他打網球嗎？" options=beginner_simple_question_options answer="Does" analysis='[{"word":"Does","label":"Aux","desc":"主詞 he 是第三人稱單數，一般動詞疑問句用 Does。"},{"word":"play","label":"V","desc":"用了 Does 後，動詞用原形 play。"},{"label":"Note","desc":"不要寫 Does he plays tennis?。"}]' %}
{% include grammar/pronoun-card.html title="Question 6" question="___ we have homework?" prompt_translation="我們有作業嗎？" translation="我們有作業嗎？" options=beginner_simple_question_options answer="Do" analysis='[{"word":"Do","label":"Aux","desc":"主詞 we 搭配一般動詞疑問句，用 Do。"},{"word":"have","label":"V","desc":"一般動詞原形。"},{"word":"homework","label":"N","desc":"名詞。"}]' %}
{% include grammar/pronoun-card.html title="Question 7" question="___ it cold today?" prompt_translation="今天冷嗎？" translation="今天冷嗎？" options=beginner_simple_question_options answer="Is" analysis='[{"word":"Is","label":"Be","desc":"主詞 it 搭配 be 動詞 is，疑問句把 Is 放句首。"},{"word":"it","label":"Subj","desc":"天氣常用 it 當主詞。"},{"word":"cold","label":"Adj","desc":"形容詞。"}]' %}

{% include grammar/card-group-end.html %}

## Wh-問句與助動詞Do問句

Wh-問句用來問「具體資訊」，常見開頭有 `what`、`who`、`where`、`when`、`why`、`how`。

| Wh-字 | 問什麼       | 範例                     | 中文意思         |
| ----- | ------------ | ------------------------ | ---------------- |
| what  | 什麼         | What is this?            | 這是什麼？       |
| who   | 誰           | Who is she?              | 她是誰？         |
| where | 哪裡         | Where do you live?       | 你住在哪裡？     |
| when  | 何時         | When do you study?       | 你何時讀書？     |
| why   | 為什麼       | Why do you like it?      | 你為什麼喜歡它？ |
| how   | 如何、怎麼樣 | How do you go to school? | 你怎麼去學校？   |

如果 Wh-問句後面接一般動詞，通常要加助動詞 `do` 或 `does`：

```text
Where do you live?
你住在哪裡？

What does she want?
她想要什麼？

When do they play soccer?
他們什麼時候踢足球？
```

`Do` 問句通常回答 yes / no：

```text
Do you like coffee?
Yes, I do.
No, I do not.
```

`Wh` 引導式問句通常回答具體資訊：

```text
Where do you live?
I live in Taipei.

What does he eat?
He eats rice.
```

快速比較：

| 問句種類 | 開頭                                  | 回答方式 | 範例               |
| -------- | ------------------------------------- | -------- | ------------------ |
| Do 問句  | Do / Does                             | Yes / No | Do you work here?  |
| Wh-問句  | What / Who / Where / When / Why / How | 具體資訊 | Where do you work? |

{% assign beginner_wh_do_options = "What|Who|Where|When|Why|How|Do|Does" %}

{% include grammar/card-group-start.html %}

{% include grammar/pronoun-card.html title="Question 1" question="___ do you live?" prompt_translation="你住在哪裡？" translation="你住在哪裡？" options=beginner_wh_do_options answer="Where" analysis='[{"word":"Where","label":"Wh","desc":"問地點用 Where。"},{"word":"do","label":"Aux","desc":"一般動詞 live 的問句用 do。"},{"word":"live","label":"V","desc":"動詞原形。"}]' %}
{% include grammar/pronoun-card.html title="Question 2" question="___ does she want?" prompt_translation="她想要什麼？" translation="她想要什麼？" options=beginner_wh_do_options answer="What" analysis='[{"word":"What","label":"Wh","desc":"問東西或內容用 What。"},{"word":"does","label":"Aux","desc":"主詞 she 搭配 does。"},{"word":"want","label":"V","desc":"用了 does 後，動詞用原形 want。"}]' %}
{% include grammar/pronoun-card.html title="Question 3" question="___ is your brother?" prompt_translation="你的哥哥/弟弟是誰？" translation="你的哥哥/弟弟是誰？" options=beginner_wh_do_options answer="Who" analysis='[{"word":"Who","label":"Wh","desc":"問人用 Who。"},{"word":"is","label":"Be","desc":"這句是 be 動詞問句。"},{"word":"your brother","label":"N","desc":"名詞片語。"}]' %}
{% include grammar/pronoun-card.html title="Question 4" question="___ do they study?" prompt_translation="他們什麼時候讀書？" translation="他們什麼時候讀書？" options=beginner_wh_do_options answer="When" analysis='[{"word":"When","label":"Wh","desc":"問時間用 When。"},{"word":"do","label":"Aux","desc":"主詞 they 搭配 do。"},{"word":"study","label":"V","desc":"一般動詞原形。"}]' %}
{% include grammar/pronoun-card.html title="Question 5" question="___ do you go to school?" prompt_translation="你怎麼去學校？" translation="你怎麼去學校？" options=beginner_wh_do_options answer="How" analysis='[{"word":"How","label":"Wh","desc":"問方法或方式用 How。"},{"word":"do","label":"Aux","desc":"一般動詞 go 的問句用 do。"},{"word":"go","label":"V","desc":"動詞原形。"}]' %}
{% include grammar/pronoun-card.html title="Question 6" question="___ you like coffee?" prompt_translation="你喜歡咖啡嗎？" translation="你喜歡咖啡嗎？" options=beginner_wh_do_options answer="Do" analysis='[{"word":"Do","label":"Aux","desc":"這題是 Yes/No 問句，不是 Wh-問句。"},{"word":"you","label":"Subj","desc":"主詞 you。"},{"word":"like","label":"V","desc":"一般動詞原形。"}]' %}
{% include grammar/pronoun-card.html title="Question 7" question="___ he work here?" prompt_translation="他在這裡工作嗎？" translation="他在這裡工作嗎？" options=beginner_wh_do_options answer="Does" analysis='[{"word":"Does","label":"Aux","desc":"主詞 he 是第三人稱單數，一般動詞問句用 Does。"},{"word":"work","label":"V","desc":"用了 Does 後，動詞用原形 work。"},{"word":"here","label":"Place","desc":"地點副詞。"}]' %}

{% include grammar/card-group-end.html %}

## 頻率副詞

頻率副詞用來表示「多久做一次」。初學時先記住這幾個常見程度：

| 頻率副詞  | 中文意思 | 大約頻率 | 範例                         |
| --------- | -------- | -------- | ---------------------------- |
| always    | 總是     | 100%     | I always eat breakfast.      |
| usually   | 通常     | 約 80%   | She usually walks to school. |
| often     | 常常     | 約 60%   | We often play basketball.    |
| sometimes | 有時候   | 約 40%   | He sometimes drinks tea.     |
| seldom    | 很少     | 約 20%   | They seldom watch TV.        |
| never     | 從不     | 0%       | I never smoke.               |

頻率副詞最常放在一般動詞前面；如果句子有 be 動詞，頻率副詞通常放在 be 動詞後面。

| 句型            | 位置           | 範例                      |
| --------------- | -------------- | ------------------------- |
| 主詞 + 一般動詞 | 放在一般動詞前 | I `usually` get up early. |
| 主詞 + be 動詞  | 放在 be 動詞後 | She is `often` tired.     |

{% assign beginner_frequency_options = "always|usually|often|sometimes|seldom|never" %}

{% include grammar/card-group-start.html %}

{% include grammar/pronoun-card.html title="Question 1" question="I ___ eat breakfast." prompt_translation="我總是吃早餐。" translation="我總是吃早餐。" options=beginner_frequency_options answer="always" analysis='[{"word":"always","label":"Freq","desc":"always 表示總是，頻率最高。"},{"word":"eat","label":"V","desc":"一般動詞，頻率副詞放在它前面。"},{"word":"breakfast","label":"N","desc":"名詞。"}]' %}
{% include grammar/pronoun-card.html title="Question 2" question="She ___ walks to school." prompt_translation="她通常走路去學校。" translation="她通常走路去學校。" options=beginner_frequency_options answer="usually" analysis='[{"word":"usually","label":"Freq","desc":"usually 表示通常。"},{"word":"walks","label":"V","desc":"一般動詞，頻率副詞放在前面。"},{"word":"to school","label":"Place","desc":"地點片語。"}]' %}
{% include grammar/pronoun-card.html title="Question 3" question="We ___ play basketball." prompt_translation="我們常常打籃球。" translation="我們常常打籃球。" options=beginner_frequency_options answer="often" analysis='[{"word":"often","label":"Freq","desc":"often 表示常常。"},{"word":"play","label":"V","desc":"一般動詞。"},{"word":"basketball","label":"N","desc":"名詞。"}]' %}
{% include grammar/pronoun-card.html title="Question 4" question="He is ___ late." prompt_translation="他有時候遲到。" translation="他有時候遲到。" options=beginner_frequency_options answer="sometimes" analysis='[{"word":"sometimes","label":"Freq","desc":"sometimes 表示有時候。"},{"word":"is","label":"Be","desc":"有 be 動詞時，頻率副詞通常放在 be 動詞後面。"},{"word":"late","label":"Adj","desc":"形容詞。"}]' %}
{% include grammar/pronoun-card.html title="Question 5" question="They ___ watch TV." prompt_translation="他們很少看電視。" translation="他們很少看電視。" options=beginner_frequency_options answer="seldom" analysis='[{"word":"seldom","label":"Freq","desc":"seldom 表示很少。"},{"word":"watch","label":"V","desc":"一般動詞。"},{"word":"TV","label":"N","desc":"名詞。"}]' %}
{% include grammar/pronoun-card.html title="Question 6" question="I ___ drink coffee." prompt_translation="我從不喝咖啡。" translation="我從不喝咖啡。" options=beginner_frequency_options answer="never" analysis='[{"word":"never","label":"Freq","desc":"never 表示從不。"},{"word":"drink","label":"V","desc":"一般動詞。"},{"word":"coffee","label":"N","desc":"名詞。"}]' %}
{% include grammar/pronoun-card.html title="Question 7" question="My father is ___ busy." prompt_translation="我爸爸通常很忙。" translation="我爸爸通常很忙。" options=beginner_frequency_options answer="usually" analysis='[{"word":"usually","label":"Freq","desc":"usually 表示通常。"},{"word":"is","label":"Be","desc":"頻率副詞放在 be 動詞後面。"},{"word":"busy","label":"Adj","desc":"形容詞。"}]' %}

{% include grammar/card-group-end.html %}

## 空間介系詞

空間介系詞用來說明人、事物或地點的位置。可以先用「短距離、中距離、長距離」來記：

{% include grammar/spatial-prepositions-distance.html %}

| 距離感 | 常見介系詞/片語      | 中文意思        | 範例                                |
| ------ | -------------------- | --------------- | ----------------------------------- |
| 短     | next to / beside     | 在旁邊          | The bag is `next to` the desk.      |
|        | between              | 在兩者之間      | The cat is `between` the boxes.     |
|        | in front of / behind | 在前面 / 在後面 | The car is `in front of` the house. |
| 中     | near                 | 在附近          | The school is `near` my home.       |
|        | across from          | 在對面          | The bank is `across from` the park. |
|        | around               | 在周圍          | There are trees `around` the house. |
| 長     | far from             | 離很遠          | The station is `far from` here.     |
|        | away from            | 遠離            | Stay `away from` the road.          |
|        | from ... to ...      | 從 ... 到 ...   | I walk `from` home `to` school.     |

{% assign beginner_place_preposition_options = "on|under|next to|beside|between|in front of|behind|near|across from|around|far from|away from|from|to" %}

{% include grammar/card-group-start.html %}

{% include grammar/pronoun-card.html title="Question 1" question="The book is ___ the table." prompt_translation="書在桌上。" translation="書在桌上。" options=beginner_place_preposition_options answer="on" analysis='[{"word":"on","label":"Prep","desc":"on 表示在表面上。"},{"word":"the table","label":"N","desc":"介系詞後面的名詞片語。"}]' %}
{% include grammar/pronoun-card.html title="Question 2" question="The cat is ___ the bed." prompt_translation="貓在床下。" translation="貓在床下。" options=beginner_place_preposition_options answer="under" analysis='[{"word":"under","label":"Prep","desc":"under 表示在下面。"},{"word":"the bed","label":"N","desc":"介系詞後面的名詞片語。"}]' %}
{% include grammar/pronoun-card.html title="Question 3" question="The chair is ___ the table." prompt_translation="椅子在桌子旁邊。" translation="椅子在桌子旁邊。" options=beginner_place_preposition_options answer="next to" correct_answers="next to|beside" answer_translations='{"next to":"椅子在桌子旁邊。","beside":"椅子在桌子旁邊。"}' analysis='[{"word":"next to / beside","label":"Prep","desc":"兩者都可以表示在旁邊。"},{"word":"the table","label":"N","desc":"介系詞後面的名詞片語。"},{"label":"Note","desc":"這題 next to 和 beside 都可以。"}]' %}
{% include grammar/pronoun-card.html title="Question 4" question="She sits ___ me." prompt_translation="她坐在我旁邊。" translation="她坐在我旁邊。" options=beginner_place_preposition_options answer="beside" correct_answers="next to|beside" answer_translations='{"next to":"她坐在我旁邊。","beside":"她坐在我旁邊。"}' analysis='[{"word":"beside / next to","label":"Prep","desc":"兩者都可以表示在旁邊。"},{"word":"me","label":"Obj","desc":"介系詞後面接受格 me。"},{"label":"Note","desc":"這題 beside 和 next to 都可以。"}]' %}
{% include grammar/pronoun-card.html title="Question 5" question="The park is ___ the school." prompt_translation="公園在學校附近。" translation="公園在學校附近。" options=beginner_place_preposition_options answer="near" analysis='[{"word":"near","label":"Prep","desc":"near 表示在附近。"},{"word":"the school","label":"N","desc":"地點名詞片語。"}]' %}
{% include grammar/pronoun-card.html title="Question 6" question="The bank is ___ the park." prompt_translation="銀行在公園對面。" translation="銀行在公園對面。" options=beginner_place_preposition_options answer="across from" analysis='[{"word":"across from","label":"Prep","desc":"across from 表示在對面。"},{"word":"the park","label":"N","desc":"地點名詞片語。"}]' %}
{% include grammar/pronoun-card.html title="Question 7" question="The dog is ___ the door." prompt_translation="狗在門後面。" translation="狗在門後面。" options=beginner_place_preposition_options answer="behind" analysis='[{"word":"behind","label":"Prep","desc":"behind 表示在後面。"},{"word":"the door","label":"N","desc":"介系詞後面的名詞片語。"}]' %}
{% include grammar/pronoun-card.html title="Question 8" question="The car is ___ the house." prompt_translation="車在房子前面。" translation="車在房子前面。" options=beginner_place_preposition_options answer="in front of" analysis='[{"word":"in front of","label":"Prep","desc":"in front of 表示在前面。"},{"word":"the house","label":"N","desc":"介系詞後面的名詞片語。"}]' %}
{% include grammar/pronoun-card.html title="Question 9" question="The cat is ___ the boxes." prompt_translation="貓在箱子之間。" translation="貓在箱子之間。" options=beginner_place_preposition_options answer="between" analysis='[{"word":"between","label":"Prep","desc":"between 表示在兩者或多者之間。"},{"word":"the boxes","label":"N","desc":"複數名詞。"}]' %}
{% include grammar/pronoun-card.html title="Question 10" question="There are trees ___ the house." prompt_translation="房子周圍有樹。" translation="房子周圍有樹。" options=beginner_place_preposition_options answer="around" analysis='[{"word":"around","label":"Prep","desc":"around 表示在周圍。"},{"word":"the house","label":"N","desc":"地點名詞片語。"}]' %}
{% include grammar/pronoun-card.html title="Question 11" question="The station is ___ here." prompt_translation="車站離這裡很遠。" translation="車站離這裡很遠。" options=beginner_place_preposition_options answer="far from" analysis='[{"word":"far from","label":"Prep","desc":"far from 表示離某處很遠。"},{"word":"here","label":"Place","desc":"地點副詞。"}]' %}
{% include grammar/pronoun-card.html title="Question 12" question="Stay ___ the road." prompt_translation="遠離馬路。" translation="遠離馬路。" options=beginner_place_preposition_options answer="away from" analysis='[{"word":"away from","label":"Prep","desc":"away from 表示遠離。"},{"word":"the road","label":"N","desc":"地點名詞片語。"}]' %}
{% include grammar/pronoun-card.html title="Question 13" question="I walk ___ home to school." prompt_translation="我從家走到學校。" translation="我從家走到學校。" options=beginner_place_preposition_options answer="from" analysis='[{"word":"from","label":"Prep","desc":"from 表示起點，常和 to 搭配。"},{"word":"home","label":"Place","desc":"起點。"},{"word":"to school","label":"Place","desc":"終點。"}]' %}
{% include grammar/pronoun-card.html title="Question 14" question="I walk from home ___ school." prompt_translation="我從家走到學校。" translation="我從家走到學校。" options=beginner_place_preposition_options answer="to" analysis='[{"word":"to","label":"Prep","desc":"to 表示方向或終點。"},{"word":"from home","label":"Place","desc":"起點。"},{"word":"school","label":"Place","desc":"終點。"}]' %}
{% include grammar/pronoun-card.html title="Question 15" question="The lamp is ___ the sofa." prompt_translation="燈在沙發旁邊。" translation="燈在沙發旁邊。" options=beginner_place_preposition_options answer="next to" correct_answers="next to|beside" answer_translations='{"next to":"燈在沙發旁邊。","beside":"燈在沙發旁邊。"}' analysis='[{"word":"next to / beside","label":"Prep","desc":"兩者都表示在旁邊。"},{"word":"the sofa","label":"N","desc":"介系詞後面的名詞片語。"},{"label":"Note","desc":"這題 next to 和 beside 都可以。"}]' %}
{% include grammar/pronoun-card.html title="Question 16" question="The shoes are ___ the chair." prompt_translation="鞋子在椅子下面。" translation="鞋子在椅子下面。" options=beginner_place_preposition_options answer="under" analysis='[{"word":"under","label":"Prep","desc":"under 表示在下面。"},{"word":"the chair","label":"N","desc":"介系詞後面的名詞片語。"}]' %}
{% include grammar/pronoun-card.html title="Question 17" question="The museum is ___ the hotel." prompt_translation="博物館在飯店對面。" translation="博物館在飯店對面。" options=beginner_place_preposition_options answer="across from" analysis='[{"word":"across from","label":"Prep","desc":"across from 表示在對面。"},{"word":"the hotel","label":"N","desc":"地點名詞片語。"}]' %}
{% include grammar/pronoun-card.html title="Question 18" question="My school is ___ my home." prompt_translation="我的學校在我家附近。" translation="我的學校在我家附近。" options=beginner_place_preposition_options answer="near" analysis='[{"word":"near","label":"Prep","desc":"near 表示在附近。"},{"word":"my home","label":"N","desc":"地點名詞片語。"}]' %}
{% include grammar/pronoun-card.html title="Question 19" question="The picture is ___ the wall." prompt_translation="圖片在牆上。" translation="圖片在牆上。" options=beginner_place_preposition_options answer="on" analysis='[{"word":"on","label":"Prep","desc":"on 可表示在表面上，像在牆上。"},{"word":"the wall","label":"N","desc":"介系詞後面的名詞片語。"}]' %}
{% include grammar/pronoun-card.html title="Question 20" question="The children play ___ the tree." prompt_translation="孩子們在樹的周圍玩。" translation="孩子們在樹的周圍玩。" options=beginner_place_preposition_options answer="around" analysis='[{"word":"around","label":"Prep","desc":"around 表示在周圍。"},{"word":"the tree","label":"N","desc":"介系詞後面的名詞片語。"}]' %}

{% include grammar/card-group-end.html %}

## 腳註

[^1]: 快速對照表：

    | 主格 | 受格 | 所有格 | 所有格代名詞 | 反身代名詞 |
    | ---- | ---- | ------ | ------------ | ---------- |
    | I    | me   | my     | mine         | myself     |
    | you  | you  | your   | yours        | yourself   |
    | he   | him  | his    | his          | himself    |
    | she  | her  | her    | hers         | herself    |
    | it   | it   | its    | its          | itself     |
    | we   | us   | our    | ours         | ourselves  |
    | you  | you  | your   | yours        | yourselves |
    | they | them | their  | theirs       | themselves |

    返回
