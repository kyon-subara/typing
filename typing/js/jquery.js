/ *！
 * jQuery JavaScriptライブラリv3.3.1
 * https://jquery.com/
 *
 * Sizzle.jsを含みます
 * https://sizzlejs.com/
 *
 * Copyright JS Foundationおよびその他の貢献者
 * MITライセンスでリリース
 * https://jquery.org/license
 *
 *日付：2018-01-20T17：24Z
 * /
（機能（グローバル、ファクトリー）{

	"厳密を使用する";

	if（typeof module === "object" && typeof module.exports === "object"）{

		//適切な `window`があるCommonJSおよびCommonJSのような環境の場合
		//存在する場合は、ファクトリを実行してjQueryを取得する
		// `document`を持つ` window`を持たない環境のために
		//（Node.jsなど）、ファクトリをmodule.exportsとして公開します。
		//これは本当の `ウィンドウ 'を作る必要性を強調します。
		//例：var jQuery = require（ "jquery"）（window）;
		//詳細についてはチケット＃14549を参照。
		module.exports = global.document？
			ファクトリ（グローバル、真）：
			関数（w）{
				if（！w.document）{
					新しいエラーをスローします（ "jQueryにはドキュメントのあるウィンドウが必要です"）。
				}
				返品先工場（w）;
			;
	その他{
		工場（グローバル）
	}

//ウィンドウがまだ定義されていない場合はこれを渡す
（typeof window！== "undefined"？window：this、function（window、noGlobal）{

// Edge <= 12  -  13+、Firefox <= 18  -  45+、IE 10  -  11、Safari 5.1  -  9+、iOS 6  -  9.1
//非厳密コード（ASP.NET 4.5など）が厳密モードにアクセスすると例外をスローする
// arguments.callee.caller（trac-13335）。しかしjQuery 3.0（2016）の時点では、厳密モードが一般的であるべきです。
//このような試みはすべてtryブロックで保護されています。
"厳密を使用する";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call（Object）;

var support = {};

var isFunction = function isFunction（obj）{

      //サポート：Chrome <= 57、Firefox <= 52
      //一部のブラウザでは、typeofはHTMLの<object>要素に対して "function"を返します。
      //（すなわち、 `typeof document.createElement（" object "）===" function "）。
      //任意のDOMノードを関数として分類したくありません。
      return typeof obj === "関数" && typeof obj.nodeType！== "number";
  ;


var isWindow = function isWindow（obj）{
		obj！= null && obj === obj.windowを返します。
	;




	var preservedScriptAttributes = {
		タイプ：true、
		src：本当、
		noModule：true
	;

	関数DOMEval（code、doc、node）{
		doc = doc || 資料;

		var i、
			script = doc.createElement（ "script"）;

		script.text = code;
		if（ノード）{
			for（i in preservedScriptAttributes）{
				if（node [i]）{
					script [i] = node [i];
				}
			}
		}
		doc.head.appendChild（スクリプト）.parentNode.removeChild（スクリプト）;
	}


関数toType（obj）{
	if（obj == null）{
		obj + ""を返します。
	}

	//サポート：Android <= 2.3のみ（機能的なRegExp）
	obj === "オブジェクト"を返す|| typeof obj === "関数"？
		class2type [toString.call（obj）] || "オブジェクト"：
		typeof obj;
}
/ *グローバルシンボル* /
//このグローバルを.eslintrc.jsonで定義すると、グローバルを使用する危険が生じます
//他の場所では保護されていませんが、このモジュールに対してのみglobalを定義するほうが安全なようです



var
	version = "3.3.1"、

	// jQueryのローカルコピーを定義します
	jQuery = function（selector、context）{

		// jQueryオブジェクトは実際には単にinitコンストラクタ 'enhanced'です。
		// jQueryが呼び出された場合はinitが必要です（含まれていない場合は単にエラーがスローされるようにします）
		新しいjQuery.fn.init（selector、context）を返します。
	、

	//サポート：Android <= 4.0のみ
	// BOMとNBSPをトリミングします。
	rtrim = / ^ [\ s \ uFEFF \ xA0] + | [\ s \ uFEFF \ xA0] + $ / g;

jQuery.fn = jQuery.prototype = {

	//現在使用されているjQueryのバージョン
	jquery：バージョン、

	コンストラクタ：jQuery、

	// jQueryオブジェクトのデフォルトの長さは0です
	長さ：0、

	toArray：function（）{
		slice.call（this）を返します。
	、

	//一致した要素セットのN番目の要素を取得します
	//マッチした要素セット全体をきれいな配列として取得する
	get：function（num）{

		//すべての要素をきれいな配列で返します
		if（num == null）{
			slice.call（this）を返します。
		}

		//セットから1要素だけを返します
		num <0を返しますか？this [num + this.length]：this [num];
	、

	//要素の配列を取り出してスタックにプッシュする
	//（新しくマッチした要素セットを返す）
	pushStack：関数（要素）{

		// jQueryにマッチした新しい要素セットを作成する
		var ret = jQuery.merge（this.constructor（）、elems）;

		//古いオブジェクトを（参照として）スタックに追加します
		ret.prevObject = this;

		//新しく形成された要素セットを返す
		retを返す。
	、

	//一致したセット内のすべての要素に対してコールバックを実行します。
	それぞれ：function（callback）{
		jQuery.each（this、callback）を返します。
	、

	map：function（callback）{
		this.pushStack（jQuery.map（this、function（elem、i）{を返す
			callback.call（elem、i、elem）を返します。
		;））;
	、

	スライス：function（）{
		this.pushStack（slice.apply（this、arguments））を返します。
	、

	最初に：function（）{
		this.eq（0）を返します。
	、

	last：function（）{
		this.eq（-1）を返します。
	、

	eq：function（i）{
		var len = this.length、
			ｊ ＝ ＋ ｉ ＋（ｉ ＜０≦ｌｅｎ：０）。
		this.pushStack（j> = 0 && j <len？[this [j]]：[]）;を返します。
	、

	end：function（）{
		this.prevObjectを返します。this.constructor（）;
	、

	// 内部使用のみ。
	// jQueryメソッドではなく、Arrayのメソッドのように動作します。
	プッシュ：プッシュ、
	並べ替え：arr.sort、
	スプライス：arr.splice
;

jQuery.extend = jQuery.fn.extend = function（）{
	var options、name、src、copy、copyIsArray、clone、
		target = arguments [0] || {}、
		i = 1、
		length = arguments.length、
		deep = false。

	//ディープコピーの状況に対処する
	if（typeof target === "ブール値"）{
		ディープ=ターゲット。

		//ブール値とターゲットをスキップします
		target = arguments [i] || {};
		i ++;
	}

	//ターゲットが文字列か何かである場合の扱い（ディープコピーで可能）
	if（typeof target！== "オブジェクト" &&！isFunction（target））{
		target = {};
	}

	//引数が1つしか渡されない場合はjQuery自体を拡張する
	if（i ===長さ）{
		ターゲット=これ。
		私 - ;
	}

	for（; i <length; i ++）{

		// null以外/未定義の値のみを扱う
		if（（options = arguments [i]）！= null）{

			//ベースオブジェクトを拡張する
			for（オプション名）{
				src = target [name];
				copy = options [name];

				//終わりのないループを防ぐ
				if（ターゲット===コピー）{
					持続する;
				}

				//プレーンなオブジェクトや配列をマージしている場合は再帰します
				if（deep && copy &&（jQuery.isPlainObject（copy）||
					（copyIsArray = Array.isArray（copy））））{

					if（copyIsArray）{
						copyIsArray = false;
						clone = src && Array.isArray（src）？src：[];

					その他{
						clone = src＆jQuery.isPlainObject（src）？src：{};
					}

					//元のオブジェクトを移動しないで複製する
					target [name] = jQuery.extend（deep、clone、copy）;

				//未定義の値を取り込まない
				そうでなければ（copy！==未定義）{
					target [name] =コピー;
				}
			}
		}
	}

	//変更されたオブジェクトを返します
	ターゲットを返します。
;

jQuery.extend（{

	//ページ上のjQueryのコピーごとに一意
	expando： "jQuery" +（バージョン+ Math.random（））.replace（/ \ D / g、 ""）、

	// readyモジュールなしでjQueryは作動可能であると仮定します
	isReady：そう、

	エラー：関数（msg）{
		新しいエラー（msg）を投げます。
	、

	noop：function（）{}、

	isPlainObject：function（obj）{
		var proto、Ctor。

		//明らかなネガティブを検出
		//ホストオブジェクトをキャッチするためにjQuery.typeの代わりにtoStringを使用する
		if（！obj || toString.call（obj）！== "[オブジェクトオブジェクト]"）{
			falseを返します。
		}

		proto = getProto（obj）;

		//プロトタイプのないオブジェクト（例： `Object.create（null）`）は普通のものです
		if（！proto）{
			trueを返します。
		}

		//プロトタイプを持つオブジェクトは、グローバルなObject関数によって構築されたものであれば、普通のものです
		Ctor = hasOwn.call（proto、 "constructor"）&& proto.constructor;
		return typeof Ctor === "関数" && fnToString.call（Ctor）=== ObjectFunctionString;
	、

	isEmptyObject：function（obj）{

		/ * eslint-disable no-unused-vars * /
		// https://github.com/eslint/eslint/issues/6125を参照してください。
		var name;

		for（objの名前）{
			falseを返します。
		}
		trueを返します。
	、

	//グローバルコンテキストでスクリプトを評価します
	globalEval：関数（コード）{
		DOMEval（コード）
	、

	それぞれ：function（obj、callback）{
		可変長、ｉ ＝ ０。

		if（isArrayLike（obj））{
			length = obj.length;
			for（; i <length; i ++）{
				if（callback.call（obj [i]、i、obj [i]）=== false）{
					ブレーク;
				}
			}
		その他{
			for（i in obj）{
				if（callback.call（obj [i]、i、obj [i]）=== false）{
					ブレーク;
				}
			}
		}

		objを返します。
	、

	//サポート：Android <= 4.0のみ
	トリム：関数（テキスト）{
		テキストを返す== null？
			""：
			（text + ""）.replace（rtrim、 ""）;
	、

	//結果は内部使用のみ
	makeArray：function（arr、results）{
		var ret = results || [];

		if（arr！= null）{
			if（isArrayLike（Object（arr）））{
				jQuery.merge（ret、
					typeof arr === "文字列"？
					[arr]：arr
				;
			その他{
				push.call（ret、arr）;
			}
		}

		retを返す。
	、

	inArray：function（elem、arr、i）{
		arr == nullを返しますか？-1：indexOf.call（arr、elem、i）;
	、

	//サポート：Android <= 4.0のみ、PhantomJS 1のみ
	// push.apply（_、arraylike）は古代のWebKitでスローされる
	マージ：関数（1番目、2番目）{
		var len = + second.length、
			j = 0、
			i = first.length;

		for（; j <len; j ++）{
			first [i ++] = second [j];
		}

		first.length = i;

		最初に戻る
	、

	grep：function（elems、callback、invert）{
		var callbackInverse、
			matches = []、
			i = 0、
			length = elems.length、
			callbackExpect =！invert。

		//アイテムを保存するだけで配列を調べます
		//バリデーター関数を渡す
		for（; i <length; i ++）{
			callbackInverse =！callback（elems [i]、i）;
			if（callbackInverse！== callbackExpect）{
				matches.push（elems [i]）;
			}
		}

		一致を返します。
	、

	// argは内部使用専用です
	map：function（elems、callback、arg）{
		変数の長さ、値、
			i = 0、
			ret = [];

		//各項目を新しい値に変換しながら配列をたどります
		if（isArrayLike（elems））{
			length = elems.length;
			for（; i <length; i ++）{
				値= callback（elems [i]、i、arg）;

				if（value！= null）{
					ret.push（value）;
				}
			}

		//オブジェクトのすべてのキーを調べます
		その他{
			for（私はelems）{
				値= callback（elems [i]、i、arg）;

				if（value！= null）{
					ret.push（value）;
				}
			}
		}

		//入れ子になった配列を平坦化する
		concat.apply（[]、ret）を返します。
	、

	//オブジェクトのグローバルGUIDカウンタ
	guid：1、

	// jQuery.supportはCoreでは使用されていませんが、他のプロジェクトには添付されています。
	//存在する必要があるので、それに対するプロパティ。
	サポート：サポート
;））;

if（typeof Symbol === "function"）{
	jQuery.fn [Symbol.iterator] = arr [Symbol.iterator];
}

// class2typeマップを作成します
jQuery.each（ "ブール数文字列関数配列日付正規表現オブジェクトエラーシンボル" .split（ ""）、
関数（i、名前）{
	class2type ["[object" + name + "]"] = name.toLowerCase（）;
;））;

関数isArrayLike（obj）{

	//サポート：本物のiOS 8.2のみ（シミュレータでは再現できません）
	// JITエラーを防ぐために使用される `in`チェック（gh-2145）
	//偽陰性のため、hasOwnはここでは使用されません
	// IEのノードリスト長について
	var length = !! obj && obj.lengthのobj && "length"、
		type = toType（obj）;

	if（isFunction（obj）|| isWindow（obj））{
		falseを返します。
	}

	戻り値の型=== "array" || length === 0 ||
		typeof length === "number" && length> 0 &&（length  -  1）in obj;
}
var Sizzle =
/ *！
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundationおよびその他の貢献者
 * MITライセンスでリリース
 * http://jquery.org/license
 *
 *日付：2016-08-08
 * /
（機能（ウィンドウ）{

var i、
	サポート、
	Expr、
	getText、
	isXML、
	トークナイズ
	コンパイル、
	を選択
	outermostContext、
	sortInput、
	hasDuplicate、

	//ローカルドキュメント変数
	setDocument、
	資料、
	docElem、
	documentIsHTML、
	rbuggyQSA、
	rbuggyMatches、
	一致する
	含んでいる、

	//インスタンス固有のデータ
	expando = "シズル" + 1 *新しい日付（）、
	preferredDoc = window.document、
	dirruns = 0、
	完了= 0、
	classCache = createCache（）、
	tokenCache = createCache（）、
	compilerCache = createCache（）、
	sortOrder = function（a、b）{
		if（a === b）{
			hasDuplicate = true;
		}
		0を返します。
	、

	//インスタンスメソッド
	hasOwn =（{}）。hasOwnProperty、
	arr = []、
	pop = arr.pop、
	push_native = arr.push、
	push = arr.push、
	slice = arr.slice、
	//ネイティブより速いので削除されたindexOfを使う
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function（list、elem）{
		var i = 0、
			len = list.length;
		for（; i <len; i ++）{
			if（list [i] === elem）{
				iを返します。
			}
		}
		-1を返します。
	、

	ブール値= "チェック|選択|非同期|オートフォーカス|自動再生|コントロール|延期|無効|非表示| ismap |ループ|複数|開く|読み取り専用|必須|範囲"、

	//正規表現

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\ x20 \\ t \\ r \\ n \\ f]"、、

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "（？：\\\\。| [\\ w-] | [^ \ 0  -  \\ xa0]）+"、

	//属性セレクタ：http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\ [" +空白+ "*（" +識別子+ "）（?:" +空白+
		//演算子（キャプチャ2）
		"*（[* ^ $ |！?]？=）" +空白文字+
		// "属性値はCSS識別子[キャプチャ5]または文字列[キャプチャ3またはキャプチャ4]でなければなりません"
		"*（？： '（（？：\\\\。| [^ \\\\']）*） '| \"（（（：：\\\\。| [^ \\\\\ "]） ）*）\ "|（" + identifier + "）））））+空白+
		"* \\]"、

	pseudos = ":(" + identifier + "）（？：\\（（" +
		// preFilterでトークン化を必要とするセレクタの数を減らすために、引数を優先します。
		// 1.見積もり（キャプチャ3、キャプチャ4またはキャプチャ5）
		"（ '（（？：\\\\。| [^ \\\\']）*） '| \"（（（：：\\\\。| [^ \\\\\ "]）*） \ "）|" +
		// 2.単純（キャプチャ6）
		"（（？：\\\\。| [^ \\\\（）[\\]] |" + attributes + "）*）|" +
		// 3.それ以外（キャプチャ2）
		"。*" +
		"）\\）|）"、

	//先頭の空白文字とエスケープされていない空白文字、後者の前にある空白以外の文字をキャプチャする
	rwhitespace = new RegExp（空白文字+ "+"、 "g"）、
	rtrim = new RegExp（ "^" +空白文字+ "+ |（（？：^ | [^ \\\\]）（？：\\\\。）*）" +空白文字+ "+ $"、 "g "）、

	rcomma = new RegExp（ "^" +空白+ "*、" +空白+ "*"）、
	rcombinators = new RegExp（ "^" +空白+ "*（[> +?] |" +空白+ "）" +空白+ "*"）、

	rattributeQuotes = new RegExp（ "=" +空白+ "*（[^ \\] '\"] *？） "+空白+" * \\] "、" g "）、

	rpseudo = new RegExp（pseudos）、
	ridentifier = new RegExp（ "^" +識別子+ "$"）、

	matchExpr = {
		"ID"：新しいRegExp（ "^＃（" + identifier + "）"）、
		"クラス"：new RegExp（ "^ \\。（" + identifier + "）"）、
		"TAG"：新しいRegExp（ "^（" + identifier + "| [*]）"）、
		"ATTR"：新しいRegExp（ "^" +属性）、
		"PSEUDO"：新しいRegExp（ "^" + pseudos）、
		"CHILD"：新しいRegExp（ "^ :(のみ|最初|最後| n番目|最後 - 最後） - （子| of-type）（？：\\（" +空白+
			"*（even | odd |（（[+  - ] |）（\\ d *）n |）" +空白+ "*（？：（[+  - ] |）"）+空白+
			"*（\\ d +）|）" "+空白+" * \\）|） "、" i "）、
		"ブール"：新しい正規表現（ "^（?:" +ブール値+ "）$"、 "i"）、
		// .is（）を実装するライブラリで使用する
		// `select`のPOSマッチングにこれを使用します
		"needsContext"：new RegExp（ "^" +空白+ "* [> +?] |：（偶数|奇数| eq | gt | lt | nth |最初|最後）（？：\\（" +
			空白+ "*（（？： -  \\ d）？\\ d *）" +空白+ "* \\）|）（？= [^  - ] | $）"、 "i"）
	、

	rinputs = / ^（?: input | select | textarea | button）$ / i、
	rheader = / ^ h \ d $ / i、

	rnative = / ^ [^ {] + \ {\ s * \ [native \ w /、

	//簡単に解析/検索可能なIDまたはTAGまたはCLASSセレクタ
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/、

	rsibling = / [+?] /、

	// CSSエスケープ
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp（ "\\\\（[\\ da-f] {1,6}" +空白+ "？|（" +空白+ "）|。）"、 "ig"）、
	funescape = function（_、escaped、escapedWhitespace）{
		var high = "0x" +エスケープ -  0x10000。
		// NaNは非コードポイントを意味します
		//サポート：Firefox <24
		//回避策+ "0x"の誤った数値解釈
		==高い|| escapedWhitespace？
			エスケープ：
			高い<0？
				// BMPコードポイント
				String.fromCharCode（最大+ 0x10000）：
				// Supplemental Plane codepoint（サロゲートペア）
				String.fromCharCode（高>> 10 | 0xD800、高＆0x3FF | 0xDC00）;
	、

	// CSS文字列/識別子のシリアル化
	// https://drafts.c??sswg.org/cssom/#common-serializing-idioms
	rcssescape = /（[\ 0- \ x1f \ x7f] | ^  - ？\ d）| ^  -  $ | [^ \ 0- \ x1f \ x7f- \ uFFFF \ w  - ] / g、
	fcssescape = function（ch、asCodePoint）{
		if（asCodePoint）{

			// U + 0000 NULLはU + FFFDの置換文字になります
			if（ch === "\ 0"）{
				"\ uFFFD"を返します。
			}

			//制御文字と（位置に応じて）番号はコードポイントとしてエスケープされます
			ch.slice（0、-1）+ "\\" + ch.charCodeAt（ch.length  -  1）.toString（16）+ "";
		}

		//他の潜在的に特殊なASCII文字はバックスラッシュでエスケープされます
		"\\" + chを返します。
	、

	// iframeに使用されます
	// setDocument（）を参照してください。
	//関数ラッパーを削除すると "Permission Denied"が発生する
	// IEのエラー
	unloadHandler = function（）{
		setDocument（）;
	、

	disabledAncestor = addCombinator（
		関数（elem）{
			elem.disabled === true &&（elemの場合は "form"、elemの場合は "label"）を返します。
		、
		{dir： "parentNode"、次の部分： "legend"}
	;

// push.apply（_、NodeList）に最適化します
試してください{
	push.apply（
		（arr = slice.call（preferredDoc.childNodes））、
		preferredDoc.childNodes
	;
	//サポート：Android <4.0
	//静かに失敗しているpush.applyを検出する
	arr [preferredDoc.childNodes.length] .nodeType;
catch（e）{
	push = {apply：arr.length？

		//可能ならばスライスを利用する
		関数（ターゲット、els）{
			push_native.apply（target、slice.call（els））;
		：

		//サポート：IE <9
		//それ以外の場合は直接追加
		関数（ターゲット、els）{
			var j = target.length、
				ｉ ＝ ０。
			// NodeList.lengthを信頼できません
			while（（target [j ++] = els [i ++]））{}
			target.length = j  -  1;
		}
	;
}

function Sizzle（セレクタ、コンテキスト、結果、シード）{
	var m、i、elem、nid、一致、グループ、newSelector、
		newContext = context && context.ownerDocument、

		// contextはデフォルトでdocumentになるので、// nodeTypeのデフォルトは9になります。
		nodeType = context？context.nodeType：9;

	results = results || [];

	//無効なセレクタまたはコンテキストを持つ呼び出しから早く戻ります
	if（typeof selector！== "string" ||！selector ||
		nodeType！== 1 && nodeType！== 9 && nodeType！== 11）{

		結果を返します。
	}

	// HTMLドキュメント内で（フィルタではなく）検索操作をショートカットしてみます
	if（！seed）{

		if（（context？context.ownerDocument || context：preferredDoc）！== document）{
			setDocument（context）;
		}
		context = context || 資料;

		if（documentIsHTML）{

			//セレクタが非常に単純な場合は、「get * By *」DOMメソッドを使用してみてください
			//（メソッドが存在しないDocumentFragmentコンテキストを除く）
			if（nodeType！== 11 &&（match = rquickExpr.exec（selector）））{

				// IDセレクタ
				if（（m = match [1]））{

					//ドキュメントコンテキスト
					if（nodeType === 9）{
						if（（elem = context.getElementById（m）））{

							//サポート：IE、Opera、Webkit
							// TODO：バージョンを特定する
							// getElementByIdはIDではなく名前で要素を照合できます
							if（elem.id === m）{
								results.push（elem）;
								結果を返します。
							}
						その他{
							結果を返します。
						}

					//要素コンテキスト
					その他{

						//サポート：IE、Opera、Webkit
						// TODO：バージョンを特定する
						// getElementByIdはIDではなく名前で要素を照合できます
						if（newContext &&（elem = newContext.getElementById（m））&&
							（context、elem）&&を含む
							elem.id === m）{

							results.push（elem）;
							結果を返します。
						}
					}

				//タイプセレクタ
				そうでなければ（match [2]）{
					push.apply（results、context.getElementsByTagName（selector））;
					結果を返します。

				//クラスセレクタ
				そうでなければ（（m = match [3]）&& support.getElementsByClassName &&
					context.getElementsByClassName）{

					push.apply（results、context.getElementsByClassName（m））;
					結果を返します。
				}
			}

			// querySelectorAllを利用する
			if（support.qsa &&
				！compilerCache [selector + ""] &&
				（！rbuggyQSA ||！rbuggyQSA.test（セレクタ）））{

				if（nodeType！== 1）{
					newContext = context;
					newSelector = selector;

				// qSAは要素コンテキストの外側を見ますが、これは望んでいないことです。
				//この回避策をとってくれたAndrew Dupontに感謝
				//サポート：IE <= 8
				//オブジェクト要素を除外
				そうでなければ（context.nodeName.toLowerCase（）！== "オブジェクト"）{

					//コンテキストIDを取得し、必要に応じて最初に設定する
					if（（nid = context.getAttribute（ "id"）））{
						nid = nid.replace（rcssescape、fcssescape）;
					その他{
						context.setAttribute（ "id"、（nid = expando））;
					}

					//リスト内のすべてのセレクタにプレフィックスを付けます
					groups = tokenize（selector）;
					i = groups.length;
					while（i--）{
						groups [i] = "＃" + nid + "" + toSelector（groups [i]）;
					}
					newSelector = groups.join（ "、"）;

					//兄弟セレクタのコンテキストを拡張する
					newContext = rsibling.test（selector）&& testContext（context.parentNode）||
						コンテキスト;
				}

				if（newSelector）{
					試してください{
						push.apply（結果、
							newContext.querySelectorAll（newSelector）
						;
						結果を返します。
					catch（qsaError）{
					} 最後に {
						if（nid === expando）{
							context.removeAttribute（ "id"）;
						}
					}
				}
			}
		}
	}

	// 他のすべて
	select（selector.replace（rtrim、 "$ 1"）、コンテキスト、結果、シード）を返します。
}

/ **
 *限られたサイズのKey-Valueキャッシュを作成する
 * @returns {function（string、object）}オブジェクトデータをそれ自身に格納した後に返します。
 *プロパティ名に（スペースが後に続く）文字列と（キャッシュがExpr.cacheLengthよりも大きい場合）
 *最も古いエントリを削除する
 * /
関数createCache（）{
	var keys = [];

	関数キャッシュ（キー、値）{
		//ネイティブプロトタイププロパティとの衝突を避けるために（key + ""）を使う（Issue＃157を参照）
		if（keys.push（key + ""）> Expr.cacheLength）{
			//最新のエントリーのみを保存する
			キャッシュの削除[keys.shift（）];
		}
		return（cache [key + ""] = value）;
	}
	キャッシュを返します。
}

/ **
 * Sizzleによる特別な使用のために機能をマークする
 * @param {Function} fnマークを付ける関数
 * /
関数markFunction（fn）{
	fn [expando] = true;
	fnを返します。
}

/ **
 *要素を使ったテストのサポート
 * @param {Function} fn作成した要素を渡して、ブール値の結果を返します
 * /
関数アサート（fn）{
	var el = document.createElement（ "fieldset"）;

	試してください{
		戻る!! fn（el）;
	catch（e）{
		falseを返します。
	} 最後に {
		//デフォルトで親から削除します
		if（el.parentNode）{
			el.parentNode.removeChild（el）;
		}
		// IEでメモリを解放する
		el = null。
	}
}

/ **
 *指定されたすべての属性に対して同じハンドラを追加します。
 * @param {String} attrs属性をパイプで区切ったリスト
 * @param {Function}ハンドラ適用されるメソッド
 * /
関数addHandle（attrs、handler）{
	var arr = attrs.split（ "|"）、
		i = arr.length;

	while（i--）{
		Expr.attrHandle [arr [i]] = handler;
	}
}

/ **
 *兄弟2人の順番を確認する
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} aがbの前にある場合は0未満、aがbの後にある場合は0より大きい値を返します。
 * /
関数siblingCheck（a、b）{
	var cur = b && a、
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex  -  b.sourceIndex;

	//両方のノードで利用可能な場合はIE sourceIndexを使用
	if（diff）{
		diffを返します。
	}

	// bがaに続くかどうかを確認
	if（cur）{
		while（（cur = cur.nextSibling））{
			if（cur === b）{
				-1を返します。
			}
		}
	}

	返す？1：-1
}

/ **
 *入力型の擬似で使う関数を返します
 * @param {String}型
 * /
関数createInputPseudo（type）{
	戻り関数（elem）{
		var name = elem.nodeName.toLowerCase（）;
		return name === "input" && elem.type === type;
	;
}

/ **
 *ボタンの擬似で使う関数を返します
 * @param {String}型
 * /
関数createButtonPseudo（type）{
	戻り関数（elem）{
		var name = elem.nodeName.toLowerCase（）;
		return（name === "input" || name === "button"）&& elem.type === type;
	;
}

/ **
 *：enabled /：disabledに対して擬似で使う関数を返します
 * @param {Boolean} disabled：trueの場合はtrueです。falseの場合：enabled
 * /
function createDisabledPseudo（無効）{

	//既知：無効誤検知：fieldset [無効]>凡例：n型（n + 2）：無効にする
	戻り関数（elem）{

		//特定の要素のみが：enabledまたは：disabledに一致できます
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if（ "form" in elem）{

			//関連する無効でない要素の継承された無効をチェックします
			// *無効なフィールドセット内のフォーム関連要素を一覧表示する
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// *無効化されたoptgroup内のoption要素
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			//このような要素はすべて "form"プロパティを持ちます。
			if（elem.parentNode && elem.disabled === false）{

				// option要素は、存在する場合は親optgroupに依存します
				if（ "label" in elem）{
					if（elem.parentNodeの "label"）{
						elem.parentNode.disabledを返します===無効にします。
					その他{
						elem.disabledを返します===無効です。
					}
				}

				//サポート：IE 6  -  11
				//無効なフィールドセットの先祖を確認するには、isDisabledショートカットプロパティを使用します。
				elem.isDisabledを返します===無効||

					// isDisabledがない場合は、手動で確認する
					/ * jshint -W018 * /
					elem.isDisabled！==！無効&&
						disabledAncestor（elem）===無効です。
			}

			elem.disabledを返します===無効です。

		// disabledプロパティを信頼する前に、無効にできない要素を見つけ出してみてください。
		//一部の犠牲者は私たちのネット（ラベル、凡例、メニュー、トラック）に巻き込まれますが、そうではありません
		//それらにも存在し、もちろんブール値を持つこともできます。
		そうでなければ（elemの "label"）{
			elem.disabledを返します===無効です。
		}

		//残りの要素は：enabledでも：disabledでもありません
		falseを返します。
	;
}

/ **
 *ポジショナルに擬似で使用する関数を返します
 * @param {関数} fn
 * /
関数createPositionalPseudo（fn）{
	return markFunction（関数（引数）{
		引数= +引数。
		return markFunction（function（seed、matches）{
			var j、
				matchIndexes = fn（[]、seed.length、引数）、
				i = matchIndexes.length;

			//指定されたインデックスにある要素を照合します
			while（i--）{
				if（seed [（j = matchIndexes [i]）]）{
					seed [j] =！（matches [j] = seed [j]）;
				}
			}
		;））;
	;））;
}

/ **
 * Sizzleコンテキストとしての妥当性についてノードをチェックします
 * @param {Element | Object =}コンテキスト
 * @returns {Element | Object | Boolean}許容できる場合は入力ノード、そうでない場合は偽の値
 * /
関数testContext（コンテキスト）{
	戻りコンテキスト&& typeof context.getElementsByTagName！== "未定義" &&コンテキスト;
}

//便宜上サポート変数を公開する
support = Sizzle.support = {};

/ **
 * XMLノードを検出
 * @param {Element | Object} elem要素または文書
 * @returns {Boolean}がHTML以外のXMLノードであれば真となります。
 * /
isXML = Sizzle.isXML = function（elem）{
	// documentElementはまだ存在しない場合について検証されます
	//（IEにiframeを読み込むなど - ＃4833）
	var documentElement = elem &&（elem.ownerDocument || elem）.documentElement;
	documentElementを返しますか？documentElement.nodeName！== "HTML"：false;
;

/ **
 *現在の文書に基づいて文書関連の変数を一度設定します。
 * @param {Element | Object} [doc]文書を設定するために使用する要素または文書オブジェクト
 * @returns {Object}現在の文書を返します
 * /
setDocument = Sizzle.setDocument = function（node）{
	var hasCompare、subWindow、
		doc = node？node.ownerDocument || ノード：preferredDoc;

	//ドキュメントが無効であるか既に選択されている場合は早期に戻る
	if（doc === document || doc.nodeType！== 9 ||！doc.documentElement）{
		ドキュメントを返します。
	}

	//グローバル変数を更新する
	document = doc;
	docElem = document.documentElement;
	documentIsHTML =！isXML（document）;

	//サポート：IE 9-11、Edge
	//アンロード後にiframeドキュメントにアクセスすると「パーミッションが拒否されました」というエラーがスローされる（jQuery＃13936）
	if（preferredDoc！== document &&
		（subWindow = document.defaultView）&& subWindow.top！== subWindow）{

		//サポート：IE 11、Edge
		if（subWindow.addEventListener）{
			subWindow.addEventListener（ "unload"、unloadHandler、false）;

		//サポート：IE 9  -  10のみ
		そうでなければ（subWindow.attachEvent）{
			subWindow.attachEvent（ "onunload"、unloadHandler）;
		}
	}

	/ *属性
	-------------------------------------------------- -------------------- * /

	//サポート：IE <8
	// getAttributeが本当にプロパティではなく属性を返すことを確認する
	//（IE8のブール値を除く）
	support.attributes = assert（関数（el）{
		el.className = "i";
		return！el.getAttribute（ "className"）;
	;））;

	/ * getElement（s）*
	-------------------------------------------------- -------------------- * /

	// getElementsByTagName（ "*"）が要素のみを返すかどうかを確認する
	support.getElementsByTagName = assert（関数（el）{
		el.appendChild（document.createComment（ ""））;
		return！el.getElementsByTagName（ "*"）。length;
	;））;

	//サポート：IE <9
	support.getElementsByClassName = rnative.test（document.getElementsByClassName）;

	//サポート：IE <10
	// getElementByIdが名前で要素を返すかどうかを確認
	//壊れたgetElementByIdメソッドはプログラムで設定された名前を拾いません
	//ラウンドアバウトgetElementsByNameテストを使用する
	support.getById = assert（関数（el）{
		docElem.appendChild（el）.id = expando;
		return！document.getElementsByName || ！document.getElementsByName（expando）.length;
	;））;

	// IDフィルタして検索
	if（support.getById）{
		Expr.filter ["ID"] = function（id）{
			var attrId = id.replace（runescape、funescape）;
			戻り関数（elem）{
				elem.getAttribute（ "id"）=== attrIdを返します。
			;
		;
		Expr.find ["ID"] = function（id、context）{
			if（typeof context.getElementById！== "未定義" && documentIsHTML）{
				var elem = context.getElementById（id）;
				elemを返す？[elem]：[]；
			}
		;
	その他{
		Expr.filter ["ID"] = function（id）{
			var attrId = id.replace（runescape、funescape）;
			戻り関数（elem）{
				var node = typeof elem.getAttributeNode！== "未定義" &&
					elem.getAttributeNode（ "id"）;
				ノード&& node.value === attrIdを返します。
			;
		;

		//サポート：IE 6  -  7のみ
		// getElementByIdは検索ショートカットとして信頼できない
		Expr.find ["ID"] = function（id、context）{
			if（typeof context.getElementById！== "未定義" && documentIsHTML）{
				varノード、私、elems、
					elem = context.getElementById（id）;

				if（elem）{

					// id属性を確認します
					node = elem.getAttributeNode（ "id"）;
					if（node && node.value === id）{
						return [elem];
					}

					// getElementsByNameにフォールバックする
					elems = context.getElementsByName（id）;
					ｉ ＝ ０。
					while（（elem = elems [i ++]））{
						node = elem.getAttributeNode（ "id"）;
						if（node && node.value === id）{
							return [elem];
						}
					}
				}

				return [];
			}
		;
	}

	//タグ
	Expr.find ["TAG"] = support.getElementsByTagName？
		機能（タグ、コンテキスト）{
			if（typeof context.getElementsByTagName！== "未定義"）{
				context.getElementsByTagName（tag）を返します。

			// DocumentFragmentノードにはgEBTNがありません
			そうでなければ（support.qsa）{
				context.querySelectorAll（tag）を返します。
			}
		：

		機能（タグ、コンテキスト）{
			var elem、
				tmp = []、
				i = 0、
				//幸いなことに、DocumentFragmentノードにも（壊れた）gEBTNが表示されます。
				results = context.getElementsByTagName（tag）;

			//考えられるコメントを除外します
			if（tag === "*"）{
				while（（elem = results [i ++]））{
					if（elem.nodeType === 1）{
						tmp.push（elem）;
					}
				}

				tmpを返します。
			}
			結果を返します。
		;

	//クラス
	Expr.find ["CLASS"] = support.getElementsByClassName && function（className、context）{
		if（typeof context.getElementsByClassName！== "未定義" && documentIsHTML）{
			context.getElementsByClassName（className）を返します。
		}
	;

	/ * QSA / matchesSelector
	-------------------------------------------------- -------------------- * /

	// QSAとmatchesSelectorのサポート

	// matchesSelector（：active）はtrueのときfalseを報告する（IE9 / Opera 11.5）
	rbuggyMatches = [];

	// trueの場合、// qSa（：focus）はfalseを報告する（Chrome 21）
	// IE8 / 9のエラーのため、これを許可しています
	// iframe上で `document.activeElement`がアクセスされるたびに
	// IEのエラーを回避するために、focusは常にQSAを通過します。
	// https://bugs.jquery.com/ticket/13378を参照してください。
	rbuggyQSA = [];

	if（（support.qsa = rnative.test（document.querySelectorAll））））{
		// QSAの正規表現を作成する
		// Diego Periniから採用された正規表現戦略
		assert（機能（el）{
			//選択は意図的に空の文字列に設定されています
			//これは明示的にではないというIEの扱いをテストするためのものです
			//ブール値のcontent属性を設定します
			//その存在は十分であるはずなので
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild（el）.innerHTML = "<a id='" + expando + "'> </a>" +
				"<select id = '" + expando + " -  \ r \\' msallowcapture = ''>" +
				"<option selected = ''> </option> </select>";

			//サポート：IE8、Opera 11-12.16
			//空の文字列が^ =、$ =、または* =の後に続く場合は、何も選択しないでください
			// test属性はOperaでは不明である必要がありますが、WinRTでは "安全"です。
			// https://msdn.microsoft.com/ja-jp/library/ie/hh465388.aspx#attribute_section
			if（el.querySelectorAll（ "[msallowcapture ^ = '']"）。length）{
				rbuggyQSA.push（ "[* ^ $] =" +空白+ "*（?: '' | \" \ "）"）;
			}

			//サポート：IE8
			//ブール属性と "value"は正しく扱われません
			if（！el.querySelectorAll（ "[selected]"）。length）{
				rbuggyQSA.push（ "\\ [" +空白文字+ "*（?: value |" + booleans + "）"）;
			}

			//サポート：Chrome <29、Android <4.4、Safari <7.0+、iOS <7.0+、PhantomJS <1.9.8+
			if（！el.querySelectorAll（ "[id?=" + expando + " - ]"）.length）{
				rbuggyQSA.push（ "?="）;
			}

			// Webkit / Opera  - ：チェックすると選択したオプション要素が返される
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8はここでエラーを投げ、後のテストを見ることはないでしょう
			if（！el.querySelectorAll（ "：checked"）。length）{
				rbuggyQSA.push（ "：checked"）;
			}

			//サポート：Safari 8以降、iOS 8以降
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			//ページ内の「selector＃id sibling-combinator selector」が失敗する
			if（！el.querySelectorAll（ "a＃" + expando + "+ *"）.length）{
				rbuggyQSA.push（ "。＃。+ [+?]"）;
			}
		;））;

		assert（機能（el）{
			el.innerHTML = "<a href='' disabled='disabled'> </a>" +
				"<select disabled = 'disabled'> <option /> </select>";

			//サポート：Windows 8ネイティブアプリ
			// typeおよびname属性は.innerHTMLの割り当て中に制限されます
			var input = document.createElement（ "input"）;
			input.setAttribute（ "type"、 "hidden"）;
			el.appendChild（入力）.setAttribute（ "name"、 "D"）;

			//サポート：IE8
			// name属性の大文字と小文字を区別する
			if（el.querySelectorAll（ "[name = d]"）。length）{
				rbuggyQSA.push（ "name" +空白文字 "" * [* ^ $ |！?]？= "）;
			}

			// FF 3.5  - ：enabled /：disabledとhidden要素（hidden要素はまだ有効です）
			// IE8はここでエラーを投げ、後のテストを見ることはないでしょう
			if（el.querySelectorAll（ "：enabled"）。length！== 2）{
				rbuggyQSA.push（ "：enabled"、 "：disabled"）;
			}

			//サポート：IE9-11 +
			// IE's：無効セレクタは無効フィールドセットの子を拾いません
			docElem.appendChild（el）.disabled = true;
			if（el.querySelectorAll（ "：disabled"）。length！== 2）{
				rbuggyQSA.push（ "：enabled"、 "：disabled"）;
			}

			// Opera 10-11はカンマ後の無効な擬似をスローしません
			el.querySelectorAll（ "* ,: x"）;
			rbuggyQSA.push（ "、。*："）;
		;））;
	}

	if（（support.matchesSelector = rnative.test（（matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector））））{

		assert（機能（el）{
			// matchesSelectorを実行できるかどうかを確認します
			//切断されたノード上（IE 9）
			support.disconnectedMatch = matches.call（el、 "*"）;

			//これは例外で失敗します
			// Geckoはエラーにならず、代わりにfalseを返します
			matches.call（el、 "[s！= '']：x"）;
			rbuggyMatches.push（ "！="、pseudos）;
		;））;
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp（rbuggyQSA.join（ "|"））;
	rbuggyMatches = rbuggyMatches.length && new RegExp（rbuggyMatches.join（ "|"））;

	/ *を含む
	-------------------------------------------------- -------------------- * /
	hasCompare = rnative.test（docElem.compareDocumentPosition）;

	//要素に別の要素が含まれています
	//意図的に自己排他的
	//同様に、要素はそれ自身を含まない
	contains = hasCompare || rnative.test（docElem.contains）？
		関数（a、b）{
			var adown = a.nodeType === 9？a.documentElement：a、
				bup = b && b.parentNode;
			=== bupを返します|| !!（（bup && bup.nodeType === 1 &&（
				adown.contains？
					adown.contains（bup）：
					a.compareDocumentPosition && a.compareDocumentPosition（bup）＆16
			;）;
		：
		関数（a、b）{
			if（b）{
				while（（b = b.parentNode））{
					if（b === a）{
						trueを返します。
					}
				}
			}
			falseを返します。
		;

	/ *ソート
	-------------------------------------------------- -------------------- * /

	//伝票順序ソート
	sortOrder = hasCompare？
	関数（a、b）{

		//重複削除のフラグ
		if（a === b）{
			hasDuplicate = true;
			0を返します。
		}

		// 1つの入力のみにcompareDocumentPositionがある場合は、メソッドの存在に基づいてソートします
		var compare =！a.compareDocumentPosition  - ！b.compareDocumentPosition;
		if（比較）{
			比較を返します。
		}

		//両方の入力が同じドキュメントに属している場合は位置を計算します
		比較=（a.ownerDocument || a）===（b.ownerDocument || b）？
			a.compareDocumentPosition（b）：

			//そうでなければ、切断されていることがわかります
			1;

		//切断されたノード
		if（比較＆1 ||
			（！support.sortDetached && b.compareDocumentPosition（a）===比較））{

			//優先ドキュメントに関連する最初の要素を選択
			if（a === document || a.ownerDocument === preferredDoc &&には（preferredDoc、a））が含まれています。
				-1を返します。
			}
			if（b === document || b.ownerDocument === preferredDoc &&には（preferredDoc、b）が含まれます）{
				1を返します。
			}

			//元の注文を維持
			sortInputを返しますか？
				（indexOf（sortInput、a） -  indexOf（sortInput、b））：
				0;
		}

		比較＆4を返す -1：1
	：
	関数（a、b）{
		//ノードが同一の場合は早期終了
		if（a === b）{
			hasDuplicate = true;
			0を返します。
		}

		var cur、
			i = 0、
			aup = a.parentNode、
			bup = b.parentNode、
			ap = [a]、
			bp = [b];

		//親のないノードはドキュメントか切断されている
		if（！aup ||！bup）{
			===ドキュメントを返す -1：
				b ===ドキュメント？1：
				お尻？-1：
				バップ？1：
				sortInput？
				（indexOf（sortInput、a） -  indexOf（sortInput、b））：
				0;

		//ノードが兄弟の場合は、簡単に確認できます。
		そうでなければ（aup === bup）{
			siblingCheck（a、b）を返します。
		}

		//そうでなければ、比較のためにそれらの先祖の完全なリストが必要です
		cur = a;
		while（（cur = cur.parentNode））{
			ap.unshift（cur）;
		}
		cur = b;
		while（（cur = cur.parentNode））{
			bp.unshift（cur）;
		}

		//食い違いを探して木の上を歩く
		while（ap [i] === bp [i]）{
			i ++;
		}

		私を返しますか？
			//ノードに共通の祖先があるかどうかを兄弟チェックします
			siblingCheck（ap [i]、bp [i]）：

			//そうでなければ、ドキュメント内のノードが最初にソートされます
			ap [i] === preferredDoc？-1：
			bp [i] === preferredDoc？1：
			0;
	;

	ドキュメントを返します。
;

Sizzle.matches = function（expr、elements）{
	Sizzle（expr、null、null、elements）を返します。
;

Sizzle.matchesSelector = function（elem、expr）{
	//必要に応じてドキュメントの変数を設定します
	if（（elem.ownerDocument || elem）！== document）{
		setDocument（elem）;
	}

	//属性セレクタが引用符で囲まれていることを確認してください
	expr = expr.replace（rattributeQuotes、 "= '$ 1']"）;

	if（support.matchesSelector && documentIsHTML &&
		！compilerCache [expr + ""] &&
		（！rbuggyMatches ||！rbuggyMatches.test（expr））&&
		（！rbuggyQSA ||！rbuggyQSA.test（expr）））{

		試してください{
			var ret = matches.call（elem、expr）;

			// IE 9のmatchesSelectorは切断されたノードではfalseを返します
			if（ret || support.disconnectedMatch ||
					//同様に、切断されたノードは文書内にあると言われます
					// IE 9のフラグメント
					elem.document && elem.document.nodeType！== 11）{
				retを返す。
			}
		}キャッチ（E）{}
	}

	Sizzle（expr、document、null、[elem]）.length> 0を返します。
;

Sizzle.contains = function（context、elem）{
	//必要に応じてドキュメントの変数を設定します
	if（（context.ownerDocument || context）！== document）{
		setDocument（context）;
	}
	return contains（context、elem）;
;

Sizzle.attr = function（elem、name）{
	//必要に応じてドキュメントの変数を設定します
	if（（elem.ownerDocument || elem）！== document）{
		setDocument（elem）;
	}

	var fn = Expr.attrHandle [name.toLowerCase（）]、
		// Object.prototypeプロパティにだまされてはいけません（jQuery＃13807）
		val = fn && hasOwn.call（Expr.attrHandle、name.toLowerCase（））？
			fn（elem、name、！documentIsHTML）：
			未定義;

	戻り値val！==未定義？
		val：
		support.attributes || ！documentIsHTML？
			elem.getAttribute（name）：
			（val = elem.getAttributeNode（name））&& val.specified？
				値：
				ヌル;
;

Sizzle.escape = function（sel）{
	return（sel + ""）.replace（rcssescape、fcssescape）;
;

Sizzle.error = function（msg）{
	新しいエラーをスローします（ "構文エラー、認識できない式：" + msg）。
;

/ **
 *文書のソートと重複の削除
 * @param {ArrayLike}の結果
 * /
Sizzle.uniqueSort = function（results）{
	var elem、
		重複= []、
		j = 0、
		ｉ ＝ ０。

	//重複を検出できることを*知っていない限り*、それらが存在すると仮定します。
	hasDuplicate =！support.detectDuplicates;
	sortInput =！support.sortStable && results.slice（0）;
	results.sort（sortOrder）;

	if（hasDuplicate）{
		while（（elem = results [i ++]））{
			if（elem === results [i]）{
				j = duplicates.push（i）;
			}
		}
		while（j--）{
			results.splice（duplicates [j]、1）;
		}
	}

	//オブジェクトを解放するためにソートした後に入力を消去する
	// https://github.com/jquery/sizzle/pull/225を参照してください。
	sortInput = null;

	結果を返します。
;

/ **
 * DOMノードの配列のテキスト値を取得するためのユーティリティ関数
 * @param {Array | Element} elem
 * /
getText = Sizzle.getText = function（elem）{
	varノード、
		ret = ""、
		i = 0、
		nodeType = elem.nodeType;

	if（！nodeType）{
		// nodeTypeが指定されていない場合、これは配列と見なされる
		while（（node = elem [i ++]））{
			//コメントノードを通過しない
			ret + = getText（node）;
		}
	そうでなければ（nodeType === 1 || nodeType === 9 || nodeType === 11）{
		//要素にtextContentを使用する
		// innerTextの使用法は改行の一貫性のために削除されました（jQuery＃11153）
		if（typeof elem.textContent === "string"）{
			elem.textContentを返します。
		その他{
			//子をトラバースする
			for（elem = elem.firstChild; elem; elem = elem.nextSibling）{
				ret + = getText（elem）;
			}
		}
	そうでなければ（nodeType === 3 || nodeType === 4）{
		elem.nodeValueを返します。
	}
	//コメントまたは処理命令ノードを含めない

	retを返す。
;

Expr = Sizzle.selectors = {

	//ユーザーが調整できます
	cacheLength：50、

	createPseudo：markFunction、

	match：matchExpr、

	attrHandle：{}、

	見つけます：{}、

	相対：{
		">"：{dir： "parentNode"、最初の値：true}、
		""：{dir： "parentNode"}、
		"+"：{dir： "previousSibling"、最初の値：true}、
		"?"：{dir： "previousSibling"}
	、

	preFilter：{
		"ATTR"：機能（一致）{
			match [1] = match [1] .replace（runescape、funescape）;

			//引用符付きか引用符なしかにかかわらず、指定された値を[3]に一致するように移動します
			match [3] =（match [3] || match [4] || match [5] || ""）.replace（runescape、funescape）;

			if（match [2] === "?="）{
				match [3] = "" + match [3] + "";
			}

			match.slice（0、4）を返します。
		、

		"CHILD"：機能（マッチ）{
			/ * matchExprからの一致["CHILD"]
				1種類（| nth | ...のみ）
				2なに（子ども｜タイプ）
				3引数（偶数|奇数| \ d * | \ d * n（[+  - ] \ d +）？| ...）
				xn + y引数の4 xnコンポーネント（[+  - ]？\ d * n |）
				xnコンポーネントの5符号
				6×x成分
				y成分の7記号
				y成分8 y
			* /
			match [1] = match [1] .toLowerCase（）;

			if（[1] .slice（0、3）=== "nth"に一致）{
				// nth- *は引数が必要です
				if（！[3]に一致）{
					Sizzle.error（match [0]）;
				}

				// Expr.filter.CHILDの数値xおよびyパラメータ
				// false / trueはそれぞれ0/1にキャストされます。
				match [4] = +（match [4]？match [5] +（match [6] || 1）：2 *（match [3] === "even" || match [3] === "奇数 "））;
				match [5] = +（（match [7] + match [8]）|| match [3] === "odd"）;

			//他の型は引数を禁止します
			そうでなければ（match [3]）{
				Sizzle.error（match [0]）;
			}

			マッチを返します。
		、

		"PSEUDO"：機能（マッチ）{
			VAR過剰、
				引用符なし=！match [6] && match [2];

			if（matchExpr ["CHILD"]。テスト（match [0]））{
				nullを返します。
			}

			//引用された引数をそのまま受け入れる
			if（[3]に一致）{
				match [2] = match [4] || マッチ[5] || "";

			//引用符で囲まれていない引数から余分な文字を削除します
			そうでなければ（引用符で囲まれていない&& rpseudo.test（引用符で囲まれていない）&&
				// tokenizeから超過を取得する（再帰的に）
				（超過= tokenize（引用符なし、true））&&
				//次の閉じ括弧に進む
				（過剰=引用符なしindexOf（ "）"、引用符なし長さ - 過剰） - 引用符なし長さ））{

				//超過は負の指数
				match [0] = match [0] .slice（0、超過）。
				match [2] =引用符なしのスライス（0、超過）。
			}

			//擬似フィルタメソッドで必要なキャプチャのみを返します（型と引数）
			match.slice（0、3）を返します。
		}
	、

	フィルター：{

		"TAG"：関数（nodeNameSelector）{
			var nodeName = nodeNameSelector.replace（runescape、funescape）.toLowerCase（）;
			nodeNameSelector === "*"を返しますか？
				function（）{trueを返します。：
				関数（elem）{
					elem.nodeName && elem.nodeName.toLowerCase（）=== nodeNameを返します。
				;
		、

		"CLASS"：関数（クラス名）{
			var pattern = classCache [className + ""];

			リターンパターン||
				（パターン= new RegExp（ "（^ |" +空白+ "）" + className + "（" +空白+ "| $）"））&&
				classCache（className、function（elem）{
					return pattern.test（typeof elem.className === "string" && elem.className || typeof elem.getAttribute！== "未定義" && elem.getAttribute（ "class"）|| ""）;
				;））;
		、

		"ATTR"：機能（名前、オペレータ、チェック）{
			戻り関数（elem）{
				var result = Sizzle.attr（elem、name）;

				if（result == null）{
					戻り演算子=== "！=";
				}
				if（！演算子）{
					trueを返します。
				}

				結果+ = "";

				戻り演算子=== "="？結果===チェック：
					operator === "！="？結果！==チェック：
					operator === "^ ="？check && result.indexOf（check）=== 0：
					operator === "* ="？check && result.indexOf（check）> -1：
					operator === "$ ="？&& result.slice（-check.length）=== check：
					operator === "?="？（ "" + result.replace（rwhitespace、 ""）+ ""）.indexOf（check）> -1：
					operator === "| ="？結果===チェック|| result.slice（0、check.length + 1）=== check + " - "：
					偽
			;
		、

		"CHILD"：関数（タイプ、何、引数、最初、最後）{
			var simple = type.slice（0、3）！== "nth"、
				forward = type.slice（-4）！== "最後"、
				ofType = what === "of-type";

			最初に返す=== 1 &&最後の=== 0？

				//ショートカット：nth  -  *（n）
				関数（elem）{
					return !! elem.parentNode;
				：

				関数（elem、context、xml）{
					var cache、uniqueCache、outerCache、node、nodeIndex、start、
						dir = simple！== forward？"nextSibling"： "previousSibling"、
						parent = elem.parentNode、
						name = ofType && elem.nodeName.toLowerCase（）、
						useCache =！xml &&！ofType、
						diff = false;

					if（親）{

						//：（最初|最後|のみ） - （子|タイプ）
						if（単純）{
							while（dir）{
								node = elem;
								while（（node = node [dir]））{
									if（ofType？
										node.nodeName.toLowerCase（）===名前：
										node.nodeType === 1）{

										falseを返します。
									}
								}
								//：only- *の方向を逆にする（まだ行っていない場合）
								start = dir = type === "only" &&！start && "nextSibling";
							}
							trueを返します。
						}

						開始= [進む？parent.firstChild：parent.lastChild];

						// non-xml：nth-??child（...）はキャッシュデータを `parent`に格納します
						if（forward && useCache）{

							//以前にキャッシュされたインデックスから `elem`を探す

							// ... gzipにやさしい方法で
							node = parent;
							outerCache = node [expando] || （node [expando] = {}）;

							//サポート：IE <9のみ
							//複製された属性を防御する（jQuery gh-1709）
							uniqueCache = outerCache [node.uniqueID] ||
								（outerCache [node.uniqueID] = {}）;

							cache = uniqueCache [type] || [];
							nodeIndex = cache [0] === dirruns && cache [1];
							diff = nodeIndex && cache [2];
							node = nodeIndex && parent.childNodes [nodeIndex];

							while（（node = ++ nodeIndex && node && node [dir] ||

								//最初から `elem`を探すことにフォールバック
								（diff = nodeIndex = 0）|| start.pop（）））{

								//見つかった場合、インデックスを `parent`にキャッシュしてブレークします
								if（node.nodeType === 1 && ++ diff && node === elem）{
									uniqueCache [type] = [dirruns、nodeIndex、diff];
									ブレーク;
								}
							}

						その他{
							//利用可能な場合は以前にキャッシュされた要素インデックスを使用する
							if（useCache）{
								// ... gzipにやさしい方法で
								node = elem;
								outerCache = node [expando] || （node [expando] = {}）;

								//サポート：IE <9のみ
								//複製された属性を防御する（jQuery gh-1709）
								uniqueCache = outerCache [node.uniqueID] ||
									（outerCache [node.uniqueID] = {}）;

								cache = uniqueCache [type] || [];
								nodeIndex = cache [0] === dirruns && cache [1];
								diff = nodeIndex;
							}

							// xml：nth-??child（...）
							//または：nth-??last-child（...）または：nth（-last）？ -  of-type（...）
							if（diff === false）{
								//上から同じループを使って最初から `elem`を探す
								while（（node = ++ nodeIndex && node && node [dir] ||
									（diff = nodeIndex = 0）|| start.pop（）））{

									if（（ofType？
										node.nodeName.toLowerCase（）===名前：
										node.nodeType === 1）&&
										++ diff）{

										//見つかった各要素のインデックスをキャッシュします
										if（useCache）{
											outerCache = node [expando] || （node [expando] = {}）;

											//サポート：IE <9のみ
											//複製された属性を防御する（jQuery gh-1709）
											uniqueCache = outerCache [node.uniqueID] ||
												（outerCache [node.uniqueID] = {}）;

											uniqueCache [type] = [dirruns、diff];
										}

										if（node === elem）{
											ブレーク;
										}
									}
								}
							}
						}

						//オフセットを組み込んでから、サイクルサイズと照合する
						diff  -  =最後;
						diff ===最初を返す|| （diff％first === 0 && diff / first> = 0）;
					}
				;
		、

		"PSEUDO"：関数（疑似、引数）{
			//疑似クラス名は大文字と小文字を区別しません
			// http://www.w3.org/TR/selectors/#pseudo-classes
			//カスタム擬似文字が大文字で追加されている場合、大文字と小文字を区別して優先順位を付ける
			// setFiltersはpseudosから継承することを忘れないでください
			var args、
				fn = Expr.pseudos [擬似] || Expr.setFilters [pseudo.toLowerCase（）] ||
					Sizzle.error（ "サポートされていない疑似コード：" + pseudo）

			//ユーザーはcreatePseudoを使用してそれを示すことができます
			//フィルタ関数を作成するには引数が必要です
			// Sizzleと同じように
			if（fn [expando]）{
				fn（引数）を返します。
			}

			//しかし古い署名のサポートを維持する
			if（fn.length> 1）{
				args = [pseudo、pseudo、 ""、argument];
				Expr.setFilters.hasOwnProperty（pseudo.toLowerCase（））を返しますか？
					markFunction（function（seed、matches）{
						var idx、
							matched = fn（シード、引数）、
							i = matched.length。
						while（i--）{
							idx = indexOf（seed、matched [i]）;
							seed [idx] =！（matches [idx] = matched [i]）;
						}
					）：
					関数（elem）{
						fn（elem、0、args）を返します。
					;
			}

			fnを返します。
		}
	、

	擬似：{
		//潜在的に複雑な疑似
		"not"：markFunction（関数（セレクタ）{
			//コンパイルに渡されたセレクタを削除します
			//先頭と末尾の扱いを避ける
			//コンビネータとしてのスペース
			var input = []、
				results = []、
				matcher = compile（selector.replace（rtrim、 "$ 1"））;

			リターンマッチャー[expando]？
				markFunction（function（seed、matches、context、xml）{
					var elem、
						一致しない= matcher（seed、null、xml、[]）、
						i = seed.length;

					// `matcher`でマッチしなかった要素にマッチ
					while（i--）{
						if（（elem = unmatched [i]））{
							seed [i] =！（matches [i] = elem）;
						}
					}
				）：
				関数（elem、context、xml）{
					input [0] = elem;
					matcher（入力、null、xml、結果）
					//要素を保持しない（issue＃299）
					input [0] = null。
					return！results.pop（）;
				;
		、）

		"has"：markFunction（関数（セレクタ）{
			戻り関数（elem）{
				Sizzle（selector、elem）.length> 0を返します。
			;
		、）

		"contains"：markFunction（function（text）{
			text = text.replace（runescape、funescape）;
			戻り関数（elem）{
				return（elem.textContent || elem.innerText || getText（elem））.indexOf（text）> -1;
			;
		、）

		// "要素が：lang（）セレクタで表されるかどうか
		//要素の言語値のみに基づいています
		//識別子Cと等しい
		//または識別子Cで始まり、直後に " - "が続く
		//要素の言語値に対するCのマッチングは、大文字と小文字を区別せずに実行されます。
		//識別子Cは有効な言語名である必要はありません。」
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang"：markFunction（関数（lang）{
			// lang値は有効な識別子でなければなりません
			if（！ridentifier.test（lang || ""））{
				Sizzle.error（ "サポートされていない言語：" +言語）;
			}
			lang = lang.replace（runescape、funescape）.toLowerCase（）;
			戻り関数（elem）{
				var elemLang;
				行う {
					if（（elemLang = documentIsHTML？
						elem.lang：
						elem.getAttribute（ "xml：lang"）|| elem.getAttribute（ "lang"））））{

						elemLang = elemLang.toLowerCase（）;
						elemLangを返します=== lang || elemLang.indexOf（lang + " - "）=== 0;
					}
				while（（elem = elem.parentNode）&& elem.nodeType === 1）;
				falseを返します。
			;
		、）

		//その他
		"ターゲット"：関数（要素）{
			var hash = window.location && window.location.hash;
			hash && hash.slice（1）=== elem.idを返します。
		、

		"ルート"：関数（要素）{
			elem === docElemを返します。
		、

		"フォーカス"：機能（要素）{
			elem === document.activeElement &&（！document.hasFocus || document.hasFocus（））&& !!（elem.type || elem.href ||?elem.tabIndex）;を返します。
		、

		//ブール値プロパティ
		"有効"：createDisabledPseudo（false）、
		"無効"：createDisabledPseudo（true）、

		"チェックあり"：function（elem）{
			// CSS3では、：checkedはchecked要素とselected要素の両方を返すはずです
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase（）;
			return（nodeName === "input" && !! elem.checked）|| （nodeName === "option" && !! elem.selected）;
		、

		"選択"：関数（要素）{
			//このプロパティにアクセスするとデフォルトで選択される
			// Safariのオプションは正しく機能する
			if（elem.parentNode）{
				elem.parentNode.selectedIndex;
			}

			elem.selected === trueを返します。
		、

		//コンテンツ
		"空"：関数（要素）{
			// http://www.w3.org/TR/selectors/#empty-pseudo
			//：空は、要素（1）またはコンテンツノード（text：3、cdata：4、entity ref：5）によって否定されます。
			//しかし他の人にはできない（コメント：8;処理命令：7;など）
			// nodeType <6は、attributes（2）が子として表示されないため機能します
			for（elem = elem.firstChild; elem; elem = elem.nextSibling）{
				if（elem.nodeType <6）{
					falseを返します。
				}
			}
			trueを返します。
		、

		"親"：関数（要素）{
			return！Expr.pseudos ["empty"]（elem）;
		、

		//要素/入力タイプ
		"ヘッダー"：関数（要素）{
			rheader.test（elem.nodeName）を返します。
		、

		"入力"：関数（要素）{
			rinputs.test（elem.nodeName）を返します。
		、

		"ボタン"：機能（要素）{
			var name = elem.nodeName.toLowerCase（）;
			戻り名=== "入力" && elem.type === "ボタン" || name === "ボタン";
		、

		"テキスト"：関数（要素）{
			var attr;
			elem.nodeName.toLowerCase（）=== "input"を返します&&
				elem.type === "テキスト" &&

				//サポート：IE <8
				//新しいHTML5属性値（例： "search"）はelem.type === "text"で表示されます
				（（attr = elem.getAttribute（ "type"））== null || attr.toLowerCase（）=== "text"）;
		、

		//コレクション内の位置
		"最初"：createPositionalPseudo（function（）{
			[0]を返します。
		、）

		"最後"：createPositionalPseudo（function（matchIndexes、length）{
			[長さ -  1]を返します。
		、）

		"eq"：createPositionalPseudo（関数（matchIndexes、長さ、引数））{
			[引数<0？引数+長さ：引数];
		、）

		"even"：createPositionalPseudo（function（matchIndexes、length）{
			var i = 0;
			（; i <length; i + = 2）{について
				matchIndexes.push（i）;
			}
			matchIndexesを返します。
		、）

		"奇数"：createPositionalPseudo（function（matchIndexes、length）{
			var i = 1;
			（; i <length; i + = 2）{について
				matchIndexes.push（i）;
			}
			matchIndexesを返します。
		、）

		"lt"：createPositionalPseudo（関数（matchIndexes、長さ、引数））{
			var i = argument <0？引数+長さ：引数。
			（;  -  i> = 0;）{の場合
				matchIndexes.push（i）;
			}
			matchIndexesを返します。
		、）

		"gt"：createPositionalPseudo（関数（matchIndexes、長さ、引数））{
			var i = argument <0？引数+長さ：引数。
			for（; ++ i <length;）{
				matchIndexes.push（i）;
			}
			matchIndexesを返します。
		）
	}
;

Expr.pseudos ["nnth"] = Expr.pseudos ["eq"];

//ボタン/入力タイプの擬似を追加
（i in {ラジオ：true、チェックボックス：true、ファイル：true、パスワード：true、画像：true}）{
	Expr.pseudos [i] = createInputPseudo（i）;
}
for（i in {送信：true、リセット：true}）{
	Expr.pseudos [i] = createButtonPseudo（i）;
}

//新しいsetFiltersを作成するための簡単なAPI
関数setFilters（）{}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters（）;

tokenize = Sizzle.tokenize = function（selector、parseOnly）{
	var matched、match、トークン、タイプ、
		soFar、グループ、preFilters、
		cached = tokenCache [selector + ""];

	if（キャッシュ）{
		parseOnlyを返しますか？0：cached.slice（0）;
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while（soFar）{

		//コンマと初回実行
		if（！が一致した||（match = rcomma.exec（soFar））））{
			if（match）{
				//末尾のカンマを有効なものとして使用しない
				soFar = soFar.slice（match [0] .length）|| これまでのところ;
			}
			groups.push（（tokens = []））;
		}

		一致= false。

		//コンビネータ
		if（（match = rcombinators.exec（soFar））））{
			matched = match.shift（）;
			tokens.push（{
				値：一致、
				//子孫コンビネータをスペースにキャストする
				タイプ：match [0] .replace（rtrim、 ""）
			;））;
			soFar = soFar.slice（matched.length）;
		}

		//フィルタ
		for（Expr.filterを入力）{
			if（（match = matchExpr [type] .exec（soFar））&&（！preFilters [type] ||
				（match = preFilters [type]（match））））{
				matched = match.shift（）;
				tokens.push（{
					値：一致、
					タイプ：タイプ、
					マッチ：マッチ
				;））;
				soFar = soFar.slice（matched.length）;
			}
		}

		if（！が一致しました）{
			ブレーク;
		}
	}

	//無効な超過分の長さを返します
	//解析しているだけの場合
	//そうでなければ、エラーをスローするかトークンを返す
	parseOnlyを返しますか？
		soFar.length：
		これまでのところ ？
			Sizzle.error（セレクタ）：
			//トークンをキャッシュする
			tokenCache（selector、groups）.slice（0）;
;

関数toSelector（トークン）{
	var i = 0、
		len = tokens.length、
		selector = "";
	for（; i <len; i ++）{
		selector + = tokens [i] .value;
	}
	セレクタを返します。
}

関数addCombinator（matcher、combinator、base）{
	var dir = combinator.dir、
		skip = combinator.next、
		key =スキップする|| あー、
		checkNonElements = base && key === "parentNode"、
		doneName = done ++;

	combinator.firstを返しますか。
		//最も近い先祖/前の要素と照合する
		関数（elem、context、xml）{
			while（（elem = elem [dir]））{
				if（elem.nodeType === 1 || checkNonElements）{
					マッチャー（elem、context、xml）を返します。
				}
			}
			falseを返します。
		：

		//すべての先祖/前の要素と照合する
		関数（elem、context、xml）{
			var oldCache、uniqueCache、outerCache、
				newCache = [dirruns、doneName];

			// XMLノードに任意のデータを設定することはできないため、コンビネータキャッシングの恩恵を受けません。
			if（xml）{
				while（（elem = elem [dir]））{
					if（elem.nodeType === 1 || checkNonElements）{
						if（matcher（elem、context、xml））{
							trueを返します。
						}
					}
				}
			その他{
				while（（elem = elem [dir]））{
					if（elem.nodeType === 1 || checkNonElements）{
						outerCache = elem [expando] || （elem [expando] = {}）;

						//サポート：IE <9のみ
						//複製された属性を防御する（jQuery gh-1709）
						uniqueCache = outerCache [elem.uniqueID] || （outerCache [elem.uniqueID] = {}）;

						if（スキップ&&スキップ=== elem.nodeName.toLowerCase（））{
							elem = elem [dir] || elem;
						そうでなければ（（oldCache = uniqueCache [key]））&&
							oldCache [0] === dirruns && oldCache [1] === doneName）{

							// newCacheに代入し、結果を前の要素に逆伝播する
							return（newCache [2] = oldCache [2]）;
						その他{
							// newcacheを再利用して結果を前の要素に逆伝播する
							uniqueCache [key] = newCache;

							//一致すると、終了します。失敗すると、チェックし続ける必要があります。
							if（（newCache [2] = matcher（elem、context、xml））））{
								trueを返します。
							}
						}
					}
				}
			}
			falseを返します。
		;
}

function elementMatcher（matchers）{
	matchers.length> 1を返します。
		関数（elem、context、xml）{
			var i = matchers.length;
			while（i--）{
				if（！matchers [i]（elem、コンテキスト、xml））{
					falseを返します。
				}
			}
			trueを返します。
		：
		matcher [0];
}

function multipleContexts（セレクタ、コンテキスト、結果）{
	var i = 0、
		len = contexts.length;
	for（; i <len; i ++）{
		Sizzle（selector、contexts [i]、results）;
	}
	結果を返します。
}

関数condense（不一致、マップ、フィルタ、コンテキスト、xml）{
	var elem、
		newUnmatched = []、
		i = 0、
		len = unmatched.length、
		mapped = map！= null。

	for（; i <len; i ++）{
		if（（elem = unmatched [i]））{
			if（！filter || filter（elem、context、xml））{
				newUnmatched.push（elem）;
				if（マップ）{
					map.push（i）;
				}
			}
		}
	}

	newUnmatchedを返します。
}

関数setMatcher（preFilter、selector、matcher、postFilter、postFinder、postSelector）{
	if（postFilter &&！postFilter [expando]）{
		postFilter = setMatcher（postFilter）;
	}
	if（postFinder &&！postFinder [expando]）{
		postFinder = setMatcher（postFinder、postSelector）;
	}
	return markFunction（function（seed、results、context、xml）{
		var temp、私、elem、
			preMap = []、
			postMap = []、
			既存の= results.length、

			//シードまたはコンテキストから初期要素を取得する
			elems = seed || multipleContexts（selector || "*"、context.nodeType？[context]：context、[]）、

			//マッチャー入力を得るためのプレフィルタ、シードと結果の同期のためのマップを保存
			matcherIn = preFilter &&（seed ||！selector）？
				要約（elems、preMap、preFilter、context、xml）：
				エレムス、

			matcherOut = matcher？
				// postFinder、フィルタリングされたシード、非シードのpostFilterまたは既存の結果がある場合
				postFinder || （seed？preFilter：既存の|| postFilter）？

					// ...中間処理が必要です
					[]：

					// ...そうでなければ直接結果を使う
					結果 ：
				matcherIn;

		//プライマリマッチを探す
		if（matcher）{
			matcher（matcherIn、matcherOut、コンテキスト、xml）;
		}

		// postFilterを適用する
		if（postFilter）{
			temp = condense（matcherOut、postMap）;
			postFilter（temp、[]、context、xml）;

			//失敗した要素をmatcherInに移動して一致を解除します
			i =温度の長さ。
			while（i--）{
				if（（elem = temp [i]））{
					matcherOut [postMap [i]] =！（matcherIn [postMap [i]] = elem）;
				}
			}
		}

		if（seed）{
			if（postFinder || preFilter）{
				if（postFinder）{
					//この中間体をpostFinderコンテキストに凝縮して、最終のmatcherOutを取得します
					temp = [];
					i = matcherOut.length;
					while（i--）{
						if（（elem = matcherOut [i]））{
							// elemはまだ最後の試合ではないので、matcherInを復元します
							temp.push（（matcherIn [i] = elem））;
						}
					}
					postFinder（null、（matcherOut = []）、temp、xml）;
				}

				//一致した要素をシードから結果に移動してそれらを同期させます
				i = matcherOut.length;
				while（i--）{
					if（（elem = matcherOut [i]）&&
						（temp = postFinder？indexOf（seed、elem）：preMap [i]）> -1）{

						seed [temp] =！（results [temp] = elem）;
					}
				}
			}

		//定義されている場合はpostFinderを介して結果に要素を追加する
		その他{
			matcherOut = condense（
				matcherOut ===結果は？
					matcherOut.splice（既存のmatcherOut.length）：
					matcherOut
			;
			if（postFinder）{
				postFinder（null、結果、matcherOut、xml）;
			その他{
				push.apply（results、matcherOut）;
			}
		}
	;））;
}

関数matcherFromTokens（トークン）{
	var checkContext、matcher、j、
		len = tokens.length、
		leadingRelative = Expr.relative [tokens [0] .type]、
		implicitRelative = leadingRelative || Exre.relative [""]、
		i = leadingRelative？1：0、

		//基本マッチャーは、要素がトップレベルのコンテキストから到達可能であることを保証します
		matchContext = addCombinator（function（elem）{
			elem === checkContextを返します。
		implicitRelative、true）、
		matchAnyContext = addCombinator（function（elem）{
			indexOf（checkContext、elem）> -1を返します。
		implicitRelative、true）、
		matchers = [関数（elem、context、xml）{
			var ret =（！leadingRelative &&（xml ||コンテキスト！== outermostContext））|| （
				（checkContext = context）.nodeType？
					matchContext（elem、context、xml）：
					matchAnyContext（elem、context、xml））;
			//要素にぶら下がるのを避ける（issue＃299）
			checkContext = null。
			retを返す。
		;]];

	for（; i <len; i ++）{
		if（（matcher = Expr.relative [tokens [i] .type]）））{
			matchers = [addCombinator（elementMatcher（matchers）、matcher）];
		その他{
			matcher = Expr.filter [tokens [i] .type] .apply（null、tokens [i] .matches）;

			//位置マッチャーを見たときに特別な値を返す
			if（matcher [expando]）{
				//適切に処理するために次の相対演算子があればそれを探します
				ｊ ＝ ＋＋ ｉ。
				for（; j <len; j ++）{
					if（Expr.relative [tokens [j] .type]）{
						ブレーク;
					}
				}
				setMatcher（
					i> 1 && elementMatcher（matchers）、
					i> 1 && toSelector（
						//前のトークンが子孫の組み合わせだった場合は、暗黙のany-element `*`を挿入する
						tokens.slice（0、i  -  1）.concat（{value：tokens [i  -  2] .type === ""？ "*"： ""}）
					.replace（rtrim、 "$ 1"）、
					マッチャー、
					matcherFromTokens（tokens.slice（i、j））、
					j <len && matcherFromTokens（（tokens = tokens.slice（j）））、
					j <len && toSelector（トークン）
				;
			}
			matchers.push（matcher）;
		}
	}

	elementMatcher（matchers）を返します。
}

関数matcherFromGroupMatchers（elementMatchers、setMatchers）{
	var bySet = setMatchers.length> 0、
		byElement = elementMatchers.length> 0、
		superMatcher = function（シード、コンテキスト、xml、結果、最も外側）{
			var elem、j、matcher、
				matchedCount = 0、
				i = "0"、
				一致しない= seed && []、
				setMatched = []、
				contextBackup = outermostContext、
				//常にシード要素または最も外側のコンテキストのいずれかが必要です
				elems = seed || byElement && Expr.find ["TAG"]（ "*"、一番外側）、
				//これが最も外側のマッチャーである場合は整数のディランを使用する
				dirrunsUnique =（dirruns + = contextBackup == null？1：Math.random（）|| 0.1）、
				len = elems.length;

			if（一番外側）{
				outermostContext = context === document || コンテキスト|| 一番外側
			}

			// elementMatchersを直接渡す要素を結果に直接追加する
			//サポート：IE <9、Safari
			// idに一致するNodeListプロパティ（IE： "length"; Safari：<number>）を許容する
			for（; i！== len &&（elem = elems [i]）！= null; i ++）{
				if（byElement && elem）{
					ｊ ＝ ０。
					if（！context && elem.ownerDocument！== document）{
						setDocument（elem）;
						xml =！documentIsHTML;
					}
					while（（matcher = elementMatchers [j ++]））{
						if（matcher（elem、context || document、xml））{
							results.push（elem）;
							ブレーク;
						}
					}
					if（一番外側）{
						dirruns = dirrunsUnique;
					}
				}

				//セットフィルタの一致しない要素を追跡する
				if（bySet）{
					//彼らはすべての可能なマッチャーを通過したでしょう
					if（（elem =！matcher && elem））{
						matchedCount--;
					}

					//一致するかどうかにかかわらず、すべての要素の配列を長くする
					if（seed）{
						unmatched.push（elem）;
					}
				}
			}

			// `i`は上記で訪問した要素の数であり、それを` matchedCount`に追加する
			//後者を非負にします。
			matchedCount + = i;

			//一致しない要素に設定フィルタを適用する
			//注：一致しない要素がない場合（つまり、 `matchedCount`の場合）、これはスキップすることができます。
			上記のループで_any_要素を訪問しなかった場合を除き、//は「i」に等しい
			//要素マッチャーもシードもありません。
			//最初の文字列 "0"をインクリメントすると、その中でのみiが文字列のままになります。
			// case、これは `i`とは異なる" 00 "` matchedCount`という結果になりますが、
			//数値的にゼロ
			if（bySet && i！== matchedCount）{
				ｊ ＝ ０。
				while（（matcher = setMatchers [j ++]））{
					matcher（一致しない、setMatched、コンテキスト、xml）。
				}

				if（seed）{
					//ソートの必要性を排除するために要素マッチを再統合する
					if（matchedCount> 0）{
						while（i--）{
							if（！（unmatched [i] || setMatched [i]）））{
								setMatched [i] = pop.call（結果）;
							}
						}
					}

					//実際の一致のみを取得するためにインデックスプレースホルダの値を破棄
					setMatched = condense（setMatched）;
				}

				//結果に一致を追加
				push.apply（results、setMatched）;

				//複数の成功したマッチャーに続くシードレスセットの一致がソートを規定する
				if（最も外側の&&！seed && setMatched.length> 0 &&
					（matchedCount + setMatchers.length）> 1）{

					Sizzle.uniqueSort（結果）;
				}
			}

			//入れ子になったマッチャーによるグローバルの操作をオーバーライドする
			if（一番外側）{
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			不一致を返します。
		;

	bySetを返す？
		markFunction（superMatcher）：
		superMatcher;
}

compile = Sizzle.compile = function（selector、match / *内部使用のみ* /）{
	var i、
		setMatchers = []、
		elementMatchers = []、
		cached = compilerCache [selector + ""];

	if（！キャッシュ）{
		//各要素をチェックするために使用できる再帰関数の関数を生成します
		if（！match）{
			match = tokenize（セレクタ）;
		}
		i = match.length;
		while（i--）{
			cached = matcherFromTokens（match [i]）;
			if（キャッシュされた[expando]）{
				setMatchers.push（キャッシュ）。
			その他{
				elementMatchers.push（キャッシュ）。
			}
		}

		//コンパイルした関数をキャッシュする
		cached = compilerCache（selector、matcherFromGroupMatchers（elementMatchers、setMatchers））;

		//セレクタとトークン化を保存する
		cached.selector = selector;
	}
	キャッシュを返します。
;

/ **
 * Sizzleのコンパイル済み言語で動作する低レベルの選択機能
 *セレクタ機能
 * @param {String | Function} selectorセレクタまたはプリコンパイルされたもの
 * Sizzle.compileで構築されたセレクタ機能
 * @param {Element}コンテキスト
 * @param {Array} [結果]
 * @param {Array} [seed]照合する要素のセット
 * /
select = Sizzle.select = function（セレクタ、コンテキスト、結果、シード）{
	var i、トークン、トークン、タイプ、検索、
		compiler = typeof selector === "関数" && selector、
		match =！seed && tokenize（（selector = compile.selector || selector））;

	results = results || [];

	//リストにセレクタが1つしかなく、シードがない場合は、操作を最小限に抑えるようにしてください
	//（後者はコンテキストを保証します）
	if（match.length === 1）{

		//先頭の複合セレクタがIDの場合はコンテキストを減らします
		tokens = match [0] = match [0] .slice（0）;
		if（tokens.length> 2 &&（token = tokens [0]）。type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative [tokens [1] .type]）{

			context =（Expr.find ["ID"]（token.matches [0] .replace（runescape、funescape）、context）|| []）[0];
			if（！context）{
				結果を返します。

			//プリコンパイルされたマッチャーはまだ祖先を検証するのでレベルを上げる
			それ以外の場合（コンパイル済み）{
				context = context.parentNode;
			}

			selector = selector.slice（tokens.shift（）。value.length）;
		}

		//右から左へのマッチングのためにシードセットを取得する
		i = matchExpr ["needsContext"]。テスト（セレクタ）0：tokens.length。
		while（i--）{
			token = tokens [i];

			//コンビネータにぶつかったら中止
			if（Expr.relative [（type = token.type）]））{
				ブレーク;
			}
			if（（find = Expr.find [type]）））{
				//検索、主要な兄弟コンビネータのコンテキストの拡張
				if（（seed = find（
					token.matches [0] .replace（runescape、funescape）、
					rsibling.test（tokens [0] .type）&& testContext（context.parentNode）|| コンテキスト
				）））{

					//シードが空であるかトークンが残っていない場合は、早く戻ることができます
					tokens.splice（i、1）;
					selector = seed.length && toSelector（トークン）;
					if（！selector）{
						push.apply（結果、シード）;
						結果を返します。
					}

					ブレーク;
				}
			}
		}
	}

	//フィルタ関数が提供されていない場合はコンパイルして実行する
	//上記のセレクターを変更した場合に再トークン化を回避するために `match`を提供します
	（コンパイル済み|| compile（selector、match））（
		シード、
		コンテキスト、
		！documentIsHTML、
		結果、
		！context || rsibling.test（selector）&& testContext（context.parentNode）|| コンテキスト
	;
	結果を返します。
;

//ワンタイム割り当て

//ソートの安定性
support.sortStable = expando.split（ ""）。sort（sortOrder）.join（ ""）=== expando;

//サポート：Chrome 14-35 +
//それらが比較関数に渡されない場合は常に重複と見なします
support.detectDuplicates = !! hasDuplicate;

//デフォルトドキュメントに対して初期化します
setDocument（）;

//サポート：Webkit <537.32  -  Safari 6.0.3 / Chrome 25（Chrome 27で修正済み）
//切り離されたノードは混乱して*お互いに続きます*
support.sortDetached = assert（関数（el）{
	// 1を返す必要がありますが、4（次）を返します
	el.compareDocumentPosition（document.createElement（ "fieldset"））＆1;を返します。
;））;

//サポート：IE <8
//属性/プロパティの "内挿"を禁止する
// https://msdn.microsoft.com/ja-jp/library/ms536429%28VS.85%29.aspx
if（！assert（機能（el）{
	el.innerHTML = "<a href='#'> </a>";
	el.firstChild.getAttribute（ "href"）=== "＃"を返します。
）））{
	addHandle（ "type | href | height | width"、関数（elem、name、isXML）{
		if（！isXML）{
			elem.getAttribute（name、name.toLowerCase（）=== "type"？1：2）を返します。
		}
	;））;
}

//サポート：IE <9
// getAttribute（ "value"）の代わりにdefaultValueを使用する
if（！support.attributes ||！assert（関数（el）{
	el.innerHTML = "<input />";
	el.firstChild.setAttribute（ "value"、 ""）;
	el.firstChild.getAttribute（ "value"）=== ""を返します。
）））{
	addHandle（ "value"、function（elem、name、isXML）{
		if（！isXML && elem.nodeName.toLowerCase（）=== "input"）{
			elem.defaultValueを返します。
		}
	;））;
}

//サポート：IE <9
// getAttributeがある場合は、getAttributeNodeを使用してブール値を取得します
if（！assert（機能（el）{
	el.getAttribute（ "disabled"）== nullを返します。
）））{
	addHandle（論理値、関数（elem、名前、isXML）{
		var val;
		if（！isXML）{
			elem [name] === trueを返しますか？name.toLowerCase（）：
					（val = elem.getAttributeNode（name））&& val.specified？
					値：
				ヌル;
		}
	;））;
}

シズルを返します。

}）（ 窓 ）;



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

//非推奨
jQuery.expr ["："] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function（elem、dir、until）{
	var matched = []、
		切り捨て= =まで！==未定義。

	while（（elem = elem [dir]）&& elem.nodeType！== 9）{
		if（elem.nodeType === 1）{
			if（&& jQuery（elem）.is（trunc）を切り捨てる）{
				ブレーク;
			}
			matched.push（elem）;
		}
	}
	一致したものを返します。
;


var兄弟= function（n、elem）{
	var matched = [];

	for（; n; n = n.nextSibling）{
		if（n.nodeType === 1 && n！== elem）{
			matched.push（n）;
		}
	}

	一致したものを返します。
;


var rneedsContext = jQuery.expr.match.needsContext;



関数nodeName（elem、name）{

  elem.nodeName && elem.nodeName.toLowerCase（）=== name.toLowerCase（）を返します。

;
var rsingleTag =（/ ^ <（[az] [^ \ / \ 0>：\ x20 \ t \ r \ n \ f] *）[\ x20 \ t \ r \ n \ f] * \ /？>（ ？：<\ / \ 1> |）$ / i）;



// filterと同じ機能を実装していない
関数winnow（要素、修飾子、not）{
	if（isFunction（修飾子））{
		jQuery.grep（elements、function（elem、i）{を返します。
			return !! qualifier.call（elem、i、elem）！==そうではありません。
		;））;
	}

	//単一要素
	if（qualifier.nodeType）{
		jQuery.grep（elements、function（elem）{を返す
			return（elem === qualifier）！== not;
		;））;
	}

	//要素の並び（jQuery、arguments、Array）
	if（typeof修飾子！== "文字列"）{
		jQuery.grep（elements、function（elem）{を返す
			return（indexOf.call（qualifier、elem）> -1）！== not;
		;））;
	}

	//単純セレクターと複雑セレクターの両方に対して直接フィルター処理
	jQuery.filter（修飾子、要素、not）を返します。
}

jQuery.filter = function（expr、elems、not）{
	var elem = elems [0];

	if（not）{
		expr = "：not（" + expr + "）";
	}

	if（elems.length === 1 && elem.nodeType === 1）{
		jQuery.find.matchesSelector（elem、expr）を返しますか？[elem]：[]；
	}

	jQuery.find.matches（expr、jQuery.grep（elems、function（elem）{
		elem.nodeType === 1を返します。
	;））;
;

jQuery.fn.extend（{
	見つける：function（selector）{
		var i、ret、
			len = this.length、
			自己=これ。

		if（typeof selector！== "string"）{
			this.pushStack（jQuery（selector）.filter（function（）{）を返します。
				for（i = 0; i <len; i ++）{
					if（jQuery.contains（self [i]、this））{
						trueを返します。
					}
				}
			;））;
		}

		ret = this.pushStack（[]）;

		for（i = 0; i <len; i ++）{
			jQuery.find（selector、self [i]、ret）;
		}

		len> 1を返す jQuery.uniqueSort（ret）：ret;
	、
	filter：function（selector）{
		this.pushStack（winnow（this、selector || []、false））を返します。
	、
	not：function（selector）{
		this.pushStack（winnow（this、selector || []、true））を返します。
	、
	関数（セレクター）{
		return !! winnow（
			この、

			//これが位置/相対セレクタの場合は、返されたセットのメンバシップを確認します
			// so $（ "p：first"）。is（ "p：last"）は、2つの "p"を持つドキュメントに対してはtrueを返しません。
			typeof selector === "string" && rneedsContext.test（selector）？
				jQuery（セレクタ）：
				セレクタ|| []、
			偽
		長さ
	}
;））;


// jQueryオブジェクトを初期化します


//ルートjQuery（document）への中央参照
var rootjQuery、

	// HTML文字列をチェックする簡単な方法
	// location.hashによるXSSを回避するために、<tag>よりも#idを優先させる（＃9521）
	//厳密なHTML認識（＃11290：<で始まっていなければなりません）
	//スピードを上げるための簡単な#idのショートカット
	rquickExpr = / ^（？：\ s *（<[\ w \ W] +>）[^>] * |＃（[\ w  - ] +））$ /、

	init = jQuery.fn.init = function（selector、context、root）{
		var match、elem。

		// HANDLE：$（ ""）、$（null）、$（未定義）、$（false）
		if（！selector）{
			これを返してください。
		}

		//メソッドinit（）は代替rootjQueryを受け入れる
		//移行するとjQuery.subをサポートできるようになります（gh-2101）
		root = root || rootjQuery;

		// HTML文字列を処理する
		if（typeof selector === "string"）{
			if（selector [0] === "<" &&
				selector [selector.length  -  1] === ">" &&
				selector.length> = 3）{

				// <>で始まって終わる文字列はHTMLであると仮定し、正規表現チェックをスキップします
				match = [null、selector、null];

			その他{
				match = rquickExpr.exec（セレクタ）。
			}

			// htmlと一致するか、＃idにコンテキストが指定されていないことを確認します
			if（match &&（match [1] ||！context）））{

				//ハンドル：$（html） - > $（配列）
				if（[1]に一致）{
					context =コンテキストのjQueryのインスタンス？context [0]：コンテキスト

					//スクリプトを実行するオプションはバックコンパットにも当てはまります
					// parseHTMLが存在しない場合は意図的にエラーをスローさせる
					jQuery.merge（これ、jQuery.parseHTML（
						[1]と一致
						context && context.nodeType？context.ownerDocument || コンテキスト：文書、
						本当の
					;）;

					//ハンドル：$（html、小道具）
					if（rsingleTag.test（match [1]）&& jQuery.isPlainObject（context））{
						for（コンテキスト内で一致）{

							//可能であればコンテキストのプロパティはメソッドとして呼び出されます
							if（isFunction（this [match]））{
								this [match]（context [match]）;

							// ...その他の場合は属性として設定
							その他{
								this.attr（match、context [match]）;
							}
						}
					}

					これを返してください。

				//ハンドル：$（＃id）
				その他{
					elem = document.getElementById（match [2]）;

					if（elem）{

						//要素を直接jQueryオブジェクトに挿入します
						this [0] = elem;
						this.length = 1;
					}
					これを返してください。
				}

			//ハンドル：$（expr、$（...））
			そうでなければ（！context || context.jquery）{
				return（context || root）.find（selector）;

			// HANDLE：$（expr、context）
			//（これは$（context）.find（expr）と等価です。
			その他{
				this.constructor（context）.find（selector）を返します。
			}

		//ハンドル：$（DOMElement）
		そうでなければ（selector.nodeType）{
			this [0] =セレクタ。
			this.length = 1;
			これを返してください。

		// HANDLE：$（ファンクション）
		//文書準備のショートカット
		そうでなければ（isFunction（selector））{
			return root.ready！==未定義？
				root.ready（セレクタ）：

				// readyがない場合はすぐに実行
				セレクタ（jQuery）。
		}

		jQuery.makeArray（selector、this）を返します。
	;

//後でインスタンス化するためにinit関数にjQueryプロトタイプを指定します
init.prototype = jQuery.fn;

//中央参照を初期化する
rootjQuery = jQuery（document）;


var rparentsprev = / ^（？：両親|前へ（？：Until | All））/、

	//一意の集合から開始するときに一意の集合を生成することが保証されているメソッド
	aranteedUnique = {
		子供たち：本当、
		内容：真、
		次の記事：真
		前の単語：true
	;

jQuery.fn.extend（{
	持っている：function（target）{
		var targets = jQuery（target、this）、
			l = targets.length;

		this.filter（function（）{を返してください。
			var i = 0;
			for（; i <l; i ++）{
				if（jQuery.contains（this、targets [i]））{
					trueを返します。
				}
			}
		;））;
	、

	最も近い：関数（セレクター、コンテキスト）{
		var cur、
			i = 0、
			l = this.length、
			matched = []、
			targets = typeof selectors！== "string" && jQuery（セレクタ）;

		//ポジションセレクターは決してマッチしません、なぜなら_selection_コンテキストがないからです
		if（！rneedsContext.test（セレクタ））{
			for（; i <l; i ++）{
				for（cur = this [i]; cur && cur！==コンテキスト; cur = cur.parentNode）{

					//常にドキュメントの断片をスキップする
					if（cur.nodeType <11 &&（ターゲット？
						targets.index（cur）> -1：

						//非要素をSizzleに渡さない
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector（cur、selector）））{

						matched.push（cur）;
						ブレーク;
					}
				}
			}
		}

		this.pushStack（matched.length> 1？jQuery.uniqueSort（matched）：一致）を返します。
	、

	//セット内の要素の位置を決定します
	index：関数（要素）{

		//引数なし、親にインデックスを返す
		if（！elem）{
			return（this [0] && this [0] .parentNode）？this.first（）。prevAll（）。length：-1;
		}

		//セレクタのインデックス
		if（typeof elem === "string"）{
			indexOf.call（jQuery（elem）、this [0]）を返します。
		}

		//目的の要素の位置を特定する
		indexOf.call（これ、

			// jQueryオブジェクトを受け取ると、最初の要素が使われます
			elem.jquery？elem [0]：elem
		;
	、

	追加：function（selector、context）{
		this.pushStack（
			jQuery.uniqueSort（
				jQuery.merge（this.get（）、jQuery（selector、context））
			）
		;
	、

	addBack：function（selector）{
		this.addを返します（selector == null？
			this.prevObject：this.prevObject.filter（セレクタ）
		;
	}
;））;

関数兄弟（cur、dir）{
	while（（cur = cur [dir]）&& cur.nodeType！== 1）{}
	curを返します。
}

jQuery.each（{
	親：function（elem）{
		var parent = elem.parentNode;
		&& parent.nodeType！== 11？を返します。親：null
	、
	親：関数（エレム）{
		dir（elem、 "parentNode"）を返します。
	、
	両親まで：function（elem、i、until）{
		dir（elem、 "parentNode"、until）を返します。
	、
	next：function（elem）{
		兄弟を返します（elem、 "nextSibling"）。
	、
	前の単語：function（elem）{
		兄弟を返します（elem、 "previousSibling"）。
	、
	nextAll：function（elem）{
		dir（elem、 "nextSibling"）を返します。
	、
	prevAll：function（elem）{
		dir（elem、 "previousSibling"）を返します。
	、
	nextUntil：function（elem、i、until）{
		dir（elem、 "nextSibling"、まで）を返します。
	、
	prevUntil：function（elem、i、until）{
		dir（elem、 "previousSibling"まで）を返します。
	、
	兄弟姉妹：function（elem）{
		兄弟を返します（（elem.parentNode || {}）.firstChild、elem）。
	、
	子供たち：function（elem）{
		兄弟を返します（elem.firstChild）。
	、
	内容：function（elem）{
        if（nodeName（elem、 "iframe"））{
            elem.contentDocumentを返します。
        }

        //サポート：IE 9  -  11のみ、iOS 7のみ、Androidブラウザ<= 4.3のみ
        //ブラウザでテンプレート要素を通常のものとして扱う
        //サポートしない
        if（nodeName（elem、 "template"））{
            elem = elem.content || elem;
        }

        jQuery.merge（[]、elem.childNodes）を返します。
	}
function（name、fn）{}
	jQuery.fn [name] = function（まで、セレクタ）{
		var matched = jQuery.map（this、fn、until）;

		if（name.slice（-5）！== "Until"）{
			セレクタ=まで。
		}

		if（selector && typeof selector === "string"）{
			matched = jQuery.filter（selector、matched）;
		}

		if（this.length> 1）{

			//重複を削除する
			if（!aranteedUnique [name]）{
				jQuery.uniqueSort（一致）;
			}

			//親*と前の派生物の逆順
			if（rparentsprev.test（name））{
				matched.reverse（）;
			}
		}

		this.pushStack（一致）を返します。
	;
;））;
var rnothtmlwhite =（/ [^ \ x20 \ t \ r \ n \ f] + / g）;



//文字列形式のオプションをオブジェクト形式のオプションに変換する
関数createOptions（オプション）{
	var object = {};
	jQuery.each（options.match（rnothtmlwhite）|| []、function（_、flag）{
		object [flag] = true;
	;））;
	オブジェクトを返します。
}

/ *
 *以下のパラメータを使用してコールバックリストを作成してください。
 *
 * options：方法を変えるスペースで区切られたオプションのオプションのリスト
 *コールバックリストが振る舞うか、より伝統的なオプションオブジェクト
 *
 *デフォルトでは、コールバックリストはイベントコールバックリストのように振る舞います。
 *複数回「発火」した。
 *
 *可能なオプション：
 *
 * once：コールバックリストが一度だけ起動されることを保証します（Deferredのように）
 *
 * memory：以前の値を追跡し、追加されたコールバックを呼び出します
 *リストが最新の「記憶された」とすぐに発射された後
 *値（Deferredのように）
 *
 * unique：コールバックを一度だけ追加できるようにします（リストに重複しないようにします）。
 *
 * stopOnFalse：コールバックがfalseを返したときに呼び出しを中断する
 *
 * /
jQuery.Callbacks = function（オプション）{

	//必要に応じて、文字列形式からオブジェクト形式にオプションを変換する
	//（最初にキャッシュをチェックインします）
	options = typeof options === "文字列"？
		createOptions（オプション）：
		jQuery.extend（{}、options）;

	var //リストが現在起動中かどうかを知るためのフラグ
		発砲

		//忘れられないリストのためのラストファイア値
		記憶、

		//リストが既に起動されているかどうかを知るためのフラグ
		解雇、

		//発砲を防ぐためのフラグ
		ロックされています

		//実際のコールバックリスト
		list = []、

		//繰り返し可能リストの実行データのキュー
		キュー= []、

		//現在起動しているコールバックのインデックス（必要に応じて追加/削除によって変更されます）
		fireIndex = -1、

		//コールバック
		fire = function（）{

			//シングルファイアを実施
			locked = locked || options.once;

			//保留中のすべての実行に対してコールバックを実行します
			// burningIndexのオーバーライドと実行時の変更を尊重する
			fired = fire = true;
			for（; queue.length; burningIndex = -1）{
				memory = queue.shift（）;
				while（++ fireIndex <list.length）{

					//コールバックを実行して早期終了を確認します
					if（list [fireIndex] .apply（memory [0]、memory [1]）=== false &&
						options.stopOnFalse）{

						//最後に移動してデータを忘れると、.addは再実行されません
						fireIndex = list.length;
						メモリ=偽。
					}
				}
			}

			//データが終わったらデータを忘れます
			if（！options.memory）{
				メモリ=偽。
			}

			発砲= false。

			//正常に終了したらクリーンアップする
			if（lock）{

				//将来の追加呼び出し用のデータがある場合は空のリストを保持する
				if（メモリ）{
					list = [];

				//そうでなければ、このオブジェクトは使われます
				その他{
					list = "";
				}
			}
		、

		//実際のコールバックオブジェクト
		self = {

			//コールバックまたはコールバックのコレクションをリストに追加します
			追加：function（）{
				if（list）{

					//過去の実行からのメモリがある場合は、追加した後に起動する必要があります。
					if（memory &&！発射）{
						fireIndex = list.length  -  1;
						queue.push（メモリ）;
					}

					（function add（args）{
						jQuery.each（args、function（_、arg）{
							if（isFunction（arg））{
								if（！options.unique ||！self.has（arg））{
									list.push（arg）;
								}
							そうでなければ（arg && arg.length && toType（arg）！== "string"）{

								//再帰的に検査する
								追加（arg）;
							}
						;））;
					（引数）;

					if（memory &&！発射）{
						火災（）;
					}
				}
				これを返してください。
			、

			//リストからコールバックを削除する
			削除する：function（）{
				jQuery.each（引数、関数（_、引数）{
					var index;
					while（（index = jQuery.inArray（arg、list、index））> -1）{
						list.splice（index、1）;

						//起動インデックスを処理する
						if（index <= fireIndex）{
							fireIndex--;
						}
					}
				;））;
				これを返してください。
			、

			//特定のコールバックがリストにあるかどうかを確認します。
			//引数が与えられていない場合は、listがコールバックをアタッチしているかどうかを返します。
			持っている：function（fn）{
				fnを返す
					jQuery.inArray（fn、list）> -1：
					list.length> 0。
			、

			//リストからすべてのコールバックを削除する
			空：function（）{
				if（list）{
					list = [];
				}
				これを返してください。
			、

			// .fireと.addを無効にする
			//現在または保留中の実行を中止する
			//すべてのコールバックと値を消去します
			無効にする：function（）{
				locked = queue = [];
				list = memory = "";
				これを返してください。
			、
			無効：function（）{
				リストを返します。
			、

			// .fireを無効にする
			//メモリがない限り、.addも無効にします（効果がないため）。
			//保留中の実行を中止する
			lock：function（）{
				locked = queue = [];
				if（！memory &&！fire）{
					list = memory = "";
				}
				これを返してください。
			、
			ロックされています：function（）{
				戻る!!ロックされています。
			、

			//与えられたコンテキストと引数ですべてのコールバックを呼び出す
			fireWith：function（context、args）{
				if（！locked）{
					args = args || [];
					args = [context、args.slice？args.slice（）：args];
					queue.push（args）;
					if（！発射）{
						火災（）;
					}
				}
				これを返してください。
			、

			//与えられた引数ですべてのコールバックを呼び出す
			fire：function（）{
				self.fireWith（this、arguments）;
				これを返してください。
			、

			//コールバックがすでに少なくとも1回呼び出されているかどうかを知る
			発火しました：function（）{
				戻る!!解雇。
			}
		;

	自己を返します。
;


関数アイデンティティー（v）{
	vを返す。
}
機能スロー（ex）{
	元を投げます。
}

関数adoptValue（値、解決、拒否、noValue）{
	varメソッド

	試してください{

		//最初に約束のアスペクトを特権同期の振る舞いにチェックする
		if（value && isFunction（（method = value.promise）））{
			method.call（value）.done（解決）.fail（拒否）;

		//その他の手当
		そうでなければ（value && isFunction（（method = value.then）））{
			method.call（value、resolve、reject）;

		//その他のnontable
		その他{

			// Array＃sliceにブール値の `noValue`を整数にキャストさせて` resolve`引数を制御する
			// * false：[値] .slice（0）=> resolve（値）
			// * true：[値] .slice（1）=> resolve（）
			resolve.apply（未定義、[値] .slice（noValue））;
		}

	// Promises / A +の場合、例外を却下に変換します
	// jQuery.whenはテーブルの展開を解除しないので、で示されている余分なチェックをスキップすることができます。
	//条件付きで拒否を抑制するために＃を延期します。
	キャッチ（値）{

		//サポート：Android 4.0のみ
		// .call / .applyなしで呼び出された厳密モード関数はグローバルオブジェクトコンテキストを取得する
		reject.apply（未定義、[値]）;
	}
}

jQuery.extend（{

	延期：関数（func）{
		var tuples = [

				//アクション、リスナー追加、コールバック
				// ... .theハンドラ、引数インデックス、[最終状態]
				["notify"、 "progress"、jQuery.Callbacks（ "memory"）、
					jQuery.Callbacks（ "memory"）、2]、
				["resolve"、 "done"、jQuery.Callbacks（ "once memory"）、
					jQuery.Callbacks（ "メモリ1回"）、0、 "解決された"]、
				["拒否"、 "失敗"、jQuery.Callbacks（ "メモリ1回"）、
					jQuery.Callbacks（ "once once"）、1、 "rejected"]
			]、
			state = "pending"、
			約束= {
				state：function（）{
					状態を返す。
				、
				常に：function（）{
					deferred.done（引数）.fail（引数）;
					これを返してください。
				、
				"キャッチ"：関数（fn）を
					promise.then（null、fn）を返します。
				、

				//バックコンパット用のパイプを保管する
				パイプ：関数（/ * fnDone、fnFail、fnProgress * /）{
					var fns = arguments;

					jQuery.Deferred（function（newDefer）{を返す
						jQuery.each（タプル、関数（i、タプル）{

							//タプル（progress、done、fail）を引数（done、fail、progress）にマッピングします
							var fn = isFunction（fns [tuple [4]]）&& fns [tuple [4]];

							// deferred.progress（function（）{newDeferまたはnewDefer.notifyにバインド））
							// deferred.done（function（）{newDeferまたはnewDefer.resolveにバインド））
							// deferred.fail（function（）{newDeferまたはnewDefer.reject}にバインド）
							延期[タプル[1]]（function（）{
								var戻り値= fn && fn.apply（this、arguments）;
								if（返される&& isFunction（returns.promise））{
									returns.promise（）
										.progress（newDefer.notify）
										.done（newDefer.resolve）
										.fail（newDefer.reject）;
								その他{
									newDefer [tuple [0] + "With"]（
										この、
										fn？[返される]：引数
									;
								}
							;））;
						;））;
						fns = null。
					} ）。約束する（）;
				、
				それから：function（onFulfilled、onRejected、onProgress）{
					var maxDepth = 0;
					関数resolve（depth、deferred、handler、special）{
						return function（）{
							var that = this、
								args = arguments、
								mightThrow = function（）{
									その後varが返されます。

									//サポート：Promises / A +セクション2.3.3.3.3
									// https://promisesaplus.com/#point-59
									//二重解決の試みを無視する
									if（depth <maxDepth）{
										戻る
									}

									戻り値= handler.apply（that、args）;

									//サポート：Promise / A +セクション2.3.1
									// https://promisesaplus.com/#point-48
									if（戻り値=== deferred.promise（））{
										新しいTypeError（ "Thenable self-resolution"）をスローします。
									}

									//サポート：Promises / A +セクション2.3.3.1、3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// `then`を一度だけ取り出す
									then =が返された&&

										//サポート：Promises / A +セクション2.3.4
										// https://promisesaplus.com/#point-64
										//オブジェクトと関数だけが処理可能かどうかをチェックする
										（typeofが返されました=== "object" ||
											typeofが返されました=== "関数"）&&
										返される。

									//返却された整理札を処理する
									if（isFunction（then））{

										//特別なプロセッサ（通知）は解決を待つだけ
										if（特別）{
											then.call（
												戻ってきた、
												解決（maxDepth、延期、ID、特殊）、
												解決（maxDepth、deferred、Thrower、special）
											;

										//通常のプロセッサ（解決）も進行中です
										その他{

											// ...そして古い解像度値を無視します
											maxDepth ++;

											then.call（
												戻ってきた、
												解決（maxDepth、延期、ID、特殊）、
												解決（maxDepth、延期、投入、特別）、
												resolve（maxDepth、deferred、Identity、
													deferred.notifyWith）
											;
										}

									//他のすべての戻り値を処理する
									その他{

										//代替ハンドラのみがコンテキストを渡します
										//複数の値（仕様外の動作）
										if（handler！== Identity）{
											that =未定義
											args = [返される];
										}

										//値を処理します
										//デフォルトのプロセスは解決されました
										（special || deferred.resolveWith）（that、args）;
									}
								、

								//通常のプロセッサのみが（解決）例外をキャッチして拒否します
								プロセス=特別？
									mightThrow：
									関数（） {
										試してください{
											mightThrow（）;
										catch（e）{

											if（jQuery.Deferred.exceptionHook）{
												jQuery.Deferred.exceptionHook（e、
													process.stackTrace）;
											}

											//サポート：Promises / A +セクション2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											//解決後の例外を無視します
											if（depth + 1> = maxDepth）{

												//代替ハンドラのみがコンテキストを渡します
												//複数の値（仕様外の動作）
												if（handler！== Thrower）{
													that =未定義
													args = [e];
												}

												deferred.rejectWith（that、args）;
											}
										}
									;

							//サポート：Promises / A +セクション2.3.3.3.1
							// https://promisesaplus.com/#point-57
							//約束をすぐに再解決してからの誤った拒否を避けます
							//その後のエラー
							if（depth）{
								プロセス（）;
							その他{

								//例外の場合、スタックを記録するためにオプションのフックを呼び出す
								//実行が非同期になると別の方法で失われるため
								if（jQuery.Deferred.getStackHook）{
									process.stackTrace = jQuery.Deferred.getStackHook（）;
								}
								window.setTimeout（process）;
							}
						;
					}

					jQuery.Deferred（function（newDefer）{を返す

						// progress_handlers.add（...）
						タプル[0] [3] .add（
							解決する（
								0、
								newDefer、
								isFunction（onProgress）？
									onProgress：
									身元、
								newDefer.notifyWith
							）
						;

						//ulfilled_handlers.add（...）
						タプル[1] [3] .add（
							解決する（
								0、
								newDefer、
								isFunction（onFulfilled）
									onFulfilled：
									身元
							）
						;

						// rejected_handlers.add（...）
						タプル[2] [3] .add（
							解決する（
								0、
								newDefer、
								isFunction（onRejected）
									onRejected：
									投げる人
							）
						;
					} ）。約束する（）;
				、

				//この延期についての約束を得る
				// objが指定されている場合は、promiseアスペクトがオブジェクトに追加されます
				約束：function（obj）{
					obj！= nullを返しますか？jQuery.extend（obj、promise）：約束。
				}
			、
			延期= {};

		//リスト固有のメソッドを追加する
		jQuery.each（タプル、関数（i、タプル）{
			var list = tuple [2]、
				stateString =タプル[5];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise [tuple [1]] = list.add;

			//ハンドル状態
			if（stateString）{
				list.add（
					関数（） {

						// state = "解決された"（すなわち満たされた）
						// state = "rejected"
						state = stateString;
					、

					// rejected_callbacks.disable
					// satisfiedilled_callbacks.disable
					タプル[3  -  i] [2] .disable、

					// rejected_handlers.disable
					//ulfilled_handlers.disable
					タプル[3  -  i] [3] .disable、

					// progress_callbacks.lock
					タプル[0] [2] .lock、

					// progress_handlers.lock
					タプル[0] [3] .lock
				;
			}

			// progress_handlers.fire
			// satisfiedilled_handlers.fire
			// rejected_handlers.fire
			list.add（tuple [3] .fire）;

			// deferred.notify = function（）{deferred.notifyWith（...）}
			// deferred.resolve = function（）{deferred.resolveWith（...）}
			// deferred.reject = function（）{deferred.rejectWith（...）}
			延期[tuple [0]] = function（）{
				deferred [tuple [0] + "With"]（this === deferred？undefined：this、arguments）;
				これを返してください。
			;

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred [tuple [0] + "With"] = list.fireWith;
		;））;

		//延期を約束にする
		promise.promise（延期）;

		//もしあれば与えられたfuncを呼び出す
		if（func）{
			func.call（延期、延期）。
		}

		// 全部できた！
		延期された返品
	、

	//遅延ヘルパー
	とき：function（singleValue）{
		var

			//未完了の部下の数
			残り= arguments.length、

			//未処理の引数の数
			i =残り、

			//下位フルフィルメントデータ
			resolveContexts = Array（i）、
			resolveValues = slice.call（引数）、

			//マスターDeferred
			master = jQuery.Deferred（）、

			//下位のコールバックファクトリ
			updateFunc = function（i）{
				戻り関数（値）{
					resolveContexts [i] = this;
					resolveValues [i] = arguments.length> 1？slice.call（引数）：値。
					if（！（ - 残り））{
						master.resolveWith（resolveContexts、resolveValues）;
					}
				;
			;

		// Promise.resolveのように単一引数と空の引数が採用されています
		if（残り<= 1）{
			adaptValue（singleValue、master.done（updateFunc（i））.resolve、master.reject、
				！残り）;

			//二次テーブルを展開するために.then（）を使用する（gh-3000を参照）
			if（master.state（）=== "pending" ||
				isFunction（resolveValues [i] && resolveValues [i] .then）））{

				master.then（）を返します。
			}
		}

		//複数の引数がPromise.all配列要素のように集約されています
		while（i--）{
			adoptValue（resolveValues [i]、updateFunc（i）、master.reject）;
		}

		master.promise（）を返します。
	}
;））;


//これらは通常、開発中のプログラマーの間違いを示します。
//デフォルトで飲み込むのではなく、できるだけ早く警告します。
var rerrorNames = / ^（Eval |内部|範囲|参照|構文|タイプ| URI）エラー$ /;

jQuery.Deferred.exceptionHook = function（エラー、スタック）{

	//サポート：IE 8  -  9のみ
	//開発ツールが開いているときにコンソールが存在する。これはいつでも発生する可能性がある
	if（window.console && window.console.warn && error && rerrorNames.test（error.name））{
		window.console.warn（ "jQuery.Deferred例外：" + error.message、error.stack、stack）;
	}
;




jQuery.readyException = function（error）{
	window.setTimeout（function（）{
		エラーをスローします。
	;））;
;




// DOM準備完了の遅延を使用します
var readyList = jQuery.Deferred（）;

jQuery.fn.ready = function（fn）{

	readyList
		.then（fn）

		// jQuery.readyExceptionを関数でラップしてルックアップする
		//コールバックではなくエラー処理時に発生します
		//登録
		.catch（関数（エラー）{
			jQuery.readyException（エラー）。
		;））;

	これを返してください。
;

jQuery.extend（{

	// DOMは使用可能か 発生したらtrueに設定します。
	isReady：false、

	//何個のアイテムを待つかを追跡するためのカウンタ
	// readyイベントが発生します。＃6781を参照
	readyWait：1、

	// DOMの準備ができたら処理する
	準備ができて：機能（待つ）{

		//保留中の保留があるか、すでに準備ができている場合は中止します
		if（wait === true？--jQuery.readyWait：jQuery.isReady）{
			戻る
		}

		// DOMの準備ができていることを忘れないでください
		jQuery.isReady = true;

		//通常のDOM Readyイベントが発生した場合は、デクリメントし、必要に応じて待機します。
		if（wait！== true && --jQuery.readyWait> 0）{
			戻る
		}

		//バインドされている関数がある場合、実行する
		readyList.resolveWith（document、[jQuery]）;
	}
;））;

jQuery.ready.then = readyList.then;

// readyイベントハンドラとセルフクリーンアップメソッド
機能完了（）{
	document.removeEventListener（ "DOMContentLoaded"、完了）;
	window.removeEventListener（ "load"、completed）;
	jQuery.ready（）;
}

// $（document）.ready（）が呼び出されるケースをキャッチ
//ブラウザイベントが発生した後
//サポート：IE <= 9  -  10のみ
//古いIEは「対話型」と通知することがあります
if（document.readyState === "complete" ||
	（document.readyState！== "loading" &&！document.documentElement.doScroll））{

	//スクリプトに準備を遅らせる機会を与えるために非同期に処理する
	window.setTimeout（jQuery.ready）;

その他{

	//便利なイベントコールバックを使う
	document.addEventListener（ "DOMContentLoaded"、完了）;

	// window.onloadへのフォールバック。これは常に機能します
	window.addEventListener（ "load"、completed）;
}




//コレクションの値を取得および設定するための多機能メソッド
//値であれば、/ sはオプションで実行できます
var access = function（elems、fn、key、value、chainable、emptyGet、raw）{
	var i = 0、
		len = elems.length、
		bulk = key == null。

	//多数の値を設定します
	if（toType（key）=== "オブジェクト"）{
		chainable = true;
		for（i in key）{
			アクセス（elems、fn、i、key [i]、true、emptyGet、raw）;
		}

	//値を1つ設定します
	そうでなければ（value！==未定義）{
		chainable = true;

		if（！isFunction（value））{
			raw = trueです。
		}

		if（bulk）{

			//一括操作はセット全体に対して実行されます
			if（raw）{
				fn.call（elems、value）;
				fn = null。

			// ...関数値を実行するときを除く
			その他{
				バルク= fn。
				fn = function（elem、key、value）{
					bulk.call（jQuery（elem）、value）を返します。
				;
			}
		}

		if（fn）{
			for（; i <len; i ++）{
				fn（
					elems [i]、キー、生？
					値：
					value.call（elems [i]、i、fn（elems [i]、キー））
				;
			}
		}
	}

	if（チェーン可能）{
		要素を返す。
	}

	// 取得
	if（bulk）{
		fn.call（elems）を返します。
	}

	lenを返す？fn（elems [0]、key）：emptyGet;
;


//ラクダ化用のダッシュ文字列と一致
var rmsPrefix = / ^  -  ms- /、
	rdashAlpha = /  - （[az]）/ g;

// camelCaseによってreplace（）へのコールバックとして使用されます
関数fcamelCase（all、letter）{
	return.toUpperCase（）を返します。
}

//ダッシュをcamelCaseに変換します。cssとデータモジュールによって使用されます。
//サポート：IE <= 9  -  11、Edge 12  -  15
//マイクロソフトはベンダのプレフィックスをハンプするのを忘れていました（＃9572）
function camelCase（string）{
	string.replace（rmsPrefix、 "ms-"）.replace（rdashAlpha、fcamelCase）を返します。
}
var acceptData = function（所有者）{

	//次のものだけを受け入れます。
	//  - ノード
	//  -  Node.ELEMENT_NODE
	//  -  Node.DOCUMENT_NODE
	//  - オブジェクト
	// - どれか
	return owner.nodeType === 1 || owner.nodeType === 9 || ！（+ owner.nodeType）;
;




関数Data（）{
	this.expando = jQuery.expando + Data.uid ++;
}

Data.uid = 1;

Data.prototype = {

	キャッシュ：機能（所有者）{

		//所有者オブジェクトにすでにキャッシュがあるかどうかを確認します
		var value = owner [this.expando];

		//そうでない場合は作成する
		if（！value）{
			値= {};

			//現代のブラウザでは非要素ノードのデータを受け入れることができます
			//＃8335を参照してください。
			//常に空のオブジェクトを返します。
			if（acceptData（所有者））{

				//それが文字列化またはループオーバーされる可能性が低いノードである場合
				//プレーンな代入を使う
				if（owner.nodeType）{
					owner [this.expando] = value;

				//それ以外の場合は列挙不可能なプロパティで保護する
				//このプロパティを有効にするには、configurableをtrueにする必要があります
				//データが削除されると削除されます
				その他{
					Object.defineProperty（所有者、this.expando、{
						値：値、
						構成可能：true
					;））;
				}
			}
		}

		戻り値
	、
	set：function（所有者、データ、値）{
		var prop
			cache = this.cache（所有者）;

		//ハンドル：[所有者、キー、値]引数
		//常にキャメルケースキーを使用する（gh-2257）
		if（typeof data === "string"）{
			cache [camelCase（data）] = value;

		//ハンドル：[所有者、{プロパティ}]引数
		その他{

			//プロパティを1つずつキャッシュオブジェクトにコピーします
			for（データ内の支柱）{
				cache [camelCase（prop）] = data [prop];
			}
		}
		キャッシュを返します。
	、
	get：function（所有者、キー）{
		リターンキー===未定義？
			this.cache（所有者）：

			//常にキャメルケースキーを使用する（gh-2257）
			owner [this.expando] && owner [this.expando] [camelCase（key）];
	、
	アクセス：機能（所有者、キー、値）{

		//次のいずれかの場合
		//
		// 1.キーが指定されていません
		// 2.文字列キーが指定されましたが、値が指定されていません
		//
		// "read"パスをたどり、getメソッドが決定できるようにします
		//どちらの値を返すか
		//
		// 1.キャッシュオブジェクト全体
		// 2.キーに格納されているデータ
		//
		if（key ===未定義||
				（（key && typeof key === "string"）&& value ===未定義）））{

			this.get（owner、key）を返します。
		}

		//キーが文字列ではない場合、またはキーと値の両方ではない場合
		//（既存のオブジェクト）を次のいずれかで指定、設定または拡張します。
		//
		// 1.プロパティのオブジェクト
		// 2.キーと値
		//
		this.set（所有者、キー、値）;

		// "set"パスは2つのエントリポイントを持つことができるので
		//どのパスが選択されたかに基づいて予想されるデータを返します[*]
		戻り値！==未定義 値：キー。
	、
	削除：function（所有者、キー）{
		var i、
			cache = owner [this.expando];

		if（cache ===未定義）{
			戻る
		}

		if（key！==未定義）{

			//配列またはスペースで区切られたキーの文字列をサポート
			if（Array.isArray（key））{

				// keyがキーの配列の場合
				//常にキャメルケースキーを設定するので、削除します。
				key = key.map（camelCase）;
			その他{
				key = camelCase（key）;

				//スペースを含むキーが存在する場合はそれを使用します。
				//それ以外の場合は、空白以外の文字と一致することによって配列を作成する
				キー=キャッシュのキー？
					[キー]：
					（key.match（rnothtmlwhite）|| []）;
			}

			i = key.length;

			while（i--）{
				キャッシュの削除[key [i]];
			}
		}

		//それ以上データがない場合は、expandoを削除します
		if（key ===未定義|| jQuery.isEmptyObject（cache））{

			//サポート：Chrome <= 35  -  45
			//プロパティを削除するとWebkit＆Blinkのパフォーマンスが低下する
			// DOMノードから。そのため、代わりにundefinedに設定する
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607（バグ制限あり）
			if（owner.nodeType）{
				owner [this.expando] =未定義。
			その他{
				所有者を削除[this.expando];
			}
		}
	、
	hasData：関数（所有者）{
		var cache = owner [this.expando];
		return cache！== undefined &&！jQuery.isEmptyObject（cache）;
	}
;
var dataPriv = new Data（）;

var dataUser = new Data（）;



//実装サマリー
//
// 1. 1.9.xブランチとのAPIサーフェスとセマンティックの互換性を強化する
// 2.ストレージを減らしてモジュールの保守性を向上させる
//単一のメカニズムへのパス。
// 3.「プライベート」データと「ユーザー」データをサポートするために同じ単一のメカニズムを使用します。
// 4. _Never_ "非公開"データをユーザーコードに公開する（TODO：Drop _data、_removeData）
// 5.ユーザオブジェクトに実装の詳細を公開しないようにする（例：expandoプロパティ）
// 6. 2014年にWeakMapに実装をアップグレードするための明確な道筋を示す

var rbrace = / ^（？：\ {[\ w \ W] * \} | \ [[\ w \ W] * \]）$ /、
	rmultiDash = / [AZ] / g;

関数getData（データ）{
	if（data === "true"）{
		trueを返します。
	}

	if（data === "false"）{
		falseを返します。
	}

	if（data === "null"）{
		nullを返します。
	}

	//文字列を変更しない場合にのみ数値に変換します
	if（data === + data + ""）{
		データを返す。
	}

	if（rbrace.test（data））{
		JSON.parse（data）を返します。
	}

	データを返します。
}

関数dataAttr（elem、key、data）{
	var name;

	//内部で何も見つからなかった場合は、何かを取得してみます
	// HTML5のdata- *属性からのデータ
	if（データ===未定義&& elem.nodeType === 1）{
		name = "data-" + key.replace（rmultiDash、 " -  $＆"）.toLowerCase（）;
		data = elem.getAttribute（name）;

		if（typeof data === "string"）{
			試してください{
				data = getData（データ）;
			}キャッチ（E）{}

			//後で変更されないようにデータを設定してください。
			dataUser.set（elem、key、data）;
		その他{
			データ=未定義。
		}
	}
	データを返します。
}

jQuery.extend（{
	hasData：function（elem）{
		dataUser.hasData（elem）を返します。dataPriv.hasData（elem）;
	、

	データ：関数（elem、name、data）{
		dataUser.access（elem、name、data）を返します。
	、

	removeData：function（elem、name）{
		dataUser.remove（elem、name）;
	、

	// TODO：_dataと_removeDataへの呼び出しはすべて置き換えられました。
	// dataPrivメソッドを直接呼び出すと、これらは廃止される可能性があります。
	_data：function（elem、name、data）{
		dataPriv.access（elem、name、data）を返します。
	、

	_removeData：function（elem、name）{
		dataPriv.remove（elem、name）;
	}
;））;

jQuery.fn.extend（{
	データ：関数（キー、値）{
		var i、名前、データ、
			elem = this [0]、
			attrs = elem && elem.attributes;

		//すべての値を取得
		if（key ===未定義）{
			if（this.length）{
				data = dataUser.get（elem）;

				if（elem.nodeType === 1 &&！dataPriv.get（elem、 "hasDataAttrs"）））{
					i = attrs.length;
					while（i--）{

						//サポート：IE 11のみ
						// attrs要素はnullでもかまいません（＃14894）
						if（attrs [i]）{
							name = attrs [i] .name;
							if（name.indexOf（ "data-"）=== 0）{
								name = camelCase（name.slice（5））;
								dataAttr（elem、name、data [name]）;
							}
						}
					}
					dataPriv.set（elem、 "hasDataAttrs"、true）;
				}
			}

			データを返します。
		}

		//複数の値を設定します
		if（typeof key === "object"）{
			this.each（function（）{を返します。
				dataUser.set（this、key）;
			;））;
		}

		リターンアクセス（this、function（value）{
			VARデータ。

			//呼び出し元のjQueryオブジェクト（要素が一致する）が空ではない
			//（したがって、この[0]に要素がある）そして
			// valueパラメータは未定義ではありませんでした。空のjQueryオブジェクト
			// elem = this [0]に対して `undefined`になる
			//データキャッシュを読み込もうとした場合は、例外をスローします。
			if（elem && value ===未定義）{

				//キャッシュからデータを取得しようとしています
				//キーは常にDataでキャメルケースになります
				data = dataUser.get（elem、key）;
				if（data！==未定義）{
					データを返します。
				}

				//データを「発見」しようとしました
				// HTML5カスタムデータ -  * attrs
				data = dataAttr（elem、key）;
				if（data！==未定義）{
					データを返します。
				}

				//本当に頑張りましたが、データが存在しません。
				戻る
			}

			//データを設定します
			this.each（function（）{

				//常にキャメルケースキーを保存します
				dataUser.set（this、key、value）;
			;））;
		}、null、値、arguments.length> 1、null、true）;
	、

	removeData：関数（キー）{
		this.each（function（）{を返します。
			dataUser.remove（this、key）;
		;））;
	}
;））;


jQuery.extend（{
	キュー：関数（elem、type、data）{
		varキュー。

		if（elem）{
			type =（type || "fx"）+ "queue";
			queue = dataPriv.get（elem、type）;

			//これが単なるルックアップであれば、すばやく出てデキューをスピードアップ
			if（データ）{
				if（！queue || Array.isArray（data））{
					queue = dataPriv.access（elem、type、jQuery.makeArray（data））;
				その他{
					queue.push（data）;
				}
			}
			リターンキュー|| [];
		}
	、

	デキュー：function（elem、type）{
		type = type || "fx";

		var queue = jQuery.queue（elem、type）、
			startLength = queue.length、
			fn = queue.shift（）、
			hooks = jQuery._queueHooks（elem、type）、
			next = function（）{
				jQuery.dequeue（elem、type）;
			;

		// fxキューがデキューされた場合は、常に進行状況センチネルを削除してください
		if（fn === "inprogress"）{
			fn = queue.shift（）;
			startLength--;
		}

		if（fn）{

			//進捗センチネルを追加して、fxキューが作成されないようにします。
			//自動的にデキュー
			if（type === "fx"）{
				queue.unshift（ "inprogress"）;
			}

			//最後のキュー停止機能をクリアする
			hooks.stopを削除します。
			fn.call（elem、next、hooks）;
		}

		if（！startLength &&フック）{
			hooks.empty.fire（）;
		}
	、

	//非公開 -  queueHooksオブジェクトを生成するか、現在のオブジェクトを返す
	_queueHooks：function（elem、type）{
		var key = type + "queueHooks";
		dataPriv.get（elem、key）を返します|| dataPriv.access（elem、key、{
			空の場合：jQuery.Callbacks（ "メモリ1回"）.add（function（）{
				dataPriv.remove（elem、[type + "queue"、key]）;
			）
		;））;
	}
;））;

jQuery.fn.extend（{
	キュー：関数（タイプ、データ）{
		var setter = 2;

		if（typeof type！== "string"）{
			data = type;
			type = "fx";
			setter--;
		}

		if（arguments.length <setter）{
			jQuery.queue（this [0]、type）を返します。
		}

		データを返す===未定義？
			この ：
			this.each（function（）{
				var queue = jQuery.queue（this、type、data）;

				//このキューに確実にフックする
				jQuery._queueHooks（this、type）;

				if（type === "fx" && queue [0]！== "inprogress"）{
					jQuery.dequeue（this、type）;
				}
			;））;
	、
	デキュー：関数（タイプ）{
		this.each（function（）{を返します。
			jQuery.dequeue（this、type）;
		;））;
	、
	clearQueue：function（type）{
		this.queueを返します（type || "fx"、[]）;
	、

	//特定のタイプのキューがあるときに解決された約束を取得する
	//空です（デフォルトではfxが型です）
	約束：function（type、obj）{
		var tmp、
			カウント= 1、
			defer = jQuery.Deferred（）、
			elements = this、
			i = this.length、
			resolve = function（）{
				if（！（--count））{
					defer.resolveWith（elements、[elements]）;
				}
			;

		if（typeof type！== "string"）{
			obj = type;
			type =未定義
		}
		type = type || "fx";

		while（i--）{
			tmp = dataPriv.get（elements [i]、type + "queueHooks"）;
			if（tmp && tmp.empty）{
				++を数えます。
				tmp.empty.add（解決）;
			}
		}
		resolve（）;
		defer.promise（obj）を返します。
	}
;））;
var pnum =（/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/）.source;

var rcssNum = new RegExp（ "^（？：（[+  - ]）= |）（" + pnum + "）（[az％] *）$"、 "i"）;


var cssExpand = ["Top"、 "Right"、 "Bottom"、 "Left"];

var isHiddenWithinTree = function（elem、el）{

		// isHiddenWithinTreeはjQuery＃filter関数から呼び出すことができます。
		//その場合、要素は2番目の引数になります
		elem = el || elem;

		//インラインスタイルよりも優れている
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			//そうでなければ、計算スタイルをチェックする
			//サポート：Firefox <= 43  -  45
			//接続されていない要素は計算された表示を持つことができます。
			//ドキュメント内
			jQuery.contains（elem.ownerDocument、elem）&&

			jQuery.css（elem、 "display"）=== "none";
	;

var swap =関数（elem、オプション、コールバック、引数）{
	var ret、名前、
		old = {};

	//古い値を覚えて、新しい値を挿入します
	for（オプション名）{
		old [name] = elem.style [name];
		elem.style [name] = options [name];
	}

	ret = callback.apply（elem、args || []）;

	//古い値を元に戻す
	for（オプション名）{
		elem.style [name] = old [name];
	}

	retを返す。
;




関数adjustCSS（elem、prop、valueParts、tween）{
	VAR調整、スケール、
		maxIterations = 20、
		currentValue = tween？
			関数（） {
				tween.cur（）を返します。
			：
			関数（） {
				jQuery.css（elem、prop、 ""）を返します。
			、
		initial = currentValue（）、
		unit = valueParts && valueParts [3] || （jQuery.cssNumber [prop]？ ""： "px"）、

		//開始値の計算は潜在的な単位の不一致に必要です
		initialInUnit =（jQuery.cssNumber [prop] || unit！== "px" && + initial）&&
			rcssNum.exec（jQuery.css（elem、prop））;

	if（initialInUnit && initialInUnit [3]！==単位）{

		//サポート：Firefox <= 54
		// CSSの上限からの干渉を防ぐために反復目標値を半分にする（gh-2144）
		初期＝初期／ ２。

		// jQuery.cssによって報告された信頼ユニット
		unit = unit || initialInUnit [3];

		//ゼロ以外の出発点から繰り返し近似する
		initialInUnit = +初期|| 1;

		while（maxIterations--）{

			//最善の推測を評価して更新します（2倍にすると推測がゼロになります）。
			//スケールが1以上であれば終了します（古い*新しい製品を非ポジティブにします）。
			jQuery.style（elem、prop、initialInUnit + unit）;
			if（（1  - スケール）*（1  - （スケール= currentValue（）/ initial || 0.5））<= 0）{
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style（elem、prop、initialInUnit + unit）;

		//後でトゥイーンプロパティを必ず更新してください
		valueParts = valueParts || [];
	}

	if（valueParts）{
		initialInUnit = + initialInUnit || +頭文字|| 0;

		//指定した場合は相対オフセット（+ = /  -  =）を適用する
		調整済み= valueParts [1]？
			initialInUnit +（valueParts [1] + 1）* valueParts [2]：
			+ valueParts [2];
		if（トゥイーン）{
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end =調整済み。
		}
	}
	返品調整済み。
}


var defaultDisplayMap = {};

関数getDefaultDisplay（elem）{
	var temp、
		doc = elem.ownerDocument、
		nodeName = elem.nodeName、
		display = defaultDisplayMap [nodeName];

	if（表示）{
		ディスプレイに戻ります。
	}

	temp = doc.body.appendChild（doc.createElement（nodeName））;
	display = jQuery.css（temp、 "display"）;

	temp.parentNode.removeChild（一時）;

	if（display === "none"）{
		display = "block";
	}
	defaultDisplayMap [nodeName] = display;

	ディスプレイに戻ります。
}

関数showHide（elements、show）{
	varディスプレイ、elem、
		値= []、
		index = 0、
		length = elements.length;

	//変更が必要な要素の新しい表示値を決定します
	for（; index <length; index ++）{
		elem = elements [index];
		if（！elem.style）{
			持続する;
		}

		display = elem.style.display;
		if（表示）{

			//カスケードに隠された要素の可視性を強制するので、即時の（そして遅い）
			//表示値が空でない限り、この最初のループでチェックが必要です
			//インラインまたは復元予定）
			if（display === "none"）{
				values [index] = dataPriv.get（elem、 "display"）|| ヌル;
				if（！values [index]）{
					elem.style.display = "";
				}
			}
			if（elem.style.display === "" && isHiddenWithinTree（elem））{
				values [index] = getDefaultDisplay（elem）;
			}
		その他{
			if（display！== "none"）{
				values [index] = "none";

				//上書きしているものを覚えています
				dataPriv.set（elem、 "display"、display）;
			}
		}
	}

	//一定のリフローを避けるために、2番目のループで要素の表示を設定します
	for（index = 0; index <length; index ++）{
		if（values [index]！= null）{
			elements [index] .style.display = values [index];
		}
	}

	要素を返します。
}

jQuery.fn.extend（{
	show：function（）{
		showHide（this、true）を返します。
	、
	隠す：function（）{
		showHide（this）を返します。
	、
	切り替え：機能（状態）{
		if（typeof state === "boolean"）{
			状態を返す？this.show（）：this.hide（）;
		}

		this.each（function（）{を返します。
			if（isHiddenWithinTree（this））{
				jQuery（this）.show（）;
			その他{
				jQuery（this）.hide（）;
			}
		;））;
	}
;））;
var rcheckableType =（/ ^（?:チェックボックス|ラジオ）$ / i）;

var rtagName =（/ <（[az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] +）/ i）;

var rscriptType =（/ ^ $ | ^ module $ | \ /（?: java | ecma）script / i）;



// XHTMLをサポートするためにこれらのタグを閉じる必要があります（＃13200）
var wrapMap = {

	//サポート：IE <= 9のみ
	オプション：[1、 "<select multiple = 'multiple'>"、 "</select>"]、

	// XHTMLパーサーは要素に魔法のように要素を挿入しません
	//タグスープパーサと同じ方法。だから私たちは短くすることはできません
	//これは<tbody>または他の必須要素を省略することによって。
	thead：[1、 "<table>"、 "</table>"]、
	col：[2、 "<table> <colgroup>"、 "</colgroup> </table>"]、
	tr：[2、 "<table> <tbody>"、 "</tbody> </table>"]、
	td：[3、 "<table> <tbody> <tr>"、 "</tr> </tbody> </table>"]、

	_default：[0、 ""、 ""]
;

//サポート：IE <= 9のみ
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


関数getAll（コンテキスト、タグ）{

	//サポート：IE <= 9  -  11のみ
	//ホストオブジェクトに対する引数のないメソッド呼び出しを回避するためにtypeofを使用する（＃15151）
	var ret;

	if（typeof context.getElementsByTagName！== "未定義"）{
		ret = context.getElementsByTagName（tag || "*"）;

	そうでなければ（typeof context.querySelectorAll！== "undefined"）{
		ret = context.querySelectorAll（tag || "*"）;

	その他{
		ret = [];
	}

	if（tag ===未定義|| tag && nodeName（context、tag））{
		jQuery.merge（[context]、ret）を返します。
	}

	retを返す。
}


//スクリプトを既に評価済みとしてマークする
関数setGlobalEval（elems、refElements）{
	var i = 0、
		l = elems.length;

	for（; i <l; i ++）{
		dataPriv.set（
			elems [i]、
			"globalEval"、
			！refElements || dataPriv.get（refElements [i]、 "globalEval"）
		;
	}
}


var rhtml = / <|＆＃？\ w +; /;

function buildFragment（elems、コンテキスト、スクリプト、選択、無視）{
	var elem、tmp、tag、wrap、contains、j、
		fragment = context.createDocumentFragment（）、
		nodes = []、
		i = 0、
		l = elems.length;

	for（; i <l; i ++）{
		elem = elems [i];

		if（elem || elem === 0）{

			//ノードを直接追加する
			if（toType（elem）=== "オブジェクト"）{

				//サポート：Android <= 4.0のみ、PhantomJS 1のみ
				// push.apply（_、arraylike）は古代のWebKitでスローされる
				jQuery.merge（nodes、elem.nodeType？[elem]：elem）;

			//非HTMLをテキストノードに変換する
			そうでなければ（！rhtml.test（elem））{
				nodes.push（context.createTextNode（elem））;

			// HTMLをDOMノードに変換
			その他{
				tmp = tmp || fragment.appendChild（context.createElement（ "div"））;

				//標準表現を逆シリアル化します
				tag =（rtagName.exec（elem）|| [""、 ""]）[1] .toLowerCase（）;
				wrap = wrapMap [タグ] || wrapMap._default;
				tmp.innerHTML = wrap [1] + jQuery.htmlPrefilter（elem）+ wrap [2];

				//ラッパーを介して正しいコンテンツに降りる
				j = wrap [0];
				while（j--）{
					tmp = tmp.lastChild;
				}

				//サポート：Android <= 4.0のみ、PhantomJS 1のみ
				// push.apply（_、arraylike）は古代のWebKitでスローされる
				jQuery.merge（nodes、tmp.childNodes）;

				//最上位コンテナを覚えている
				tmp = fragment.firstChild;

				//作成したノードが孤立していることを確認します（＃12392）
				tmp.textContent = "";
			}
		}
	}

	//ラッパーをフラグメントから削除します
	fragment.textContent = "";

	ｉ ＝ ０。
	while（（elem = nodes [i ++]））{

		//すでにコンテキストコレクションにある要素をスキップする（trac-4087）
		if（selection && jQuery.inArray（elem、selection）> -1）{
			if（無視）{
				ignored.push（elem）;
			}
			持続する;
		}

		contains = jQuery.contains（elem.ownerDocument、elem）;

		//フラグメントに追加
		tmp = getAll（fragment.appendChild（elem）、 "script"）;

		//スクリプト評価履歴を保存する
		if（を含む）{
			setGlobalEval（tmp）;
		}

		//実行ファイルをキャプチャする
		if（スクリプト）{
			ｊ ＝ ０。
			while（（elem = tmp [j ++]））{
				if（rscriptType.test（elem.type || ""））{
					scripts.push（elem）;
				}
			}
		}
	}

	フラグメントを返します。
}


（ 関数（） {
	var fragment = document.createDocumentFragment（）、
		div = fragment.appendChild（document.createElement（ "div"））、
		input = document.createElement（ "input"）;

	//サポート：Android 4.0  -  4.3のみ
	//名前が設定されているとチェック状態が失われる（＃11217）
	//サポート：Windows Web Apps（WWA）
	// `name`と` type`はWWAに.setAttributeを使わなければならない（＃14901）
	input.setAttribute（ "type"、 "radio"）;
	input.setAttribute（ "checked"、 "checked"）;
	input.setAttribute（ "name"、 "t"）;

	div.appendChild（入力）;

	//サポート：Android <= 4.1のみ
	//古いWebKitはフラグメントのチェック状態を正しく複製しません
	support.checkClone = div.cloneNode（true）.cloneNode（true）.lastChild.checked;

	//サポート：IE <= 11のみ
	// textarea（およびチェックボックス）defaultValueが正しく複製されていることを確認してください
	div.innerHTML = "<textarea> x </textarea>";
	support.noCloneChecked = !! div.cloneNode（true）.lastChild.defaultValue;
（）;
var documentElement = document.documentElement;



var
	rkeyEvent = / ^ key /、
	rmouseEvent = / ^（？：マウス|ポインタ|コンテキストメニュー|ドラッグ|ドロップ）|クリック/、
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

関数returnTrue（）{
	trueを返します。
}

関数returnFalse（）{
	falseを返します。
}

//サポート：IE <= 9のみ
//詳細については＃13393を参照
function safeActiveElement（）{
	試してください{
		document.activeElementを返します。
	}キャッチ（エラー）{}
}

関数on（elem、types、selector、data、fn、one）{
	var origFn、タイプ。

	//型は型/ハンドラのマップにすることができます
	if（typeof types === "オブジェクト"）{

		//（タイプ - オブジェクト、セレクタ、データ）
		if（typeof selector！== "string"）{

			//（タイプ - オブジェクト、データ）
			データ=データ|| セレクタ;
			セレクタ=未定義。
		}
		for（型を打ち込む）{
			on（elem、type、selector、data、types [type]、one）;
		}
		elemを返します。
	}

	if（data == null && fn == null）{

		//（タイプ、fn）
		fn =セレクタ。
		data = selector = undefined;
	そうでなければ（fn == null）{
		if（typeof selector === "string"）{

			//（タイプ、セレクタ、fn）
			fn =データ。
			データ=未定義。
		その他{

			//（タイプ、データ、fn）
			fn =データ。
			データ=セレクタ。
			セレクタ=未定義。
		}
	}
	if（fn === false）{
		fn = returnFalse;
	そうでなければ（！fn）{
		elemを返します。
	}

	if（one === 1）{
		origFn = fn;
		fn = function（event）{

			//イベントには情報が含まれているため、空のセットを使用できます
			jQuery（）。off（イベント）;
			origFn.apply（this、arguments）を返します。
		;

		//呼び出し側がorigFnを使用して削除できるように、同じGUIDを使用します
		fn.guid = origFn.guid || （origFn.guid = jQuery.guid ++）;
	}
	elem.each（function（）{を返す
		jQuery.event.add（this、types、fn、data、selector）;
	;））;
}

/ *
 *イベントを管理するためのヘルパー関数 - パブリックインターフェイスの一部ではありません。
 *多くのアイデアについて、Dean EdwardsのaddEventライブラリを参照してください。
 * /
jQuery.event = {

	グローバル： {}、

	追加：function（elem、types、handler、data、selector）{

		var handleObjIn、eventHandle、tmp、
			events、t、handleObj、
			special、handler、type、ネームスペース、origType、
			elemData = dataPriv.get（elem）;

		// noDataまたはtext / commentノードにイベントを添付しない（ただし、プレーンオブジェクトは許可する）
		if（！elemData）{
			戻る
		}

		//呼び出し側は、ハンドラの代わりにカスタムデータのオブジェクトを渡すことができます
		if（handler.handler）{
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		//アタッチ時に無効なセレクタが例外を投げるようにする
		// elemが非要素ノード（documentなど）の場合はdocumentElementに対して評価する
		if（selector）{
			jQuery.find.matchesSelector（documentElement、selector）;
		}

		//ハンドラが一意のIDを持っていることを確認し、後でそれを見つけたり削除したりするために使用する
		if（！handler.guid）{
			handler.guid = jQuery.guid ++;
		}

		//これが最初のイベントであれば、要素のイベント構造とメインハンドラを初期化する
		if（！（events = elemData.events））{
			events = elemData.events = {};
		}
		if（！（eventHandle = elemData.handle））{
			eventHandle = elemData.handle = function（e）{

				// jQuery.event.trigger（）の2番目のイベントを破棄
				//ページがアンロードされた後にイベントが呼び出されたとき
				return typeof jQuery！== "undefined" && jQuery.event.triggered！== e.type？
					jQuery.event.dispatch.apply（elem、arguments）：未定義。
			;
		}

		//スペースで区切られた複数のイベントを処理します
		types =（types || ""）.match（rnothtmlwhite）|| [""];
		t = types.length;
		while（t--）{
			tmp = rtypenamespace.exec（types [t]）|| [];
			type = origType = tmp [1];
			名前空間=（tmp [2] || ""）.split（ "。"）.sort（）;

			//名前空間のみのハンドラをアタッチしないで、必ず*型にする必要があります
			if（！type）{
				持続する;
			}

			//イベントがその種類を変更した場合は、変更された種類の特別なイベントハンドラを使用する
			special = jQuery.event.special [type] || {};

			//セレクタが定義されている場合は、特別なイベントAPIタイプを決定し、それ以外の場合はタイプを指定
			type =（selector？special.delegateType：special.bindType）|| タイプ;

			//新しくリセットされたタイプに基づいてspecialを更新する
			special = jQuery.event.special [type] || {};

			// handleObjはすべてのイベントハンドラに渡されます
			handleObj = jQuery.extend（{
				タイプ：タイプ、
				origType：origType、
				データ：データ、
				handler：ハンドラ、
				guid：handler.guid、
				セレクタ：セレクタ、
				needsContext：selector && jQuery.expr.match.needsContext.test（selector）、
				名前空間：namespaces.join（ "。"）
			handleObjIn）;

			//最初のイベントであれば、イベントハンドラキューを初期化します
			if（！（ハンドラー=イベント[タイプ]））{
				ハンドラ=イベント[タイプ] = [];
				handlers.delegateCount = 0;

				//特殊イベントハンドラがfalseを返す場合にのみaddEventListenerを使用する
				if（！special.setup ||
					special.setup.call（elem、data、名前空間、eventHandle）=== false）{

					if（elem.addEventListener）{
						elem.addEventListener（type、eventHandle）;
					}
				}
			}

			if（special.add）{
				special.add.call（elem、handleObj）;

				if（！handleObj.handler.guid）{
					handleObj.handler.guid = handler.guid;
				}
			}

			//要素のハンドラリストに追加、前に代行
			if（selector）{
				handlers.splice（handlers.delegateCount ++、0、handleObj）;
			その他{
				handlers.push（handleObj）;
			}

			//イベント最適化のために、どのイベントがこれまでに使用されたかを追跡します
			jQuery.event.global [type] = true;
		}

	、

	//要素からイベントまたは一連のイベントをデタッチする
	削除：function（elem、types、handler、selector、mappedTypes）{

		var j、origCount、tmp、
			events、t、handleObj、
			special、handler、type、ネームスペース、origType、
			elemData = dataPriv.hasData（elem）&& dataPriv.get（elem）;

		if（！elemData ||！（events = elemData.events））{
			戻る
		}

		// types内のtype.namespaceごとに1回; タイプは省略可能
		types =（types || ""）.match（rnothtmlwhite）|| [""];
		t = types.length;
		while（t--）{
			tmp = rtypenamespace.exec（types [t]）|| [];
			type = origType = tmp [1];
			名前空間=（tmp [2] || ""）.split（ "。"）.sort（）;

			//要素のすべてのイベント（この名前空間に存在する場合）をバインド解除する
			if（！type）{
				for（イベントを入力）{
					jQuery.event.remove（elem、type + types [t]、ハンドラ、セレクタ、true）;
				}
				持続する;
			}

			special = jQuery.event.special [type] || {};
			type =（selector？special.delegateType：special.bindType）|| タイプ;
			ハンドラー=イベント[タイプ] || [];
			tmp = tmp [2] &&
				new RegExp（ "（^ | \\。）" + namespaces.join（ "\\。（？：。* \\。|）"）+ "（\\。| $）"）;

			//一致するイベントを削除します
			origCount = j = handlers.length;
			while（j--）{
				handleObj = handlers [j];

				if（（mappedTypes || origType === handleObj.origType）&&
					（！handler || handler.guid === handleObj.guid）&&
					（！tmp || tmp.test（handleObj.namespace））&&
					（！selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector））{
					handlers.splice（j、1）;

					if（handleObj.selector）{
						handlers.delegateCount--;
					}
					if（special.remove）{
						special.remove.call（elem、handleObj）;
					}
				}
			}

			//何かを削除してハンドラがもう存在しない場合は、汎用イベントハンドラを削除します
			//（特別なイベントハンドラの削除中に無限の再帰が発生する可能性を回避する）
			if（origCount &&！handlers.length）{
				if（！special.teardown ||
					special.teardown.call（elem、名前空間、elemData.handle）=== false）{

					jQuery.removeEvent（elem、type、elemData.handle）;
				}

				イベントを削除する[type]。
			}
		}

		//使用されなくなった場合はデータとエキスパンドを削除
		if（jQuery.isEmptyObject（events））{
			dataPriv.remove（elem、 "イベントの処理"）;
		}
	、

	ディスパッチ：function（nativeEvent）{

		//ネイティブイベントオブジェクトから書き込み可能なjQuery.Eventを作成する
		var event = jQuery.event.fix（nativeEvent）;

		var i、j、ret、一致、handleObj、handlerQueue、
			args = new Array（arguments.length）、
			ハンドラー=（dataPriv.get（this、 "events"）|| {}）[event.type] || []、
			special = jQuery.event.special [event.type] || {};

		//（読み取り専用）ネイティブイベントではなく、修正されたjQuery.Eventを使用する
		args [0] =イベント。

		for（i = 1; i <arguments.length; i ++）{
			args [i] = arguments [i];
		}

		event.delegateTarget = this;

		//マップされた型のpreDispatchフックを呼び出し、必要に応じてそれをベイルさせる
		if（special.preDispatch && special.preDispatch.call（this、event）=== false）{
			戻る
		}

		//ハンドラを決定します
		handlerQueue = jQuery.event.handlers.call（this、event、handlers）;

		//最初にデリゲートを実行する 彼らは私たちの下の繁殖を止めたいと思うかもしれない
		ｉ ＝ ０。
		while（（matched = handlerQueue [i ++]）&&！event.isPropagationStopped（））{
			event.currentTarget = matched.elem;

			ｊ ＝ ０。
			while（（handleObj = matched.handlers [j ++]）&&
				！event.isImmediatePropagationStopped（））{

				//トリガーされたイベントは1）名前空間を持たない、または2）名前空間を持つ必要があります
				//バインドされたイベント内のサブセットまたはそれと等しいサブセット（両方とも名前空間を持つことはできない）
				if（！event.rnamespace || event.rnamespace.test（handleObj.namespace））{

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret =（（jQuery.event.special [handleObj.origType] || {}）.handle ||
						handleObj.handler）.apply（matched.elem、args）;

					if（ret！==未定義）{
						if（（event.result = ret）=== false）{
							event.preventDefault（）;
							event.stopPropagation（）;
						}
					}
				}
			}
		}

		//マッピングされた型のpostDispatchフックを呼び出します
		if（special.postDispatch）{
			special.postDispatch.call（this、event）;
		}

		event.resultを返します。
	、

	ハンドラー：関数（イベント、ハンドラー）{
		var i、handleObj、sel、matchedHandlers、matchedSelectors、
			handlerQueue = []、
			delegateCount = handlers.delegateCount、
			cur = event.target;

		//デリゲートハンドラを探す
		if（delegateCount &&

			//サポート：IE <= 9
			//ブラックホールのSVG <use>インスタンスツリー（trac-13180）
			cur.nodeType &&

			//サポート：Firefox <= 42
			//非主ポインタボタンを示す仕様違反のクリックを抑制しました。（trac-3861）
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			//サポート：IE 11のみ
			// ...ラジオ入力の矢印キー「クリック」はしません、 `button` -1を持つことができます（gh-2343）
			！（event.type === "クリック" && event.button> = 1））{

			for（; cur！== this; cur = cur.parentNode || this）{

				//要素以外をチェックしない（＃13208）
				//無効な要素に対するクリックを処理しない（＃6911、＃8165、＃11382、＃11764）
				if（cur.nodeType === 1 &&！（event.type === "クリック" && cur.disabled === true））{
					matchedHandlers = [];
					matchedSelectors = {};
					for（i = 0; i <delegateCount; i ++）{
						handleObj = handlers [i];

						// Object.prototypeのプロパティと競合しないようにしました（＃13203）
						sel = handleObj.selector + "";

						if（matchedSelectors [sel] ===未定義）{
							matchedSelectors [sel] = handleObj.needsContext？
								jQuery（sel、this）.index（cur）> -1：
								jQuery.find（sel、this、null、[cur]）.length;
						}
						if（matchedSelectors [sel]）{
							matchedHandlers.push（handleObj）;
						}
					}
					if（matchedHandlers.length）{
						handlerQueue.push（{elem：cur、ハンドラ：matchedHandlers}）;
					}
				}
			}
		}

		//残りの（直接バインドされた）ハンドラを追加します
		cur = this;
		if（delegateCount <handlers.length）{
			handlerQueue.push（{elem：cur、ハンドラ：handlers.slice（delegateCount）}）;
		}

		handlerQueueを返します。
	、

	addProp：function（name、hook）{
		Object.defineProperty（jQuery.Event.prototype、name、{
			列挙可能：真、
			構成可能：true、

			取得：isFunction（フック）？
				関数（） {
					if（this.originalEvent）{
							戻りフック（this.originalEvent）;
					}
				：
				関数（） {
					if（this.originalEvent）{
							this.originalEvent [name]を返します。
					}
				、

			set：function（value）{
				Object.defineProperty（this、name、{
					列挙可能：真、
					構成可能：true、
					書き込み可能：真、
					値：値
				;））;
			}
		;））;
	、

	修正：function（originalEvent）{
		originalEvent [jQuery.expando]を返しますか？
			originalEvent：
			new jQuery.Event（originalEvent）;
	、

	特殊： {
		load：{

			//発生したimage.loadイベントがwindow.loadにバブリングしないようにする
			noBubble：真
		、
		フォーカス：{

			//可能であればネイティブイベントを発生させるので、ぼかし/フォーカスシーケンスは正しい
			トリガー：function（）{
				if（this！== safeActiveElement（）&& this.focus）{
					this.focus（）;
					falseを返します。
				}
			、
			delegateType： "focusin"
		、
		ぼかし：{
			トリガー：function（）{
				if（this === safeActiveElement（）&& this.blur）{
					this.blur（）;
					falseを返します。
				}
			、
			delegateType： "フォーカスアウト"
		、
		クリック：{

			//チェックボックスの場合、ネイティブイベントを起動し、チェック状態が正しいようにする
			トリガー：function（）{
				if（this.type === "checkbox" && this.click && nodeName（this、 "input"）））{
					this.click（）;
					falseを返します。
				}
			、

			//ブラウザ間の一貫性を保つため、リンク上でネイティブの.click（）を起動しない
			_default：function（event）{
				nodeName（event.target、 "a"）を返します。
			}
		、

		beforeunload：{
			postDispatch：function（event）{

				//サポート：Firefox 20以降
				// FirefoxはreturnValueフィールドが設定されていない場合は警告しません。
				if（event.result！==未定義&& event.originalEvent）{
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
;

jQuery.removeEvent = function（elem、type、handle）{

	//この「if」は普通のオブジェクトに必要です
	if（elem.removeEventListener）{
		elem.removeEventListener（type、handle）;
	}
;

jQuery.Event = function（src、props）{

	// 'new'キーワードなしでインスタンス化を許可する
	if（！（このinstanceof jQuery.Event））{
		新しいjQuery.Event（src、props）を返します。
	}

	//イベントオブジェクト
	if（src && src.type）{
		this.originalEvent = src;
		this.type = src.type;

		//ドキュメントを膨らませるイベントは、禁止としてマークされている可能性があります
		//ツリーの下にあるハンドラによって 正しい値を反映してください。
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented ===未定義&&

				//サポート：Android <= 2.3のみ
				src.returnValue === false？
			returnTrue：
			returnFalse;

		//ターゲットプロパティを作成する
		//サポート：Safari <= 6  -  7のみ
		//ターゲットはテキストノードではいけません（＃504、＃13143）
		this.target =（src.target && src.target.nodeType === 3）
			src.target.parentNode：
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// イベントタイプ
	その他{
		this.type = src;
	}

	//明示的に提供されたプロパティをイベントオブジェクトに置く
	if（小道具）{
		jQuery.extend（this、props）;
	}

	//着信イベントにタイムスタンプがない場合はタイムスタンプを作成します
	this.timeStamp = src && src.timeStamp || Date.now（）;

	//修正済みとしてマーク
	this [jQuery.expando] = true;
;

// jQuery.EventはECMAScript言語バインディングで指定されているDOM3イベントに基づいています
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	コンストラクタ：jQuery.Event、
	isDefaultPrevented：returnFalse、
	isPropagationStopped：returnFalse、
	isImmediatePropagationStopped：returnFalse、
	isSimulated：false、

	preventDefault：function（）{
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if（e &&！this.isSimulated）{
			e.preventDefault（）;
		}
	、
	stopPropagation：function（）{
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if（e &&！this.isSimulated）{
			e.stopPropagation（）;
		}
	、
	stopImmediatePropagation：function（）{
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if（e &&！this.isSimulated）{
			e.stopImmediatePropagation（）;
		}

		this.stopPropagation（）;
	}
;

// KeyEventおよびMouseEvent固有の小道具を含むすべての一般的なイベント小道具を含む
jQuery.each（{
	altKey：そうだね
	泡：真、
	キャンセル可能：true、
	changedTouches：true、
	ctrlKey：true、
	詳細：真、
	eventPhase：true、
	metaKey：true、
	pageX：true、
	pageY：true、
	shiftKey：true、
	見解：真
	"char"：真、
	charCode：true、
	キー：真、
	keyCode：true、
	ボタン：真、
	ボタン：真、
	clientX：true、
	clientY：true、
	offsetX：true、
	offsetY：true、
	pointerId：true、
	pointerType：true、
	screenX：真、
	screenY：本当、
	targetTouches：true、
	toElement：true、
	触れます：本当、

	which：function（event）{
		var button = event.button;

		//キーイベントにこれを追加
		if（event.which == null && rkeyEvent.test（event.type））{
			event.charCode！= nullを返します。event.charCode：event.keyCode;
		}

		//クリックして追加します：1 === left; 2 ===真ん中; 3 ===正しい
		if（！event.which && button！==未定義&& rmouseEvent.test（event.type））{
			if（ボタン＆1）{
				1を返します。
			}

			if（ボタン＆2）{
				3を返します。
			}

			if（ボタン＆4）{
				2を返します。
			}

			0を返します。
		}

		イベントを返します。
	}
jQuery.event.addProp）;

//マウスオーバー/アウトおよびイベント時間チェックを使用して、マウス中心/離脱イベントを作成する
//そのため、イベント委任はjQueryで機能します。
// pointerenter / pointerleaveとpointerover / pointeroutに対して同じことをする
//
//サポート：Safari 7のみ
// Safariがmouseenterを送信する頻度が高すぎる 見る：
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
//バグの説明用（これは古いChromeバージョンにも存在していました）。
jQuery.each（{
	mouseenter： "マウスオーバー"、
	mouseleave： "マウスアウト"、
	ポインター： "ポインタオーバー"、
	pointerleave： "ポインタアウト"
関数（orig、fix）{
	jQuery.event.special [orig] = {
		delegateType：修正、
		bindType：修正、

		ハンドル：function（event）{
			var ret、
				ターゲット=これ、
				related = event.relatedTarget、
				handleObj = event.handleObj;

			// mouseenter / leaveの場合、relatedがターゲットの外側にある場合はハンドラを呼び出します。
			// NB：マウスがブラウザウィンドウを出たり入ったりした場合、relatedTargetはありません
			if（！related ||（related！== target &&！jQuery.contains（target、related））））{
				event.type = handleObj.origType;
				ret = handleObj.handler.apply（this、arguments）;
				event.type =修正。
			}
			retを返す。
		}
	;
;））;

jQuery.fn.extend（{

	on：function（タイプ、セレクタ、データ、fn）{
		（this、types、selector、data、fn）を返します。
	、
	one：function（types、selector、data、fn）{
		（this、types、selector、data、fn、1）を返します。
	、
	off：function（types、selector、fn）{
		var handleObj、タイプ。
		if（types && types.preventDefault && types.handleObj）{

			//（event）がjQuery.Eventを送出した
			handleObj = types.handleObj;
			jQuery（types.delegateTarget）.off（
				handleObj.namespace？
					handleObj.origType + "" + handleObj.namespace：
					handleObj.origType、
				handleObj.selector、
				handleObj.handler
			;
			これを返してください。
		}
		if（typeof types === "オブジェクト"）{

			//（types-object [、selector]）
			for（型を打ち込む）{
				this.off（type、selector、types [type]）;
			}
			これを返してください。
		}
		if（selector === false || typeof selector === "関数"）{

			//（types [、fn]）
			fn =セレクタ。
			セレクタ=未定義。
		}
		if（fn === false）{
			fn = returnFalse;
		}
		this.each（function（）{を返します。
			jQuery.event.remove（this、types、fn、selector）;
		;））;
	}
;））;


var

	/ * eslint-disable max-len * /

	// https://github.com/eslint/eslint/issues/3229を参照してください。
	rxhtmlTag = / <（?! area | br | col | embed | hr | img | input | link | meta | param）（（[[az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] *）[^>] *）\ /> / gi、

	/ * eslint-enable * /

	//サポート：IE <= 10  -  11、Edge 12  -  13のみ
	// IE / Edgeで正規表現グループを使用すると深刻な速度低下を引き起こします。
	// https://connect.microsoft.com/IE/feedback/details/1736512/を参照してください。
	rnoInnerhtml = / <script | <style | <link / i、

	// checked = "checked"またはchecked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i、
	rcleanScript = / ^ \ s * <！（？：\ [CDATA \ [|  - ）|（？：\] \] |  - ）> \ s * $ / g;

//新しい行を含むために、親テーブルよりもtbodyを優先します
関数operationTarget（elem、content）{
	if（nodeName（elem、 "table"）&&
		nodeName（content.nodeType！== 11？content：content.firstChild、 "tr"））{

		jQuery（elem）.children（ "tbody"）を返します。[0] || elem;
	}

	elemを返します。
}

//安全なDOM操作のためにスクリプト要素のtype属性を置換/復元する
関数disableScript（elem）{
	elem.type =（elem.getAttribute（ "type"）！== null）+ "/" + elem.type;
	elemを返します。
}
関数restoreScript（elem）{
	if（（elem.type || ""）.slice（0、5）=== "true /"）{
		elem.type = elem.type.slice（5）;
	その他{
		elem.removeAttribute（ "type"）;
	}

	elemを返します。
}

関数cloneCopyEvent（src、dest）{
	var i、l、type、pdataOld、pdataCur、udataOld、udataCur、イベント。

	if（dest.nodeType！== 1）{
		戻る
	}

	// 1.個人データをコピーする：イベント、ハンドラなど
	if（dataPriv.hasData（src））{
		pdataOld = dataPriv.access（src）;
		pdataCur = dataPriv.set（dest、pdataOld）;
		events = pdataOld.events;

		if（イベント）{
			pdataCur.handleを削除します。
			pdataCur.events = {};

			for（イベントを入力）{
				for（i = 0、l =イベント[タイプ] .length; i <l; i ++）{
					jQuery.event.add（dest、type、events [type] [i]）;
				}
			}
		}
	}

	// 2.ユーザーデータをコピーする
	if（dataUser.hasData（src））{
		udataOld = dataUser.access（src）;
		udataCur = jQuery.extend（{}、udataOld）;

		dataUser.set（dest、udataCur）;
	}
}

// IEのバグを修正、サポートテストを見る
関数fixInput（src、dest）{
	var nodeName = dest.nodeName.toLowerCase（）;

	//複製されたチェックボックスまたはラジオボタンのチェック状態を保持しません。
	if（nodeName === "input" && rcheckableType.test（src.type））{
		dest.checked = src.checked;

	//オプションのクローンを作成するときに、選択したオプションをデフォルトの選択状態に戻しません
	そうでなければ（nodeName === "input" || nodeName === "textarea"）{
		dest.defaultValue = src.defaultValue;
	}
}

関数domManip（コレクション、引数、コールバック、無視）{

	//入れ子になった配列を平坦化する
	args = concat.apply（[]、args）;

	varフラグメント、まず、スクリプト、hasScript、ノード、ドキュメント、
		i = 0、
		l = collection.length、
		iNoClone = 1  -  1、
		値= args [0]、
		valueIsFunction = isFunction（value）;

	// WebKitでは、checkedを含むフラグメントを複製することはできません
	if（valueIsFunction ||
			（l> 1 && typeof値=== "文字列" &&
				！support.checkClone && rchecked.test（value）））{
		return collection.each（function（index）{
			var self = collection.eq（index）;
			if（valueIsFunction）{
				args [0] = value.call（this、index、self.html（））;
			}
			domManip（self、args、コールバック、無視）。
		;））;
	}

	if（l）{
		fragment = buildFragment（args、コレクション[0] .ownerDocument、false、collection、無視）;
		first = fragment.firstChild;

		if（fragment.childNodes.length === 1）{
			フラグメント=最初。
		}

		//コールバックを呼び出すために、新しいコンテンツまたは無視された要素への興味を要求する
		if（最初の||は無視されます）{
			scripts = jQuery.map（getAll（fragment、 "script"）、disableScript）;
			hasScripts = scripts.length;

			//最後のアイテムに元のフラグメントを使用する
			//最初のものではなく終了する可能性があるため
			//特定の状況で誤って空にされている（＃8070）。
			for（; i <l; i ++）{
				node = fragment;

				if（i！== iNoClone）{
					node = jQuery.clone（node、true、true）;

					//後で復元するためにクローンスクリプトへの参照を保持する
					if（hasScripts）{

						//サポート：Android <= 4.0のみ、PhantomJS 1のみ
						// push.apply（_、arraylike）は古代のWebKitでスローされる
						jQuery.merge（scripts、getAll（node、 "script"））;
					}
				}

				callback.call（collection [i]、node、i）;
			}

			if（hasScripts）{
				doc = scripts [scripts.length  -  1] .ownerDocument;

				//スクリプトを再度有効にする
				jQuery.map（スクリプト、restoreScript）;

				//最初の文書挿入時に実行可能スクリプトを評価する
				for（i = 0; i <hasScripts; i ++）{
					node = scripts [i];
					if（rscriptType.test（node.type || ""）&&
						！dataPriv.access（node、 "globalEval"）&&
						jQuery.contains（doc、node））{

						if（node.src &&（node.type || ""）.toLowerCase（）！== "module"）{

							//オプションのAJAX依存関係。存在しない場合はスクリプトを実行しません
							if（jQuery._evalUrl）{
								jQuery._evalUrl（node.src）;
							}
						その他{
							DOMEval（node.textContent.replace（rcleanScript、 ""）、doc、node）;
						}
					}
				}
			}
		}
	}

	コレクションを返します。
}

関数remove（elem、selector、keepData）{
	varノード、
		ノード=セレクタ？jQuery.filter（selector、elem）：elem、
		ｉ ＝ ０。

	for（;（node = nodes [i]）！= null; i ++）{
		if（！keepData && node.nodeType === 1）{
			jQuery.cleanData（getAll（node））;
		}

		if（node.parentNode）{
			if（keepData && jQuery.contains（node.ownerDocument、node））{
				setGlobalEval（getAll（node、 "script"））;
			}
			node.parentNode.removeChild（node）;
		}
	}

	elemを返します。
}

jQuery.extend（{
	htmlPrefilter：function（html）{
		html.replace（rxhtmlTag、 "<$ 1> </ $ 2>"）を返します。
	、

	clone：function（elem、dataAndEvents、deepDataAndEvents）{
		var i、l、srcElements、destElements、
			clone = elem.cloneNode（true）、
			inPage = jQuery.contains（elem.ownerDocument、elem）;

		// IEのクローン作成の問題を修正
		if（！support.noCloneChecked &&（elem.nodeType === 1 || elem.nodeType === 11）&&
				！jQuery.isXMLDoc（elem））{

			//パフォーマンス上の理由から、ここでSizzleを避けます。https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll（clone）;
			srcElements = getAll（elem）;

			（i = 0、l = srcElements.length; i <1; i ++）{に対して
				fixInput（srcElements [i]、destElements [i]）;
			}
		}

		//元のイベントからクローンにイベントをコピーする
		if（dataAndEvents）{
			if（deepDataAndEvents）{
				srcElements = srcElements || getAll（elem）;
				destElements = destElements || getAll（クローン）。

				（i = 0、l = srcElements.length; i <1; i ++）{に対して
					cloneCopyEvent（srcElements [i]、destElements [i]）;
				}
			その他{
				cloneCopyEvent（elem、clone）;
			}
		}

		//スクリプト評価履歴を保存する
		destElements = getAll（clone、 "script"）;
		if（destElements.length> 0）{
			setGlobalEval（destElements、！inPage && getAll（elem、 "script"））;
		}

		//クローンセットを返す
		クローンを返します。
	、

	cleanData：function（elems）{
		varデータ、要素、タイプ、
			special = jQuery.event.special、
			ｉ ＝ ０。

		for（;（elem = elems [i]）！==未定義; i ++）{
			if（acceptData（elem））{
				if（（data = elem [dataPriv.expando]））{
					if（data.events）{
						for（data.eventsを入力）{
							if（special [type]）{
								jQuery.event.remove（elem、type）;

							//これはjQuery.event.removeのオーバーヘッドを回避するためのショートカットです
							その他{
								jQuery.removeEvent（elem、type、data.handle）;
							}
						}
					}

					//サポート：Chrome <= 35  -  45+
					// deleteを使用する代わりにundefinedを代入します。データ＃removeを参照してください。
					elem [dataPriv.expando] =未定義。
				}
				if（elem [dataUser.expando]）{

					//サポート：Chrome <= 35  -  45+
					// deleteを使用する代わりにundefinedを代入します。データ＃removeを参照してください。
					elem [dataUser.expando] =未定義。
				}
			}
		}
	}
;））;

jQuery.fn.extend（{
	切り離し：function（selector）{
		remove（this、selector、true）を返します。
	、

	削除する：function（selector）{
		remove（this、selector）を返します。
	、

	テキスト：関数（値）{
		リターンアクセス（this、function（value）{
			戻り値===未定義？
				jQuery.text（this）：
				this.empty（）。each（function（）{
					if（this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9）{
						this.textContent = value;
					}
				;））;
		null、value、arguments.length）;
	、

	追加：function（）{
		domManip（this、arguments、function（elem）{を返します。
			if（this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9）{
				var target = editingTarget（this、elem）;
				target.appendChild（elem）;
			}
		;））;
	、

	先頭に追加：function（）{
		domManip（this、arguments、function（elem）{を返します。
			if（this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9）{
				var target = editingTarget（this、elem）;
				target.insertBefore（elem、target.firstChild）;
			}
		;））;
	、

	before：function（）{
		domManip（this、arguments、function（elem）{を返します。
			if（this.parentNode）{
				this.parentNode.insertBefore（elem、this）;
			}
		;））;
	、

	後：function（）{
		domManip（this、arguments、function（elem）{を返します。
			if（this.parentNode）{
				this.parentNode.insertBefore（elem、this.nextSibling）;
			}
		;））;
	、

	空：function（）{
		var elem、
			ｉ ＝ ０。

		for（;（elem = this [i]）！= null; i ++）{
			if（elem.nodeType === 1）{

				//メモリリークを防ぐ
				jQuery.cleanData（getAll（elem、false））;

				//残りのノードを削除します
				elem.textContent = "";
			}
		}

		これを返してください。
	、

	clone：function（dataAndEvents、deepDataAndEvents）{
		dataAndEvents = dataAndEvents == null？false：dataAndEvents。
		deepDataAndEvents = deepDataAndEvents == null？dataAndEvents：deepDataAndEvents;

		this.map（function（）{を返す
			jQuery.clone（this、dataAndEvents、deepDataAndEvents）を返します。
		;））;
	、

	html：function（value）{
		リターンアクセス（this、function（value）{
			var elem = this [0] || {}、
				i = 0、
				l = this.length;

			if（値===未定義&& elem.nodeType === 1）{
				elem.innerHTMLを返します。
			}

			//ショートカットを使用してinnerHTMLを使用できるかどうかを確認
			if（typeof value === "string" &&！rnoInnerhtml.test（value）&&
				！wrapMap [（rtagName.exec（value）|| [""、 ""]）[1] .toLowerCase（）]）{

				value = jQuery.htmlPrefilter（value）;

				試してください{
					for（; i <l; i ++）{
						elem = this [i] || {};

						//要素ノードを削除してメモリリークを防ぐ
						if（elem.nodeType === 1）{
							jQuery.cleanData（getAll（elem、false））;
							elem.innerHTML = value;
						}
					}

					elem = 0。

				// innerHTMLを使用すると例外がスローされる場合は、fallbackメソッドを使用する
				}キャッチ（E）{}
			}

			if（elem）{
				this.empty（）。append（value）;
			}
		null、value、arguments.length）;
	、

	replaceWith：function（）{
		var ignored = [];

		//無視されない各コンテキスト要素を新しいコンテンツに置き換えて変更を加える
		domManip（this、arguments、function（elem）{を返します。
			var parent = this.parentNode;

			if（jQuery.inArray（これ、無視されます）<0）{
				jQuery.cleanData（getAll（this））;
				if（親）{
					parent.replaceChild（elem、this）;
				}
			}

		//コールバックの呼び出しを強制する
		無視されます）。
	}
;））;

jQuery.each（{
	appendTo： "追加"、
	prependTo： "prepend"、
	insertBefore： "前"、
	insertAfter： "後"、
	replaceAll： "replaceWith"
関数（名前、オリジナル）{
	jQuery.fn [name] = function（selector）{
		var elems、
			ret = []、
			insert = jQuery（セレクタ）、
			last = insert.length  -  1、
			ｉ ＝ ０。

		for（; i <= last; i ++）{
			elems = i ===最後？this：this.clone（true）;
			jQuery（insert [i]）[オリジナル]（elems）;

			//サポート：Android <= 4.0のみ、PhantomJS 1のみ
			// push.apply（_、arraylike）は古代のWebKitでスローされるので// .get（）
			push.apply（ret、elems.get（））;
		}

		this.pushStack（ret）を返します。
	;
;））;
var rnumnonpx = new RegExp（ "^（" + pnum + "）（?! px）[az％] + $"、 "i"）;

var getStyles = function（elem）{

		//サポート：IE <= 11のみ、Firefox <= 30（＃15098、＃14150）
		// IEはポップアップで作成された要素をスローします
		//その間、FFは "defaultView.getComputedStyle"を介してフレーム要素をスローします。
		var view = elem.ownerDocument.defaultView;

		if（！view ||！view.opener）{
			view = window;
		}

		view.getComputedStyle（elem）を返します。
	;

var rboxStyle = new RegExp（cssExpand.join（ "|"）、 "i"）;



（ 関数（） {

	// pixelPositionとboxSizingReliableの両方のテストを実行するのに必要なレイアウトは1つだけ
	// 2番目の計算を節約するために同時に実行されます。
	関数computeStyleTests（）{

		//これはシングルトンです。1回だけ実行する必要があります
		if（！div）{
			戻る
		}

		"container.style.cssText ="位置：絶対、左：-11111px、幅：60px; " +
			"margin-top：1px;パディング：0;ボーダー：0";
		div.style.cssText =
			"位置：相対;表示：ブロック;ボックスサイズ：ボーダーボックス;オーバーフロー：スクロール;" +
			"マージン：オート、ボーダー：1ピクセル、パディング：1ピクセル、" +
			"幅：60％、上：1％";
		documentElement.appendChild（コンテナ）.appendChild（div）;

		var divStyle = window.getComputedStyle（div）;
		pixelPositionVal = divStyle.top！== "1％";

		//サポート：Android 4.0  -  4.3のみ、Firefox <= 3  -  44
		trustedMarginLeftVal = roundPixelMeasures（divStyle.marginLeft）=== 12;

		//サポート：Android 4.0  -  4.3のみ、Safari <= 9.1  -  10.1、iOS <= 7.0  -  9.3
		//いくつかのスタイルはパーセンテージ値で返されますが、そうではありません
		div.style.right = "60％";
		pixelBoxStylesVal = roundPixelMeasures（divStyle.right）=== 36;

		//サポート：IE 9  -  11のみ
		//ボックスのサイズ変更のためのコンテンツ寸法の誤報告を検出する：border-box要素
		boxSizingReliableVal = roundPixelMeasures（divStyle.width）=== 36;

		//サポート：IE 9のみ
		//オーバーフローを検出します：スクロールのねじれ（gh-3699）
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "絶対の";

		documentElement.removeChild（container）;

		// divを無効にして、メモリに保存されないようにします。
		//これは既に実行されたチェックの印にもなります
		div = null。
	}

	関数roundPixelMeasures（測定値）{
		Math.round（parseFloat（measure））を返します。
	}

	var pixelPositionVal、boxSizingReliableVal、scrollboxSizeVal、pixelBoxStylesVal、
		trustedMarginLeftVal、
		container = document.createElement（ "div"）、
		div = document.createElement（ "div"）;

	//限られた（ブラウザ以外の）環境で早めに終了する
	if（！div.style）{
		戻る
	}

	//サポート：IE <= 9  -  11のみ
	//複製された要素のスタイルが複製されたソース要素に影響する（＃8908）
	div.style.backgroundClip = "content-box";
	div.cloneNode（true）.style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend（support、{
		boxSizingReliable：function（）{
			computeStyleTests（）;
			boxSizingReliableValを返します。
		、
		pixelBoxStyles：function（）{
			computeStyleTests（）;
			pixelBoxStylesValを返します。
		、
		pixelPosition：function（）{
			computeStyleTests（）;
			pixelPositionValを返します。
		、
		trustedMarginLeft：function（）{
			computeStyleTests（）;
			trustedMarginLeftValを返します。
		、
		scrollboxSize：function（）{
			computeStyleTests（）;
			scrollboxSizeValを返します。
		}
	;））;
（）;


関数curCSS（elem、名前、計算値）{
	var width、minWidth、maxWidth、ret、

		//サポート：Firefox 51以降
		//どういうわけか計算前にスタイルを取得する
		//間違った値を取得することに関する問題を修正します
		//独立した要素
		style = elem.style;

	計算=計算|| getStyles（elem）;

	// getPropertyValueは次の目的に必要です。
	// .css（ 'filter'）（IE 9のみ、＃12537）
	// .css（ ' -  customProperty）（＃3144）
	if（計算値）{
		ret = calculate.getPropertyValue（name）|| calculate [name];

		if（ret === "" &&！jQuery.contains（elem.ownerDocument、elem））{
			ret = jQuery.style（elem、name）;
		}

		//「Dean Edwardsによる素晴らしいハック」へのオマージュ
		// Androidブラウザはいくつかの値のパーセンテージを返します
		//しかし、幅は確実にピクセルのようです。
		//これはCSSOMドラフト仕様に違反しています：
		// https://drafts.c??sswg.org/cssom/#resolved-values
		if（！support.pixelBoxStyles（）&& rnumnonpx.test（ret）&& rboxStyle.test（name））{

			//元の値を覚えている
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			//計算値を取り出すために新しい値を入れる
			style.minWidth = style.maxWidth = style.width = ret;
			ret = calculate.width;

			//変更した値を元に戻す
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	戻り値ret！==未定義？

		//サポート：IE <= 9  -  11のみ
		// IEはzIndex値を整数として返します。
		ret + ""：
		ret;
}


関数addGetHookIf（conditionFn、hookFn）{

	//フックを定義します。本当に必要な場合は最初の実行をチェックします。
	戻る{
		get：function（）{
			if（conditionFn（））{

				//フックは必要ありません（または使用できないため、使用できません）。
				//依存関係がない場合は削除します。
				this.getを削除してください。
				戻る
			}

			//フックが必要です。サポートテストが再度実行されないように再定義してください。
			return（this.get = hookFn）.apply（this、arguments）;
		}
	;
}


var

	//表示がnoneまたはテーブルで始まる場合は入れ替え可能
	// "table"、 "table-cell"、または "table-caption"を除く
	//表示値については、こちらを参照してください。https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/、
	rcustomProp = / ^  -  /、
	cssShow = {位置： "絶対"、表示設定： "非表示"、表示： "ブロック"}、
	cssNormalTransform = {
		letterSpacing： "0"、
		fontWeight： "400"
	、

	cssPrefixes = ["Webkit"、 "Moz"、 "ms"]、
	emptyStyle = document.createElement（ "div"）.style;

//ベンダの可能性がある接頭辞付きプロパティにマップされたcssプロパティを返します
関数vendorPropName（name）{

	//接頭辞のないベンダ名のショートカット
	if（emptyStyle内の名前）{
		名前を返します。
	}

	//ベンダー接頭辞の名前を確認する
	var capName = name [0] .toUpperCase（）+ name.slice（1）、
		i = cssPrefixes.length;

	while（i--）{
		name = cssPrefixes [i] + capName;
		if（emptyStyle内の名前）{
			名前を返します。
		}
	}
}

// jQuery.cssPropsが示唆するものに沿ってマッピングされたプロパティを返す
//ベンダー接頭辞のプロパティ。
関数finalPropName（name）{
	var ret = jQuery.cssProps [name];
	if（！ret）{
		ret = jQuery.cssProps [name] = vendorPropName（name）|| 名;
	}
	retを返す。
}

関数setPositiveNumber（elem、value、subtract）{

	//すべての相対（+/-）値はすでに
	//この時点で正規化
	var matches = rcssNum.exec（値）;
	マッチを返す？

		// cssHooksのように使用された場合など、未定義の "減算"から保護する
		Math.max（0、一致する[2]  - （減算する|| 0））+（一致する[3] || "px"）：
		値;
}

関数boxModelAdjustment（elem、dimension、box、isBorderBox、styles、calculateVal）{
	var i = dimension === "width"？1：0、
		extra = 0、
		デルタ＝ ０。

	//調整は必要ないかもしれません
	if（box ===（isBorderBox？ "border"： "content"）））{
		0を返します。
	}

	（; i <4; i + = 2）{について

		//両方のボックスモデルはマージンを除外
		if（box === "margin"）{
			delta + = jQuery.css（elem、box + cssExpand [i]、true、styles）;
		}

		//ここにコンテンツボックスがある場合、 "padding"、 "border"、または "margin"を探しています。
		if（！isBorderBox）{

			//パディングを追加
			delta + = jQuery.css（elem、 "padding" + cssExpand [i]、true、styles）;

			// "border"または "margin"の場合は、borderを追加します
			if（box！== "パディング"）{
				delta + = jQuery.css（elem、 "border" + cssExpand [i] + "Width"、true、styles）;

			//ただしそれ以外の場合は追跡します
			その他{
				extra + = jQuery.css（elem、 "border" + cssExpand [i] + "Width"、true、styles）;
			}

		//ボーダーボックス（content + padding + border）を使ってここに来た場合、 "content"を探しています。
		// "パディング"または "マージン"
		その他{

			// "content"の場合、パディングを減算する
			if（box === "content"）{
				デルタ -  = jQuery.css（elem、 "padding" + cssExpand [i]、true、styles）;
			}

			// "content"または "padding"の場合は、borderを引く
			if（box！== "margin"）{
				デルタ -  = jQuery.css（elem、 "border" + cssExpand [i] + "Width"、true、styles）;
			}
		}
	}

	// calculateValを指定して要求された場合に、正のコンテンツボックススクロールガターを考慮する
	if（！isBorderBox && calculateVal> = 0）{

		// offsetWidth / offsetHeightは、コンテンツ、パディング、スクロールガター、およびボーダーの丸めた合計です。
		//整数のスクロール溝を仮定して、残りを減算して切り捨てます
		デルタ+ = Math.max（0、Math.ceil（
			elem ["offset" +次元[0] .toUpperCase（）+ dimension.slice（1）]  - 
			calculateVal  - 
			デルタ - 
			追加 - 
			0.5
		;）;
	}

	デルタを返します。
}

関数getWidthOrHeight（elem、dimension、extra）{

	//計算スタイルから始める
	var styles = getStyles（elem）、
		val = curCSS（elem、dimension、styles）、
		isBorderBox = jQuery.css（elem、 "boxSizing"、false、スタイル）=== "border-box"、
		valueIsBorderBox = isBorderBox;

	//サポート：Firefox <= 54
	//必要に応じて、交絡しているピクセル以外の値を返します。
	if（rnumnonpx.test（val））{
		if（！extra）{
			valを返します。
		}
		val = "auto";
	}

	//信頼できない値を返すブラウザの場合は、スタイルを確認してください
	// getComputedStyleは信頼性のないelem.styleに静かにフォールバックする
	valueIsBorderBox = valueIsBorderBox &&
		（support.boxSizingReliable（）|| val === elem.style [dimension]）;

	//値が "auto"の場合はoffsetWidth / offsetHeightにフォールバックする
	//明示的に設定されていないインライン要素でこれが発生する（gh-3571）
	//サポート：Android <= 4.1  -  4.3のみ
	//誤って報告されたインライン寸法にはoffsetWidth / offsetHeightも使用する（gh-3602）
	if（val === "auto" ||
		！parseFloat（val）＆jQuery.css（elem、 "display"、false、styles）=== "inline"）{

		val = elem ["offset" +次元[0] .toUpperCase（）+ dimension.slice（1）];

		// offsetWidth / offsetHeightはボーダーボックスの値を提供します
		valueIsBorderBox = true;
	}

	// ""を正規化して自動
	val = parseFloat（val）|| 0;

	//要素のボックスモデルを調整します
	return（val +
		boxModelAdjustment（
			エレム、
			寸法、
			余分な|| （isBorderBox？ "border"： "content"）、
			valueIsBorderBox、
			スタイル、

			//スクロールガターの計算を要求するために現在の計算サイズを提供する（gh-3589）
			ヴァル
		）
	）+ "px";
}

jQuery.extend（{

	//デフォルトを上書きするためのスタイルプロパティフックを追加する
	//スタイルプロパティを取得および設定する動作
	cssHooks：{
		不透明度：{
			get：function（elem、計算）{
				if（計算値）{

					//不透明度から常に数値を取得する必要があります
					var ret = curCSS（elem、 "opacity"）;
					ret === ""を返す "1"：ret。
				}
			}
		}
	、

	//ユニットがない可能性があるこれらのプロパティに「px」を自動的に追加しない
	cssNumber：{
		"animationIterationCount"：true、
		"columnCount"：true、
		"fillOpacity"：true、
		"flexGrow"：true、
		"flexShrink"：true、
		"fontWeight"：true、
		"lineHeight"：真、
		"不透明度"：真、
		"順序"：真、
		"孤児"：真、
		"未亡人"：真、
		"zIndex"：true、
		"ズーム"：真
	、

	//名前を変更したいプロパティを追加します
	//値を設定または取得する
	cssProps：{}、

	// DOMノードのstyleプロパティを取得して設定します
	スタイル：関数（elem、名前、値、追加）{

		//テキストおよびコメントノードにスタイルを設定しない
		if（！elem || elem.nodeType === 3 || elem.nodeType === 8 ||！elem.style）{
			戻る
		}

		//正しい名前で作業していることを確認してください
		var ret、type、フック、
			origName = camelCase（name）、
			isCustomProp = rcustomProp.test（name）、
			style = elem.style;

		//正しい名前で作業していることを確認してください。私たちはしません
		// CSSカスタムプロパティの場合は値を問い合わせたい
		//ユーザー定義のものです。
		if（！isCustomProp）{
			name = finalPropName（origName）;
		}

		//接頭辞の付いたバージョンをフックしてから、接頭辞のないバージョンをフックします
		hooks = jQuery.cssHooks [name] || jQuery.cssHooks [origName];

		//値を設定しているかどうかを確認します
		if（value！==未定義）{
			type = typeof値。

			// "+ ="または " -  ="を相対数に変換する（＃7345）
			if（type === "string" &&（ret = rcssNum.exec（値））&& ret [1]）{
				値= adjustCSS（elem、name、ret）;

				//バグ＃9237を修正
				type = "数値";
			}

			// nullとNaNの値が設定されていないことを確認する（＃7116）
			if（value == null || value！== value）{
				戻る
			}

			//数値が渡された場合は、単位を追加します（特定のCSSプロパティを除く）。
			if（type === "number"）{
				値+ = ret && ret [3] || （jQuery.cssNumber [origName]？ ""： "px"）;
			}

			// background- *小道具は元のクローンの値に影響する
			if（！support.clearCloneStyle && value === "" && name.indexOf（ "background"）=== 0）{
				style [name] = "inherit";
			}

			//フックが提供されている場合はその値を使用し、それ以外の場合は指定された値を設定します
			if（！hooks ||！（フックに "set"）||
				（value = hooks.set（elem、value、extra））！==未定義）{

				if（isCustomProp）{
					style.setProperty（name、value）;
				その他{
					style [name] = value;
				}
			}

		その他{

			//フックが提供された場合、そこから計算されていない値を取得します
			if（hooks && hooks &&の "get"
				（ret = hooks.get（elem、false、extra））！==未定義）{

				retを返す。
			}

			//そうでなければ単にスタイルオブジェクトから値を取得する
			スタイル[名前]を返します。
		}
	、

	css：function（elem、name、extra、styles）{
		var val、num、フック、
			origName = camelCase（name）、
			isCustomProp = rcustomProp.test（name）;

		//正しい名前で作業していることを確認してください。私たちはしません
		// CSSカスタムプロパティの場合は値を変更したい
		//ユーザー定義のものです。
		if（！isCustomProp）{
			name = finalPropName（origName）;
		}

		//接頭辞の付いた名前の後に接頭辞のない名前を続けて試す
		hooks = jQuery.cssHooks [name] || jQuery.cssHooks [origName];

		//フックが提供された場合、そこから計算値を取得する
		if（hooks && "hook"の中の "get"）{
			val = hooks.get（elem、true、extra）;
		}

		//それ以外の場合、計算値を取得する方法が存在する場合はそれを使用する
		if（val ===未定義）{
			val = curCSS（elem、name、styles）;
		}

		// "normal"を計算値に変換します
		if（val === "normal" && cssNormalTransform内の名前）{
			val = cssNormalTransform [name];
		}

		//強制または修飾子が指定され、valが数値に見える場合は//数値にする
		if（extra === "" || extra）{
			num = parseFloat（val）;
			extra === trueを返します|| isFinite（num）num || ０：ｖａｌ。
		}

		valを返します。
	}
;））;

jQuery.each（["height"、 "width"]、関数（i、次元）{
	jQuery.cssHooks [dimension] = {
		get：function（elem、計算済み、extra）{
			if（計算値）{

				//見えないように見せれば、特定の要素は次元情報を持つことができます
				//ただし、現在の表示スタイルが必要です
				rdisplayswap.test（jQuery.css（elem、 "display"））を返します。

					//サポート：Safari 8以降
					// Safariのテーブル列には0以外のoffsetWidth＆zeroがあります
					表示が変更されない限り、// getBoundingClientRect（）。width。
					//サポート：IE <= 11のみ
					//切断されたノードでgetBoundingClientRectを実行する
					// IEではエラーが発生します。
					（！elem.getClientRects（）。length ||！elem.getBoundingClientRect（）。width）？
						swap（elem、cssShow、function（）{
							getWidthOrHeight（elem、dimension、extra）を返します。
						）：
						getWidthOrHeight（elem、dimension、extra）;
			}
		、

		set：function（elem、value、extra）{
			varが一致します。
				styles = getStyles（elem）、
				isBorderBox = jQuery.css（elem、 "boxSizing"、false、スタイル）=== "border-box"、
				subtract = extra && boxModelAdjustment（
					エレム、
					寸法、
					追加の、
					isBorderBox、
					スタイル
				;

			// offset *と計算値を比較して、信頼性の低い境界ボックスの寸法を計算し、
			//ボーダーとパディングを取得するためにコンテンツボックスを偽造する（gh-3699）
			if（isBorderBox && support.scrollboxSize（）=== styles.position）{
				減算 -  = Math.ceil（
					elem ["offset" +次元[0] .toUpperCase（）+ dimension.slice（1）]  - 
					parseFloat（styles [dimension]） - 
					boxModelAdjustment（elem、dimension、 "border"、false、styles） - 
					0.5
				;
			}

			//値調整が必要な場合はピクセルに変換
			if（減算&&（matches = rcssNum.exec（value））&&
				（[3]と一致します|| "px"）！== "px"）{

				elem.style [dimension] = value;
				値= jQuery.css（elem、dimension）;
			}

			setPositiveNumber（elem、value、subtract）を返します。
		}
	;
;））;

jQuery.cssHooks.marginLeft = addGetHookIf（support.reliableMarginLeft、
	関数（elem、計算済み）{
		if（計算値）{
			return（parseFloat（curCSS（elem、 "marginLeft"））||
				elem.getBoundingClientRect（）。left  - 
					swap（elem、{marginLeft：0}、function（）{
						elem.getBoundingClientRect（）を返します。
					）
				）+ "px";
		}
	}
;

//これらのフックは、プロパティを拡張するためにanimateによって使用されます。
jQuery.each（{
	余白： ""、
	パディング： ""、
	ボーダー： "幅"
関数（プレフィックス、サフィックス）{
	jQuery.cssHooks [プレフィックス+サフィックス] = {
		機能（値）{を展開します。
			var i = 0、
				展開された= {}、

				//文字列でない場合は単一の数値を仮定します
				parts = typeof value === "string"？value.split（ ""）：[値];

			for（; i <4; i ++）{
				展開された[プレフィックス+ cssExpand [i] +サフィックス] =
					parts [i] || parts [i  -  2] || パーツ[0];
			}

			展開された
		}
	;

	if（prefix！== "margin"）{
		jQuery.cssHooks [プレフィックス+サフィックス] .set = setPositiveNumber;
	}
;））;

jQuery.fn.extend（{
	css：function（name、value）{
		return access（this、function（elem、name、value）{
			varスタイル、len、
				map = {}、
				ｉ ＝ ０。

			if（Array.isArray（name））{
				styles = getStyles（elem）;
				len = name.length;

				for（; i <len; i ++）{
					map [name [i]] = jQuery.css（elem、name [i]、false、styles）;
				}

				地図を返す。
			}

			戻り値！==未定義
				jQuery.style（elem、name、value）：
				jQuery.css（elem、name）;
		}、name、value、arguments.length> 1）;
	}
;））;


関数トゥイーン（elem、options、prop、end、easing）{
	新しいTween.prototype.init（elem、options、prop、end、easing）を返します。
}
jQuery.Tween = Tween;

Tween.prototype = {
	コンストラクタ：Tween、
	init：function（elem、オプション、小道具、終わり、緩和、単位）{
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur（）;
		this.end = end;
		this.unit = unit || （jQuery.cssNumber [prop]？ ""： "px"）;
	、
	cur：function（）{
		var hooks = Tween.propHooks [this.prop];

		フックを返す＆hooks.get？
			hooks.get（こちら）：
			Tween.propHooks._default.get（this）;
	、
	実行：機能（パーセント）{
		軽減した、
			hooks = Tween.propHooks [this.prop];

		if（this.options.duration）{
			this.pos = eased = jQuery.easing [this.easing]（
				percent、this.options.duration *パーセント、0、1、this.options.duration
			;
		その他{
			this.pos = eased = percent;
		}
		this.now =（this.end  -  this.start）*緩和された+ this.start;

		if（this.options.step）{
			this.options.step.call（this.elem、this.now、this）;
		}

		if（hook && hooks.set）{
			hooks.set（これ）。
		その他{
			Tween.propHooks._default.set（this）;
		}
		これを返してください。
	}
;

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_デフォルト： {
		get：function（tween）{
			var結果;

			// DOM要素ではない場合は、要素のプロパティを直接使用します
			//または一致するスタイルプロパティが存在しない場合
			if（tween.elem.nodeType！== 1 ||
				tween.elem [tween.prop]！= null && tween.elem.style [tween.prop] == null）{
				tween.elem [tween.prop]を返します。
			}

			// 3番目のパラメータとして空の文字列を.cssに渡すと、自動的に
			// parseFloatを試み、解析が失敗した場合は文字列にフォールバックする。
			// "10px"のような単純な値はFloatにパースされます。
			// "rotate（1rad）"のような複雑な値はそのまま返されます。
			result = jQuery.css（tween.elem、tween.prop、 ""）;

			//空文字列、null、undefined、および "auto"は0に変換されます。
			return！結果|| 結果=== "auto"？０：結果。
		、
		set：function（tween）{

			//バックコンパットにステップフックを使用する。
			// cssHookがある場合はそれを使用します。
			//可能な場合は.styleを使用し、可能な場合はプレーンなプロパティを使用します。
			if（jQuery.fx.step [tween.prop]）{
				jQuery.fx.step [tween.prop]（tween）;
			そうでなければ（tween.elem.nodeType === 1 &&
				（tween.elem.style [jQuery.cssProps [tween.prop]]！= null ||
					jQuery.cssHooks [tween.prop]））{
				jQuery.style（tween.elem、tween.prop、tween.now + tween.unit）;
			その他{
				tween.elem [tween.prop] = tween.now;
			}
		}
	}
;

//サポート：IE <= 9のみ
//切断されたノードに設定するパニックベースのアプローチ
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set：function（tween）{
		if（tween.elem.nodeType && tween.elem.parentNode）{
			tween.elem [tween.prop] = tween.now;
		}
	}
;

jQuery.easing = {
	線形：関数（p）{
		pを返します。
	、
	スイング：関数（p）{
		0.5を返します -  Math.cos（p * Math.PI）/ 2;
	、
	_default： "スウィング"
;

jQuery.fx = Tween.prototype.init;

// 1.8未満の拡張ポイントをバックコンパット
jQuery.fx.step = {};




var
	fxNow、inProgress、
	rfxtypes = / ^（？：toggle | show | hide）$ /、
	rrun = / queueHooks $ /;

機能スケジュール（）{
	if（inProgress）{
		if（document.hidden === false && window.requestAnimationFrame）{
			window.requestAnimationFrame（schedule）;
		その他{
			window.setTimeout（schedule、jQuery.fx.interval）;
		}

		jQuery.fx.tick（）;
	}
}

//同期的に作成されたアニメーションは同期的に実行されます
関数createFxNow（）{
	window.setTimeout（function（）{
		fxNow =未定義。
	;））;
	return（fxNow = Date.now（））;
}

//標準のアニメーションを作成するためのパラメータを生成する
関数genFx（type、includeWidth）{
	var which、
		i = 0、
		attrs = {height：type};

	// widthを含めると、すべてのcssExpand値を実行するためにstep値は1になります。
	//それ以外の場合、左右の値をスキップするためにstepの値は2
	includeWidth = includeWidth？1：0。
	for（; i <4; i + = 2  -  includeWidth）{
		which = cssExpand [i];
		attrs ["margin" + which] = attrs ["padding" + which] = type;
	}

	if（includeWidth）{
		attrs.opacity = attrs.width = type;
	}

	attrsを返します。
}

関数createTween（value、prop、animation）{
	var tween、
		collection =（Animation.tweeners [prop] || []）.concat（Animation.tweeners ["*"]）、
		index = 0、
		length = collection.length;
	for（; index <length; index ++）{
		if（（tween = collection [index] .call（animation、prop、value））））{

			//このプロパティは完成しました
			トゥイーンを返します。
		}
	}
}

関数defaultPrefilter（elem、props、opts）{
	var prop、value、toggle、hooks、oldfire、propTween、restoreDisplay、display、
		isBox = "width" in props || 小道具の「高さ」
		anim =これ、
		orig = {}、
		style = elem.style、
		hidden = elem.nodeType && isHiddenWithinTree（elem）、
		dataShow = dataPriv.get（elem、 "fxshow"）;

	//キュースキップのアニメーションがfxフックを乗っ取る
	if（！opts.queue）{
		hooks = jQuery._queueHooks（elem、 "fx"）;
		if（hooks.unqueued == null）{
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function（）{
				if（！hooks.unqueued）{
					oldfire（）;
				}
			;
		}
		hooks.unqueued ++;

		anim.always（function（）{

			//これが完了する前にcompleteハンドラが確実に呼び出されるようにする
			anim.always（function（）{
				hooks.unqueued--;
				if（！jQuery.queue（elem、 "fx"）.length）{
					hooks.empty.fire（）;
				}
			;））;
		;））;
	}

	//アニメーションの表示/非表示を検出
	for（prop in prop））{
		value = props [prop];
		if（rfxtypes.test（value））{
			小道具を削除します[prop]。
			toggle = toggle || 値=== "toggle";
			if（value ===（隠し？ "hide"： "show"）））{

				//これが「ショー」の場合は非表示にされるふり
				//停止した表示/非表示のデータはまだあります
				if（value === "show" && dataShow && dataShow [prop]！==未定義）{
					hidden = trueです。

				//他のすべての無操作の表示/非表示データを無視する
				その他{
					持続する;
				}
			}
			orig [prop] = dataShow && dataShow [prop] || jQuery.style（elem、prop）;
		}
	}

	//これが.hide（）のような何もしない場合は、回避します。
	propTween =！jQuery.isEmptyObject（props）;
	if（！propTween && jQuery.isEmptyObject（orig））{
		戻る
	}

	//ボックスアニメーション中の「オーバーフロー」および「表示」スタイルを制限する
	if（isBox && elem.nodeType === 1）{

		//サポート：IE <= 9  -  11、Edge 12  -  15
		// IEは省略形を推論しないため、3つのオーバーフロー属性すべてを記録します
		//同じ値のoverflowXとoverflowYから、Edgeは単にミラーリングする
		// overflowXの値
		opts.overflow = [style.overflow、style.overflowX、style.overflowY];

		// CSSカスケードよりも古い表示/非表示データを優先して表示タイプを識別する
		restoreDisplay = dataShow && dataShow.display;
		if（restoreDisplay == null）{
			restoreDisplay = dataPriv.get（elem、 "display"）;
		}
		display = jQuery.css（elem、 "display"）;
		if（display === "none"）{
			if（restoreDisplay）{
				display = restoreDisplay;
			その他{

				//可視性を一時的に強制して空でない値を取得する
				showHide（[elem]、true）;
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css（elem、 "display"）;
				showHide（[elem]）;
			}
		}

		//インライン要素をインラインブロックとしてアニメートする
		if（display === "inline" || display === "inline-block" && restoreDisplay！= null）{
			if（jQuery.css（elem、 "float"）=== "none"）{

				//純粋な表示/非表示アニメーションの最後に元の表示値を復元する
				if（！propTween）{
					anim.done（function（）{
						style.display = restoreDisplay;
					;））;
					if（restoreDisplay == null）{
						display = style.display;
						restoreDisplay = display === "none"？""：表示します。
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if（opts.overflow）{
		style.overflow = "hidden";
		anim.always（function（）{
			style.overflow = opts.overflow [0];
			style.overflowX = opts.overflow [1];
			style.overflowY = opts.overflow [2];
		;））;
	}

	//アニメーションの表示/非表示を実装する
	propTween = false;
	for（orig in prop）{

		//この要素アニメーションの一般的な表示/非表示設定
		if（！propTween）{
			if（dataShow）{
				if（dataShowでは "hidden"）{
					hidden = dataShow.hidden;
				}
			その他{
				dataShow = dataPriv.access（elem、 "fxshow"、{display：restoreDisplay}）;
			}

			// .stop（）。toggle（）が反転するように隠し/表示可能なトグルを格納する
			if（切り替え）{
				dataShow.hidden =！hidden;
			}

			//アニメーション化する前に要素を表示する
			if（hidden）{
				showHide（[elem]、true）;
			}

			/ * eslint-disable no-loop-func * /

			anim.done（function（）{

			/ * eslint-enable no-loop-func * /

				// "hide"アニメーションの最後のステップは、実際には要素を隠すことです
				if（！hidden）{
					showHide（[elem]）;
				}
				dataPriv.remove（elem、 "fxshow"）;
				for（orig in prop）{
					jQuery.style（elem、prop、orig [prop]）;
				}
			;））;
		}

		//プロパティごとの設定
		propTween = createTween（hidden？dataShow [prop]：0、prop、anim）;
		if（！（dataShowの小道具））{
			dataShow [prop] = propTween.start;
			if（hidden）{
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter（props、specialEasing）{
	varインデックス、名前、イージング、値、フック。

	//キャメルケース、スペシャルイージング、cssHookパスの展開
	for（propsのインデックス）{
		name = camelCase（index）;
		easing = specialEasing [name];
		value = props [index];
		if（Array.isArray（value））{
			easing = value [1];
			値= props [index] =値[0];
		}

		if（index！== name）{
			props [name] = value;
			props [index]を削除します。
		}

		hooks = jQuery.cssHooks [name];
		if（hooks && "hooks in" hooks））{
			value = hooks.expand（value）;
			props [name]を削除します。

			//まったく$ .extendではありません、これは既存のキーを上書きしません。
			//正しい "名前"があるので 'index'を再利用
			for（値のインデックス）{
				if（！（小道具のインデックス））{
					props [index] = value [index];
					specialEasing [index] =イージング;
				}
			}
		その他{
			specialEasing [name] = easing;
		}
	}
}

機能アニメーション（elem、properties、options）{
	var結果、
		停止、
		index = 0、
		length = Animation.prefilters.length、
		deferred = jQuery.Deferred（）。always（function（）{

			//：animatedセレクタでelemと一致しない
			tick.elemを削除します。
		、）
		tick = function（）{
			if（やめた）{
				falseを返します。
			}
			var currentTime = fxNow || createFxNow（）、
				残り= Math.max（0、animation.startTime + animation.duration  -  currentTime）、

				//サポート：Android 2.3のみ
				//古風なクラッシュのバグで、 `1  - （0.5 || 0）`を使うことができない（＃12497）
				temp = residual / animation.duration || 0、
				パーセント= 1  - 温度、
				index = 0、
				length = animation.tweens.length;

			for（; index <length; index ++）{
				animation.tweens [index] .run（パーセント）;
			}

			deferred.notifyWith（elem、[animation、percent、残り]）;

			//やるべきことがもっとあるのなら、
			if（パーセント<1 && length）{
				残りを返します。
			}

			//これが空のアニメーションの場合は、最終進捗通知を合成する
			if（！length）{
				deferred.notifyWith（elem、[animation、1、0]）;
			}

			//アニメーションを解決してその結論を報告する
			deferred.resolveWith（elem、[animation]）;
			falseを返します。
		、
		animation = deferred.promise（{
			elem：elem、
			小道具：jQuery.extend（{}、properties）、
			opts：jQuery.extend（true、{
				specialEasing：{}、
				緩和：jQuery.easing._default
			、オプション）、
			originalProperties：プロパティ、
			originalOptions：オプション、
			startTime：fxNow || createFxNow（）、
			期間：options.duration、
			トゥイーン：[]、
			createTween：function（prop、end）{
				var tween = jQuery.Tween（elem、animation.opts、prop、end、
						animation.opts.specialEasing [prop] || animation.opts.easing）;
				animation.tweens.push（tween）;
				トゥイーンを返します。
			、
			停止：機能（gotoEnd）{
				var index = 0、

					//最後まで進んでいる場合は、すべてのトゥイーンを実行したい
					//そうでなければこの部分を飛ばす
					length = gotoEnd？animation.tweens.length：0;
				if（やめた）{
					これを返してください。
				}
				停止= true。
				for（; index <length; index ++）{
					animation.tweens [index] .run（1）;
				}

				//最後のフレームを再生したときに解決します。そうでなければ、拒否します
				if（gotoEnd）{
					deferred.notifyWith（elem、[animation、1、0]）;
					deferred.resolveWith（elem、[animation、gotoEnd]）;
				その他{
					deferred.rejectWith（elem、[animation、gotoEnd]）;
				}
				これを返してください。
			}
		、）
		props = animation.props;

	propFilter（props、animation.opts.specialEasing）;

	for（; index <length; index ++）{
		result = Animation.prefilters [index] .call（animation、elem、props、animation.opts）;
		if（結果）{
			if（isFunction（result.stop））{
				jQuery._queueHooks（animation.elem、animation.opts.queue）.stop =
					result.stop.bind（result）;
			}
			結果を返します。
		}
	}

	jQuery.map（props、createTween、animation）;

	if（isFunction（animation.opts.start））{
		animation.opts.start.call（elem、animation）;
	}

	//オプションからコールバックを添付する
	アニメーション
		.progress（animation.opts.progress）
		.done（animation.opts.done、animation.opts.complete）
		.fail（animation.opts.fail）
		.always（animation.opts.always）;

	jQuery.fx.timer（
		jQuery.extend（tick、{
			elem：elem、
			anim：アニメーション、
			キュー：animation.opts.queue
		）
	;

	アニメーションを返します。
}

jQuery.Animation = jQuery.extend（アニメーション、{

	トゥイナー：{
		"*"：[関数（prop、value）{
			var tween = this.createTween（prop、value）;
			adjustCSS（tween.elem、prop、rcssNum.exec（値）、tween）;
			トゥイーンを返します。
		]]
	、

	トゥイナー：function（props、callback）{
		if（isFunction（props））{
			callback = props;
			props = ["*"];
		その他{
			props = props.match（rnothtmlwhite）;
		}

		var prop
			index = 0、
			length = props.length;

		for（; index <length; index ++）{
			prop = props [index];
			Animation.tweeners [prop] = Animation.tweeners [prop] || [];
			Animation.tweeners [prop] .unshift（callback）;
		}
	、

	プレフィルタ：[defaultPrefilter]、

	prefilter：function（コールバック、先頭に追加）{
		if（前に）{
			Animation.prefilters.unshift（コールバック）;
		その他{
			Animation.prefilters.push（コールバック）;
		}
	}
;））;

jQuery.speed = function（speed、easing、fn）{
	var opt = speed && typeof speed === "オブジェクト"？jQuery.extend（{}、speed）：{
		完了：fn || ！fn &&イージング||
			isFunction（speed）&& speed、
		期間：スピード
		イージング：fn &&イージング|| easing &&！isFunction（easing）&&イージング
	;

	// fxがオフの場合は終了状態に進む
	if（jQuery.fx.off）{
		opt.duration = 0;

	その他{
		if（typeof opt.duration！== "number"）{
			if（jQuery.fx.speedsのopt.duration）{
				opt.duration = jQuery.fx.speeds [opt.duration];

			その他{
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// opt.queueを正規化 -  true / undefined / null  - > "fx"
	if（opt.queue == null || opt.queue === true）{
		opt.queue = "fx";
	}

	//キュー
	opt.old = opt.complete;

	opt.complete = function（）{
		if（isFunction（opt.old））{
			opt.old.call（this）;
		}

		if（opt.queue）{
			jQuery.dequeue（this、opt.queue）;
		}
	;

	optを返します。
;

jQuery.fn.extend（{
	fadeTo：function（スピード、to、イージング、コールバック）{

		//不透明度を0に設定した後に非表示の要素を表示する
		this.filter（isHiddenWithinTree）.css（ "opacity"、0）.show（）を返します。

			//指定した値にアニメートする
			.end（）。animate（{opacity：to}、スピード、イージング、コールバック）;
	、
	アニメート：機能（プロップ、スピード、イージング、コールバック）{
		var empty = jQuery.isEmptyObject（prop）、
			optall = jQuery.speed（スピード、イージング、コールバック）、
			doAnimation = function（）{

				//物件ごとの緩和が失われないように小道具のコピーを操作する
				var anim = Animation（this、jQuery.extend（{}、prop）、optall）;

				//空のアニメーション、または仕上げはすぐに解決します
				if（empty || dataPriv.get（this、 "finish"））{
					anim.stop（true）;
				}
			;
			doAnimation.finish = doAnimation;

		空に戻す optall.queue === false？
			this.each（doAnimation）：
			this.queue（optall.queue、doAnimation）;
	、
	stop：function（type、clearQueue、gotoEnd）{
		var stopQueue = function（hooks）{
			var stop = hooks.stop;
			hooks.stopを削除します。
			停止（gotoEnd）;
		;

		if（typeof type！== "string"）{
			gotoEnd = clearQueue;
			clearQueue = type;
			type =未定義
		}
		if（clearQueue && type！== false）{
			this.queue（type || "fx"、[]）;
		}

		this.each（function（）{を返します。
			var dequeue = true、
				index = type！= null && type + "queueHooks"、
				timers = jQuery.timers、
				data = dataPriv.get（this）;

			if（index）{
				if（data [index] && data [index] .stop）{
					stopQueue（data [index]）;
				}
			その他{
				for（データ中のインデックス）{
					if（data [index] && data [index] .stop && rrun.test（index））{
						stopQueue（data [index]）;
					}
				}
			}

			for（index = timers.length; index--;）{
				if（timers [index] .elem === this &&
					（type == null || timers [index] .queue === type））{

					timers [index] .anim.stop（gotoEnd）;
					デキュー= false。
					timers.splice（index、1）;
				}
			}

			//最後のステップが強制されなかった場合は、キュー内の次のステップを開始します。
			//タイマーは現在、完全なコールバックを呼び出します。
			//それらがgotoEndだった場合に限り、デキューします。
			if（dequeue ||！gotoEnd）{
				jQuery.dequeue（this、type）;
			}
		;））;
	、
	終了：関数（タイプ）{
		if（type！== false）{
			type = type || "fx";
		}
		this.each（function（）{を返します。
			var index、
				data = dataPriv.get（this）、
				queue = data [type + "queue"]、
				hooks = data [type + "queueHooks"]、
				timers = jQuery.timers、
				長さ=キュー？queue.length：0;

			//プライベートデータの終了フラグを有効にする
			data.finish = true;

			//最初にキューを空にする
			jQuery.queue（this、type、[]）;

			if（hook && hooks.stop）{
				hooks.stop.call（this、true）;
			}

			//アクティブなアニメーションを探して完成させる
			for（index = timers.length; index--;）{
				if（timers [index] .elem === this && timers [index] .queue === type）{
					timers [index] .anim.stop（true）;
					timers.splice（index、1）;
				}
			}

			//古いキューでアニメーションを探してそれらを完成させる
			for（index = 0; index <length; index ++）{
				if（queue [index] && queue [index] .finish）{
					queue [index] .finish.call（this）;
				}
			}

			//仕上げフラグをオフにする
			data.finishを削除します。
		;））;
	}
;））;

jQuery.each（["toggle"、 "show"、 "hide"]、関数（i、name）{
	var cssFn = jQuery.fn [name];
	jQuery.fn [name] = function（スピード、イージング、コールバック）{
		戻り速度== null || typeof speed === "ブール値"？
			cssFn.apply（これ、引数）：
			this.animate（genFx（name、true）、speed、easing、callback）;
	;
;））;

// カスタムアニメーションのショートカットを生成します
jQuery.each（{
	slideDown：genFx（ "show"）、
	slideUp：genFx（ "hide"）、
	slideToggle：genFx（ "toggle"）、
	fadeIn：{opacity： "show"}、
	fadeOut：{不透明度： "非表示"}、
	fadeToggle：{opacity： "toggle"}
function（name、props）{}
	jQuery.fn [name] = function（スピード、イージング、コールバック）{
		this.animate（小道具、スピード、イージング、コールバック）を返します。
	;
;））;

jQuery.timers = [];
jQuery.fx.tick = function（）{
	var timer、
		i = 0、
		timers = jQuery.timers;

	fxNow = Date.now（）;

	for（; i <timers.length; i ++）{
		timer = timers [i];

		//タイマーを実行し、完了したら安全にそれを削除する（外部からの削除も可能）
		if（！timer（）&& timers [i] === timer）{
			timers.splice（i--、1）;
		}
	}

	if（！timers.length）{
		jQuery.fx.stop（）;
	}
	fxNow =未定義。
;

jQuery.fx.timer = function（timer）{
	jQuery.timers.push（timer）;
	jQuery.fx.start（）;
;

jQuery.fx.interval = 13;
jQuery.fx.start = function（）{
	if（inProgress）{
		戻る
	}

	inProgress = true;
	スケジュール（）;
;

jQuery.fx.stop = function（）{
	inProgress = null。
;

jQuery.fx.speeds = {
	遅い：600、
	速い：200、

	//デフォルト速度
	_デフォルト：400
;


//許可を得て、Clint Helfersによるプラグインを基にしています。
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function（time、type）{
	time = jQuery.fx jQuery.fx.speeds [時間] || 時間です。
	type = type || "fx";

	this.queue（type、function（next、hooks）{を返します。
		var timeout = window.setTimeout（next、time）;
		hooks.stop = function（）{
			window.clearTimeout（タイムアウト）;
		;
	;））;
;


（ 関数（） {
	var input = document.createElement（ "input"）、
		select = document.createElement（ "select"）、
		opt = select.appendChild（document.createElement（ "option"））;

	input.type = "checkbox";

	//サポート：Android <= 4.3のみ
	//チェックボックスのデフォルト値は "on"です
	support.checkOn = input.value！== "";

	//サポート：IE <= 11のみ
	// selectedIndexにアクセスしてデフォルトのオプションを選択する必要がある
	support.optSelected = opt.selected;

	//サポート：IE <= 11のみ
	//ラジオになった後に入力がその値を失う
	input = document.createElement（ "input"）;
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
（）;


var boolHook、
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend（{
	attr：function（name、value）{
		アクセスを返す（this、jQuery.attr、name、value、arguments.length> 1）。
	、

	removeAttr：function（name）{
		this.each（function（）{を返します。
			jQuery.removeAttr（this、name）;
		;））;
	}
;））;

jQuery.extend（{
	attr：function（elem、name、value）{
		var ret、フック、
			nType = elem.nodeType;

		//テキスト、コメント、属性ノードの属性を取得/設定しない
		if（nType === 3 || nType === 8 || nType === 2）{
			戻る
		}

		//属性がサポートされていない場合はpropにフォールバック
		if（typeof elem.getAttribute === "未定義"）{
			jQuery.prop（elem、name、value）を返します。
		}

		//属性フックは小文字のバージョンによって決定されます
		//必要なフックが定義されていればそれをつかみます
		if（nType！== 1 ||！jQuery.isXMLDoc（elem））{
			hooks = jQuery.attrHooks [name.toLowerCase（）] ||
				（jQuery.expr.match.bool.test（name）？boolHook：未定義）;
		}

		if（value！==未定義）{
			if（value === null）{
				jQuery.removeAttr（elem、name）;
				戻る
			}

			if（hooks && hooks &&の "set"
				（ret = hooks.set（elem、value、name））！==未定義）{
				retを返す。
			}

			elem.setAttribute（name、value + ""）;
			戻り値
		}

		if（hook＆＆ "get＆hook in &&（ret = hooks.get（elem、name））！== null）{
			retを返す。
		}

		ret = jQuery.find.attr（elem、name）;

		//存在しない属性はnullを返します。未定義に正規化します
		ret == nullを返しますか？未定義：ret。
	、

	attrHooks：{
		タイプ：{
			set：function（elem、value）{
				if（！support.radioValue && value === "ラジオ" &&
					nodeName（elem、 "input"））{
					var val = elem.value;
					elem.setAttribute（ "type"、value）;
					if（val）{
						elem.value = val;
					}
					戻り値
				}
			}
		}
	、

	removeAttr：function（elem、value）{
		変数名、
			i = 0、

			//属性名にはHTML以外の空白文字を含めることができます
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match（rnothtmlwhite）;

		if（attrNames && elem.nodeType === 1）{
			while（（name = attrNames [i ++]））{
				elem.removeAttribute（name）;
			}
		}
	}
;））;

//ブール属性をフックする
boolHook = {
	set：function（elem、value、name）{
		if（value === false）{

			// falseに設定されている場合はブール値属性を削除します
			jQuery.removeAttr（elem、name）;
		その他{
			elem.setAttribute（name、name）;
		}
		名前を返します。
	}
;

jQuery.each（jQuery.expr.match.bool.source.match（/ \ w + / g）、関数（i、名前）{
	var getter = attrHandle [name] || jQuery.find.attr;

	attrHandle [name] = function（elem、name、isXML）{
		var ret、ハンドル、
			lowercaseName = name.toLowerCase（）;

		if（！isXML）{

			//ゲッターからこの関数を一時的に削除して無限ループを回避する
			handle = attrHandle [小文字名];
			attrHandle [lowercaseName] = ret;
			ret = getter（elem、name、isXML）！= null？
				小文字の名前：
				ヌル;
			attrHandle [小文字名] =ハンドル。
		}
		retを返す。
	;
;））;




var rfocusable = / ^（？：input | select | textarea | button）$ / i、
	rclickable = / ^（？：a | area）$ / i;

jQuery.fn.extend（{
	prop：function（name、value）{
		アクセスを返す（this、jQuery.prop、name、value、arguments.length> 1）。
	、

	removeProp：function（name）{
		this.each（function（）{を返します。
			これを削除します。[jQuery.propFix [name] || 名前];
		;））;
	}
;））;

jQuery.extend（{
	prop：function（elem、name、value）{
		var ret、フック、
			nType = elem.nodeType;

		//テキスト、コメント、属性ノードのプロパティを取得/設定しない
		if（nType === 3 || nType === 8 || nType === 2）{
			戻る
		}

		if（nType！== 1 ||！jQuery.isXMLDoc（elem））{

			//名前を修正してフックを付ける
			name = jQuery.propFix [name] || 名;
			hooks = jQuery.propHooks [name];
		}

		if（value！==未定義）{
			if（hooks && hooks &&の "set"
				（ret = hooks.set（elem、value、name））！==未定義）{
				retを返す。
			}

			return（elem [name] = value）;
		}

		if（hook＆＆ "get＆hook in &&（ret = hooks.get（elem、name））！== null）{
			retを返す。
		}

		elem [name]を返します。
	、

	propHooks：{
		tabIndex：{
			get：function（elem）{

				//サポート：IE <= 9  -  11のみ
				// elem.tabIndexは必ずしもを返しません
				//明示的に設定されていない場合は正しい値
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				//適切な属性検索を使用する（＃12072）
				var tabindex = jQuery.find.attr（elem、 "tabindex"）;

				if（tabindex）{
					parseInt（tabindex、10）を返します。
				}

				if（
					rfocusable.test（elem.nodeName）||
					rclickable.test（elem.nodeName）&&
					elem.href
				）{
					0を返します。
				}

				-1を返します。
			}
		}
	、

	propFix：{
		"for"： "htmlFor"、
		"クラス"： "クラス名"
	}
;））;

//サポート：IE <= 11のみ
// selectedIndexプロパティへのアクセス
//ブラウザに選択された設定を優先させる
//オプション
//ゲッターはデフォルトのオプションが選択されていることを確認します
// optgroupにあるとき
//このコードではeslintルール "no-unused-expressions"は無効です
//そのような加盟を考慮していないので
if（！support.optSelected）{
	jQuery.propHooks.selected = {
		get：function（elem）{

			/ * eslint no-unused-expressions： "off" * /

			var parent = elem.parentNode;
			if（parent && parent.parentNode）{
				parent.parentNode.selectedIndex;
			}
			nullを返します。
		、
		set：function（elem）{

			/ * eslint no-unused-expressions： "off" * /

			var parent = elem.parentNode;
			if（親）{
				parent.selectedIndex;

				if（parent.parentNode）{
					parent.parentNode.selectedIndex;
				}
			}
		}
	;
}

jQuery.each（[
	"tabIndex"、
	"readOnly"、
	"maxLength"、
	"cellSpacing"、
	"cellPadding"、
	"rowSpan"、
	"colSpan"、
	"useMap"、
	"枠線"、
	"contentEditable"
]、 関数（） {
	jQuery.propFix [this.toLowerCase（）] = this;
;））;




	// HTMLの仕様に従って空白を削除して折りたたむ
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	関数stripAndCollapse（value）{
		var tokens = value.match（rnothtmlwhite）|| [];
		tokens.join（ ""）を返します。
	}


関数getClass（elem）{
	elem.getAttribute && elem.getAttribute（ "class"）||を返します。"";
}

関数classesToArray（value）{
	if（Array.isArray（value））{
		戻り値
	}
	if（typeof value === "string"）{
		戻り値。match（rnothtmlwhite）|| [];
	}
	return [];
}

jQuery.fn.extend（{
	addClass：function（value）{
		varクラス、elem、cur、curValue、clazz、j、finalValue、
			ｉ ＝ ０。

		if（isFunction（value））{
			this.each（function（j）{を返します。
				jQuery（this）.addClass（value.call（this、j、getClass（this）））;
			;））;
		}

		classes = classesToArray（value）;

		if（classes.length）{
			while（（elem = this [i ++]））{
				curValue = getClass（elem）;
				cur = elem.nodeType === 1 &&（ "" + stripAndCollapse（curValue）+ ""）;

				if（cur）{
					ｊ ＝ ０。
					while（（clazz = classes [j ++]））{
						if（cur.indexOf（ "" + clazz + ""）<0）{
							cur + = clazz + "";
						}
					}

					//不要なレンダリングを避けるため、違う場合にのみ代入してください。
					finalValue = stripAndCollapse（cur）;
					if（curValue！== finalValue）{
						elem.setAttribute（ "class"、finalValue）;
					}
				}
			}
		}

		これを返してください。
	、

	removeClass：function（value）{
		varクラス、elem、cur、curValue、clazz、j、finalValue、
			ｉ ＝ ０。

		if（isFunction（value））{
			this.each（function（j）{を返します。
				jQuery（this）.removeClass（value.call（this、j、getClass（this）））;
			;））;
		}

		if（！arguments.length）{
			this.attr（ "class"、 ""）;を返します。
		}

		classes = classesToArray（value）;

		if（classes.length）{
			while（（elem = this [i ++]））{
				curValue = getClass（elem）;

				//この式は圧縮率を向上させるためにここにあります（addClassを参照）。
				cur = elem.nodeType === 1 &&（ "" + stripAndCollapse（curValue）+ ""）;

				if（cur）{
					ｊ ＝ ０。
					while（（clazz = classes [j ++]））{

						// * all *インスタンスを削除します
						while（cur.indexOf（ "" + clazz + ""）> -1）{
							cur = cur.replace（ "" + clazz + ""、 ""）;
						}
					}

					//不要なレンダリングを避けるため、違う場合にのみ代入してください。
					finalValue = stripAndCollapse（cur）;
					if（curValue！== finalValue）{
						elem.setAttribute（ "class"、finalValue）;
					}
				}
			}
		}

		これを返してください。
	、

	toggleClass：function（value、stateVal）{
		var type = typeof値、
			isValidValue = type === "string" || Array.isArray（value）;

		if（typeof stateVal === "boolean" && isValidValue）{
			stateValを返しますか？this.addClass（value）：this.removeClass（value）;
		}

		if（isFunction（value））{
			this.each（function（i）{を返します。
				jQuery（this）.toggleClass（
					value.call（this、i、getClass（this）、stateVal）、
					stateVal
				;
			;））;
		}

		this.each（function（）{を返します。
			var className、i、self、className。

			if（isValidValue）{

				//個々のクラス名を切り替える
				ｉ ＝ ０。
				self = jQuery（this）;
				classNames = classesToArray（value）;

				while（（className = classNames [i ++]））{

					//与えられた各classNameをスペース区切りのリストでチェックする
					if（self.hasClass（className））{
						self.removeClass（className）;
					その他{
						self.addClass（className）;
					}
				}

			//クラス名全体を切り替える
			そうでなければ（value === undefined || type === "boolean"）{
				className = getClass（this）;
				if（className）{

					//設定されている場合はclassNameを格納
					dataPriv.set（this、 "__className__"、className）;
				}

				//要素がクラス名を持っている場合、または `false`が渡された場合
				//その後、クラス名全体を削除します（存在する場合は上記で保存したもの）。
				//そうでなければ以前に保存されたものを（もしあれば）元に戻す
				//何も格納されていない場合は空の文字列にフォールバックする
				if（this.setAttribute）{
					this.setAttribute（ "class"、
						className || 値=== false？
						""：
						dataPriv.get（this、 "__className__"）|| 「」
					;
				}
			}
		;））;
	、

	hasClass：関数（セレクタ）{
		var className、elem、
			ｉ ＝ ０。

		className = "" +セレクタ+ "";
		while（（elem = this [i ++]））{
			if（elem.nodeType === 1 &&
				（ "" + stripAndCollapse（getClass（elem））+ ""）.indexOf（className）> -1）{
					trueを返します。
			}
		}

		falseを返します。
	}
;））;




var rreturn = / \ r / g;

jQuery.fn.extend（{
	val：関数（値）{
		var hooks、ret、valueIsFunction、
			elem = this [0];

		if（！arguments.length）{
			if（elem）{
				hooks = jQuery.valHooks [elem.type] ||
					jQuery.valHooks [elem.nodeName.toLowerCase（）];

				if（hook &&
					フック&&の "get"
					（ret = hooks.get（elem、 "value"））！==未定義
				）{
					retを返す。
				}

				ret = elem.value;

				//最も一般的な文字列のケースを処理する
				if（typeof ret === "string"）{
					ret.replace（rreturn、 ""）を返します。
				}

				//値がnull / undefまたは数値の場合の処理
				ret == nullを返しますか？""：ret;
			}

			戻る
		}

		valueIsFunction = isFunction（value）;

		this.each（function（i）{を返します。
			var val;

			if（this.nodeType！== 1）{
				戻る
			}

			if（valueIsFunction）{
				val = value.call（this、i、jQuery（this）.val（））;
			その他{
				val = value;
			}

			// null / undefinedを ""として扱います。数字を文字列に変換する
			if（val == null）{
				val = "";

			そうでなければ（typeof val === "number"）{
				val + = "";

			そうでなければ（Array.isArray（val））{
				val = jQuery.map（val、function（value）{
					戻り値== null？""：値+ "";
				;））;
			}

			hooks = jQuery.valHooks [this.type] || jQuery.valHooks [this.nodeName.toLowerCase（）];

			// setが未定義を返す場合、通常の設定に戻る
			if（！hooks ||！（ "set" in hooks）|| hooks.set（this、val、 "value"）===未定義）{
				this.value = val;
			}
		;））;
	}
;））;

jQuery.extend（{
	valHooks：{
		オプション：{
			get：function（elem）{

				var val = jQuery.find.attr（elem、 "value"）;
				戻り値val！= null？
					val：

					//サポート：IE <= 10  -  11のみ
					// option.textが例外をスローする（＃14686、＃14858）
					//空白を削除して折りたたむ
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse（jQuery.text（elem））;
			}
		、
		選択してください：{
			get：function（elem）{
				var値、オプション、i、
					options = elem.options、
					index = elem.selectedIndex、
					one = elem.type === "select-one"、
					値= 1？ヌル ： []、
					最大= 1？index + 1：options.length;

				if（index <0）{
					ｉ ＝最大。

				その他{
					私= 1？インデックス：0。
				}

				//選択したすべてのオプションをループします
				for（; i <max; i ++）{
					option = options [i];

					//サポート：IE <= 9のみ
					// IE8-9はフォームリセット後に選択されたものを更新しない（＃2551）
					if（（option.selected || i === index）&&

							//無効になっている、または無効になっているoptgroupにあるオプションを返さない
							！option.disabled &&
							（！option.parentNode.disabled ||
								！nodeName（option.parentNode、 "optgroup"）））{

						//オプションの特定の値を取得
						値= jQuery（オプション）.val（）;

						// 1回の選択で配列は必要ありません
						if（one）{
							戻り値
						}

						//複数選択で配列を返す
						values.push（value）;
					}
				}

				戻り値
			、

			set：function（elem、value）{
				var optionSet、option、
					options = elem.options、
					values = jQuery.makeArray（value）、
					i = options.length;

				while（i--）{
					option = options [i];

					/ * eslint-disable no-cond-assign * /

					if（option.selected =
						jQuery.inArray（jQuery.valHooks.option.get（オプション）、values）> -1
					）{
						optionSet = true;
					}

					/ * eslint-enable no-cond-assign * /
				}

				//一致しない値が設定されている場合、ブラウザは一貫して動作するように強制します
				if（！optionSet）{
					elem.selectedIndex = -1;
				}
				戻り値
			}
		}
	}
;））;

//ラジオとチェックボックスゲッター/セッター
jQuery.each（["radio"、 "checkbox"]、function（）{
	jQuery.valHooks [this] = {
		set：function（elem、value）{
			if（Array.isArray（value））{
				return（elem.checked = jQuery.inArray（jQuery（elem）.val（）、value）> -1）;
			}
		}
	;
	if（！support.checkOn）{
		jQuery.valHooks [this] .get = function（elem）{
			elem.getAttribute（ "value"）=== nullを返しますか？"on"：elem.value;
		;
	}
;））;




//属性のみを含むjQueryを返します


ウィンドウ内のsupport.focusin = "onfocusin"。


var rfocusMorph = / ^（？：focusinfocus | focusoutblur）$ /、
	stopPropagationCallback = function（e）{
		e.stopPropagation（）;
	;

jQuery.extend（jQuery.event、{

	トリガー：関数（イベント、データ、elem、onlyHandlers）{

		var i、cur、tmp、bubbleType、ontype、ハンドル、special、lastElement、
			eventPath = [elem || 資料 ]、
			type = hasOwn.call（event、 "type"）？event.type：イベント、
			namespaces = hasOwn.call（event、 "namespace"）？event.namespace.split（ "。"）：[];

		cur = lastElement = tmp = elem = elem || 資料;

		//テキストノードとコメントノードでイベントを行わない
		if（elem.nodeType === 3 || elem.nodeType === 8）{
			戻る
		}

		//フォーカスイン/アウトするモーフをフォーカス/ぼかします。今すぐ発砲していないことを確認する
		if（rfocusMorph.test（type + jQuery.event.triggered））{
			戻る
		}

		if（type.indexOf（ "。"）> -1）{

			//名前空間付きトリガー handle（）内のイベントタイプと一致する正規表現を作成します
			namespaces = type.split（ "。"）;
			type = namespaces.shift（）;
			namespaces.sort（）;
		}
		ontype = type.indexOf（ "："）<0 && "on" + type;

		//呼び出し元はjQuery.Eventオブジェクト、Object、または単にイベント型文字列を渡すことができる
		event = event [jQuery.expando]
			イベント：
			new jQuery.Event（type、typeof event === "object" && event）;

		//ネイティブマスクの場合はビットマスク＆1をトリガします。jQueryの場合は＆2（常にtrue）
		event.isTrigger = onlyHandlers？2：3
		event.namespace = namespaces.join（ "。"）;
		event.rnamespace = event.namespace？
			new RegExp（ "（^ | \\。）" + namespaces.join（ "\\。（？：。* \\。|）"）+ "（\\。| $）"）：
			ヌル;

		//イベントが再利用されている場合に備えてイベントをクリーンアップする
		event.result = undefined;
		if（！event.target）{
			event.target = elem;
		}

		//着信データを複製してイベントを先頭に追加し、ハンドラ引数リストを作成する
		data = data == null？
			[イベント]：
			jQuery.makeArray（data、[event]）;

		//特別なイベントが線の外側に描画できるようにする
		special = jQuery.event.special [type] || {};
		if（！onlyHandlers && special.trigger && special.trigger.apply（elem、data）=== false）{
			戻る
		}

		// W3Cイベント仕様に従ってイベント伝播パスを事前に決定する（＃9951）
		//ドキュメントまでバブルし、次にウィンドウまでバブルする。グローバルownerDocument varを監視する（＃9724）
		if（！onlyHandlers &&！special.noBubble &&！isWindow（elem））{

			bubbleType = special.delegateType || タイプ;
			if（！rfocusMorph.test（bubbleType + type））{
				cur = cur.parentNode;
			}
			for（; cur; cur = cur.parentNode）{
				eventPath.push（cur）;
				tmp = cur;
			}

			//ドキュメントになった場合にのみウィンドウを追加する（例：プレーンなobjや分離されたDOMではない）
			if（tmp ===（elem.ownerDocument || document））{
				eventPath.push（tmp.defaultView || tmp.parentWindow || window）;
			}
		}

		//イベントパスでハンドラを起動する
		ｉ ＝ ０。
		while（（cur = eventPath [i ++]）&&！event.isPropagationStopped（））{
			lastElement = cur;
			event.type = i> 1
				bubbleType：
				special.bindType || タイプ;

			// jQueryハンドラ
			handle =（dataPriv.get（cur、 "events"）|| {}）[event.type] &&
				dataPriv.get（cur、 "handle"）;
			if（handle）{
				handle.apply（cur、data）;
			}

			//ネイティブハンドラ
			handle = ontype && cur [ontype];
			if（handle && handle.apply && acceptData（cur））{
				event.result = handle.apply（cur、data）;
				if（event.result === false）{
					event.preventDefault（）;
				}
			}
		}
		event.type = type;

		//誰もデフォルトのアクションを妨げなかった場合は、ここでそれを実行する
		if（！onlyHandlers &&！event.isDefaultPrevented（））{

			if（（！！special._default ||
				special._default.apply（eventPath.pop（）、data）=== false）&&
				acceptData（elem））{

				//イベントと同じ名前でターゲットのネイティブDOMメソッドを呼び出します。
				//ウィンドウ上でデフォルトのアクションを実行しません。グローバル変数が存在する場所です（＃6170）
				if（ontype && isFunction（elem [type]）&&！isWindow（elem））{

					// FOO（）メソッドを呼び出したときにonFOOイベントを再トリガしません
					tmp = elem [ontype];

					if（tmp）{
						elem [ontype] = null。
					}

					//すでに上のバブルをしているので、同じイベントの再トリガーを防ぎます
					jQuery.event.triggered = type;

					if（event.isPropagationStopped（））{
						lastElement.addEventListener（type、stopPropagationCallback）;
					}

					elem [type]（）;

					if（event.isPropagationStopped（））{
						lastElement.removeEventListener（type、stopPropagationCallback）;
					}

					jQuery.event.triggered = undefined;

					if（tmp）{
						elem [ontype] = tmp;
					}
				}
			}
		}

		event.resultを返します。
	、

	//別のイベントをシミュレートするためのドナーイベントのピギーバック
	// `focus（in | out）`イベントにのみ使用されます
	シミュレート：関数（タイプ、要素、イベント）{
		var e = jQuery.extend（
			新しいjQuery.Event（）、
			イベント、
			{
				タイプ：タイプ、
				isSimulated：true
			}
		;

		jQuery.event.trigger（e、null、elem）;
	}

;））;

jQuery.fn.extend（{

	トリガー：機能（タイプ、データ）{
		this.each（function（）{を返します。
			jQuery.event.trigger（type、data、this）;
		;））;
	、
	triggerHandler：関数（タイプ、データ）{
		var elem = this [0];
		if（elem）{
			jQuery.event.trigger（type、data、elem、true）を返します。
		}
	}
;））;


//サポート：Firefox <= 44
// Firefoxにはフォーカス（in | out）イベントがありません
//関連チケット -  https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
//サポート：Chrome <= 48  -  49、Safari <= 9.0  -  9.1
// focus（in | out）イベントはfocus＆blurイベントの後に発生します。
//これは仕様違反です -  http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
//関連チケット -  https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if（！support.focusin）{
	jQuery.each（{focus： "focusin"、ぼかし： "focusout"}、関数（orig、fix）{

		//誰かがフォーカスイン/フォーカスアウトを望んでいる間に単一のキャプチャハンドラをドキュメントにアタッチする
		var handler = function（event）{
			jQuery.event.simulate（fix、event.target、jQuery.event.fix（event））;
		;

		jQuery.event.special [修正] = {
			セットアップ：function（）{
				var doc = this.ownerDocument || この、
					attaches = dataPriv.access（doc、fix）;

				if（！添付）{
					doc.addEventListener（orig、handler、true）;
				}
				dataPriv.access（doc、fix、（attach || 0）+ 1）;
			、
			分解：function（）{
				var doc = this.ownerDocument || この、
					attaches = dataPriv.access（doc、fix） -  1;

				if（！添付）{
					doc.removeEventListener（orig、handler、true）;
					dataPriv.remove（doc、fix）;

				その他{
					dataPriv.access（doc、fix、attach）;
				}
			}
		;
	;））;
}
var location = window.location;

var nonce = Date.now（）;

var rquery =（/ \？/）;



//クロスブラウザXML解析
jQuery.parseXML = function（data）{
	var xml;
	if（！data || typeof data！== "文字列"）{
		nullを返します。
	}

	//サポート：IE 9  -  11のみ
	// IEは無効な入力でparseFromStringをスローします。
	試してください{
		xml =（new window.DOMParser（））.parseFromString（data、 "text / xml"）;
	catch（e）{
		xml =未定義。
	}

	if（！xml || xml.getElementsByTagName（ "parsererror"）.length）{
		jQuery.error（ "無効なXML：" + data）;
	}
	xmlを返す。
;


var
	rbracket = / \ [\] $ /、
	rCRLF = / \ r？\ n / g、
	rsubmitterTypes = / ^（？：送信|ボタン|画像|リセット|ファイル）$ / i、
	rsubmittable = / ^（?: input | select | textarea | keygen）/ i;

function buildParams（プレフィックス、obj、トラディショナル、追加）{
	var name;

	if（Array.isArray（obj））{

		//配列項目を直列化します。
		jQuery.each（obj、function（i、v）{
			if（伝統的な|| rbracket.test（prefix））{

				//各配列項目をスカラーとして扱います。
				追加（プレフィックス、v）。

			その他{

				//項目はスカラー以外（配列またはオブジェクト）で、その数値インデックスをエンコードします。
				buildParams（
					prefix + "[" +（typeof v === "object" && v！= null？i： ""）+ "]"、
					v、
					伝統的な
					追加する
				;
			}
		;））;

	そうでなければ（！traditional && toType（obj）=== "object"）{

		//オブジェクト項目を直列化します。
		for（objの名前）{
			buildParams（プレフィックス+ "[" +名前+ "]"、obj [名前]、トラディショナル、追加）;
		}

	その他{

		//スカラ項目を直列化します。
		add（prefix、obj）;
	}
}

//フォーム要素の配列または一連のを直列化します
//キー/値をクエリ文字列に
jQuery.param = function（a、traditional）{
	varプレフィックス、
		s = []、
		add = function（key、valueOrFunction）{

			// valueが関数の場合、それを呼び出してその戻り値を使う
			var value = isFunction（valueOrFunction）？
				valueOrFunction（）：
				valueOrFunction;

			s [s.length] = encodeURIComponent（key）+ "=" +
				encodeURIComponent（value == null？ ""：value）;
		;

	//配列が渡された場合は、それがフォーム要素の配列であると想定します。
	if（Array.isArray（a）||（a.jquery &&！jQuery.isPlainObject（a）））{

		//フォーム要素を直列化する
		jQuery.each（a、function（）{
			add（this.name、this.value）;
		;））;

	その他{

		//伝統的であれば、「古い」方法（方法1.3.2以上）をエンコードします
		そうでなければ、paramsを再帰的にエンコードします。
		for（aの接頭辞）{
			buildParams（プレフィックス、[プレフィックス]、トラディショナル、追加）。
		}
	}

	//結果のシリアル化を返します
	s.join（ "＆"）を返します。
;

jQuery.fn.extend（{
	直列化：function（）{
		jQuery.param（this.serializeArray（））を返します。
	、
	serializeArray：function（）{
		this.map（function（）{を返す

			//フォーム要素をフィルタリングまたは追加するために "elements"にpropHookを追加できます
			var elements = jQuery.prop（this、 "elements"）;
			要素を返す？jQuery.makeArray（elements）：これ。
		）
		.filter（function（）{
			var type = this.type;

			// fieldset [disabled]が機能するように.is（ "：disabled"）を使用
			this.name &&を返しますjQuery（this）.is（ "：disabled"）&&
				rsubmittable.test（this.nodeName）&&！rsubmitterTypes.test（type）&&
				（this.checked ||！rcheckableType.test（type））;
		）
		.map（関数（i、elem）{
			var val = jQuery（this）.val（）;

			if（val == null）{
				nullを返します。
			}

			if（Array.isArray（val））{
				jQuery.map（val、function（val）{を返します。
					戻り値{名前：elem.name、値：val.replace（rCRLF、 "\ r \ n"）};
				;））;
			}

			戻り値{名前：elem.name、値：val.replace（rCRLF、 "\ r \ n"）};
		} ）。取得する（）;
	}
;））;


var
	ｒ ２０ ＝ ／％２０ ／ ｇ、
	rhash = /#.*$/、
	rantiCache = /（[？＆]）_ = [^＆] * /、
	rheaders = / ^（。*？）：[\ t] *（[^ \ r \ n] *）$ / mg、

	//＃7653、＃8125、＃8152：ローカルプロトコル検出
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/、
	rnoContent = / ^（？：GET | HEAD）$ /、
	rprotocol = / ^ \ / \ //、

	/ *プレフィルタ
	 * 1）カスタムdataTypeを導入するのに役立ちます（例としてajax / jsonp.jsを参照してください）。
	 * 2）これらは呼ばれます：
	 *  - 輸送を求める前に
	 *  - パラメータのシリアル化後（s.processDataがtrueの場合、s.dataは文字列です）
	 * 3）キーはデータ型です
	 * 4）キャッチオールシンボル "*"が使用可能
	 * 5）実行はtransport dataTypeで始まり、必要ならば "*"まで続けます
	 * /
	プレフィルタ= {}、

	/ *バインディングを転送する
	 * 1）キーはデータ型です
	 * 2）キャッチオールシンボル "*"が使用可能
	 * 3）選択はtransport dataTypeで始まり、必要ならば "*"へ行く
	 * /
	transports = {}、

	//コメントプロローグのcharシーケンスを避けます（＃10098）; 糸くずをなだめ、圧縮を回避する必要があります
	allTypes = "* /"。concat（ "*"）、

	//ドキュメントの出所を解析するためのアンカータグ
	originAnchor = document.createElement（ "a"）;
	originAnchor.href = location.href;

// jQuery.ajaxPrefilterおよびjQuery.ajaxTransportのベース「コンストラクタ」
function addToPrefiltersOrTransports（構造体）{

	// dataTypeExpressionはオプションであり、デフォルトは "*"です。
	戻り関数（dataTypeExpression、func）{

		if（typeof dataTypeExpression！== "文字列"）{
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType、
			i = 0、
			dataTypes = dataTypeExpression.toLowerCase（）。match（rnothtmlwhite）|| [];

		if（isFunction（func））{

			// dataTypeExpressionの各dataTypeについて
			while（（dataType = dataTypes [i ++]））{

				//要求があれば前に追加
				if（dataType [0] === "+"）{
					dataType = dataType.slice（1）|| "*";
					（構造体[データ型] =構造体[データ型] || []）.unshift（func）;

				//それ以外の場合は追加
				その他{
					（構造体[データ型] =構造体[データ型] || []）.push（func）;
				}
			}
		}
	;
}

//プレフィルターとトランスポートのベース検査機能
function inspectPrefiltersOrTransports（構造体、オプション、originalOptions、jqXHR）{

	検査済み変数= {}、
		seekingTransport =（structure === transports）;

	関数検査（dataType）{
		varが選択されました。
		inspected [dataType] = true;
		jQuery.each（構造体[データ型] || []、関数（_、prefilterOrFactory）{
			var dataTypeOrTransport = prefilterOrFactory（options、originalOptions、jqXHR）;
			if（typeof dataTypeOrTransport === "文字列" &&
				！seekingTransport &&！inspected [dataTypeOrTransport]）{

				options.dataTypes.unshift（dataTypeOrTransport）;
				inspect（dataTypeOrTransport）;
				falseを返します。
			そうでなければ（seekingTransport）{
				return！（selected = dataTypeOrTransport）;
			}
		;））;
		選択を返します。
	}

	inspectを返す（options.dataTypes [0]）|| ！inspected ["*"] && inspect（ "*"）;
}

// ajaxオプションの特別な拡張
//これは "flat"オプションを取ります
//＃9887を修正
関数ajaxExtend（target、src）{
	varキー、深い、
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for（srcのキー）{
		if（src [key]！==未定義）{
			（flatOptions [key]？target：（deep ||（deep = {}）））[key] = src [key];
		}
	}
	if（deep）{
		jQuery.extend（true、target、deep）;
	}

	ターゲットを返します。
}

/ * ajaxリクエストに対するレスポンスを処理します。
 *  - 正しいdataTypeを見つけます（content-typeと予想されるdataTypeの間を仲介します）。
 *  - 対応する応答を返します
 * /
関数ajaxHandleResponses（s、jqXHR、レスポンス）{

	var ct、type、finalDataType、firstDataType、
		contents = s.contents、
		dataTypes = s.dataTypes;

	// auto dataTypeを削除し、その過程でcontent-typeを取得する
	while（dataTypes [0] === "*"）{
		dataTypes.shift（）;
		if（ct ===未定義）{
			ct = s.mimeType || jqXHR.getResponseHeader（ "Content-Type"）;
		}
	}

	//既知のコンテンツタイプを扱っているかどうかを確認します
	if（ct）{
		for（内容を入力してください）{
			if（contents [type] && contents [type] .test（ct））{
				dataTypes.unshift（type）;
				ブレーク;
			}
		}
	}

	//期待されるdataTypeに対して応答があるかどうかを確認します
	if（レスポンス中のdataTypes [0]）{
		finalDataType = dataTypes [0];
	その他{

		//変換可能なデータ型を試す
		for（回答を入力してください）{
			if（！dataTypes [0] || s.converters [type + "" + dataTypes [0]]）{
				finalDataType = type;
				ブレーク;
			}
			if（！firstDataType）{
				firstDataType = type;
			}
		}

		//または最初のものを使う
		finalDataType = finalDataType || firstDataType;
	}

	// dataTypeが見つかった場合
	//必要に応じてリストにdataTypeを追加します
	//対応するレスポンスを返す
	if（finalDataType）{
		if（finalDataType！== dataTypes [0]）{
			dataTypes.unshift（finalDataType）;
		}
		レスポンスを返す[finalDataType];
	}
}

/ *リクエストと元のレスポンスが与えられた場合のチェーン変換
 * jqXHRインスタンスのresponseXXXフィールドも設定
 * /
関数ajaxConvert（s、応答、jqXHR、isSuccess）{
	var conv2、現在、conv、tmp、prev、
		コンバーター= {}、

		//変換のために変更する必要がある場合に備えて、dataTypesのコピーを操作します
		dataTypes = s.dataTypes.slice（）;

	//小文字のキーでコンバーターマップを作成します
	if（dataTypes [1]）{
		for（コンバージョンのコンバージョン数）{
			converters [conv.toLowerCase（）] = s.converters [conv];
		}
	}

	current = dataTypes.shift（）;

	//各順次データ型に変換
	while（現在）{

		if（s.responseFields [現在]）{
			jqXHR [s.responseFields [現在]] =レスポンス。
		}

		//指定されている場合はdataFilterを適用する
		if（！prev && isSuccess && s.dataFilter）{
			response = s.dataFilter（response、s.dataType）;
		}

		prev = current
		current = dataTypes.shift（）;

		if（現在）{

			//現在のdataTypeがauto以外の場合にのみ行う作業があります
			if（current === "*"）{

				現在=前

			//前のdataTypeが非自動で現在のものと異なる場合はレスポンスを変換する
			そうでなければ（prev！== "*" && prev！== current）{

				//ダイレクトコンバーターを探す
				conv = converters [prev + "" + current] || コンバーター["*" + current];

				//見つからない場合はペアを探します
				if（！conv）{
					for（コンバーターのconv2）{

						// conv2が電流を出力する場合
						tmp = conv2.split（ ""）;
						if（tmp [1] === current）{

							// prevを受け付けた入力に変換できる場合
							conv = converters [prev + "" + tmp [0]] ||
								コンバーター["*" + tmp [0]];
							if（conv）{

								//凝縮等価コンバータ
								if（conv === true）{
									conv = converters [conv2];

								//それ以外の場合は、中間データ型を挿入します
								そうでなければ（converters [conv2]！== true）{
									current = tmp [0];
									dataTypes.unshift（tmp [1]）;
								}
								ブレーク;
							}
						}
					}
				}

				//コンバータを適用する（等価でない場合）
				if（conv！== true）{

					//エラーが発生しない限り、エラーをキャッチして返す
					if（conv && s.throws）{
						response = conv（response）;
					その他{
						試してください{
							response = conv（response）;
						catch（e）{
							戻る{
								state： "parsererror"、
								エラー：コンバージョン？e： "" + prev + "から" + currentへの変換なし "
							;
						}
					}
				}
			}
		}
	}

	戻り値{状態： "成功"、データ：応答}。
}

jQuery.extend（{

	//アクティブなクエリ数を保持するためのカウンタ
	アクティブ：0、

	//次のリクエストのためのLast-Modifiedヘッダキャッシュ
	最終更新日： {}、
	etag：{}、

	ajaxSettings：{
		url：location.href、
		タイプ： "GET"、
		isLocal：rlocalProtocol.test（location.protocol）、
		グローバル：真、
		processData：true、
		非同期：true、
		contentType： "application / x-www-form-urlencoded; charset = UTF-8"、

		/ *
		タイムアウト：0、
		データ：null、
		dataType：null、
		ユーザー名：null、
		パスワード：null、
		キャッシュ：null、
		スロー：false、
		トラディショナル：偽、
		ヘッダ：{}、
		* /

		受け入れます：{
			"*"： いろんなタイプ、
			text： "text / plain"、
			html： "テキスト/ HTML"、
			xml： "アプリケーション/ xml、テキスト/ xml"、
			json： "application / json、text / javascript"
		、

		内容：{
			xml：/ \ bxml \ b /、
			html：/ \ bhtml /、
			json：/ \ bjson \ b /
		、

		responseFields：{
			xml： "responseXML"、
			テキスト： "responseText"、
			json： "responseJSON"
		、

		//データコンバーター
		//単一のスペースでソース（またはキャッチオール "*"）と宛先タイプを分離するキー
		コンバーター：{

			//何かをテキストに変換する
			"* text"：文字列、

			// HTMLからテキストへ（true =変換なし）
			"テキストHTML"：true、

			//テキストをJSON式として評価します
			"テキストJSON"：JSON.parse、

			//テキストをxmlとして解析します
			"テキストxml"：jQuery.parseXML
		、

		//深く拡張してはいけないオプションの場合：
		//あなたがここにあなた自身のカスタムオプションを追加することができます
		//そして、作成すべきではないはずのもの
		//深く拡張されています（ajaxExtendを参照）
		flatOptions：{
			url：本当、
			コンテキスト：true
		}
	、

	//本格的な設定オブジェクトをtargetに作成します
	// ajaxSettingsフィールドとsettingsフィールドの両方があります。
	// targetが省略された場合、ajaxSettingsに書き込みます。
	ajaxSetup：function（target、settings）{
		設定を返しますか？

			//設定オブジェクトの構築
			ajaxExtend（ajaxExtend（target、jQuery.ajaxSettings）、設定）：

			// ajaxSettingsを拡張する
			ajaxExtend（jQuery.ajaxSettings、target）;
	、

	ajaxPrefilter：addToPrefiltersOrTransports（プレフィルタ）、
	ajaxTransport：addToPrefiltersOrTransports（トランスポート）、

	//メインメソッド
	ajax：function（url、options）{

		// urlがオブジェクトの場合、1.5より前の署名をシミュレートする
		if（typeof url === "object"）{
			options = url;
			url =未定義
		}

		//オプションを強制的にオブジェクトにする
		options = options || {};

		varトランスポート、

			//キャッシュ防止パラメータなしのURL
			cacheURL、

			//レスポンスヘッダ
			responseHeadersString、
			responseHeaders、

			//タイムアウトハンドル
			timeoutTimer、

			// Url cleanup var
			urlAnchor、

			//リクエスト状態（送信時にfalse、完了時にtrueになります）
			完了しました、

			//グローバルイベントを送出するかどうかを知る
			fireGlobals、

			//ループ変数
			私、

			// URLのキャッシュされていない部分
			キャッシュされていない、

			//最終オプションオブジェクトを作成します
			s = jQuery.ajaxSetup（{}、options）、

			//コールバックコンテキスト
			callbackContext = s.context || s、

			//グローバルイベントのコンテキストがDOMノードまたはjQueryコレクションの場合、callbackContext
			globalEventContext = s.context &&
				（callbackContext.nodeType || callbackContext.jquery）？
					jQuery（callbackContext）：
					jQuery.event、

			//延期
			deferred = jQuery.Deferred（）、
			completeDeferred = jQuery.Callbacks（ "メモリ1回"）、

			//ステータス依存のコールバック
			statusCode = s.statusCode || {}、

			//ヘッダー（一度に送信されます）
			requestHeaders = {}、
			requestHeadersNames = {}、

			//デフォルトの中止メッセージ
			strAbort = "キャンセル"、

			//偽のxhr
			jqXHR = {
				readyState：0、

				//必要に応じてヘッダハッシュテーブルを構築する
				getResponseHeader：function（key）{
					var match;
					if（完了）{
						if（！responseHeaders）{
							responseHeaders = {};
							while（（match = rheaders.exec（responseHeadersString））））{
								responseHeaders [match [1] .toLowerCase（）] = match [2];
							}
						}
						match = responseHeaders [key.toLowerCase（）];
					}
					match == nullを返しますか？null：一致
				、

				//生の文字列
				getAllResponseHeaders：function（）{
					返品完了？responseHeadersString：null。
				、

				//ヘッダをキャッシュします
				setRequestHeader：function（name、value）{
					if（completed == null）{
						name = requestHeadersNames [name.toLowerCase（）] =
							requestHeadersNames [name.toLowerCase（）] || 名;
						requestHeaders [name] = value;
					}
					これを返してください。
				、

				//レスポンスのcontent-typeヘッダを上書きします
				overrideMimeType：function（type）{
					if（completed == null）{
						s.mimeType = type;
					}
					これを返してください。
				、

				//ステータス依存のコールバック
				statusCode：function（map）{
					var code;
					if（map）{
						if（完了）{

							//適切なコールバックを実行する
							jqXHR.always（map [jqXHR.status]）;
						その他{

							//古いコールバックを保持するように新しいコールバックを遅延追加します
							for（マップ内のコード）{
								statusCode [code] = [statusCode [code]、map [code]];
							}
						}
					}
					これを返してください。
				、

				//リクエストをキャンセルする
				中止：function（statusText）{
					var finalText = statusText || strAbort;
					if（輸送）{
						transport.abort（finalText）;
					}
					done（0、finalText）;
					これを返してください。
				}
			;

		//遅延を添付
		deferred.promise（jqXHR）;

		//提供されていない場合はプロトコルを追加します（プレフィルタはそれを期待するかもしれません）
		//設定オブジェクト内の誤ったURLを処理する（＃10093：古い署名との一貫性）
		//利用可能な場合はurlパラメータも使用します
		s.url =（（url || s.url || location.href）+ ""）
			.replace（rprotocol、location.protocol + "//"）;

		//チケットに従って入力するエイリアスメソッドオプション＃12004
		s.type = options.method || options.type || s.method || s.type;

		// dataTypesリストを抽出します
		s.dataTypes =（s.dataType || "*"）.toLowerCase（）。match（rnothtmlwhite）|| [""];

		//オリジンが現在のオリジンと一致しない場合は、クロスドメインリクエストが順番に行われます。
		if（s.crossDomain == null）{
			urlAnchor = document.createElement（ "a"）;

			//サポート：IE <= 8  -  11、Edge 12  -  15
			// URLが不正な形式の場合、IEはhrefプロパティへのアクセスで例外をスローします。
			//例http://example.com:80x/
			試してください{
				urlAnchor.href = s.url;

				//サポート：IE <= 8  -  11のみ
				// s.urlが相対パスの場合、アンカーのホストプロパティが正しく設定されない
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host！==
					urlAnchor.protocol + "//" + urlAnchor.host;
			catch（e）{

				// URLの解析中にエラーが発生した場合は、それがcrossDomainであると想定します。
				//無効な場合はトランスポートによって拒否される
				s.crossDomain = true;
			}
		}

		//まだ文字列でない場合はデータを変換する
		if（s.data && s.processData && typeof s.data！== "文字列"）{
			s.data = jQuery.param（s.data、s.traditional）;
		}

		//プレフィルタを適用
		inspectPrefiltersOrTransports（プレフィルタ、s、オプション、jqXHR）;

		//リクエストがプレフィルタ内で中止された場合、そこで停止する
		if（完了）{
			jqXHRを返します。
		}

		//私達は求められたら今の時点で世界的なイベントを起こすことができます
		// AMDの使用シナリオでjQuery.eventが未定義の場合はイベントを発生させない（＃15118）
		fireGlobals = jQuery.event && s.global;

		//新しい一連のリクエストを監視する
		if（fireGlobals && jQuery.active ++ === 0）{
			jQuery.event.trigger（ "ajaxStart"）;
		}

		//型を大文字にする
		s.type = s.type.toUpperCase（）;

		//リクエストにコンテンツがあるかどうかを判断
		s.hasContent =！rnoContent.test（s.type）;

		// If-Modified-Sinceを使っていた場合に備えて、URLを保存します
		//および/またはIf-None-Matchヘッダー
		// URL操作を簡単にするためにハッシュを削除
		cacheURL = s.url.replace（rhash、 ""）;

		//コンテンツのないリクエストに対するその他のオプション処理
		if（！s.hasContent）{

			//元に戻すことができるようにハッシュを覚えておく
			uncached = s.url.slice（cacheURL.length）;

			//データが利用可能であり処理する必要がある場合は、urlにデータを追加します
			if（s.data &&（s.processData || typeof s.data === "文字列"）））{
				cacheURL + =（rquery.test（cacheURL）？ "＆"： "？"）+ s.data;

				//＃9682：最終的な再試行で使用されないようにデータを削除する
				s.dataを削除します。
			}

			//必要に応じてアンチキャッシュパラメータを追加または更新します
			if（s.cache === false）{
				cacheURL = cacheURL.replace（rantiCache、 "$ 1"）;
				uncached =（rquery.test（cacheURL）？ "＆"： "？"）+ "_ =" +（nonce ++）+ uncached;
			}

			//要求されるURLにハッシュとアンチキャッシュを設定する（gh-1732）
			s.url = cacheURL +キャッシュされていません。

		//これがボディコンテンツからエンコードされている場合は '％20'を '+'に変更します（gh-2658）
		そうでなければ（s.data && s.processData &&
			（s.contentType || ""）.indexOf（ "application / x-www-form-urlencoded"）=== 0）{
			s.data = s.data.replace（r20、 "+"）;
		}

		// ifModifiedモードの場合は、If-Modified-SinceまたはIf-None-Matchヘッダーを設定します。
		if（s.ifModified）{
			if（jQuery.lastModified [cacheURL]）{
				jqXHR.setRequestHeader（ "If-Modified-Since"、jQuery.lastModified [cacheURL]）;
			}
			if（jQuery.etag [cacheURL]）{
				jqXHR.setRequestHeader（ "一致しない場合"、jQuery.etag [cacheURL]）;
			}
		}

		//データが送信されている場合は正しいヘッダを設定する
		if（s.data && s.hasContent && s.contentType！== false || options.contentType）{
			jqXHR.setRequestHeader（ "Content-Type"、s.contentType）;
		}

		// dataTypeに応じて、サーバーのAcceptsヘッダーを設定します
		jqXHR.setRequestHeader（
			"同意する"、
			s.dataTypes [0] && s.accepts [s.dataTypes [0]]？
				s.accepts [s.dataTypes [0]] +
					（s.dataTypes [0]！== "*"？ "、" + allTypes + "; q = 0.01"： ""）：
				s.accepts ["*"]
		;

		//ヘッダオプションをチェック
		for（私はs.headersに）{
			jqXHR.setRequestHeader（i、s.headers [i]）;
		}

		//カスタムヘッダー/ MIMEタイプと早期アボートを許可する
		if（s.beforeSend &&
			（s.beforeSend.call（callbackContext、jqXHR、s）=== false ||完了））{

			//まだ行っていない場合は中止して戻る
			jqXHR.abort（）を返します。
		}

		//中止することはキャンセルではなくなりました
		strAbort = "中止";

		//延期にコールバックをインストールする
		completeDeferred.add（s.complete）;
		jqXHR.done（s.success）;
		jqXHR.fail（s.error）;

		//交通機関を利用する
		transport = inspectPrefiltersOrTransports（transports、s、options、jqXHR）;

		//トランスポートがない場合、自動中止します
		if（！transport）{
			完了（-1、 "転送なし"）;
		その他{
			jqXHR.readyState = 1;

			//グローバルイベントを送信
			if（fireGlobals）{
				globalEventContext.trigger（ "ajaxSend"、[jqXHR、s]）;
			}

			//リクエストがajaxSend内で中止された場合は、そこで停止する
			if（完了）{
				jqXHRを返します。
			}

			// タイムアウト
			if（s.async && s.timeout> 0）{
				timeoutTimer = window.setTimeout（function（）{
					jqXHR.abort（ "timeout"）;
				s.timeout）;
			}

			試してください{
				completed = false。
				transport.send（requestHeaders、done）;
			catch（e）{

				//完了後例外を再スローします
				if（完了）{
					eを投げます。
				}

				//他の人を結果として伝播する
				done（-1、e）;
			}
		}

		//すべて完了したらコールバック
		機能完了（ステータス、nativeStatusText、レスポンス、ヘッダ）{
			var isSuccess、成功、エラー、応答、変更、
				statusText = nativeStatusText;

			//繰り返しの呼び出しを無視する
			if（完了）{
				戻る
			}

			completed = true。

			//タイムアウトが存在する場合はクリアします
			if（timeoutTimer）{
				window.clearTimeout（timeoutTimer）;
			}

			//初期のガベージコレクションのための間接参照転送
			//（jqXHRオブジェクトが使用される期間に関係なく）
			transport = undefined;

			//レスポンスヘッダをキャッシュする
			responseHeadersString = headers || "";

			// readyStateを設定します
			jqXHR.readyState = status> 0 4：0。

			//成功したかどうかを確認
			isSuccess = status> = 200 && status <300 || status === 304;

			//レスポンスデータを取得する
			if（回答）{
				response = ajaxHandleResponses（s、jqXHR、レスポンス）;
			}

			//何に関係なく変換する（そのようにしてresponseXXXフィールドは常に設定される）
			response = ajaxConvert（s、response、jqXHR、isSuccess）;

			//成功した場合は、型チェーニングを処理する
			if（isSuccess）{

				// ifModifiedモードの場合は、If-Modified-SinceまたはIf-None-Matchヘッダーを設定します。
				if（s.ifModified）{
					modified = jqXHR.getResponseHeader（ "Last-Modified"）;
					if（修正済み）{
						jQuery.lastModified [cacheURL] = modified;
					}
					modified = jqXHR.getResponseHeader（ "etag"）;
					if（修正済み）{
						jQuery.etag [cacheURL] = modified;
					}
				}

				//コンテンツがない場合
				if（status === 204 || s.type === "HEAD"）{
					statusText = "nocontent";

				//変更されていない場合
				そうでなければ（status === 304）{
					statusText = "notmodified";

				//データがある場合は、変換しましょう
				その他{
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess =！error;
				}
			その他{

				// statusTextからエラーを抽出し、中断しないように正規化する
				error = statusText;
				if（status ||！statusText）{
					statusText = "エラー";
					if（ステータス<0）{
						ステータス= 0。
					}
				}
			}

			//偽のxhrオブジェクトのデータを設定します
			jqXHR.status = status。
			jqXHR.statusText =（nativeStatusText || statusText）+ "";

			//成功/エラー
			if（isSuccess）{
				deferred.resolveWith（callbackContext、[成功、ステータステキスト、jqXHR]）;
			その他{
				deferred.rejectWith（callbackContext、[jqXHR、statusText、error]）;
			}

			//ステータス依存のコールバック
			jqXHR.statusCode（statusCode）;
			statusCode =未定義。

			if（fireGlobals）{
				globalEventContext.trigger（isSuccess？ "ajaxSuccess"： "ajaxError"、
					[jqXHR、s、isSuccess？成功：エラー]）;
			}

			//完了
			completeDeferred.fireWith（callbackContext、[jqXHR、statusText]）;

			if（fireGlobals）{
				globalEventContext.trigger（ "ajaxComplete"、[jqXHR、s]）;

				//グローバルAJAXカウンターを処理する
				if（！（--jQuery.active））{
					jQuery.event.trigger（ "ajaxStop"）;
				}
			}
		}

		jqXHRを返します。
	、

	getJSON：function（url、data、callback）{
		jQuery.get（url、data、callback、 "json"）を返します。
	、

	getScript：function（url、callback）{
		jQuery.get（url、undefined、callback、 "script"）を返します。
	}
;））;

jQuery.each（["get"、 "post"]、関数（i、メソッド）{
	jQuery [method] = function（url、data、callback、type）{

		//データ引数を省略した場合は引数をシフトします
		if（isFunction（data））{
			type = type || 折り返し電話;
			コールバック=データ。
			データ=未定義。
		}

		// URLはオプションオブジェクトにすることができます（その場合は.urlが必要です）
		jQuery.ajax（jQuery.extend（{
			URL：URL、
			type：メソッド
			dataType：タイプ、
			データ：データ、
			成功：コールバック
		jQuery.isPlainObject（url）&& url））;
	;
;））;


jQuery._evalUrl = function（url）{
	jQuery.ajax（{を返す
		URL：URL、

		//ユーザーはajaxSetupを通してこれをオーバーライドできるので、これを明示的にします（＃11264）
		タイプ： "GET"、
		dataType： "スクリプト"、
		キャッシュ：真、
		非同期：false、
		グローバル：偽、
		"throw"：真
	;））;
;


jQuery.fn.extend（{
	wrapAll：関数（HTML）{
		var wrap;

		if（this [0]）{
			if（isFunction（html））{
				html = html.call（this [0]）;
			}

			//ターゲットをラップする要素
			wrap = jQuery（html、this [0] .ownerDocument）.eq（0）.clone（true）;

			if（this [0] .parentNode）{
				wrap.insertBefore（this [0]）;
			}

			wrap.map（function（）{
				var elem = this;

				while（elem.firstElementChild）{
					elem = elem.firstElementChild;
				}

				elemを返します。
			（this）を追加します。
		}

		これを返してください。
	、

	wrapInner：function（html）{
		if（isFunction（html））{
			this.each（function（i）{を返します。
				jQuery（this）.wrapInner（html.call（this、i））;
			;））;
		}

		this.each（function（）{を返します。
			var self = jQuery（this）、
				contents = self.contents（）;

			if（contents.length）{
				contents.wrapAll（html）;

			その他{
				self.append（html）;
			}
		;））;
	、

	ラップ：関数（HTML）{
		var htmlIsFunction = isFunction（html）;

		this.each（function（i）{を返します。
			jQuery（this）.wrapAll（htmlIsFunction？html.call（this、i）：html）;
		;））;
	、

	ラップを解除する：function（selector）{
		this.parent（セレクタ）.not（ "body"）.each（function（）{
			jQuery（this）.replaceWith（this.childNodes）;
		;））;
		これを返してください。
	}
;））;


jQuery.expr.pseudos.hidden = function（elem）{
	return！jQuery.expr.pseudos.visible（elem）;
;
jQuery.expr.pseudos.visible = function（elem）{
	return !!（elem.offsetWidth || elem.offsetHeight || elem.getClientRects（）。length）;
;




jQuery.ajaxSettings.xhr = function（）{
	試してください{
		新しいウィンドウを返す。XMLHttpRequest（）;
	}キャッチ（E）{}
;

var xhrSuccessStatus = {

		//ファイルプロトコルは常にステータスコード0を返す、200と仮定する
		0：200、

		//サポート：IE <= 9のみ
		//＃1450：204であるべきときにIEが1223を返すことがある
		1223：204
	、
	xhrSupported = jQuery.ajaxSettings.xhr（）;

support.cors = !! xhrSupported &&（xhrSupportedの "withCredentials"）;
support.ajax = xhrSupported = !! xhrSupported;

jQuery.ajaxTransport（関数（オプション））
	var callback、errorCallback;

	//クロスドメインはXMLHttpRequestでサポートされている場合にのみ許可されます
	if（support.cors || xhrSupported &&！options.crossDomain）{
		戻る{
			送信：機能（ヘッダ、完全）{
				var i、
					xhr = options.xhr（）;

				xhr.open（
					options.type、
					options.url、
					options.async、
					options.username、
					options.password
				;

				//提供されていればカスタムフィールドを適用する
				if（options.xhrFields）{
					for（私はoptions.xhrFieldsに）{
						xhr [i] = options.xhrFields [i];
					}
				}

				//必要に応じてMIMEタイプを上書きする
				if（options.mimeType && xhr.overrideMimeType）{
					xhr.overrideMimeType（options.mimeType）;
				}

				// X-Requested-Withヘッダ
				//クロスドメインリクエストの場合、プリフライトの条件は
				//ジグソーパズルのようなもので、確かにそれを設定することは決してありません。
				//（常にリクエストごとに設定することも、ajaxSetupを使用して設定することもできます）
				//同一ドメインリクエストの場合、すでに提供されている場合はヘッダーを変更しません。
				if（！options.crossDomain &&！ヘッダー["X-Requested-With"]））{
					headers ["X-Requested-With"] = "XMLHttpRequest";
				}

				//ヘッダを設定
				for（ヘッダーのi）{
					xhr.setRequestHeader（i、headers [i]）;
				}

				// 折り返し電話
				コールバック=関数（タイプ）{
					return function（）{
						if（コールバック）{
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if（type === "abort"）{
								xhr.abort（）;
							そうでなければ（type === "error"）{

								//サポート：IE <= 9のみ
								//手動のネイティブアボートで、IE9はスローします
								// readyStateではないプロパティアクセスでエラーが発生した
								if（typeof xhr.status！== "number"）{
									完了（0、 "エラー"）;
								その他{
									コンプリート（

										// File：protocolは常にステータス0を返します。＃8605を参照、＃14207
										xhr.status、
										xhr.statusText
									;
								}
							その他{
								コンプリート（
									xhrSuccessStatus [xhr.status] || xhr.status、
									xhr.statusText、

									//サポート：IE <= 9のみ
									// IE9にはXHR2がありませんが、バイナリをスローします（trac-11426）。
									//テキスト以外のXHR2の場合は、呼び出し元に処理させる（gh-2498）
									（xhr.responseType || "text"）！== "text" ||
									typeof xhr.responseText！== "文字列"？
										{binary：xhr.response}：
										{text：xhr.responseText}、
									xhr.getAllResponseHeaders（）
								;
							}
						}
					;
				;

				//イベントを聴く
				xhr.onload = callback（）;
				errorCallback = xhr.onerror = xhr.ontimeout = callback（ "error"）;

				//サポート：IE 9のみ
				// onabortを置き換えるためにonreadystatechangeを使用する
				//捕捉されなかったアボートを処理する
				if（xhr.onabort！==未定義）{
					xhr.onabort = errorCallback;
				その他{
					xhr.onreadystatechange = function（）{

						//タイムアウトになる前にreadyStateをチェックして変更します
						if（xhr.readyState === 4）{

							//エラーを最初に呼び出すことを許可します
							//しかし、それはネイティブアボートを処理しません
							//また、errorCallbackを変数に保存します
							// xhr.onerrorにアクセスできない
							window.setTimeout（function（）{
								if（コールバック）{
									errorCallback（）;
								}
							;））;
						}
					;
				}

				//中止コールバックを作成します
				callback = callback（ "abort"）;

				試してください{

					//リクエストを送信します（これにより例外が発生する可能性があります）
					xhr.send（options.hasContent && options.data || null）;
				catch（e）{

					//＃14683：これがまだエラーとして通知されていない場合のみ再スロー
					if（コールバック）{
						eを投げます。
					}
				}
			、

			中止：function（）{
				if（コールバック）{
					折り返し電話（）;
				}
			}
		;
	}
;））;




//明示的なdataTypeが提供されていないときにスクリプトが自動実行されないようにする（gh-2432を参照）
jQuery.ajaxPrefilter（関数）{
	if（s.crossDomain）{
		s.contents.script = false;
	}
;））;

//スクリプトdataTypeをインストールします
jQuery.ajaxSetup（{
	受け入れます：{
		スクリプト： "text / javascript、application / javascript、" +
			"application / ecmascript、application / x-ecmascript"
	、
	内容：{
		script：/ \ b（？：java | ecma）script \ b /
	、
	コンバーター：{
		"テキストスクリプト"：関数（テキスト）{
			jQuery.globalEval（テキスト）。
			テキストを返します。
		}
	}
;））;

//キャッシュの特殊なケースとcrossDomainを処理する
jQuery.ajaxPrefilter（ "script"、function（s）{
	if（s.cache ===未定義）{
		s.cache = false。
	}
	if（s.crossDomain）{
		s.type = "GET";
	}
;））;

//スクリプトタグハック転送をバインドする
jQuery.ajaxTransport（ "script"、function（s）{

	//このトランスポートはクロスドメインリクエストのみを扱います。
	if（s.crossDomain）{
		varスクリプト、コールバック。
		戻る{
			送ってください：function（_、complete）{
				script = jQuery（ "<script>"）.prop（{
					charset：s.scriptCharset、
					src：s.url
				（）
					"ロードエラー"、
					コールバック= function（evt）{
						script.remove（）;
						callback = null。
						if（evt）{
							完了（evt.type === "エラー"？404：200、evt.type）。
						}
					}
				;

				//ネイティブDOM操作を使用して、domManip AJAXトリックを回避する
				document.head.appendChild（script [0]）;
			、
			中止：function（）{
				if（コールバック）{
					折り返し電話（）;
				}
			}
		;
	}
;））;




var oldCallbacks = []、
	rjsonp = /（=）\？（？=＆| $）| \？\？/;

//デフォルトのJSONP設定
jQuery.ajaxSetup（{
	jsonp： "コールバック"、
	jsonpCallback：function（）{
		var callback = oldCallbacks.pop（）|| （jQuery.expando + "_" +（nonce ++））;
		this [callback] = true;
		コールバックを返します。
	}
;））;

// jsonpリクエストに対するオプションの検出、正規化、およびコールバックのインストール
jQuery.ajaxPrefilter（ "json jsonp"、関数（s、originalSettings、jqXHR）{

	var callbackName、上書き、responseContainer、
		jsonProp = s.jsonp！== false &&（rjsonp.test（s.url）？
			"URL"：
			typeof s.data === "文字列" &&
				（s.contentType || ""）
					.indexOf（ "application / x-www-form-urlencoded"）=== 0 &&
				rjsonp.test（s.data）&&「データ」
		;

	//予想されるデータ型が "jsonp"である場合、または設定するパラメータがある場合は処理します
	if（jsonProp || s.dataTypes [0] === "jsonp"）{

		//コールバック名を取得し、それに関連付けられた既存の値を記憶します
		callbackName = s.jsonpCallback = isFunction（s.jsonpCallback）？
			s.jsonpCallback（）：
			s.jsonpCallback;

		// URLまたはフォームデータにコールバックを挿入する
		if（jsonProp）{
			s [jsonProp] = s [jsonProp] .replace（rjsonp、 "$ 1" + callbackName）;
		そうでなければ（s.jsonp！== false）{
			s.url + =（rquery.test（s.url）？ "＆"： "？"）+ s.jsonp + "=" + callbackName;
		}

		//スクリプト実行後にデータコンバータを使用してJSONを取得する
		s.converters ["script json"] = function（）{
			if（！responseContainer）{
				jQuery.error（callbackName + "は呼び出されませんでした"）;
			}
			responseContainer [0]を返します。
		;

		// Force json dataType
		s.dataTypes [0] = "json";

		//コールバックをインストールする
		overwritten = window [callbackName];
		window [callbackName] = function（）{
			responseContainer = arguments;
		;

		//クリーンアップ機能（コンバーター後に発生）
		jqXHR.always（function（）{

			//以前の値が存在しなかった場合 - 削除します
			if（上書きされた===未定義）{
				jQuery（ウィンドウ）.removeProp（callbackName）;

			//そうでなければ既存の値を復元する
			その他{
				window [callbackName] =上書きされました。
			}

			//無料保存
			if（s [callbackName]）{

				//オプションを再利用しても問題が解決しないことを確認してください
				s.jsonpCallback = originalSettings.jsonpCallback;

				//今後使用するためにコールバック名を保存します
				oldCallbacks.push（callbackName）;
			}

			//それが関数であり、応答がある場合は呼び出す
			if（responseContainer && isFunction（上書き））{
				上書きされました（responseContainer [0]）。
			}

			responseContainer =上書き=未定義。
		;））;

		//スクリプトに委任する
		"script"を返します。
	}
;））;




//サポート：Safari 8のみ
// Safari 8ではdocument.implementation.createHTMLDocumentによって作成された文書
//兄弟フォームを折りたたみます。2番目のものは最初のものの子になります。
//そのため、Safari 8ではこのセキュリティ対策を無効にする必要があります。
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument =（function（）{
	var body = document.implementation.createHTMLDocument（ ""）.body;
	body.innerHTML = "<form> </form> <form> </form>";
	body.childNodes.length === 2を返します。
（）;


//引数 "data"はHTMLの文字列でなければなりません
// context（オプション）：指定された場合、フラグメントはこのコンテキストで作成されます。
//デフォルトはdocument
// keepScripts（オプション）：trueの場合、html文字列で渡されたスクリプトが含まれます
jQuery.parseHTML = function（data、context、keepScripts）{
	if（typeof data！== "文字列"）{
		return [];
	}
	if（typeof context === "boolean"）{
		keepScripts = context;
		context = false;
	}

	var base、解析済み、スクリプト。

	if（！context）{

		//スクリプトまたはインラインイベントハンドラがすぐに実行されないようにする
		// document.implementationを使用して
		if（support.createHTMLDocument）{
			context = document.implementation.createHTMLDocument（ ""）;

			//作成したドキュメントのベースhrefを設定します
			// URLを含むすべての解析済み要素
			//ドキュメントのURLに基??づいています（gh-2965）
			base = context.createElement（ "base"）;
			base.href = document.location.href;
			context.head.appendChild（base）;
		その他{
			context = document;
		}
	}

	parsed = rsingleTag.exec（データ）。
	scripts =！keepScripts && [];

	//単一タグ
	if（解析済み）{
		[context.createElement（parsed [1]）]を返します。
	}

	parsed = buildFragment（[data]、context、scripts）;

	if（scripts && scripts.length）{
		jQuery（スクリプト）.remove（）;
	}

	jQuery.merge（[]、parsed.childNodes）を返します。
;


/ **
 *ページにURLを読み込む
 * /
jQuery.fn.load = function（url、params、callback）{
	変数セレクタ、タイプ、応答、
		自己=これ、
		off = url.indexOf（ ""）;

	if（off> -1）{
		selector = stripAndCollapse（url.slice（off））;
		url = url.slice（0、off）;
	}

	//関数の場合
	if（isFunction（params））{

		//これはコールバックだと思います
		callback = params;
		params =未定義。

	//そうでなければ、param文字列を作成する
	そうでなければ（params && typeof params === "object"）{
		type = "POST";
	}

	//変更する要素がある場合は、リクエストを送信します
	if（self.length> 0）{
		jQuery.ajax（{
			URL：URL、

			// "type"変数が未定義の場合、 "GET"メソッドが使用されます。
			//このフィールドの値を明示的にする
			//ユーザーはajaxSetupメソッドを介してオーバーライドできます
			タイプ：タイプ|| "取得する"、
			dataType： "html"、
			データ：params
		.done（関数（responseText）{

			//完全なコールバックで使用するためにレスポンスを保存します
			response = arguments;

			self.html（セレクタ？

				//セレクタが指定されている場合は、ダミーのdivで正しい要素を探します
				// IEの 'Permission Denied'エラーを回避するためにスクリプトを除外
				jQuery（ "<div>"）.append（jQuery.parseHTML（responseText））.find（selector）：

				//そうでなければ完全な結果を使う
				responseText）;

		//リクエストが成功すると、この関数は "data"、 "status"、 "jqXHR"を取得します。
		//しかしレスポンスが上で設定されているのでそれらは無視されます。
		//失敗した場合、この関数は "jqXHR"、 "status"、 "error"を取得します。
		.allways（コールバック&&関数（jqXHR、status）{
			self.each（function（）{
				callback.apply（this、response || [jqXHR.responseText、status、jqXHR]）;
			;））;
		;））;
	}

	これを返してください。
;




//共通のAJAXイベントを処理するための一連の関数を添付する
jQuery.each（[
	"ajaxStart"、
	"ajaxStop"、
	"ajaxComplete"、
	"ajaxError"、
	"ajaxSuccess"、
	"ajaxSend"
]、関数（i、型）{
	jQuery.fn [type] = function（fn）{
		this.on（type、fn）を返します。
	;
;））;




jQuery.expr.pseudos.animated = function（elem）{
	jQuery.grepを返します（jQuery.timers、function（fn）{
		elem === fn.elemを返します。
	長さ;
;




jQuery.offset = {
	setOffset：function（elem、options、i）{
		var curPosition、curLeft、curCSSTop、curTop、curOffset、curCSSLeft、calculatePosition、
			position = jQuery.css（elem、 "position"）、
			curElem = jQuery（elem）、
			props = {};

		//最初に位置を設定し、静的要素でも上/左が設定される
		if（position === "static"）{
			elem.style.position = "relative";
		}

		curOffset = curElem.offset（）;
		curCSSTop = jQuery.css（elem、 "top"）;
		curCSSLeft = jQuery.css（elem、 "left"）;
		calculatePosition =（位置=== "絶対" ||位置=== "固定"）&&
			（curCSSTop + curCSSLeft）.indexOf（ "auto"）> -1。

		//次のいずれかの場合、位置を計算できるようにする必要があります
		//上または左は自動で位置は絶対または固定
		if（calculatePosition）{
			curPosition = curElem.position（）;
			curTop = curPosition.top;
			curLeft = curPosition.left;

		その他{
			curTop = parseFloat（curCSSTop）|| 0;
			curLeft = parseFloat（curCSSLeft）|| 0;
		}

		if（isFunction（options））{

			//座標引数の変更を許可するには、ここでjQuery.extendを使用する（gh-1848）
			options = options.call（elem、i、jQuery.extend（{}、curOffset））;
		}

		if（options.top！= null）{
			props.top =（options.top  -  curOffset.top）+ curTop;
		}
		if（options.left！= null）{
			props.left =（options.left  -  curOffset.left）+ curLeft;
		}

		if（オプションの "using"）{
			options.using.call（elem、props）;

		その他{
			curElem.css（プロップ）。
		}
	}
;

jQuery.fn.extend（{

	// offset（）は、要素の境界ボックスをドキュメントの原点に関連付けます
	offset：function（オプション）{

		//セッターの連鎖を維持する
		if（arguments.length）{
			オプションを返す===未定義？
				この ：
				this.each（関数（i）{
					jQuery.offset.setOffset（this、options、i）;
				;））;
		}

		var rect、勝ち、
			elem = this [0];

		if（！elem）{
			戻る
		}

		//切断され隠された要素（表示：なし）に対してゼロを返す（gh-2310）
		//サポート：IE <= 11のみ
		// getBoundingClientRectを実行します
		// IEで切断されたノードはエラーをスローします
		if（！elem.getClientRects（）。length）{
			{top：0、left：0}を返します。
		}

		//ビューポートスクロールをビューポート相対gBCRに追加してドキュメント相対位置を取得
		rect = elem.getBoundingClientRect（）;
		win = elem.ownerDocument.defaultView;
		戻る{
			top：rect.top + win.pageYOffset、
			左：rect.left + win.pageXOffset
		;
	、

	// position（）は要素のマージンボックスをそのオフセットの親のパディングボックスに関連付ける
	//これはCSSの絶対配置の動作に対応します
	position：function（）{
		if（！this [0]）{
			戻る
		}

		var offsetParent、offset、doc、
			elem = this [0]、
			parentOffset = {top：0、left：0};

		// position：固定要素はビューポートからオフセットされます。ビューポート自体は常にゼロオフセットを持ちます。
		if（jQuery.css（elem、 "position"）=== "fixed"）{

			//位置を仮定：fixedはgetBoundingClientRectが利用可能であることを意味します
			offset = elem.getBoundingClientRect（）;

		その他{
			offset = this.offset（）;

			//ドキュメントまたはそのルート要素になることができる* real * offsetの親を説明する
			//静的に配置された要素が識別されたとき
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while（offsetParent &&
				（offsetParent === doc.body || offsetParent === doc.documentElement）&&
				jQuery.css（offsetParent、 "position"）=== "static"）{

				offsetParent = offsetParent.parentNode;
			}
			if（offsetParent && offsetParent！== elem && offsetParent.nodeType === 1）{

				//境界線はそのコンテンツの起点の外側にあるので、そのオフセットに組み込む
				parentOffset = jQuery（offsetParent）.offset（）;
				parentOffset.top + = jQuery.css（offsetParent、 "borderTopWidth"、true）;
				parentOffset.left + = jQuery.css（offsetParent、 "borderLeftWidth"、true）;
			}
		}

		//親オフセットと要素余白を差し引く
		戻る{
			top：offset.top  -  parentOffset.top  -  jQuery.css（elem、 "marginTop"、true）、
			left：offset.left  -  parentOffset.left  -  jQuery.css（elem、 "marginLeft"、true）
		;
	、

	//このメソッドは次の場合にdocumentElementを返します。
	// 1）offsetParentのないiframe内の要素の場合、このメソッドは
	//親ウィンドウのdocumentElement
	// 2）非表示または切り離された要素
	// 3）bodyまたはhtml要素、つまりhtmlノードの場合 - それ自身を返します
	//
	//ただし、これらの例外は実際のユースケースとして提示されたことはありません
	//そしてより好ましい結果と考えられるかもしれません。
	//
	//ただし、この論理は保証されたものではなく、将来的に変更される可能性があります。
	offsetParent：function（）{
		this.map（function（）{を返す
			var offsetParent = this.offsetParent;

			while（offsetParent && jQuery.css（offsetParent、 "position"）=== "static"）{
				offsetParent = offsetParent.offsetParent;
			}

			offsetParentを返します|| documentElement;
		;））;
	}
;））;

// scrollLeftおよびscrollTopメソッドを作成します
jQuery.each（{scrollLeft： "pageXOffset"、scrollTop： "pageYOffset"}、function（method、prop）{
	var top = "pageYOffset" === prop;

	jQuery.fn [method] = function（val）{
		return access（this、function（elem、method、val）{

			//ドキュメントとウィンドウを結合する
			var win;
			if（isWindow（elem））{
				win = elem;
			そうでなければ（elem.nodeType === 9）{
				win = elem.defaultView;
			}

			if（val ===未定義）{
				勝利を返す？win [prop]：elem [method];
			}

			if（勝つ）{
				win.scrollTo（
					！上 ？val：win.pageXOffset、
					上 ？val：win.pageYOffset
				;

			その他{
				elem [method] = val;
			}
		method、val、arguments.length）;
	;
;））;

//サポート：Safari <= 7  -  9.1、Chrome <= 37  -  49
// jQuery.fn.positionを使用して上/左のcssHookを追加します
// Webkitのバグ：https://bugs.webkit.org/show_bug.cgi?id=29084
//点滅バグ：https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyleは、top / left / bottom / rightに指定されたときにパーセントを返します。
// cssモジュールをoffsetモジュールに依存させるのではなく、ここでチェックしてください
jQuery.each（["top"、 "left"]、function（i、prop）{
	jQuery.cssHooks [prop] = addGetHookIf（support.pixelPosition、
		関数（elem、計算済み）{
			if（計算値）{
				calculate = curCSS（elem、prop）;

				// curCSSがパーセンテージを返す場合は、offsetにフォールバックする
				rnumnonpx.test（計算済み）を返しますか？
					jQuery（elem）.position（）[prop] + "px"：
					計算済み。
			}
		}
	;
;））;


// innerHeight、innerWidth、height、width、outerHeight、およびouterWidthメソッドを作成します
jQuery.each（{Height： "height"、Width： "width"}、function（name、type）{
	jQuery.each（{パディング： "内側" +名前、内容：タイプ、 ""： "外側" +名前}、
		function（defaultExtra、funcName）{

		//マージンはouterHeight、outerWidthのみ
		jQuery.fn [funcName] = function（マージン、値）{
			var chainable = arguments.length &&（defaultExtra || typeof margin！== "boolean"）、
				extra = defaultExtra || （margin === true || value === true？ "margin"： "border"）;

			return access（this、function（elem、type、value）{
				var doc;

				if（isWindow（elem））{

					// $（window）.outerWidth /スクロールバーを含む高さのw / hを返す（gh-1729）
					funcName.indexOf（ "outer"）=== 0を返しますか？
						elem ["inner" + name]：
						elem.document.documentElement ["client" + name];
				}

				//文書の幅または高さを取得する
				if（elem.nodeType === 9）{
					doc = elem.documentElement;

					// [Width / Height]またはoffset [Width / Height]またはクライアント[Width / Height]のいずれかをスクロールします。
					//どちらか大きい方
					Math.max（を返します。
						elem.body ["scroll" + name]、doc ["scroll" + name]、
						elem.body ["offset" + name]、doc ["offset" + name]、
						doc ["クライアント" +名前]
					;
				}

				戻り値===未定義？

					//要素の幅または高さを取得し、parseFloatを要求するが強制はしない
					jQuery.css（elem、type、extra）：

					//要素の幅または高さを設定します
					jQuery.style（elem、type、value、extra）;
			、タイプ、連鎖可能？マージン：未定義、連鎖可能）
		;
	;））;
;））;


jQuery.each（（ "ぼかしフォーカスフォーカスインフォーカスアウトリサイズスクロールdblclick" +
	"マウスダウンマウスアップマウスでマウスオーバーマウスオーバーマウスでマウスキーを外す" +
	"選択送信キーダウンキープレスキーアップコンテキストメニューの変更"）.split（ ""）、
	関数（i、名前）{

	//イベントバインディングを処理する
	jQuery.fn [name] = function（data、fn）{
		arguments.length> 0を返しますか。
			this.on（name、null、data、fn）：
			this.trigger（name）;
	;
;））;

jQuery.fn.extend（{
	ホバー：関数（fnOver、fnOut）（
		this.mouseenter（fnOver）.mouseleave（fnOut || fnOver）を返します。
	}
;））;




jQuery.fn.extend（{

	bind：function（types、data、fn）{
		this.on（types、null、data、fn）を返します。
	、
	バインドを解除する：function（types、fn）{
		this.off（types、null、fn）を返します。
	、

	デリゲート：関数（セレクタ、タイプ、データ、fn）{
		this.on（types、selector、data、fn）を返します。
	、
	元に戻す：function（selector、types、fn）{

		//（ネームスペース）または（selector、types [、fn]）
		arguments.length === 1を返しますか？
			this.off（セレクタ、 "**"）：
			this.off（types、selector || "**"、fn）;
	}
;））;

//関数をコンテキストにバインドします。
//引数
// jQuery.proxyは標準化を推進するために推奨されていません（特にFunction＃bind）。
//ただし、間もなく削除の予定はありません
jQuery.proxy = function（fn、context）{
	var tmp、args、プロキシ。

	if（typeof context === "string"）{
		tmp = fn [context];
		context = fn;
		fn = tmp。
	}

	//仕様内でターゲットが呼び出し可能かどうかを判断するためのクイックチェック
	//これはTypeErrorを投げますが、undefinedを返します。
	if（！isFunction（fn））{
		未定義を返します。
	}

	//シミュレートされたバインド
	args = slice.call（arguments、2）;
	proxy = function（）{
		fn.apply（context || this、args.concat（slice.call（arguments）））を返します。
	;

	//一意のハンドラのGUIDを元のハンドラと同じに設定して、削除できるようにする
	proxy.guid = fn.guid = fn.guid || jQuery.guid ++;

	プロキシを返します。
;

jQuery.holdReady = function（hold）{
	if（hold）{
		jQuery.readyWait ++;
	その他{
		jQuery.ready（true）;
	}
;
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now。

jQuery.isNumeric = function（obj）{

	// jQuery 3.0以降、isNumericはに制限されます
	//文字列と数字（プリミティブまたはオブジェクト）
	//有限数に強制することができる（gh-2662）
	var type = jQuery.type（obj）;
	return（type === "number" || type === "string"）&&

		// parseFloat NaNによる数値キャストの誤検出（ ""）
		// ...しかし、先頭の数字文字列、特に16進数リテラル（ "0x ..."）を誤って解釈する
		//減算は無限大をNaNに強制する
		！isNaN（obj  -  parseFloat（obj））;
;




// jQueryは他のAMDモジュールと連結できるので、名前付きAMDモジュールとして登録する
// defineを使用する可能性のあるファイル
//匿名のAMDモジュールを理解しています。指名されたAMDは最も安全で最も堅牢です
//登録方法 AMDのモジュール名が
//ファイル名から派生し、jQueryは通常小文字で配信されます
// ファイル名。AMDモジュールが望んでいるようにグローバルを作成した後にこれをしてください
//このバージョンのjQueryを非表示にするためにnoConflictを呼び出すには、うまくいきます。

//最大限の移植性のために、jQueryではないライブラリはすべきです
//自分自身を匿名モジュールとして宣言します。
// AMDローダーが存在します。jQueryは特別な場合です。詳細については、
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if（typeof define === "関数" && define.amd）{
	define（ "jquery"、[]、function（）{
		jQueryを返します。
	;））;
}




var

	//上書きの場合はjQueryにマップする
	_jQuery = window.jQuery、

	//上書きする場合は$にマップする
	_ $ =ウィンドウ。

jQuery.noConflict = function（deep）{
	if（window。$ === jQuery）{
		ウィンドウ。$ = _ $;
	}

	if（deep && window.jQuery === jQuery）{
		window.jQuery = _jQuery;
	}

	jQueryを返します。
;

// AMDでもjQueryと$識別子を公開する
//（＃7102＃コメント：10、https://github.com/jquery/jquery/pull/557）
//およびブラウザエミュレータ用のCommonJS（＃13566）
if（！noGlobal）{
	window.jQuery = window。$ = jQuery;
}




jQueryを返します。
;））;