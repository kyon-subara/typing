/ *�I
 * jQuery JavaScript���C�u����v3.3.1
 * https://jquery.com/
 *
 * Sizzle.js���܂݂܂�
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation����т��̑��̍v����
 * MIT���C�Z���X�Ń����[�X
 * https://jquery.org/license
 *
 *���t�F2018-01-20T17�F24Z
 * /
�i�@�\�i�O���[�o���A�t�@�N�g���[�j{

	"�������g�p����";

	if�itypeof module === "object" && typeof module.exports === "object"�j{

		//�K�؂� `window`������CommonJS�����CommonJS�̂悤�Ȋ��̏ꍇ
		//���݂���ꍇ�́A�t�@�N�g�������s����jQuery���擾����
		// `document`������` window`�������Ȃ����̂��߂�
		//�iNode.js�Ȃǁj�A�t�@�N�g����module.exports�Ƃ��Č��J���܂��B
		//����͖{���� `�E�B���h�E '�����K�v�����������܂��B
		//��Fvar jQuery = require�i "jquery"�j�iwindow�j;
		//�ڍׂɂ��Ă̓`�P�b�g��14549���Q�ƁB
		module.exports = global.document�H
			�t�@�N�g���i�O���[�o���A�^�j�F
			�֐��iw�j{
				if�i�Iw.document�j{
					�V�����G���[���X���[���܂��i "jQuery�ɂ̓h�L�������g�̂���E�B���h�E���K�v�ł�"�j�B
				}
				�ԕi��H��iw�j;
			;
	���̑�{
		�H��i�O���[�o���j
	}

//�E�B���h�E���܂���`����Ă��Ȃ��ꍇ�͂����n��
�itypeof window�I== "undefined"�Hwindow�Fthis�Afunction�iwindow�AnoGlobal�j{

// Edge <= 12  -  13+�AFirefox <= 18  -  45+�AIE 10  -  11�ASafari 5.1  -  9+�AiOS 6  -  9.1
//�񌵖��R�[�h�iASP.NET 4.5�Ȃǁj���������[�h�ɃA�N�Z�X����Ɨ�O���X���[����
// arguments.callee.caller�itrac-13335�j�B������jQuery 3.0�i2016�j�̎��_�ł́A�������[�h����ʓI�ł���ׂ��ł��B
//���̂悤�Ȏ��݂͂��ׂ�try�u���b�N�ŕی삳��Ă��܂��B
"�������g�p����";

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

var ObjectFunctionString = fnToString.call�iObject�j;

var support = {};

var isFunction = function isFunction�iobj�j{

      //�T�|�[�g�FChrome <= 57�AFirefox <= 52
      //�ꕔ�̃u���E�U�ł́Atypeof��HTML��<object>�v�f�ɑ΂��� "function"��Ԃ��܂��B
      //�i���Ȃ킿�A `typeof document.createElement�i" object "�j===" function "�j�B
      //�C�ӂ�DOM�m�[�h���֐��Ƃ��ĕ��ނ���������܂���B
      return typeof obj === "�֐�" && typeof obj.nodeType�I== "number";
  ;


var isWindow = function isWindow�iobj�j{
		obj�I= null && obj === obj.window��Ԃ��܂��B
	;




	var preservedScriptAttributes = {
		�^�C�v�Ftrue�A
		src�F�{���A
		noModule�Ftrue
	;

	�֐�DOMEval�icode�Adoc�Anode�j{
		doc = doc || ����;

		var i�A
			script = doc.createElement�i "script"�j;

		script.text = code;
		if�i�m�[�h�j{
			for�ii in preservedScriptAttributes�j{
				if�inode [i]�j{
					script [i] = node [i];
				}
			}
		}
		doc.head.appendChild�i�X�N���v�g�j.parentNode.removeChild�i�X�N���v�g�j;
	}


�֐�toType�iobj�j{
	if�iobj == null�j{
		obj + ""��Ԃ��܂��B
	}

	//�T�|�[�g�FAndroid <= 2.3�̂݁i�@�\�I��RegExp�j
	obj === "�I�u�W�F�N�g"��Ԃ�|| typeof obj === "�֐�"�H
		class2type [toString.call�iobj�j] || "�I�u�W�F�N�g"�F
		typeof obj;
}
/ *�O���[�o���V���{��* /
//���̃O���[�o����.eslintrc.json�Œ�`����ƁA�O���[�o�����g�p����댯�������܂�
//���̏ꏊ�ł͕ی삳��Ă��܂��񂪁A���̃��W���[���ɑ΂��Ă̂�global���`����ق������S�Ȃ悤�ł�



var
	version = "3.3.1"�A

	// jQuery�̃��[�J���R�s�[���`���܂�
	jQuery = function�iselector�Acontext�j{

		// jQuery�I�u�W�F�N�g�͎��ۂɂ͒P��init�R���X�g���N�^ 'enhanced'�ł��B
		// jQuery���Ăяo���ꂽ�ꍇ��init���K�v�ł��i�܂܂�Ă��Ȃ��ꍇ�͒P�ɃG���[���X���[�����悤�ɂ��܂��j
		�V����jQuery.fn.init�iselector�Acontext�j��Ԃ��܂��B
	�A

	//�T�|�[�g�FAndroid <= 4.0�̂�
	// BOM��NBSP���g���~���O���܂��B
	rtrim = / ^ [\ s \ uFEFF \ xA0] + | [\ s \ uFEFF \ xA0] + $ / g;

jQuery.fn = jQuery.prototype = {

	//���ݎg�p����Ă���jQuery�̃o�[�W����
	jquery�F�o�[�W�����A

	�R���X�g���N�^�FjQuery�A

	// jQuery�I�u�W�F�N�g�̃f�t�H���g�̒�����0�ł�
	�����F0�A

	toArray�Ffunction�i�j{
		slice.call�ithis�j��Ԃ��܂��B
	�A

	//��v�����v�f�Z�b�g��N�Ԗڂ̗v�f���擾���܂�
	//�}�b�`�����v�f�Z�b�g�S�̂����ꂢ�Ȕz��Ƃ��Ď擾����
	get�Ffunction�inum�j{

		//���ׂĂ̗v�f�����ꂢ�Ȕz��ŕԂ��܂�
		if�inum == null�j{
			slice.call�ithis�j��Ԃ��܂��B
		}

		//�Z�b�g����1�v�f������Ԃ��܂�
		num <0��Ԃ��܂����Hthis [num + this.length]�Fthis [num];
	�A

	//�v�f�̔z������o���ăX�^�b�N�Ƀv�b�V������
	//�i�V�����}�b�`�����v�f�Z�b�g��Ԃ��j
	pushStack�F�֐��i�v�f�j{

		// jQuery�Ƀ}�b�`�����V�����v�f�Z�b�g���쐬����
		var ret = jQuery.merge�ithis.constructor�i�j�Aelems�j;

		//�Â��I�u�W�F�N�g���i�Q�ƂƂ��āj�X�^�b�N�ɒǉ����܂�
		ret.prevObject = this;

		//�V�����`�����ꂽ�v�f�Z�b�g��Ԃ�
		ret��Ԃ��B
	�A

	//��v�����Z�b�g���̂��ׂĂ̗v�f�ɑ΂��ăR�[���o�b�N�����s���܂��B
	���ꂼ��Ffunction�icallback�j{
		jQuery.each�ithis�Acallback�j��Ԃ��܂��B
	�A

	map�Ffunction�icallback�j{
		this.pushStack�ijQuery.map�ithis�Afunction�ielem�Ai�j{��Ԃ�
			callback.call�ielem�Ai�Aelem�j��Ԃ��܂��B
		;�j�j;
	�A

	�X���C�X�Ffunction�i�j{
		this.pushStack�islice.apply�ithis�Aarguments�j�j��Ԃ��܂��B
	�A

	�ŏ��ɁFfunction�i�j{
		this.eq�i0�j��Ԃ��܂��B
	�A

	last�Ffunction�i�j{
		this.eq�i-1�j��Ԃ��܂��B
	�A

	eq�Ffunction�ii�j{
		var len = this.length�A
			�� �� �{ �� �{�i�� ���O���������F�O�j�B
		this.pushStack�ij> = 0 && j <len�H[this [j]]�F[]�j;��Ԃ��܂��B
	�A

	end�Ffunction�i�j{
		this.prevObject��Ԃ��܂��Bthis.constructor�i�j;
	�A

	// �����g�p�̂݁B
	// jQuery���\�b�h�ł͂Ȃ��AArray�̃��\�b�h�̂悤�ɓ��삵�܂��B
	�v�b�V���F�v�b�V���A
	���בւ��Farr.sort�A
	�X�v���C�X�Farr.splice
;

jQuery.extend = jQuery.fn.extend = function�i�j{
	var options�Aname�Asrc�Acopy�AcopyIsArray�Aclone�A
		target = arguments [0] || {}�A
		i = 1�A
		length = arguments.length�A
		deep = false�B

	//�f�B�[�v�R�s�[�̏󋵂ɑΏ�����
	if�itypeof target === "�u�[���l"�j{
		�f�B�[�v=�^�[�Q�b�g�B

		//�u�[���l�ƃ^�[�Q�b�g���X�L�b�v���܂�
		target = arguments [i] || {};
		i ++;
	}

	//�^�[�Q�b�g�������񂩉����ł���ꍇ�̈����i�f�B�[�v�R�s�[�ŉ\�j
	if�itypeof target�I== "�I�u�W�F�N�g" &&�IisFunction�itarget�j�j{
		target = {};
	}

	//������1�����n����Ȃ��ꍇ��jQuery���̂��g������
	if�ii ===�����j{
		�^�[�Q�b�g=����B
		�� - ;
	}

	for�i; i <length; i ++�j{

		// null�ȊO/����`�̒l�݂̂�����
		if�i�ioptions = arguments [i]�j�I= null�j{

			//�x�[�X�I�u�W�F�N�g���g������
			for�i�I�v�V�������j{
				src = target [name];
				copy = options [name];

				//�I���̂Ȃ����[�v��h��
				if�i�^�[�Q�b�g===�R�s�[�j{
					��������;
				}

				//�v���[���ȃI�u�W�F�N�g��z����}�[�W���Ă���ꍇ�͍ċA���܂�
				if�ideep && copy &&�ijQuery.isPlainObject�icopy�j||
					�icopyIsArray = Array.isArray�icopy�j�j�j�j{

					if�icopyIsArray�j{
						copyIsArray = false;
						clone = src && Array.isArray�isrc�j�Hsrc�F[];

					���̑�{
						clone = src��jQuery.isPlainObject�isrc�j�Hsrc�F{};
					}

					//���̃I�u�W�F�N�g���ړ����Ȃ��ŕ�������
					target [name] = jQuery.extend�ideep�Aclone�Acopy�j;

				//����`�̒l����荞�܂Ȃ�
				�����łȂ���΁icopy�I==����`�j{
					target [name] =�R�s�[;
				}
			}
		}
	}

	//�ύX���ꂽ�I�u�W�F�N�g��Ԃ��܂�
	�^�[�Q�b�g��Ԃ��܂��B
;

jQuery.extend�i{

	//�y�[�W���jQuery�̃R�s�[���ƂɈ��
	expando�F "jQuery" +�i�o�[�W����+ Math.random�i�j�j.replace�i/ \ D / g�A ""�j�A

	// ready���W���[���Ȃ���jQuery�͍쓮�\�ł���Ɖ��肵�܂�
	isReady�F�����A

	�G���[�F�֐��imsg�j{
		�V�����G���[�imsg�j�𓊂��܂��B
	�A

	noop�Ffunction�i�j{}�A

	isPlainObject�Ffunction�iobj�j{
		var proto�ACtor�B

		//���炩�ȃl�K�e�B�u�����o
		//�z�X�g�I�u�W�F�N�g���L���b�`���邽�߂�jQuery.type�̑����toString���g�p����
		if�i�Iobj || toString.call�iobj�j�I== "[�I�u�W�F�N�g�I�u�W�F�N�g]"�j{
			false��Ԃ��܂��B
		}

		proto = getProto�iobj�j;

		//�v���g�^�C�v�̂Ȃ��I�u�W�F�N�g�i��F `Object.create�inull�j`�j�͕��ʂ̂��̂ł�
		if�i�Iproto�j{
			true��Ԃ��܂��B
		}

		//�v���g�^�C�v�����I�u�W�F�N�g�́A�O���[�o����Object�֐��ɂ���č\�z���ꂽ���̂ł���΁A���ʂ̂��̂ł�
		Ctor = hasOwn.call�iproto�A "constructor"�j&& proto.constructor;
		return typeof Ctor === "�֐�" && fnToString.call�iCtor�j=== ObjectFunctionString;
	�A

	isEmptyObject�Ffunction�iobj�j{

		/ * eslint-disable no-unused-vars * /
		// https://github.com/eslint/eslint/issues/6125���Q�Ƃ��Ă��������B
		var name;

		for�iobj�̖��O�j{
			false��Ԃ��܂��B
		}
		true��Ԃ��܂��B
	�A

	//�O���[�o���R���e�L�X�g�ŃX�N���v�g��]�����܂�
	globalEval�F�֐��i�R�[�h�j{
		DOMEval�i�R�[�h�j
	�A

	���ꂼ��Ffunction�iobj�Acallback�j{
		�ϒ��A�� �� �O�B

		if�iisArrayLike�iobj�j�j{
			length = obj.length;
			for�i; i <length; i ++�j{
				if�icallback.call�iobj [i]�Ai�Aobj [i]�j=== false�j{
					�u���[�N;
				}
			}
		���̑�{
			for�ii in obj�j{
				if�icallback.call�iobj [i]�Ai�Aobj [i]�j=== false�j{
					�u���[�N;
				}
			}
		}

		obj��Ԃ��܂��B
	�A

	//�T�|�[�g�FAndroid <= 4.0�̂�
	�g�����F�֐��i�e�L�X�g�j{
		�e�L�X�g��Ԃ�== null�H
			""�F
			�itext + ""�j.replace�irtrim�A ""�j;
	�A

	//���ʂ͓����g�p�̂�
	makeArray�Ffunction�iarr�Aresults�j{
		var ret = results || [];

		if�iarr�I= null�j{
			if�iisArrayLike�iObject�iarr�j�j�j{
				jQuery.merge�iret�A
					typeof arr === "������"�H
					[arr]�Farr
				;
			���̑�{
				push.call�iret�Aarr�j;
			}
		}

		ret��Ԃ��B
	�A

	inArray�Ffunction�ielem�Aarr�Ai�j{
		arr == null��Ԃ��܂����H-1�FindexOf.call�iarr�Aelem�Ai�j;
	�A

	//�T�|�[�g�FAndroid <= 4.0�̂݁APhantomJS 1�̂�
	// push.apply�i_�Aarraylike�j�͌Ñ��WebKit�ŃX���[�����
	�}�[�W�F�֐��i1�ԖځA2�Ԗځj{
		var len = + second.length�A
			j = 0�A
			i = first.length;

		for�i; j <len; j ++�j{
			first [i ++] = second [j];
		}

		first.length = i;

		�ŏ��ɖ߂�
	�A

	grep�Ffunction�ielems�Acallback�Ainvert�j{
		var callbackInverse�A
			matches = []�A
			i = 0�A
			length = elems.length�A
			callbackExpect =�Iinvert�B

		//�A�C�e����ۑ����邾���Ŕz��𒲂ׂ܂�
		//�o���f�[�^�[�֐���n��
		for�i; i <length; i ++�j{
			callbackInverse =�Icallback�ielems [i]�Ai�j;
			if�icallbackInverse�I== callbackExpect�j{
				matches.push�ielems [i]�j;
			}
		}

		��v��Ԃ��܂��B
	�A

	// arg�͓����g�p��p�ł�
	map�Ffunction�ielems�Acallback�Aarg�j{
		�ϐ��̒����A�l�A
			i = 0�A
			ret = [];

		//�e���ڂ�V�����l�ɕϊ����Ȃ���z������ǂ�܂�
		if�iisArrayLike�ielems�j�j{
			length = elems.length;
			for�i; i <length; i ++�j{
				�l= callback�ielems [i]�Ai�Aarg�j;

				if�ivalue�I= null�j{
					ret.push�ivalue�j;
				}
			}

		//�I�u�W�F�N�g�̂��ׂẴL�[�𒲂ׂ܂�
		���̑�{
			for�i����elems�j{
				�l= callback�ielems [i]�Ai�Aarg�j;

				if�ivalue�I= null�j{
					ret.push�ivalue�j;
				}
			}
		}

		//����q�ɂȂ����z��𕽒R������
		concat.apply�i[]�Aret�j��Ԃ��܂��B
	�A

	//�I�u�W�F�N�g�̃O���[�o��GUID�J�E���^
	guid�F1�A

	// jQuery.support��Core�ł͎g�p����Ă��܂��񂪁A���̃v���W�F�N�g�ɂ͓Y�t����Ă��܂��B
	//���݂���K�v������̂ŁA����ɑ΂���v���p�e�B�B
	�T�|�[�g�F�T�|�[�g
;�j�j;

if�itypeof Symbol === "function"�j{
	jQuery.fn [Symbol.iterator] = arr [Symbol.iterator];
}

// class2type�}�b�v���쐬���܂�
jQuery.each�i "�u�[����������֐��z����t���K�\���I�u�W�F�N�g�G���[�V���{��" .split�i ""�j�A
�֐��ii�A���O�j{
	class2type ["[object" + name + "]"] = name.toLowerCase�i�j;
;�j�j;

�֐�isArrayLike�iobj�j{

	//�T�|�[�g�F�{����iOS 8.2�̂݁i�V�~�����[�^�ł͍Č��ł��܂���j
	// JIT�G���[��h�����߂Ɏg�p����� `in`�`�F�b�N�igh-2145�j
	//�U�A���̂��߁AhasOwn�͂����ł͎g�p����܂���
	// IE�̃m�[�h���X�g���ɂ���
	var length = !! obj && obj.length��obj && "length"�A
		type = toType�iobj�j;

	if�iisFunction�iobj�j|| isWindow�iobj�j�j{
		false��Ԃ��܂��B
	}

	�߂�l�̌^=== "array" || length === 0 ||
		typeof length === "number" && length> 0 &&�ilength  -  1�jin obj;
}
var Sizzle =
/ *�I
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation����т��̑��̍v����
 * MIT���C�Z���X�Ń����[�X
 * http://jquery.org/license
 *
 *���t�F2016-08-08
 * /
�i�@�\�i�E�B���h�E�j{

var i�A
	�T�|�[�g�A
	Expr�A
	getText�A
	isXML�A
	�g�[�N�i�C�Y
	�R���p�C���A
	��I��
	outermostContext�A
	sortInput�A
	hasDuplicate�A

	//���[�J���h�L�������g�ϐ�
	setDocument�A
	�����A
	docElem�A
	documentIsHTML�A
	rbuggyQSA�A
	rbuggyMatches�A
	��v����
	�܂�ł���A

	//�C���X�^���X�ŗL�̃f�[�^
	expando = "�V�Y��" + 1 *�V�������t�i�j�A
	preferredDoc = window.document�A
	dirruns = 0�A
	����= 0�A
	classCache = createCache�i�j�A
	tokenCache = createCache�i�j�A
	compilerCache = createCache�i�j�A
	sortOrder = function�ia�Ab�j{
		if�ia === b�j{
			hasDuplicate = true;
		}
		0��Ԃ��܂��B
	�A

	//�C���X�^���X���\�b�h
	hasOwn =�i{}�j�BhasOwnProperty�A
	arr = []�A
	pop = arr.pop�A
	push_native = arr.push�A
	push = arr.push�A
	slice = arr.slice�A
	//�l�C�e�B�u��葬���̂ō폜���ꂽindexOf���g��
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function�ilist�Aelem�j{
		var i = 0�A
			len = list.length;
		for�i; i <len; i ++�j{
			if�ilist [i] === elem�j{
				i��Ԃ��܂��B
			}
		}
		-1��Ԃ��܂��B
	�A

	�u�[���l= "�`�F�b�N|�I��|�񓯊�|�I�[�g�t�H�[�J�X|�����Đ�|�R���g���[��|����|����|��\��| ismap |���[�v|����|�J��|�ǂݎ���p|�K�{|�͈�"�A

	//���K�\��

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\ x20 \\ t \\ r \\ n \\ f]"�A�A

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "�i�H�F\\\\�B| [\\ w-] | [^ \ 0  -  \\ xa0]�j+"�A

	//�����Z���N�^�Fhttp://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\ [" +��+ "*�i" +���ʎq+ "�j�i?:" +��+
		//���Z�q�i�L���v�`��2�j
		"*�i[* ^ $ |�I?]�H=�j" +�󔒕���+
		// "�����l��CSS���ʎq[�L���v�`��5]�܂��͕�����[�L���v�`��3�܂��̓L���v�`��4]�łȂ���΂Ȃ�܂���"
		"*�i�H�F '�i�i�H�F\\\\�B| [^ \\\\']�j*�j '| \"�i�i�i�F�F\\\\�B| [^ \\\\\ "]�j �j*�j\ "|�i" + identifier + "�j�j�j�j�j+��+
		"* \\]"�A

	pseudos = ":(" + identifier + "�j�i�H�F\\�i�i" +
		// preFilter�Ńg�[�N������K�v�Ƃ���Z���N�^�̐������炷���߂ɁA������D�悵�܂��B
		// 1.���ς���i�L���v�`��3�A�L���v�`��4�܂��̓L���v�`��5�j
		"�i '�i�i�H�F\\\\�B| [^ \\\\']�j*�j '| \"�i�i�i�F�F\\\\�B| [^ \\\\\ "]�j*�j \ "�j|" +
		// 2.�P���i�L���v�`��6�j
		"�i�i�H�F\\\\�B| [^ \\\\�i�j[\\]] |" + attributes + "�j*�j|" +
		// 3.����ȊO�i�L���v�`��2�j
		"�B*" +
		"�j\\�j|�j"�A

	//�擪�̋󔒕����ƃG�X�P�[�v����Ă��Ȃ��󔒕����A��҂̑O�ɂ���󔒈ȊO�̕������L���v�`������
	rwhitespace = new RegExp�i�󔒕���+ "+"�A "g"�j�A
	rtrim = new RegExp�i "^" +�󔒕���+ "+ |�i�i�H�F^ | [^ \\\\]�j�i�H�F\\\\�B�j*�j" +�󔒕���+ "+ $"�A "g "�j�A

	rcomma = new RegExp�i "^" +��+ "*�A" +��+ "*"�j�A
	rcombinators = new RegExp�i "^" +��+ "*�i[> +?] |" +��+ "�j" +��+ "*"�j�A

	rattributeQuotes = new RegExp�i "=" +��+ "*�i[^ \\] '\"] *�H�j "+��+" * \\] "�A" g "�j�A

	rpseudo = new RegExp�ipseudos�j�A
	ridentifier = new RegExp�i "^" +���ʎq+ "$"�j�A

	matchExpr = {
		"ID"�F�V����RegExp�i "^���i" + identifier + "�j"�j�A
		"�N���X"�Fnew RegExp�i "^ \\�B�i" + identifier + "�j"�j�A
		"TAG"�F�V����RegExp�i "^�i" + identifier + "| [*]�j"�j�A
		"ATTR"�F�V����RegExp�i "^" +�����j�A
		"PSEUDO"�F�V����RegExp�i "^" + pseudos�j�A
		"CHILD"�F�V����RegExp�i "^ :(�̂�|�ŏ�|�Ō�| n�Ԗ�|�Ō� - �Ō�j - �i�q| of-type�j�i�H�F\\�i" +��+
			"*�ieven | odd |�i�i[+  - ] |�j�i\\ d *�jn |�j" +��+ "*�i�H�F�i[+  - ] |�j"�j+��+
			"*�i\\ d +�j|�j" "+��+" * \\�j|�j "�A" i "�j�A
		"�u�[��"�F�V�������K�\���i "^�i?:" +�u�[���l+ "�j$"�A "i"�j�A
		// .is�i�j���������郉�C�u�����Ŏg�p����
		// `select`��POS�}�b�`���O�ɂ�����g�p���܂�
		"needsContext"�Fnew RegExp�i "^" +��+ "* [> +?] |�F�i����|�| eq | gt | lt | nth |�ŏ�|�Ō�j�i�H�F\\�i" +
			��+ "*�i�i�H�F -  \\ d�j�H\\ d *�j" +��+ "* \\�j|�j�i�H= [^  - ] | $�j"�A "i"�j
	�A

	rinputs = / ^�i?: input | select | textarea | button�j$ / i�A
	rheader = / ^ h \ d $ / i�A

	rnative = / ^ [^ {] + \ {\ s * \ [native \ w /�A

	//�ȒP�ɉ��/�����\��ID�܂���TAG�܂���CLASS�Z���N�^
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/�A

	rsibling = / [+?] /�A

	// CSS�G�X�P�[�v
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp�i "\\\\�i[\\ da-f] {1,6}" +��+ "�H|�i" +��+ "�j|�B�j"�A "ig"�j�A
	funescape = function�i_�Aescaped�AescapedWhitespace�j{
		var high = "0x" +�G�X�P�[�v -  0x10000�B
		// NaN�͔�R�[�h�|�C���g���Ӗ����܂�
		//�T�|�[�g�FFirefox <24
		//�����+ "0x"�̌�������l����
		==����|| escapedWhitespace�H
			�G�X�P�[�v�F
			����<0�H
				// BMP�R�[�h�|�C���g
				String.fromCharCode�i�ő�+ 0x10000�j�F
				// Supplemental Plane codepoint�i�T���Q�[�g�y�A�j
				String.fromCharCode�i��>> 10 | 0xD800�A����0x3FF | 0xDC00�j;
	�A

	// CSS������/���ʎq�̃V���A����
	// https://drafts.c??sswg.org/cssom/#common-serializing-idioms
	rcssescape = /�i[\ 0- \ x1f \ x7f] | ^  - �H\ d�j| ^  -  $ | [^ \ 0- \ x1f \ x7f- \ uFFFF \ w  - ] / g�A
	fcssescape = function�ich�AasCodePoint�j{
		if�iasCodePoint�j{

			// U + 0000 NULL��U + FFFD�̒u�������ɂȂ�܂�
			if�ich === "\ 0"�j{
				"\ uFFFD"��Ԃ��܂��B
			}

			//���䕶���Ɓi�ʒu�ɉ����āj�ԍ��̓R�[�h�|�C���g�Ƃ��ăG�X�P�[�v����܂�
			ch.slice�i0�A-1�j+ "\\" + ch.charCodeAt�ich.length  -  1�j.toString�i16�j+ "";
		}

		//���̐��ݓI�ɓ����ASCII�����̓o�b�N�X���b�V���ŃG�X�P�[�v����܂�
		"\\" + ch��Ԃ��܂��B
	�A

	// iframe�Ɏg�p����܂�
	// setDocument�i�j���Q�Ƃ��Ă��������B
	//�֐����b�p�[���폜����� "Permission Denied"����������
	// IE�̃G���[
	unloadHandler = function�i�j{
		setDocument�i�j;
	�A

	disabledAncestor = addCombinator�i
		�֐��ielem�j{
			elem.disabled === true &&�ielem�̏ꍇ�� "form"�Aelem�̏ꍇ�� "label"�j��Ԃ��܂��B
		�A
		{dir�F "parentNode"�A���̕����F "legend"}
	;

// push.apply�i_�ANodeList�j�ɍœK�����܂�
�����Ă�������{
	push.apply�i
		�iarr = slice.call�ipreferredDoc.childNodes�j�j�A
		preferredDoc.childNodes
	;
	//�T�|�[�g�FAndroid <4.0
	//�Â��Ɏ��s���Ă���push.apply�����o����
	arr [preferredDoc.childNodes.length] .nodeType;
catch�ie�j{
	push = {apply�Farr.length�H

		//�\�Ȃ�΃X���C�X�𗘗p����
		�֐��i�^�[�Q�b�g�Aels�j{
			push_native.apply�itarget�Aslice.call�iels�j�j;
		�F

		//�T�|�[�g�FIE <9
		//����ȊO�̏ꍇ�͒��ڒǉ�
		�֐��i�^�[�Q�b�g�Aels�j{
			var j = target.length�A
				�� �� �O�B
			// NodeList.length��M���ł��܂���
			while�i�itarget [j ++] = els [i ++]�j�j{}
			target.length = j  -  1;
		}
	;
}

function Sizzle�i�Z���N�^�A�R���e�L�X�g�A���ʁA�V�[�h�j{
	var m�Ai�Aelem�Anid�A��v�A�O���[�v�AnewSelector�A
		newContext = context && context.ownerDocument�A

		// context�̓f�t�H���g��document�ɂȂ�̂ŁA// nodeType�̃f�t�H���g��9�ɂȂ�܂��B
		nodeType = context�Hcontext.nodeType�F9;

	results = results || [];

	//�����ȃZ���N�^�܂��̓R���e�L�X�g�����Ăяo�����瑁���߂�܂�
	if�itypeof selector�I== "string" ||�Iselector ||
		nodeType�I== 1 && nodeType�I== 9 && nodeType�I== 11�j{

		���ʂ�Ԃ��܂��B
	}

	// HTML�h�L�������g���Łi�t�B���^�ł͂Ȃ��j����������V���[�g�J�b�g���Ă݂܂�
	if�i�Iseed�j{

		if�i�icontext�Hcontext.ownerDocument || context�FpreferredDoc�j�I== document�j{
			setDocument�icontext�j;
		}
		context = context || ����;

		if�idocumentIsHTML�j{

			//�Z���N�^�����ɒP���ȏꍇ�́A�uget * By *�vDOM���\�b�h���g�p���Ă݂Ă�������
			//�i���\�b�h�����݂��Ȃ�DocumentFragment�R���e�L�X�g�������j
			if�inodeType�I== 11 &&�imatch = rquickExpr.exec�iselector�j�j�j{

				// ID�Z���N�^
				if�i�im = match [1]�j�j{

					//�h�L�������g�R���e�L�X�g
					if�inodeType === 9�j{
						if�i�ielem = context.getElementById�im�j�j�j{

							//�T�|�[�g�FIE�AOpera�AWebkit
							// TODO�F�o�[�W��������肷��
							// getElementById��ID�ł͂Ȃ����O�ŗv�f���ƍ��ł��܂�
							if�ielem.id === m�j{
								results.push�ielem�j;
								���ʂ�Ԃ��܂��B
							}
						���̑�{
							���ʂ�Ԃ��܂��B
						}

					//�v�f�R���e�L�X�g
					���̑�{

						//�T�|�[�g�FIE�AOpera�AWebkit
						// TODO�F�o�[�W��������肷��
						// getElementById��ID�ł͂Ȃ����O�ŗv�f���ƍ��ł��܂�
						if�inewContext &&�ielem = newContext.getElementById�im�j�j&&
							�icontext�Aelem�j&&���܂�
							elem.id === m�j{

							results.push�ielem�j;
							���ʂ�Ԃ��܂��B
						}
					}

				//�^�C�v�Z���N�^
				�����łȂ���΁imatch [2]�j{
					push.apply�iresults�Acontext.getElementsByTagName�iselector�j�j;
					���ʂ�Ԃ��܂��B

				//�N���X�Z���N�^
				�����łȂ���΁i�im = match [3]�j&& support.getElementsByClassName &&
					context.getElementsByClassName�j{

					push.apply�iresults�Acontext.getElementsByClassName�im�j�j;
					���ʂ�Ԃ��܂��B
				}
			}

			// querySelectorAll�𗘗p����
			if�isupport.qsa &&
				�IcompilerCache [selector + ""] &&
				�i�IrbuggyQSA ||�IrbuggyQSA.test�i�Z���N�^�j�j�j{

				if�inodeType�I== 1�j{
					newContext = context;
					newSelector = selector;

				// qSA�͗v�f�R���e�L�X�g�̊O�������܂����A����͖]��ł��Ȃ����Ƃł��B
				//���̉������Ƃ��Ă��ꂽAndrew Dupont�Ɋ���
				//�T�|�[�g�FIE <= 8
				//�I�u�W�F�N�g�v�f�����O
				�����łȂ���΁icontext.nodeName.toLowerCase�i�j�I== "�I�u�W�F�N�g"�j{

					//�R���e�L�X�gID���擾���A�K�v�ɉ����čŏ��ɐݒ肷��
					if�i�inid = context.getAttribute�i "id"�j�j�j{
						nid = nid.replace�ircssescape�Afcssescape�j;
					���̑�{
						context.setAttribute�i "id"�A�inid = expando�j�j;
					}

					//���X�g���̂��ׂẴZ���N�^�Ƀv���t�B�b�N�X��t���܂�
					groups = tokenize�iselector�j;
					i = groups.length;
					while�ii--�j{
						groups [i] = "��" + nid + "" + toSelector�igroups [i]�j;
					}
					newSelector = groups.join�i "�A"�j;

					//�Z��Z���N�^�̃R���e�L�X�g���g������
					newContext = rsibling.test�iselector�j&& testContext�icontext.parentNode�j||
						�R���e�L�X�g;
				}

				if�inewSelector�j{
					�����Ă�������{
						push.apply�i���ʁA
							newContext.querySelectorAll�inewSelector�j
						;
						���ʂ�Ԃ��܂��B
					catch�iqsaError�j{
					} �Ō�� {
						if�inid === expando�j{
							context.removeAttribute�i "id"�j;
						}
					}
				}
			}
		}
	}

	// ���̂��ׂ�
	select�iselector.replace�irtrim�A "$ 1"�j�A�R���e�L�X�g�A���ʁA�V�[�h�j��Ԃ��܂��B
}

/ **
 *����ꂽ�T�C�Y��Key-Value�L���b�V�����쐬����
 * @returns {function�istring�Aobject�j}�I�u�W�F�N�g�f�[�^�����ꎩ�g�Ɋi�[������ɕԂ��܂��B
 *�v���p�e�B���Ɂi�X�y�[�X����ɑ����j������Ɓi�L���b�V����Expr.cacheLength�����傫���ꍇ�j
 *�ł��Â��G���g�����폜����
 * /
�֐�createCache�i�j{
	var keys = [];

	�֐��L���b�V���i�L�[�A�l�j{
		//�l�C�e�B�u�v���g�^�C�v�v���p�e�B�Ƃ̏Փ˂�����邽�߂Ɂikey + ""�j���g���iIssue��157���Q�Ɓj
		if�ikeys.push�ikey + ""�j> Expr.cacheLength�j{
			//�ŐV�̃G���g���[�݂̂�ۑ�����
			�L���b�V���̍폜[keys.shift�i�j];
		}
		return�icache [key + ""] = value�j;
	}
	�L���b�V����Ԃ��܂��B
}

/ **
 * Sizzle�ɂ����ʂȎg�p�̂��߂ɋ@�\���}�[�N����
 * @param {Function} fn�}�[�N��t����֐�
 * /
�֐�markFunction�ifn�j{
	fn [expando] = true;
	fn��Ԃ��܂��B
}

/ **
 *�v�f���g�����e�X�g�̃T�|�[�g
 * @param {Function} fn�쐬�����v�f��n���āA�u�[���l�̌��ʂ�Ԃ��܂�
 * /
�֐��A�T�[�g�ifn�j{
	var el = document.createElement�i "fieldset"�j;

	�����Ă�������{
		�߂�!! fn�iel�j;
	catch�ie�j{
		false��Ԃ��܂��B
	} �Ō�� {
		//�f�t�H���g�Őe����폜���܂�
		if�iel.parentNode�j{
			el.parentNode.removeChild�iel�j;
		}
		// IE�Ń��������������
		el = null�B
	}
}

/ **
 *�w�肳�ꂽ���ׂĂ̑����ɑ΂��ē����n���h����ǉ����܂��B
 * @param {String} attrs�������p�C�v�ŋ�؂������X�g
 * @param {Function}�n���h���K�p����郁�\�b�h
 * /
�֐�addHandle�iattrs�Ahandler�j{
	var arr = attrs.split�i "|"�j�A
		i = arr.length;

	while�ii--�j{
		Expr.attrHandle [arr [i]] = handler;
	}
}

/ **
 *�Z��2�l�̏��Ԃ��m�F����
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} a��b�̑O�ɂ���ꍇ��0�����Aa��b�̌�ɂ���ꍇ��0���傫���l��Ԃ��܂��B
 * /
�֐�siblingCheck�ia�Ab�j{
	var cur = b && a�A
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex  -  b.sourceIndex;

	//�����̃m�[�h�ŗ��p�\�ȏꍇ��IE sourceIndex���g�p
	if�idiff�j{
		diff��Ԃ��܂��B
	}

	// b��a�ɑ������ǂ������m�F
	if�icur�j{
		while�i�icur = cur.nextSibling�j�j{
			if�icur === b�j{
				-1��Ԃ��܂��B
			}
		}
	}

	�Ԃ��H1�F-1
}

/ **
 *���͌^�̋[���Ŏg���֐���Ԃ��܂�
 * @param {String}�^
 * /
�֐�createInputPseudo�itype�j{
	�߂�֐��ielem�j{
		var name = elem.nodeName.toLowerCase�i�j;
		return name === "input" && elem.type === type;
	;
}

/ **
 *�{�^���̋[���Ŏg���֐���Ԃ��܂�
 * @param {String}�^
 * /
�֐�createButtonPseudo�itype�j{
	�߂�֐��ielem�j{
		var name = elem.nodeName.toLowerCase�i�j;
		return�iname === "input" || name === "button"�j&& elem.type === type;
	;
}

/ **
 *�Fenabled /�Fdisabled�ɑ΂��ċ[���Ŏg���֐���Ԃ��܂�
 * @param {Boolean} disabled�Ftrue�̏ꍇ��true�ł��Bfalse�̏ꍇ�Fenabled
 * /
function createDisabledPseudo�i�����j{

	//���m�F�����댟�m�Ffieldset [����]>�}��Fn�^�in + 2�j�F�����ɂ���
	�߂�֐��ielem�j{

		//����̗v�f�݂̂��Fenabled�܂��́Fdisabled�Ɉ�v�ł��܂�
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if�i "form" in elem�j{

			//�֘A���閳���łȂ��v�f�̌p�����ꂽ�������`�F�b�N���܂�
			// *�����ȃt�B�[���h�Z�b�g���̃t�H�[���֘A�v�f���ꗗ�\������
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// *���������ꂽoptgroup����option�v�f
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			//���̂悤�ȗv�f�͂��ׂ� "form"�v���p�e�B�������܂��B
			if�ielem.parentNode && elem.disabled === false�j{

				// option�v�f�́A���݂���ꍇ�͐eoptgroup�Ɉˑ����܂�
				if�i "label" in elem�j{
					if�ielem.parentNode�� "label"�j{
						elem.parentNode.disabled��Ԃ��܂�===�����ɂ��܂��B
					���̑�{
						elem.disabled��Ԃ��܂�===�����ł��B
					}
				}

				//�T�|�[�g�FIE 6  -  11
				//�����ȃt�B�[���h�Z�b�g�̐�c���m�F����ɂ́AisDisabled�V���[�g�J�b�g�v���p�e�B���g�p���܂��B
				elem.isDisabled��Ԃ��܂�===����||

					// isDisabled���Ȃ��ꍇ�́A�蓮�Ŋm�F����
					/ * jshint -W018 * /
					elem.isDisabled�I==�I����&&
						disabledAncestor�ielem�j===�����ł��B
			}

			elem.disabled��Ԃ��܂�===�����ł��B

		// disabled�v���p�e�B��M������O�ɁA�����ɂł��Ȃ��v�f�������o���Ă݂Ă��������B
		//�ꕔ�̋]���҂͎������̃l�b�g�i���x���A�}��A���j���[�A�g���b�N�j�Ɋ������܂�܂����A�����ł͂���܂���
		//�����ɂ����݂��A�������u�[���l�������Ƃ��ł��܂��B
		�����łȂ���΁ielem�� "label"�j{
			elem.disabled��Ԃ��܂�===�����ł��B
		}

		//�c��̗v�f�́Fenabled�ł��Fdisabled�ł�����܂���
		false��Ԃ��܂��B
	;
}

/ **
 *�|�W�V���i���ɋ[���Ŏg�p����֐���Ԃ��܂�
 * @param {�֐�} fn
 * /
�֐�createPositionalPseudo�ifn�j{
	return markFunction�i�֐��i�����j{
		����= +�����B
		return markFunction�ifunction�iseed�Amatches�j{
			var j�A
				matchIndexes = fn�i[]�Aseed.length�A�����j�A
				i = matchIndexes.length;

			//�w�肳�ꂽ�C���f�b�N�X�ɂ���v�f���ƍ����܂�
			while�ii--�j{
				if�iseed [�ij = matchIndexes [i]�j]�j{
					seed [j] =�I�imatches [j] = seed [j]�j;
				}
			}
		;�j�j;
	;�j�j;
}

/ **
 * Sizzle�R���e�L�X�g�Ƃ��Ă̑Ó����ɂ��ăm�[�h���`�F�b�N���܂�
 * @param {Element | Object =}�R���e�L�X�g
 * @returns {Element | Object | Boolean}���e�ł���ꍇ�͓��̓m�[�h�A�����łȂ��ꍇ�͋U�̒l
 * /
�֐�testContext�i�R���e�L�X�g�j{
	�߂�R���e�L�X�g&& typeof context.getElementsByTagName�I== "����`" &&�R���e�L�X�g;
}

//�֋X��T�|�[�g�ϐ������J����
support = Sizzle.support = {};

/ **
 * XML�m�[�h�����o
 * @param {Element | Object} elem�v�f�܂��͕���
 * @returns {Boolean}��HTML�ȊO��XML�m�[�h�ł���ΐ^�ƂȂ�܂��B
 * /
isXML = Sizzle.isXML = function�ielem�j{
	// documentElement�͂܂����݂��Ȃ��ꍇ�ɂ��Č��؂���܂�
	//�iIE��iframe��ǂݍ��ނȂ� - ��4833�j
	var documentElement = elem &&�ielem.ownerDocument || elem�j.documentElement;
	documentElement��Ԃ��܂����HdocumentElement.nodeName�I== "HTML"�Ffalse;
;

/ **
 *���݂̕����Ɋ�Â��ĕ����֘A�̕ϐ�����x�ݒ肵�܂��B
 * @param {Element | Object} [doc]������ݒ肷�邽�߂Ɏg�p����v�f�܂��͕����I�u�W�F�N�g
 * @returns {Object}���݂̕�����Ԃ��܂�
 * /
setDocument = Sizzle.setDocument = function�inode�j{
	var hasCompare�AsubWindow�A
		doc = node�Hnode.ownerDocument || �m�[�h�FpreferredDoc;

	//�h�L�������g�������ł��邩���ɑI������Ă���ꍇ�͑����ɖ߂�
	if�idoc === document || doc.nodeType�I== 9 ||�Idoc.documentElement�j{
		�h�L�������g��Ԃ��܂��B
	}

	//�O���[�o���ϐ����X�V����
	document = doc;
	docElem = document.documentElement;
	documentIsHTML =�IisXML�idocument�j;

	//�T�|�[�g�FIE 9-11�AEdge
	//�A�����[�h���iframe�h�L�������g�ɃA�N�Z�X����Ɓu�p�[�~�b�V���������ۂ���܂����v�Ƃ����G���[���X���[�����ijQuery��13936�j
	if�ipreferredDoc�I== document &&
		�isubWindow = document.defaultView�j&& subWindow.top�I== subWindow�j{

		//�T�|�[�g�FIE 11�AEdge
		if�isubWindow.addEventListener�j{
			subWindow.addEventListener�i "unload"�AunloadHandler�Afalse�j;

		//�T�|�[�g�FIE 9  -  10�̂�
		�����łȂ���΁isubWindow.attachEvent�j{
			subWindow.attachEvent�i "onunload"�AunloadHandler�j;
		}
	}

	/ *����
	-------------------------------------------------- -------------------- * /

	//�T�|�[�g�FIE <8
	// getAttribute���{���Ƀv���p�e�B�ł͂Ȃ�������Ԃ����Ƃ��m�F����
	//�iIE8�̃u�[���l�������j
	support.attributes = assert�i�֐��iel�j{
		el.className = "i";
		return�Iel.getAttribute�i "className"�j;
	;�j�j;

	/ * getElement�is�j*
	-------------------------------------------------- -------------------- * /

	// getElementsByTagName�i "*"�j���v�f�݂̂�Ԃ����ǂ������m�F����
	support.getElementsByTagName = assert�i�֐��iel�j{
		el.appendChild�idocument.createComment�i ""�j�j;
		return�Iel.getElementsByTagName�i "*"�j�Blength;
	;�j�j;

	//�T�|�[�g�FIE <9
	support.getElementsByClassName = rnative.test�idocument.getElementsByClassName�j;

	//�T�|�[�g�FIE <10
	// getElementById�����O�ŗv�f��Ԃ����ǂ������m�F
	//��ꂽgetElementById���\�b�h�̓v���O�����Őݒ肳�ꂽ���O���E���܂���
	//���E���h�A�o�E�ggetElementsByName�e�X�g���g�p����
	support.getById = assert�i�֐��iel�j{
		docElem.appendChild�iel�j.id = expando;
		return�Idocument.getElementsByName || �Idocument.getElementsByName�iexpando�j.length;
	;�j�j;

	// ID�t�B���^���Č���
	if�isupport.getById�j{
		Expr.filter ["ID"] = function�iid�j{
			var attrId = id.replace�irunescape�Afunescape�j;
			�߂�֐��ielem�j{
				elem.getAttribute�i "id"�j=== attrId��Ԃ��܂��B
			;
		;
		Expr.find ["ID"] = function�iid�Acontext�j{
			if�itypeof context.getElementById�I== "����`" && documentIsHTML�j{
				var elem = context.getElementById�iid�j;
				elem��Ԃ��H[elem]�F[]�G
			}
		;
	���̑�{
		Expr.filter ["ID"] = function�iid�j{
			var attrId = id.replace�irunescape�Afunescape�j;
			�߂�֐��ielem�j{
				var node = typeof elem.getAttributeNode�I== "����`" &&
					elem.getAttributeNode�i "id"�j;
				�m�[�h&& node.value === attrId��Ԃ��܂��B
			;
		;

		//�T�|�[�g�FIE 6  -  7�̂�
		// getElementById�͌����V���[�g�J�b�g�Ƃ��ĐM���ł��Ȃ�
		Expr.find ["ID"] = function�iid�Acontext�j{
			if�itypeof context.getElementById�I== "����`" && documentIsHTML�j{
				var�m�[�h�A���Aelems�A
					elem = context.getElementById�iid�j;

				if�ielem�j{

					// id�������m�F���܂�
					node = elem.getAttributeNode�i "id"�j;
					if�inode && node.value === id�j{
						return [elem];
					}

					// getElementsByName�Ƀt�H�[���o�b�N����
					elems = context.getElementsByName�iid�j;
					�� �� �O�B
					while�i�ielem = elems [i ++]�j�j{
						node = elem.getAttributeNode�i "id"�j;
						if�inode && node.value === id�j{
							return [elem];
						}
					}
				}

				return [];
			}
		;
	}

	//�^�O
	Expr.find ["TAG"] = support.getElementsByTagName�H
		�@�\�i�^�O�A�R���e�L�X�g�j{
			if�itypeof context.getElementsByTagName�I== "����`"�j{
				context.getElementsByTagName�itag�j��Ԃ��܂��B

			// DocumentFragment�m�[�h�ɂ�gEBTN������܂���
			�����łȂ���΁isupport.qsa�j{
				context.querySelectorAll�itag�j��Ԃ��܂��B
			}
		�F

		�@�\�i�^�O�A�R���e�L�X�g�j{
			var elem�A
				tmp = []�A
				i = 0�A
				//�K���Ȃ��ƂɁADocumentFragment�m�[�h�ɂ��i��ꂽ�jgEBTN���\������܂��B
				results = context.getElementsByTagName�itag�j;

			//�l������R�����g�����O���܂�
			if�itag === "*"�j{
				while�i�ielem = results [i ++]�j�j{
					if�ielem.nodeType === 1�j{
						tmp.push�ielem�j;
					}
				}

				tmp��Ԃ��܂��B
			}
			���ʂ�Ԃ��܂��B
		;

	//�N���X
	Expr.find ["CLASS"] = support.getElementsByClassName && function�iclassName�Acontext�j{
		if�itypeof context.getElementsByClassName�I== "����`" && documentIsHTML�j{
			context.getElementsByClassName�iclassName�j��Ԃ��܂��B
		}
	;

	/ * QSA / matchesSelector
	-------------------------------------------------- -------------------- * /

	// QSA��matchesSelector�̃T�|�[�g

	// matchesSelector�i�Factive�j��true�̂Ƃ�false��񍐂���iIE9 / Opera 11.5�j
	rbuggyMatches = [];

	// true�̏ꍇ�A// qSa�i�Ffocus�j��false��񍐂���iChrome 21�j
	// IE8 / 9�̃G���[�̂��߁A����������Ă��܂�
	// iframe��� `document.activeElement`���A�N�Z�X����邽�т�
	// IE�̃G���[��������邽�߂ɁAfocus�͏��QSA��ʉ߂��܂��B
	// https://bugs.jquery.com/ticket/13378���Q�Ƃ��Ă��������B
	rbuggyQSA = [];

	if�i�isupport.qsa = rnative.test�idocument.querySelectorAll�j�j�j�j{
		// QSA�̐��K�\�����쐬����
		// Diego Perini����̗p���ꂽ���K�\���헪
		assert�i�@�\�iel�j{
			//�I���͈Ӑ}�I�ɋ�̕�����ɐݒ肳��Ă��܂�
			//����͖����I�ɂł͂Ȃ��Ƃ���IE�̈������e�X�g���邽�߂̂��̂ł�
			//�u�[���l��content������ݒ肵�܂�
			//���̑��݂͏\���ł���͂��Ȃ̂�
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild�iel�j.innerHTML = "<a id='" + expando + "'> </a>" +
				"<select id = '" + expando + " -  \ r \\' msallowcapture = ''>" +
				"<option selected = ''> </option> </select>";

			//�T�|�[�g�FIE8�AOpera 11-12.16
			//��̕�����^ =�A$ =�A�܂���* =�̌�ɑ����ꍇ�́A�����I�����Ȃ��ł�������
			// test������Opera�ł͕s���ł���K�v������܂����AWinRT�ł� "���S"�ł��B
			// https://msdn.microsoft.com/ja-jp/library/ie/hh465388.aspx#attribute_section
			if�iel.querySelectorAll�i "[msallowcapture ^ = '']"�j�Blength�j{
				rbuggyQSA.push�i "[* ^ $] =" +��+ "*�i?: '' | \" \ "�j"�j;
			}

			//�T�|�[�g�FIE8
			//�u�[�������� "value"�͐����������܂���
			if�i�Iel.querySelectorAll�i "[selected]"�j�Blength�j{
				rbuggyQSA.push�i "\\ [" +�󔒕���+ "*�i?: value |" + booleans + "�j"�j;
			}

			//�T�|�[�g�FChrome <29�AAndroid <4.4�ASafari <7.0+�AiOS <7.0+�APhantomJS <1.9.8+
			if�i�Iel.querySelectorAll�i "[id?=" + expando + " - ]"�j.length�j{
				rbuggyQSA.push�i "?="�j;
			}

			// Webkit / Opera  - �F�`�F�b�N����ƑI�������I�v�V�����v�f���Ԃ����
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8�͂����ŃG���[�𓊂��A��̃e�X�g�����邱�Ƃ͂Ȃ��ł��傤
			if�i�Iel.querySelectorAll�i "�Fchecked"�j�Blength�j{
				rbuggyQSA.push�i "�Fchecked"�j;
			}

			//�T�|�[�g�FSafari 8�ȍ~�AiOS 8�ȍ~
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			//�y�[�W���́uselector��id sibling-combinator selector�v�����s����
			if�i�Iel.querySelectorAll�i "a��" + expando + "+ *"�j.length�j{
				rbuggyQSA.push�i "�B���B+ [+?]"�j;
			}
		;�j�j;

		assert�i�@�\�iel�j{
			el.innerHTML = "<a href='' disabled='disabled'> </a>" +
				"<select disabled = 'disabled'> <option /> </select>";

			//�T�|�[�g�FWindows 8�l�C�e�B�u�A�v��
			// type�����name������.innerHTML�̊��蓖�Ē��ɐ�������܂�
			var input = document.createElement�i "input"�j;
			input.setAttribute�i "type"�A "hidden"�j;
			el.appendChild�i���́j.setAttribute�i "name"�A "D"�j;

			//�T�|�[�g�FIE8
			// name�����̑啶���Ə���������ʂ���
			if�iel.querySelectorAll�i "[name = d]"�j�Blength�j{
				rbuggyQSA.push�i "name" +�󔒕��� "" * [* ^ $ |�I?]�H= "�j;
			}

			// FF 3.5  - �Fenabled /�Fdisabled��hidden�v�f�ihidden�v�f�͂܂��L���ł��j
			// IE8�͂����ŃG���[�𓊂��A��̃e�X�g�����邱�Ƃ͂Ȃ��ł��傤
			if�iel.querySelectorAll�i "�Fenabled"�j�Blength�I== 2�j{
				rbuggyQSA.push�i "�Fenabled"�A "�Fdisabled"�j;
			}

			//�T�|�[�g�FIE9-11 +
			// IE's�F�����Z���N�^�͖����t�B�[���h�Z�b�g�̎q���E���܂���
			docElem.appendChild�iel�j.disabled = true;
			if�iel.querySelectorAll�i "�Fdisabled"�j�Blength�I== 2�j{
				rbuggyQSA.push�i "�Fenabled"�A "�Fdisabled"�j;
			}

			// Opera 10-11�̓J���}��̖����ȋ[�����X���[���܂���
			el.querySelectorAll�i "* ,: x"�j;
			rbuggyQSA.push�i "�A�B*�F"�j;
		;�j�j;
	}

	if�i�isupport.matchesSelector = rnative.test�i�imatches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector�j�j�j�j{

		assert�i�@�\�iel�j{
			// matchesSelector�����s�ł��邩�ǂ������m�F���܂�
			//�ؒf���ꂽ�m�[�h��iIE 9�j
			support.disconnectedMatch = matches.call�iel�A "*"�j;

			//����͗�O�Ŏ��s���܂�
			// Gecko�̓G���[�ɂȂ炸�A�����false��Ԃ��܂�
			matches.call�iel�A "[s�I= '']�Fx"�j;
			rbuggyMatches.push�i "�I="�Apseudos�j;
		;�j�j;
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp�irbuggyQSA.join�i "|"�j�j;
	rbuggyMatches = rbuggyMatches.length && new RegExp�irbuggyMatches.join�i "|"�j�j;

	/ *���܂�
	-------------------------------------------------- -------------------- * /
	hasCompare = rnative.test�idocElem.compareDocumentPosition�j;

	//�v�f�ɕʂ̗v�f���܂܂�Ă��܂�
	//�Ӑ}�I�Ɏ��Ȕr���I
	//���l�ɁA�v�f�͂��ꎩ�g���܂܂Ȃ�
	contains = hasCompare || rnative.test�idocElem.contains�j�H
		�֐��ia�Ab�j{
			var adown = a.nodeType === 9�Ha.documentElement�Fa�A
				bup = b && b.parentNode;
			=== bup��Ԃ��܂�|| !!�i�ibup && bup.nodeType === 1 &&�i
				adown.contains�H
					adown.contains�ibup�j�F
					a.compareDocumentPosition && a.compareDocumentPosition�ibup�j��16
			;�j;
		�F
		�֐��ia�Ab�j{
			if�ib�j{
				while�i�ib = b.parentNode�j�j{
					if�ib === a�j{
						true��Ԃ��܂��B
					}
				}
			}
			false��Ԃ��܂��B
		;

	/ *�\�[�g
	-------------------------------------------------- -------------------- * /

	//�`�[�����\�[�g
	sortOrder = hasCompare�H
	�֐��ia�Ab�j{

		//�d���폜�̃t���O
		if�ia === b�j{
			hasDuplicate = true;
			0��Ԃ��܂��B
		}

		// 1�̓��݂͂̂�compareDocumentPosition������ꍇ�́A���\�b�h�̑��݂Ɋ�Â��ă\�[�g���܂�
		var compare =�Ia.compareDocumentPosition  - �Ib.compareDocumentPosition;
		if�i��r�j{
			��r��Ԃ��܂��B
		}

		//�����̓��͂������h�L�������g�ɑ����Ă���ꍇ�͈ʒu���v�Z���܂�
		��r=�ia.ownerDocument || a�j===�ib.ownerDocument || b�j�H
			a.compareDocumentPosition�ib�j�F

			//�����łȂ���΁A�ؒf����Ă��邱�Ƃ��킩��܂�
			1;

		//�ؒf���ꂽ�m�[�h
		if�i��r��1 ||
			�i�Isupport.sortDetached && b.compareDocumentPosition�ia�j===��r�j�j{

			//�D��h�L�������g�Ɋ֘A����ŏ��̗v�f��I��
			if�ia === document || a.ownerDocument === preferredDoc &&�ɂ́ipreferredDoc�Aa�j�j���܂܂�Ă��܂��B
				-1��Ԃ��܂��B
			}
			if�ib === document || b.ownerDocument === preferredDoc &&�ɂ́ipreferredDoc�Ab�j���܂܂�܂��j{
				1��Ԃ��܂��B
			}

			//���̒������ێ�
			sortInput��Ԃ��܂����H
				�iindexOf�isortInput�Aa�j -  indexOf�isortInput�Ab�j�j�F
				0;
		}

		��r��4��Ԃ� -1�F1
	�F
	�֐��ia�Ab�j{
		//�m�[�h������̏ꍇ�͑����I��
		if�ia === b�j{
			hasDuplicate = true;
			0��Ԃ��܂��B
		}

		var cur�A
			i = 0�A
			aup = a.parentNode�A
			bup = b.parentNode�A
			ap = [a]�A
			bp = [b];

		//�e�̂Ȃ��m�[�h�̓h�L�������g���ؒf����Ă���
		if�i�Iaup ||�Ibup�j{
			===�h�L�������g��Ԃ� -1�F
				b ===�h�L�������g�H1�F
				���K�H-1�F
				�o�b�v�H1�F
				sortInput�H
				�iindexOf�isortInput�Aa�j -  indexOf�isortInput�Ab�j�j�F
				0;

		//�m�[�h���Z��̏ꍇ�́A�ȒP�Ɋm�F�ł��܂��B
		�����łȂ���΁iaup === bup�j{
			siblingCheck�ia�Ab�j��Ԃ��܂��B
		}

		//�����łȂ���΁A��r�̂��߂ɂ����̐�c�̊��S�ȃ��X�g���K�v�ł�
		cur = a;
		while�i�icur = cur.parentNode�j�j{
			ap.unshift�icur�j;
		}
		cur = b;
		while�i�icur = cur.parentNode�j�j{
			bp.unshift�icur�j;
		}

		//�H���Ⴂ��T���Ė؂̏�����
		while�iap [i] === bp [i]�j{
			i ++;
		}

		����Ԃ��܂����H
			//�m�[�h�ɋ��ʂ̑c�悪���邩�ǂ������Z��`�F�b�N���܂�
			siblingCheck�iap [i]�Abp [i]�j�F

			//�����łȂ���΁A�h�L�������g���̃m�[�h���ŏ��Ƀ\�[�g����܂�
			ap [i] === preferredDoc�H-1�F
			bp [i] === preferredDoc�H1�F
			0;
	;

	�h�L�������g��Ԃ��܂��B
;

Sizzle.matches = function�iexpr�Aelements�j{
	Sizzle�iexpr�Anull�Anull�Aelements�j��Ԃ��܂��B
;

Sizzle.matchesSelector = function�ielem�Aexpr�j{
	//�K�v�ɉ����ăh�L�������g�̕ϐ���ݒ肵�܂�
	if�i�ielem.ownerDocument || elem�j�I== document�j{
		setDocument�ielem�j;
	}

	//�����Z���N�^�����p���ň͂܂�Ă��邱�Ƃ��m�F���Ă�������
	expr = expr.replace�irattributeQuotes�A "= '$ 1']"�j;

	if�isupport.matchesSelector && documentIsHTML &&
		�IcompilerCache [expr + ""] &&
		�i�IrbuggyMatches ||�IrbuggyMatches.test�iexpr�j�j&&
		�i�IrbuggyQSA ||�IrbuggyQSA.test�iexpr�j�j�j{

		�����Ă�������{
			var ret = matches.call�ielem�Aexpr�j;

			// IE 9��matchesSelector�͐ؒf���ꂽ�m�[�h�ł�false��Ԃ��܂�
			if�iret || support.disconnectedMatch ||
					//���l�ɁA�ؒf���ꂽ�m�[�h�͕������ɂ���ƌ����܂�
					// IE 9�̃t���O�����g
					elem.document && elem.document.nodeType�I== 11�j{
				ret��Ԃ��B
			}
		}�L���b�`�iE�j{}
	}

	Sizzle�iexpr�Adocument�Anull�A[elem]�j.length> 0��Ԃ��܂��B
;

Sizzle.contains = function�icontext�Aelem�j{
	//�K�v�ɉ����ăh�L�������g�̕ϐ���ݒ肵�܂�
	if�i�icontext.ownerDocument || context�j�I== document�j{
		setDocument�icontext�j;
	}
	return contains�icontext�Aelem�j;
;

Sizzle.attr = function�ielem�Aname�j{
	//�K�v�ɉ����ăh�L�������g�̕ϐ���ݒ肵�܂�
	if�i�ielem.ownerDocument || elem�j�I== document�j{
		setDocument�ielem�j;
	}

	var fn = Expr.attrHandle [name.toLowerCase�i�j]�A
		// Object.prototype�v���p�e�B�ɂ��܂���Ă͂����܂���ijQuery��13807�j
		val = fn && hasOwn.call�iExpr.attrHandle�Aname.toLowerCase�i�j�j�H
			fn�ielem�Aname�A�IdocumentIsHTML�j�F
			����`;

	�߂�lval�I==����`�H
		val�F
		support.attributes || �IdocumentIsHTML�H
			elem.getAttribute�iname�j�F
			�ival = elem.getAttributeNode�iname�j�j&& val.specified�H
				�l�F
				�k��;
;

Sizzle.escape = function�isel�j{
	return�isel + ""�j.replace�ircssescape�Afcssescape�j;
;

Sizzle.error = function�imsg�j{
	�V�����G���[���X���[���܂��i "�\���G���[�A�F���ł��Ȃ����F" + msg�j�B
;

/ **
 *�����̃\�[�g�Əd���̍폜
 * @param {ArrayLike}�̌���
 * /
Sizzle.uniqueSort = function�iresults�j{
	var elem�A
		�d��= []�A
		j = 0�A
		�� �� �O�B

	//�d�������o�ł��邱�Ƃ�*�m���Ă��Ȃ�����*�A����炪���݂���Ɖ��肵�܂��B
	hasDuplicate =�Isupport.detectDuplicates;
	sortInput =�Isupport.sortStable && results.slice�i0�j;
	results.sort�isortOrder�j;

	if�ihasDuplicate�j{
		while�i�ielem = results [i ++]�j�j{
			if�ielem === results [i]�j{
				j = duplicates.push�ii�j;
			}
		}
		while�ij--�j{
			results.splice�iduplicates [j]�A1�j;
		}
	}

	//�I�u�W�F�N�g��������邽�߂Ƀ\�[�g������ɓ��͂���������
	// https://github.com/jquery/sizzle/pull/225���Q�Ƃ��Ă��������B
	sortInput = null;

	���ʂ�Ԃ��܂��B
;

/ **
 * DOM�m�[�h�̔z��̃e�L�X�g�l���擾���邽�߂̃��[�e�B���e�B�֐�
 * @param {Array | Element} elem
 * /
getText = Sizzle.getText = function�ielem�j{
	var�m�[�h�A
		ret = ""�A
		i = 0�A
		nodeType = elem.nodeType;

	if�i�InodeType�j{
		// nodeType���w�肳��Ă��Ȃ��ꍇ�A����͔z��ƌ��Ȃ����
		while�i�inode = elem [i ++]�j�j{
			//�R�����g�m�[�h��ʉ߂��Ȃ�
			ret + = getText�inode�j;
		}
	�����łȂ���΁inodeType === 1 || nodeType === 9 || nodeType === 11�j{
		//�v�f��textContent���g�p����
		// innerText�̎g�p�@�͉��s�̈�ѐ��̂��߂ɍ폜����܂����ijQuery��11153�j
		if�itypeof elem.textContent === "string"�j{
			elem.textContent��Ԃ��܂��B
		���̑�{
			//�q���g���o�[�X����
			for�ielem = elem.firstChild; elem; elem = elem.nextSibling�j{
				ret + = getText�ielem�j;
			}
		}
	�����łȂ���΁inodeType === 3 || nodeType === 4�j{
		elem.nodeValue��Ԃ��܂��B
	}
	//�R�����g�܂��͏������߃m�[�h���܂߂Ȃ�

	ret��Ԃ��B
;

Expr = Sizzle.selectors = {

	//���[�U�[�������ł��܂�
	cacheLength�F50�A

	createPseudo�FmarkFunction�A

	match�FmatchExpr�A

	attrHandle�F{}�A

	�����܂��F{}�A

	���΁F{
		">"�F{dir�F "parentNode"�A�ŏ��̒l�Ftrue}�A
		""�F{dir�F "parentNode"}�A
		"+"�F{dir�F "previousSibling"�A�ŏ��̒l�Ftrue}�A
		"?"�F{dir�F "previousSibling"}
	�A

	preFilter�F{
		"ATTR"�F�@�\�i��v�j{
			match [1] = match [1] .replace�irunescape�Afunescape�j;

			//���p���t�������p���Ȃ����ɂ�����炸�A�w�肳�ꂽ�l��[3]�Ɉ�v����悤�Ɉړ����܂�
			match [3] =�imatch [3] || match [4] || match [5] || ""�j.replace�irunescape�Afunescape�j;

			if�imatch [2] === "?="�j{
				match [3] = "" + match [3] + "";
			}

			match.slice�i0�A4�j��Ԃ��܂��B
		�A

		"CHILD"�F�@�\�i�}�b�`�j{
			/ * matchExpr����̈�v["CHILD"]
				1��ށi| nth | ...�̂݁j
				2�ȂɁi�q�ǂ��b�^�C�v�j
				3�����i����|�| \ d * | \ d * n�i[+  - ] \ d +�j�H| ...�j
				xn + y������4 xn�R���|�[�l���g�i[+  - ]�H\ d * n |�j
				xn�R���|�[�l���g��5����
				6�~x����
				y������7�L��
				y����8 y
			* /
			match [1] = match [1] .toLowerCase�i�j;

			if�i[1] .slice�i0�A3�j=== "nth"�Ɉ�v�j{
				// nth- *�͈������K�v�ł�
				if�i�I[3]�Ɉ�v�j{
					Sizzle.error�imatch [0]�j;
				}

				// Expr.filter.CHILD�̐��lx�����y�p�����[�^
				// false / true�͂��ꂼ��0/1�ɃL���X�g����܂��B
				match [4] = +�imatch [4]�Hmatch [5] +�imatch [6] || 1�j�F2 *�imatch [3] === "even" || match [3] === "� "�j�j;
				match [5] = +�i�imatch [7] + match [8]�j|| match [3] === "odd"�j;

			//���̌^�͈������֎~���܂�
			�����łȂ���΁imatch [3]�j{
				Sizzle.error�imatch [0]�j;
			}

			�}�b�`��Ԃ��܂��B
		�A

		"PSEUDO"�F�@�\�i�}�b�`�j{
			VAR�ߏ�A
				���p���Ȃ�=�Imatch [6] && match [2];

			if�imatchExpr ["CHILD"]�B�e�X�g�imatch [0]�j�j{
				null��Ԃ��܂��B
			}

			//���p���ꂽ���������̂܂܎󂯓����
			if�i[3]�Ɉ�v�j{
				match [2] = match [4] || �}�b�`[5] || "";

			//���p���ň͂܂�Ă��Ȃ���������]���ȕ������폜���܂�
			�����łȂ���΁i���p���ň͂܂�Ă��Ȃ�&& rpseudo.test�i���p���ň͂܂�Ă��Ȃ��j&&
				// tokenize���璴�߂��擾����i�ċA�I�Ɂj
				�i����= tokenize�i���p���Ȃ��Atrue�j�j&&
				//���̕����ʂɐi��
				�i�ߏ�=���p���Ȃ�indexOf�i "�j"�A���p���Ȃ����� - �ߏ�j - ���p���Ȃ������j�j{

				//���߂͕��̎w��
				match [0] = match [0] .slice�i0�A���߁j�B
				match [2] =���p���Ȃ��̃X���C�X�i0�A���߁j�B
			}

			//�[���t�B���^���\�b�h�ŕK�v�ȃL���v�`���݂̂�Ԃ��܂��i�^�ƈ����j
			match.slice�i0�A3�j��Ԃ��܂��B
		}
	�A

	�t�B���^�[�F{

		"TAG"�F�֐��inodeNameSelector�j{
			var nodeName = nodeNameSelector.replace�irunescape�Afunescape�j.toLowerCase�i�j;
			nodeNameSelector === "*"��Ԃ��܂����H
				function�i�j{true��Ԃ��܂��B�F
				�֐��ielem�j{
					elem.nodeName && elem.nodeName.toLowerCase�i�j=== nodeName��Ԃ��܂��B
				;
		�A

		"CLASS"�F�֐��i�N���X���j{
			var pattern = classCache [className + ""];

			���^�[���p�^�[��||
				�i�p�^�[��= new RegExp�i "�i^ |" +��+ "�j" + className + "�i" +��+ "| $�j"�j�j&&
				classCache�iclassName�Afunction�ielem�j{
					return pattern.test�itypeof elem.className === "string" && elem.className || typeof elem.getAttribute�I== "����`" && elem.getAttribute�i "class"�j|| ""�j;
				;�j�j;
		�A

		"ATTR"�F�@�\�i���O�A�I�y���[�^�A�`�F�b�N�j{
			�߂�֐��ielem�j{
				var result = Sizzle.attr�ielem�Aname�j;

				if�iresult == null�j{
					�߂艉�Z�q=== "�I=";
				}
				if�i�I���Z�q�j{
					true��Ԃ��܂��B
				}

				����+ = "";

				�߂艉�Z�q=== "="�H����===�`�F�b�N�F
					operator === "�I="�H���ʁI==�`�F�b�N�F
					operator === "^ ="�Hcheck && result.indexOf�icheck�j=== 0�F
					operator === "* ="�Hcheck && result.indexOf�icheck�j> -1�F
					operator === "$ ="�H&& result.slice�i-check.length�j=== check�F
					operator === "?="�H�i "" + result.replace�irwhitespace�A ""�j+ ""�j.indexOf�icheck�j> -1�F
					operator === "| ="�H����===�`�F�b�N|| result.slice�i0�Acheck.length + 1�j=== check + " - "�F
					�U
			;
		�A

		"CHILD"�F�֐��i�^�C�v�A���A�����A�ŏ��A�Ō�j{
			var simple = type.slice�i0�A3�j�I== "nth"�A
				forward = type.slice�i-4�j�I== "�Ō�"�A
				ofType = what === "of-type";

			�ŏ��ɕԂ�=== 1 &&�Ō��=== 0�H

				//�V���[�g�J�b�g�Fnth  -  *�in�j
				�֐��ielem�j{
					return !! elem.parentNode;
				�F

				�֐��ielem�Acontext�Axml�j{
					var cache�AuniqueCache�AouterCache�Anode�AnodeIndex�Astart�A
						dir = simple�I== forward�H"nextSibling"�F "previousSibling"�A
						parent = elem.parentNode�A
						name = ofType && elem.nodeName.toLowerCase�i�j�A
						useCache =�Ixml &&�IofType�A
						diff = false;

					if�i�e�j{

						//�F�i�ŏ�|�Ō�|�̂݁j - �i�q|�^�C�v�j
						if�i�P���j{
							while�idir�j{
								node = elem;
								while�i�inode = node [dir]�j�j{
									if�iofType�H
										node.nodeName.toLowerCase�i�j===���O�F
										node.nodeType === 1�j{

										false��Ԃ��܂��B
									}
								}
								//�Fonly- *�̕������t�ɂ���i�܂��s���Ă��Ȃ��ꍇ�j
								start = dir = type === "only" &&�Istart && "nextSibling";
							}
							true��Ԃ��܂��B
						}

						�J�n= [�i�ށHparent.firstChild�Fparent.lastChild];

						// non-xml�Fnth-??child�i...�j�̓L���b�V���f�[�^�� `parent`�Ɋi�[���܂�
						if�iforward && useCache�j{

							//�ȑO�ɃL���b�V�����ꂽ�C���f�b�N�X���� `elem`��T��

							// ... gzip�ɂ₳�������@��
							node = parent;
							outerCache = node [expando] || �inode [expando] = {}�j;

							//�T�|�[�g�FIE <9�̂�
							//�������ꂽ������h�䂷��ijQuery gh-1709�j
							uniqueCache = outerCache [node.uniqueID] ||
								�iouterCache [node.uniqueID] = {}�j;

							cache = uniqueCache [type] || [];
							nodeIndex = cache [0] === dirruns && cache [1];
							diff = nodeIndex && cache [2];
							node = nodeIndex && parent.childNodes [nodeIndex];

							while�i�inode = ++ nodeIndex && node && node [dir] ||

								//�ŏ����� `elem`��T�����ƂɃt�H�[���o�b�N
								�idiff = nodeIndex = 0�j|| start.pop�i�j�j�j{

								//���������ꍇ�A�C���f�b�N�X�� `parent`�ɃL���b�V�����ău���[�N���܂�
								if�inode.nodeType === 1 && ++ diff && node === elem�j{
									uniqueCache [type] = [dirruns�AnodeIndex�Adiff];
									�u���[�N;
								}
							}

						���̑�{
							//���p�\�ȏꍇ�͈ȑO�ɃL���b�V�����ꂽ�v�f�C���f�b�N�X���g�p����
							if�iuseCache�j{
								// ... gzip�ɂ₳�������@��
								node = elem;
								outerCache = node [expando] || �inode [expando] = {}�j;

								//�T�|�[�g�FIE <9�̂�
								//�������ꂽ������h�䂷��ijQuery gh-1709�j
								uniqueCache = outerCache [node.uniqueID] ||
									�iouterCache [node.uniqueID] = {}�j;

								cache = uniqueCache [type] || [];
								nodeIndex = cache [0] === dirruns && cache [1];
								diff = nodeIndex;
							}

							// xml�Fnth-??child�i...�j
							//�܂��́Fnth-??last-child�i...�j�܂��́Fnth�i-last�j�H -  of-type�i...�j
							if�idiff === false�j{
								//�ォ�瓯�����[�v���g���čŏ����� `elem`��T��
								while�i�inode = ++ nodeIndex && node && node [dir] ||
									�idiff = nodeIndex = 0�j|| start.pop�i�j�j�j{

									if�i�iofType�H
										node.nodeName.toLowerCase�i�j===���O�F
										node.nodeType === 1�j&&
										++ diff�j{

										//���������e�v�f�̃C���f�b�N�X���L���b�V�����܂�
										if�iuseCache�j{
											outerCache = node [expando] || �inode [expando] = {}�j;

											//�T�|�[�g�FIE <9�̂�
											//�������ꂽ������h�䂷��ijQuery gh-1709�j
											uniqueCache = outerCache [node.uniqueID] ||
												�iouterCache [node.uniqueID] = {}�j;

											uniqueCache [type] = [dirruns�Adiff];
										}

										if�inode === elem�j{
											�u���[�N;
										}
									}
								}
							}
						}

						//�I�t�Z�b�g��g�ݍ���ł���A�T�C�N���T�C�Y�Əƍ�����
						diff  -  =�Ō�;
						diff ===�ŏ���Ԃ�|| �idiff��first === 0 && diff / first> = 0�j;
					}
				;
		�A

		"PSEUDO"�F�֐��i�^���A�����j{
			//�^���N���X���͑啶���Ə���������ʂ��܂���
			// http://www.w3.org/TR/selectors/#pseudo-classes
			//�J�X�^���[���������啶���Œǉ�����Ă���ꍇ�A�啶���Ə���������ʂ��ėD�揇�ʂ�t����
			// setFilters��pseudos����p�����邱�Ƃ�Y��Ȃ��ł�������
			var args�A
				fn = Expr.pseudos [�[��] || Expr.setFilters [pseudo.toLowerCase�i�j] ||
					Sizzle.error�i "�T�|�[�g����Ă��Ȃ��^���R�[�h�F" + pseudo�j

			//���[�U�[��createPseudo���g�p���Ă�����������Ƃ��ł��܂�
			//�t�B���^�֐����쐬����ɂ͈������K�v�ł�
			// Sizzle�Ɠ����悤��
			if�ifn [expando]�j{
				fn�i�����j��Ԃ��܂��B
			}

			//�������Â������̃T�|�[�g���ێ�����
			if�ifn.length> 1�j{
				args = [pseudo�Apseudo�A ""�Aargument];
				Expr.setFilters.hasOwnProperty�ipseudo.toLowerCase�i�j�j��Ԃ��܂����H
					markFunction�ifunction�iseed�Amatches�j{
						var idx�A
							matched = fn�i�V�[�h�A�����j�A
							i = matched.length�B
						while�ii--�j{
							idx = indexOf�iseed�Amatched [i]�j;
							seed [idx] =�I�imatches [idx] = matched [i]�j;
						}
					�j�F
					�֐��ielem�j{
						fn�ielem�A0�Aargs�j��Ԃ��܂��B
					;
			}

			fn��Ԃ��܂��B
		}
	�A

	�[���F{
		//���ݓI�ɕ��G�ȋ^��
		"not"�FmarkFunction�i�֐��i�Z���N�^�j{
			//�R���p�C���ɓn���ꂽ�Z���N�^���폜���܂�
			//�擪�Ɩ����̈����������
			//�R���r�l�[�^�Ƃ��ẴX�y�[�X
			var input = []�A
				results = []�A
				matcher = compile�iselector.replace�irtrim�A "$ 1"�j�j;

			���^�[���}�b�`���[[expando]�H
				markFunction�ifunction�iseed�Amatches�Acontext�Axml�j{
					var elem�A
						��v���Ȃ�= matcher�iseed�Anull�Axml�A[]�j�A
						i = seed.length;

					// `matcher`�Ń}�b�`���Ȃ������v�f�Ƀ}�b�`
					while�ii--�j{
						if�i�ielem = unmatched [i]�j�j{
							seed [i] =�I�imatches [i] = elem�j;
						}
					}
				�j�F
				�֐��ielem�Acontext�Axml�j{
					input [0] = elem;
					matcher�i���́Anull�Axml�A���ʁj
					//�v�f��ێ����Ȃ��iissue��299�j
					input [0] = null�B
					return�Iresults.pop�i�j;
				;
		�A�j

		"has"�FmarkFunction�i�֐��i�Z���N�^�j{
			�߂�֐��ielem�j{
				Sizzle�iselector�Aelem�j.length> 0��Ԃ��܂��B
			;
		�A�j

		"contains"�FmarkFunction�ifunction�itext�j{
			text = text.replace�irunescape�Afunescape�j;
			�߂�֐��ielem�j{
				return�ielem.textContent || elem.innerText || getText�ielem�j�j.indexOf�itext�j> -1;
			;
		�A�j

		// "�v�f���Flang�i�j�Z���N�^�ŕ\����邩�ǂ���
		//�v�f�̌���l�݂̂Ɋ�Â��Ă��܂�
		//���ʎqC�Ɠ�����
		//�܂��͎��ʎqC�Ŏn�܂�A����� " - "������
		//�v�f�̌���l�ɑ΂���C�̃}�b�`���O�́A�啶���Ə���������ʂ����Ɏ��s����܂��B
		//���ʎqC�͗L���Ȍ��ꖼ�ł���K�v�͂���܂���B�v
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang"�FmarkFunction�i�֐��ilang�j{
			// lang�l�͗L���Ȏ��ʎq�łȂ���΂Ȃ�܂���
			if�i�Iridentifier.test�ilang || ""�j�j{
				Sizzle.error�i "�T�|�[�g����Ă��Ȃ�����F" +����j;
			}
			lang = lang.replace�irunescape�Afunescape�j.toLowerCase�i�j;
			�߂�֐��ielem�j{
				var elemLang;
				�s�� {
					if�i�ielemLang = documentIsHTML�H
						elem.lang�F
						elem.getAttribute�i "xml�Flang"�j|| elem.getAttribute�i "lang"�j�j�j�j{

						elemLang = elemLang.toLowerCase�i�j;
						elemLang��Ԃ��܂�=== lang || elemLang.indexOf�ilang + " - "�j=== 0;
					}
				while�i�ielem = elem.parentNode�j&& elem.nodeType === 1�j;
				false��Ԃ��܂��B
			;
		�A�j

		//���̑�
		"�^�[�Q�b�g"�F�֐��i�v�f�j{
			var hash = window.location && window.location.hash;
			hash && hash.slice�i1�j=== elem.id��Ԃ��܂��B
		�A

		"���[�g"�F�֐��i�v�f�j{
			elem === docElem��Ԃ��܂��B
		�A

		"�t�H�[�J�X"�F�@�\�i�v�f�j{
			elem === document.activeElement &&�i�Idocument.hasFocus || document.hasFocus�i�j�j&& !!�ielem.type || elem.href ||?elem.tabIndex�j;��Ԃ��܂��B
		�A

		//�u�[���l�v���p�e�B
		"�L��"�FcreateDisabledPseudo�ifalse�j�A
		"����"�FcreateDisabledPseudo�itrue�j�A

		"�`�F�b�N����"�Ffunction�ielem�j{
			// CSS3�ł́A�Fchecked��checked�v�f��selected�v�f�̗�����Ԃ��͂��ł�
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase�i�j;
			return�inodeName === "input" && !! elem.checked�j|| �inodeName === "option" && !! elem.selected�j;
		�A

		"�I��"�F�֐��i�v�f�j{
			//���̃v���p�e�B�ɃA�N�Z�X����ƃf�t�H���g�őI�������
			// Safari�̃I�v�V�����͐������@�\����
			if�ielem.parentNode�j{
				elem.parentNode.selectedIndex;
			}

			elem.selected === true��Ԃ��܂��B
		�A

		//�R���e���c
		"��"�F�֐��i�v�f�j{
			// http://www.w3.org/TR/selectors/#empty-pseudo
			//�F��́A�v�f�i1�j�܂��̓R���e���c�m�[�h�itext�F3�Acdata�F4�Aentity ref�F5�j�ɂ���Ĕے肳��܂��B
			//���������̐l�ɂ͂ł��Ȃ��i�R�����g�F8;�������߁F7;�Ȃǁj
			// nodeType <6�́Aattributes�i2�j���q�Ƃ��ĕ\������Ȃ����ߋ@�\���܂�
			for�ielem = elem.firstChild; elem; elem = elem.nextSibling�j{
				if�ielem.nodeType <6�j{
					false��Ԃ��܂��B
				}
			}
			true��Ԃ��܂��B
		�A

		"�e"�F�֐��i�v�f�j{
			return�IExpr.pseudos ["empty"]�ielem�j;
		�A

		//�v�f/���̓^�C�v
		"�w�b�_�["�F�֐��i�v�f�j{
			rheader.test�ielem.nodeName�j��Ԃ��܂��B
		�A

		"����"�F�֐��i�v�f�j{
			rinputs.test�ielem.nodeName�j��Ԃ��܂��B
		�A

		"�{�^��"�F�@�\�i�v�f�j{
			var name = elem.nodeName.toLowerCase�i�j;
			�߂薼=== "����" && elem.type === "�{�^��" || name === "�{�^��";
		�A

		"�e�L�X�g"�F�֐��i�v�f�j{
			var attr;
			elem.nodeName.toLowerCase�i�j=== "input"��Ԃ��܂�&&
				elem.type === "�e�L�X�g" &&

				//�T�|�[�g�FIE <8
				//�V����HTML5�����l�i��F "search"�j��elem.type === "text"�ŕ\������܂�
				�i�iattr = elem.getAttribute�i "type"�j�j== null || attr.toLowerCase�i�j=== "text"�j;
		�A

		//�R���N�V�������̈ʒu
		"�ŏ�"�FcreatePositionalPseudo�ifunction�i�j{
			[0]��Ԃ��܂��B
		�A�j

		"�Ō�"�FcreatePositionalPseudo�ifunction�imatchIndexes�Alength�j{
			[���� -  1]��Ԃ��܂��B
		�A�j

		"eq"�FcreatePositionalPseudo�i�֐��imatchIndexes�A�����A�����j�j{
			[����<0�H����+�����F����];
		�A�j

		"even"�FcreatePositionalPseudo�ifunction�imatchIndexes�Alength�j{
			var i = 0;
			�i; i <length; i + = 2�j{�ɂ���
				matchIndexes.push�ii�j;
			}
			matchIndexes��Ԃ��܂��B
		�A�j

		"�"�FcreatePositionalPseudo�ifunction�imatchIndexes�Alength�j{
			var i = 1;
			�i; i <length; i + = 2�j{�ɂ���
				matchIndexes.push�ii�j;
			}
			matchIndexes��Ԃ��܂��B
		�A�j

		"lt"�FcreatePositionalPseudo�i�֐��imatchIndexes�A�����A�����j�j{
			var i = argument <0�H����+�����F�����B
			�i;  -  i> = 0;�j{�̏ꍇ
				matchIndexes.push�ii�j;
			}
			matchIndexes��Ԃ��܂��B
		�A�j

		"gt"�FcreatePositionalPseudo�i�֐��imatchIndexes�A�����A�����j�j{
			var i = argument <0�H����+�����F�����B
			for�i; ++ i <length;�j{
				matchIndexes.push�ii�j;
			}
			matchIndexes��Ԃ��܂��B
		�j
	}
;

Expr.pseudos ["nnth"] = Expr.pseudos ["eq"];

//�{�^��/���̓^�C�v�̋[����ǉ�
�ii in {���W�I�Ftrue�A�`�F�b�N�{�b�N�X�Ftrue�A�t�@�C���Ftrue�A�p�X���[�h�Ftrue�A�摜�Ftrue}�j{
	Expr.pseudos [i] = createInputPseudo�ii�j;
}
for�ii in {���M�Ftrue�A���Z�b�g�Ftrue}�j{
	Expr.pseudos [i] = createButtonPseudo�ii�j;
}

//�V����setFilters���쐬���邽�߂̊ȒP��API
�֐�setFilters�i�j{}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters�i�j;

tokenize = Sizzle.tokenize = function�iselector�AparseOnly�j{
	var matched�Amatch�A�g�[�N���A�^�C�v�A
		soFar�A�O���[�v�ApreFilters�A
		cached = tokenCache [selector + ""];

	if�i�L���b�V���j{
		parseOnly��Ԃ��܂����H0�Fcached.slice�i0�j;
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while�isoFar�j{

		//�R���}�Ə�����s
		if�i�I����v����||�imatch = rcomma.exec�isoFar�j�j�j�j{
			if�imatch�j{
				//�����̃J���}��L���Ȃ��̂Ƃ��Ďg�p���Ȃ�
				soFar = soFar.slice�imatch [0] .length�j|| ����܂ł̂Ƃ���;
			}
			groups.push�i�itokens = []�j�j;
		}

		��v= false�B

		//�R���r�l�[�^
		if�i�imatch = rcombinators.exec�isoFar�j�j�j�j{
			matched = match.shift�i�j;
			tokens.push�i{
				�l�F��v�A
				//�q���R���r�l�[�^���X�y�[�X�ɃL���X�g����
				�^�C�v�Fmatch [0] .replace�irtrim�A ""�j
			;�j�j;
			soFar = soFar.slice�imatched.length�j;
		}

		//�t�B���^
		for�iExpr.filter����́j{
			if�i�imatch = matchExpr [type] .exec�isoFar�j�j&&�i�IpreFilters [type] ||
				�imatch = preFilters [type]�imatch�j�j�j�j{
				matched = match.shift�i�j;
				tokens.push�i{
					�l�F��v�A
					�^�C�v�F�^�C�v�A
					�}�b�`�F�}�b�`
				;�j�j;
				soFar = soFar.slice�imatched.length�j;
			}
		}

		if�i�I����v���܂����j{
			�u���[�N;
		}
	}

	//�����Ȓ��ߕ��̒�����Ԃ��܂�
	//��͂��Ă��邾���̏ꍇ
	//�����łȂ���΁A�G���[���X���[���邩�g�[�N����Ԃ�
	parseOnly��Ԃ��܂����H
		soFar.length�F
		����܂ł̂Ƃ��� �H
			Sizzle.error�i�Z���N�^�j�F
			//�g�[�N�����L���b�V������
			tokenCache�iselector�Agroups�j.slice�i0�j;
;

�֐�toSelector�i�g�[�N���j{
	var i = 0�A
		len = tokens.length�A
		selector = "";
	for�i; i <len; i ++�j{
		selector + = tokens [i] .value;
	}
	�Z���N�^��Ԃ��܂��B
}

�֐�addCombinator�imatcher�Acombinator�Abase�j{
	var dir = combinator.dir�A
		skip = combinator.next�A
		key =�X�L�b�v����|| ���[�A
		checkNonElements = base && key === "parentNode"�A
		doneName = done ++;

	combinator.first��Ԃ��܂����B
		//�ł��߂���c/�O�̗v�f�Əƍ�����
		�֐��ielem�Acontext�Axml�j{
			while�i�ielem = elem [dir]�j�j{
				if�ielem.nodeType === 1 || checkNonElements�j{
					�}�b�`���[�ielem�Acontext�Axml�j��Ԃ��܂��B
				}
			}
			false��Ԃ��܂��B
		�F

		//���ׂĂ̐�c/�O�̗v�f�Əƍ�����
		�֐��ielem�Acontext�Axml�j{
			var oldCache�AuniqueCache�AouterCache�A
				newCache = [dirruns�AdoneName];

			// XML�m�[�h�ɔC�ӂ̃f�[�^��ݒ肷�邱�Ƃ͂ł��Ȃ����߁A�R���r�l�[�^�L���b�V���O�̉��b���󂯂܂���B
			if�ixml�j{
				while�i�ielem = elem [dir]�j�j{
					if�ielem.nodeType === 1 || checkNonElements�j{
						if�imatcher�ielem�Acontext�Axml�j�j{
							true��Ԃ��܂��B
						}
					}
				}
			���̑�{
				while�i�ielem = elem [dir]�j�j{
					if�ielem.nodeType === 1 || checkNonElements�j{
						outerCache = elem [expando] || �ielem [expando] = {}�j;

						//�T�|�[�g�FIE <9�̂�
						//�������ꂽ������h�䂷��ijQuery gh-1709�j
						uniqueCache = outerCache [elem.uniqueID] || �iouterCache [elem.uniqueID] = {}�j;

						if�i�X�L�b�v&&�X�L�b�v=== elem.nodeName.toLowerCase�i�j�j{
							elem = elem [dir] || elem;
						�����łȂ���΁i�ioldCache = uniqueCache [key]�j�j&&
							oldCache [0] === dirruns && oldCache [1] === doneName�j{

							// newCache�ɑ�����A���ʂ�O�̗v�f�ɋt�`�d����
							return�inewCache [2] = oldCache [2]�j;
						���̑�{
							// newcache���ė��p���Č��ʂ�O�̗v�f�ɋt�`�d����
							uniqueCache [key] = newCache;

							//��v����ƁA�I�����܂��B���s����ƁA�`�F�b�N��������K�v������܂��B
							if�i�inewCache [2] = matcher�ielem�Acontext�Axml�j�j�j�j{
								true��Ԃ��܂��B
							}
						}
					}
				}
			}
			false��Ԃ��܂��B
		;
}

function elementMatcher�imatchers�j{
	matchers.length> 1��Ԃ��܂��B
		�֐��ielem�Acontext�Axml�j{
			var i = matchers.length;
			while�ii--�j{
				if�i�Imatchers [i]�ielem�A�R���e�L�X�g�Axml�j�j{
					false��Ԃ��܂��B
				}
			}
			true��Ԃ��܂��B
		�F
		matcher [0];
}

function multipleContexts�i�Z���N�^�A�R���e�L�X�g�A���ʁj{
	var i = 0�A
		len = contexts.length;
	for�i; i <len; i ++�j{
		Sizzle�iselector�Acontexts [i]�Aresults�j;
	}
	���ʂ�Ԃ��܂��B
}

�֐�condense�i�s��v�A�}�b�v�A�t�B���^�A�R���e�L�X�g�Axml�j{
	var elem�A
		newUnmatched = []�A
		i = 0�A
		len = unmatched.length�A
		mapped = map�I= null�B

	for�i; i <len; i ++�j{
		if�i�ielem = unmatched [i]�j�j{
			if�i�Ifilter || filter�ielem�Acontext�Axml�j�j{
				newUnmatched.push�ielem�j;
				if�i�}�b�v�j{
					map.push�ii�j;
				}
			}
		}
	}

	newUnmatched��Ԃ��܂��B
}

�֐�setMatcher�ipreFilter�Aselector�Amatcher�ApostFilter�ApostFinder�ApostSelector�j{
	if�ipostFilter &&�IpostFilter [expando]�j{
		postFilter = setMatcher�ipostFilter�j;
	}
	if�ipostFinder &&�IpostFinder [expando]�j{
		postFinder = setMatcher�ipostFinder�ApostSelector�j;
	}
	return markFunction�ifunction�iseed�Aresults�Acontext�Axml�j{
		var temp�A���Aelem�A
			preMap = []�A
			postMap = []�A
			������= results.length�A

			//�V�[�h�܂��̓R���e�L�X�g���珉���v�f���擾����
			elems = seed || multipleContexts�iselector || "*"�Acontext.nodeType�H[context]�Fcontext�A[]�j�A

			//�}�b�`���[���͂𓾂邽�߂̃v���t�B���^�A�V�[�h�ƌ��ʂ̓����̂��߂̃}�b�v��ۑ�
			matcherIn = preFilter &&�iseed ||�Iselector�j�H
				�v��ielems�ApreMap�ApreFilter�Acontext�Axml�j�F
				�G�����X�A

			matcherOut = matcher�H
				// postFinder�A�t�B���^�����O���ꂽ�V�[�h�A��V�[�h��postFilter�܂��͊����̌��ʂ�����ꍇ
				postFinder || �iseed�HpreFilter�F������|| postFilter�j�H

					// ...���ԏ������K�v�ł�
					[]�F

					// ...�����łȂ���Β��ڌ��ʂ��g��
					���� �F
				matcherIn;

		//�v���C�}���}�b�`��T��
		if�imatcher�j{
			matcher�imatcherIn�AmatcherOut�A�R���e�L�X�g�Axml�j;
		}

		// postFilter��K�p����
		if�ipostFilter�j{
			temp = condense�imatcherOut�ApostMap�j;
			postFilter�itemp�A[]�Acontext�Axml�j;

			//���s�����v�f��matcherIn�Ɉړ����Ĉ�v���������܂�
			i =���x�̒����B
			while�ii--�j{
				if�i�ielem = temp [i]�j�j{
					matcherOut [postMap [i]] =�I�imatcherIn [postMap [i]] = elem�j;
				}
			}
		}

		if�iseed�j{
			if�ipostFinder || preFilter�j{
				if�ipostFinder�j{
					//���̒��ԑ̂�postFinder�R���e�L�X�g�ɋÏk���āA�ŏI��matcherOut���擾���܂�
					temp = [];
					i = matcherOut.length;
					while�ii--�j{
						if�i�ielem = matcherOut [i]�j�j{
							// elem�͂܂��Ō�̎����ł͂Ȃ��̂ŁAmatcherIn�𕜌����܂�
							temp.push�i�imatcherIn [i] = elem�j�j;
						}
					}
					postFinder�inull�A�imatcherOut = []�j�Atemp�Axml�j;
				}

				//��v�����v�f���V�[�h���猋�ʂɈړ����Ă����𓯊������܂�
				i = matcherOut.length;
				while�ii--�j{
					if�i�ielem = matcherOut [i]�j&&
						�itemp = postFinder�HindexOf�iseed�Aelem�j�FpreMap [i]�j> -1�j{

						seed [temp] =�I�iresults [temp] = elem�j;
					}
				}
			}

		//��`����Ă���ꍇ��postFinder����Č��ʂɗv�f��ǉ�����
		���̑�{
			matcherOut = condense�i
				matcherOut ===���ʂ́H
					matcherOut.splice�i������matcherOut.length�j�F
					matcherOut
			;
			if�ipostFinder�j{
				postFinder�inull�A���ʁAmatcherOut�Axml�j;
			���̑�{
				push.apply�iresults�AmatcherOut�j;
			}
		}
	;�j�j;
}

�֐�matcherFromTokens�i�g�[�N���j{
	var checkContext�Amatcher�Aj�A
		len = tokens.length�A
		leadingRelative = Expr.relative [tokens [0] .type]�A
		implicitRelative = leadingRelative || Exre.relative [""]�A
		i = leadingRelative�H1�F0�A

		//��{�}�b�`���[�́A�v�f���g�b�v���x���̃R���e�L�X�g���瓞�B�\�ł��邱�Ƃ�ۏ؂��܂�
		matchContext = addCombinator�ifunction�ielem�j{
			elem === checkContext��Ԃ��܂��B
		implicitRelative�Atrue�j�A
		matchAnyContext = addCombinator�ifunction�ielem�j{
			indexOf�icheckContext�Aelem�j> -1��Ԃ��܂��B
		implicitRelative�Atrue�j�A
		matchers = [�֐��ielem�Acontext�Axml�j{
			var ret =�i�IleadingRelative &&�ixml ||�R���e�L�X�g�I== outermostContext�j�j|| �i
				�icheckContext = context�j.nodeType�H
					matchContext�ielem�Acontext�Axml�j�F
					matchAnyContext�ielem�Acontext�Axml�j�j;
			//�v�f�ɂԂ牺����̂������iissue��299�j
			checkContext = null�B
			ret��Ԃ��B
		;]];

	for�i; i <len; i ++�j{
		if�i�imatcher = Expr.relative [tokens [i] .type]�j�j�j{
			matchers = [addCombinator�ielementMatcher�imatchers�j�Amatcher�j];
		���̑�{
			matcher = Expr.filter [tokens [i] .type] .apply�inull�Atokens [i] .matches�j;

			//�ʒu�}�b�`���[�������Ƃ��ɓ��ʂȒl��Ԃ�
			if�imatcher [expando]�j{
				//�K�؂ɏ������邽�߂Ɏ��̑��Ή��Z�q������΂����T���܂�
				�� �� �{�{ ���B
				for�i; j <len; j ++�j{
					if�iExpr.relative [tokens [j] .type]�j{
						�u���[�N;
					}
				}
				setMatcher�i
					i> 1 && elementMatcher�imatchers�j�A
					i> 1 && toSelector�i
						//�O�̃g�[�N�����q���̑g�ݍ��킹�������ꍇ�́A�Öق�any-element `*`��}������
						tokens.slice�i0�Ai  -  1�j.concat�i{value�Ftokens [i  -  2] .type === ""�H "*"�F ""}�j
					.replace�irtrim�A "$ 1"�j�A
					�}�b�`���[�A
					matcherFromTokens�itokens.slice�ii�Aj�j�j�A
					j <len && matcherFromTokens�i�itokens = tokens.slice�ij�j�j�j�A
					j <len && toSelector�i�g�[�N���j
				;
			}
			matchers.push�imatcher�j;
		}
	}

	elementMatcher�imatchers�j��Ԃ��܂��B
}

�֐�matcherFromGroupMatchers�ielementMatchers�AsetMatchers�j{
	var bySet = setMatchers.length> 0�A
		byElement = elementMatchers.length> 0�A
		superMatcher = function�i�V�[�h�A�R���e�L�X�g�Axml�A���ʁA�ł��O���j{
			var elem�Aj�Amatcher�A
				matchedCount = 0�A
				i = "0"�A
				��v���Ȃ�= seed && []�A
				setMatched = []�A
				contextBackup = outermostContext�A
				//��ɃV�[�h�v�f�܂��͍ł��O���̃R���e�L�X�g�̂����ꂩ���K�v�ł�
				elems = seed || byElement && Expr.find ["TAG"]�i "*"�A��ԊO���j�A
				//���ꂪ�ł��O���̃}�b�`���[�ł���ꍇ�͐����̃f�B�������g�p����
				dirrunsUnique =�idirruns + = contextBackup == null�H1�FMath.random�i�j|| 0.1�j�A
				len = elems.length;

			if�i��ԊO���j{
				outermostContext = context === document || �R���e�L�X�g|| ��ԊO��
			}

			// elementMatchers�𒼐ړn���v�f�����ʂɒ��ڒǉ�����
			//�T�|�[�g�FIE <9�ASafari
			// id�Ɉ�v����NodeList�v���p�e�B�iIE�F "length"; Safari�F<number>�j�����e����
			for�i; i�I== len &&�ielem = elems [i]�j�I= null; i ++�j{
				if�ibyElement && elem�j{
					�� �� �O�B
					if�i�Icontext && elem.ownerDocument�I== document�j{
						setDocument�ielem�j;
						xml =�IdocumentIsHTML;
					}
					while�i�imatcher = elementMatchers [j ++]�j�j{
						if�imatcher�ielem�Acontext || document�Axml�j�j{
							results.push�ielem�j;
							�u���[�N;
						}
					}
					if�i��ԊO���j{
						dirruns = dirrunsUnique;
					}
				}

				//�Z�b�g�t�B���^�̈�v���Ȃ��v�f��ǐՂ���
				if�ibySet�j{
					//�ނ�͂��ׂẲ\�ȃ}�b�`���[��ʉ߂����ł��傤
					if�i�ielem =�Imatcher && elem�j�j{
						matchedCount--;
					}

					//��v���邩�ǂ����ɂ�����炸�A���ׂĂ̗v�f�̔z��𒷂�����
					if�iseed�j{
						unmatched.push�ielem�j;
					}
				}
			}

			// `i`�͏�L�ŖK�₵���v�f�̐��ł���A�����` matchedCount`�ɒǉ�����
			//��҂�񕉂ɂ��܂��B
			matchedCount + = i;

			//��v���Ȃ��v�f�ɐݒ�t�B���^��K�p����
			//���F��v���Ȃ��v�f���Ȃ��ꍇ�i�܂�A `matchedCount`�̏ꍇ�j�A����̓X�L�b�v���邱�Ƃ��ł��܂��B
			��L�̃��[�v��_any_�v�f��K�₵�Ȃ������ꍇ�������A//�́ui�v�ɓ�����
			//�v�f�}�b�`���[���V�[�h������܂���B
			//�ŏ��̕����� "0"���C���N�������g����ƁA���̒��ł̂�i��������̂܂܂ɂȂ�܂��B
			// case�A����� `i`�Ƃ͈قȂ�" 00 "` matchedCount`�Ƃ������ʂɂȂ�܂����A
			//���l�I�Ƀ[��
			if�ibySet && i�I== matchedCount�j{
				�� �� �O�B
				while�i�imatcher = setMatchers [j ++]�j�j{
					matcher�i��v���Ȃ��AsetMatched�A�R���e�L�X�g�Axml�j�B
				}

				if�iseed�j{
					//�\�[�g�̕K�v����r�����邽�߂ɗv�f�}�b�`���ē�������
					if�imatchedCount> 0�j{
						while�ii--�j{
							if�i�I�iunmatched [i] || setMatched [i]�j�j�j{
								setMatched [i] = pop.call�i���ʁj;
							}
						}
					}

					//���ۂ̈�v�݂̂��擾���邽�߂ɃC���f�b�N�X�v���[�X�z���_�̒l��j��
					setMatched = condense�isetMatched�j;
				}

				//���ʂɈ�v��ǉ�
				push.apply�iresults�AsetMatched�j;

				//�����̐��������}�b�`���[�ɑ����V�[�h���X�Z�b�g�̈�v���\�[�g���K�肷��
				if�i�ł��O����&&�Iseed && setMatched.length> 0 &&
					�imatchedCount + setMatchers.length�j> 1�j{

					Sizzle.uniqueSort�i���ʁj;
				}
			}

			//����q�ɂȂ����}�b�`���[�ɂ��O���[�o���̑�����I�[�o�[���C�h����
			if�i��ԊO���j{
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			�s��v��Ԃ��܂��B
		;

	bySet��Ԃ��H
		markFunction�isuperMatcher�j�F
		superMatcher;
}

compile = Sizzle.compile = function�iselector�Amatch / *�����g�p�̂�* /�j{
	var i�A
		setMatchers = []�A
		elementMatchers = []�A
		cached = compilerCache [selector + ""];

	if�i�I�L���b�V���j{
		//�e�v�f���`�F�b�N���邽�߂Ɏg�p�ł���ċA�֐��̊֐��𐶐����܂�
		if�i�Imatch�j{
			match = tokenize�i�Z���N�^�j;
		}
		i = match.length;
		while�ii--�j{
			cached = matcherFromTokens�imatch [i]�j;
			if�i�L���b�V�����ꂽ[expando]�j{
				setMatchers.push�i�L���b�V���j�B
			���̑�{
				elementMatchers.push�i�L���b�V���j�B
			}
		}

		//�R���p�C�������֐����L���b�V������
		cached = compilerCache�iselector�AmatcherFromGroupMatchers�ielementMatchers�AsetMatchers�j�j;

		//�Z���N�^�ƃg�[�N������ۑ�����
		cached.selector = selector;
	}
	�L���b�V����Ԃ��܂��B
;

/ **
 * Sizzle�̃R���p�C���ς݌���œ��삷��჌�x���̑I���@�\
 *�Z���N�^�@�\
 * @param {String | Function} selector�Z���N�^�܂��̓v���R���p�C�����ꂽ����
 * Sizzle.compile�ō\�z���ꂽ�Z���N�^�@�\
 * @param {Element}�R���e�L�X�g
 * @param {Array} [����]
 * @param {Array} [seed]�ƍ�����v�f�̃Z�b�g
 * /
select = Sizzle.select = function�i�Z���N�^�A�R���e�L�X�g�A���ʁA�V�[�h�j{
	var i�A�g�[�N���A�g�[�N���A�^�C�v�A�����A
		compiler = typeof selector === "�֐�" && selector�A
		match =�Iseed && tokenize�i�iselector = compile.selector || selector�j�j;

	results = results || [];

	//���X�g�ɃZ���N�^��1�����Ȃ��A�V�[�h���Ȃ��ꍇ�́A������ŏ����ɗ}����悤�ɂ��Ă�������
	//�i��҂̓R���e�L�X�g��ۏ؂��܂��j
	if�imatch.length === 1�j{

		//�擪�̕����Z���N�^��ID�̏ꍇ�̓R���e�L�X�g�����炵�܂�
		tokens = match [0] = match [0] .slice�i0�j;
		if�itokens.length> 2 &&�itoken = tokens [0]�j�Btype === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative [tokens [1] .type]�j{

			context =�iExpr.find ["ID"]�itoken.matches [0] .replace�irunescape�Afunescape�j�Acontext�j|| []�j[0];
			if�i�Icontext�j{
				���ʂ�Ԃ��܂��B

			//�v���R���p�C�����ꂽ�}�b�`���[�͂܂��c������؂���̂Ń��x�����グ��
			����ȊO�̏ꍇ�i�R���p�C���ς݁j{
				context = context.parentNode;
			}

			selector = selector.slice�itokens.shift�i�j�Bvalue.length�j;
		}

		//�E���獶�ւ̃}�b�`���O�̂��߂ɃV�[�h�Z�b�g���擾����
		i = matchExpr ["needsContext"]�B�e�X�g�i�Z���N�^�j0�Ftokens.length�B
		while�ii--�j{
			token = tokens [i];

			//�R���r�l�[�^�ɂԂ������璆�~
			if�iExpr.relative [�itype = token.type�j]�j�j{
				�u���[�N;
			}
			if�i�ifind = Expr.find [type]�j�j�j{
				//�����A��v�ȌZ��R���r�l�[�^�̃R���e�L�X�g�̊g��
				if�i�iseed = find�i
					token.matches [0] .replace�irunescape�Afunescape�j�A
					rsibling.test�itokens [0] .type�j&& testContext�icontext.parentNode�j|| �R���e�L�X�g
				�j�j�j{

					//�V�[�h����ł��邩�g�[�N�����c���Ă��Ȃ��ꍇ�́A�����߂邱�Ƃ��ł��܂�
					tokens.splice�ii�A1�j;
					selector = seed.length && toSelector�i�g�[�N���j;
					if�i�Iselector�j{
						push.apply�i���ʁA�V�[�h�j;
						���ʂ�Ԃ��܂��B
					}

					�u���[�N;
				}
			}
		}
	}

	//�t�B���^�֐����񋟂���Ă��Ȃ��ꍇ�̓R���p�C�����Ď��s����
	//��L�̃Z���N�^�[��ύX�����ꍇ�ɍăg�[�N������������邽�߂� `match`��񋟂��܂�
	�i�R���p�C���ς�|| compile�iselector�Amatch�j�j�i
		�V�[�h�A
		�R���e�L�X�g�A
		�IdocumentIsHTML�A
		���ʁA
		�Icontext || rsibling.test�iselector�j&& testContext�icontext.parentNode�j|| �R���e�L�X�g
	;
	���ʂ�Ԃ��܂��B
;

//�����^�C�����蓖��

//�\�[�g�̈��萫
support.sortStable = expando.split�i ""�j�Bsort�isortOrder�j.join�i ""�j=== expando;

//�T�|�[�g�FChrome 14-35 +
//����炪��r�֐��ɓn����Ȃ��ꍇ�͏�ɏd���ƌ��Ȃ��܂�
support.detectDuplicates = !! hasDuplicate;

//�f�t�H���g�h�L�������g�ɑ΂��ď��������܂�
setDocument�i�j;

//�T�|�[�g�FWebkit <537.32  -  Safari 6.0.3 / Chrome 25�iChrome 27�ŏC���ς݁j
//�؂藣���ꂽ�m�[�h�͍�������*���݂��ɑ����܂�*
support.sortDetached = assert�i�֐��iel�j{
	// 1��Ԃ��K�v������܂����A4�i���j��Ԃ��܂�
	el.compareDocumentPosition�idocument.createElement�i "fieldset"�j�j��1;��Ԃ��܂��B
;�j�j;

//�T�|�[�g�FIE <8
//����/�v���p�e�B�� "���}"���֎~����
// https://msdn.microsoft.com/ja-jp/library/ms536429%28VS.85%29.aspx
if�i�Iassert�i�@�\�iel�j{
	el.innerHTML = "<a href='#'> </a>";
	el.firstChild.getAttribute�i "href"�j=== "��"��Ԃ��܂��B
�j�j�j{
	addHandle�i "type | href | height | width"�A�֐��ielem�Aname�AisXML�j{
		if�i�IisXML�j{
			elem.getAttribute�iname�Aname.toLowerCase�i�j=== "type"�H1�F2�j��Ԃ��܂��B
		}
	;�j�j;
}

//�T�|�[�g�FIE <9
// getAttribute�i "value"�j�̑����defaultValue���g�p����
if�i�Isupport.attributes ||�Iassert�i�֐��iel�j{
	el.innerHTML = "<input />";
	el.firstChild.setAttribute�i "value"�A ""�j;
	el.firstChild.getAttribute�i "value"�j=== ""��Ԃ��܂��B
�j�j�j{
	addHandle�i "value"�Afunction�ielem�Aname�AisXML�j{
		if�i�IisXML && elem.nodeName.toLowerCase�i�j=== "input"�j{
			elem.defaultValue��Ԃ��܂��B
		}
	;�j�j;
}

//�T�|�[�g�FIE <9
// getAttribute������ꍇ�́AgetAttributeNode���g�p���ău�[���l���擾���܂�
if�i�Iassert�i�@�\�iel�j{
	el.getAttribute�i "disabled"�j== null��Ԃ��܂��B
�j�j�j{
	addHandle�i�_���l�A�֐��ielem�A���O�AisXML�j{
		var val;
		if�i�IisXML�j{
			elem [name] === true��Ԃ��܂����Hname.toLowerCase�i�j�F
					�ival = elem.getAttributeNode�iname�j�j&& val.specified�H
					�l�F
				�k��;
		}
	;�j�j;
}

�V�Y����Ԃ��܂��B

}�j�i �� �j;



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

//�񐄏�
jQuery.expr ["�F"] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function�ielem�Adir�Auntil�j{
	var matched = []�A
		�؂�̂�= =�܂ŁI==����`�B

	while�i�ielem = elem [dir]�j&& elem.nodeType�I== 9�j{
		if�ielem.nodeType === 1�j{
			if�i&& jQuery�ielem�j.is�itrunc�j��؂�̂Ă�j{
				�u���[�N;
			}
			matched.push�ielem�j;
		}
	}
	��v�������̂�Ԃ��܂��B
;


var�Z��= function�in�Aelem�j{
	var matched = [];

	for�i; n; n = n.nextSibling�j{
		if�in.nodeType === 1 && n�I== elem�j{
			matched.push�in�j;
		}
	}

	��v�������̂�Ԃ��܂��B
;


var rneedsContext = jQuery.expr.match.needsContext;



�֐�nodeName�ielem�Aname�j{

  elem.nodeName && elem.nodeName.toLowerCase�i�j=== name.toLowerCase�i�j��Ԃ��܂��B

;
var rsingleTag =�i/ ^ <�i[az] [^ \ / \ 0>�F\ x20 \ t \ r \ n \ f] *�j[\ x20 \ t \ r \ n \ f] * \ /�H>�i �H�F<\ / \ 1> |�j$ / i�j;



// filter�Ɠ����@�\���������Ă��Ȃ�
�֐�winnow�i�v�f�A�C���q�Anot�j{
	if�iisFunction�i�C���q�j�j{
		jQuery.grep�ielements�Afunction�ielem�Ai�j{��Ԃ��܂��B
			return !! qualifier.call�ielem�Ai�Aelem�j�I==�����ł͂���܂���B
		;�j�j;
	}

	//�P��v�f
	if�iqualifier.nodeType�j{
		jQuery.grep�ielements�Afunction�ielem�j{��Ԃ�
			return�ielem === qualifier�j�I== not;
		;�j�j;
	}

	//�v�f�̕��сijQuery�Aarguments�AArray�j
	if�itypeof�C���q�I== "������"�j{
		jQuery.grep�ielements�Afunction�ielem�j{��Ԃ�
			return�iindexOf.call�iqualifier�Aelem�j> -1�j�I== not;
		;�j�j;
	}

	//�P���Z���N�^�[�ƕ��G�Z���N�^�[�̗����ɑ΂��Ē��ڃt�B���^�[����
	jQuery.filter�i�C���q�A�v�f�Anot�j��Ԃ��܂��B
}

jQuery.filter = function�iexpr�Aelems�Anot�j{
	var elem = elems [0];

	if�inot�j{
		expr = "�Fnot�i" + expr + "�j";
	}

	if�ielems.length === 1 && elem.nodeType === 1�j{
		jQuery.find.matchesSelector�ielem�Aexpr�j��Ԃ��܂����H[elem]�F[]�G
	}

	jQuery.find.matches�iexpr�AjQuery.grep�ielems�Afunction�ielem�j{
		elem.nodeType === 1��Ԃ��܂��B
	;�j�j;
;

jQuery.fn.extend�i{
	������Ffunction�iselector�j{
		var i�Aret�A
			len = this.length�A
			����=����B

		if�itypeof selector�I== "string"�j{
			this.pushStack�ijQuery�iselector�j.filter�ifunction�i�j{�j��Ԃ��܂��B
				for�ii = 0; i <len; i ++�j{
					if�ijQuery.contains�iself [i]�Athis�j�j{
						true��Ԃ��܂��B
					}
				}
			;�j�j;
		}

		ret = this.pushStack�i[]�j;

		for�ii = 0; i <len; i ++�j{
			jQuery.find�iselector�Aself [i]�Aret�j;
		}

		len> 1��Ԃ� jQuery.uniqueSort�iret�j�Fret;
	�A
	filter�Ffunction�iselector�j{
		this.pushStack�iwinnow�ithis�Aselector || []�Afalse�j�j��Ԃ��܂��B
	�A
	not�Ffunction�iselector�j{
		this.pushStack�iwinnow�ithis�Aselector || []�Atrue�j�j��Ԃ��܂��B
	�A
	�֐��i�Z���N�^�[�j{
		return !! winnow�i
			���́A

			//���ꂪ�ʒu/���΃Z���N�^�̏ꍇ�́A�Ԃ��ꂽ�Z�b�g�̃����o�V�b�v���m�F���܂�
			// so $�i "p�Ffirst"�j�Bis�i "p�Flast"�j�́A2�� "p"�����h�L�������g�ɑ΂��Ă�true��Ԃ��܂���B
			typeof selector === "string" && rneedsContext.test�iselector�j�H
				jQuery�i�Z���N�^�j�F
				�Z���N�^|| []�A
			�U
		����
	}
;�j�j;


// jQuery�I�u�W�F�N�g�����������܂�


//���[�gjQuery�idocument�j�ւ̒����Q��
var rootjQuery�A

	// HTML��������`�F�b�N����ȒP�ȕ��@
	// location.hash�ɂ��XSS��������邽�߂ɁA<tag>����#id��D�悳����i��9521�j
	//������HTML�F���i��11290�F<�Ŏn�܂��Ă��Ȃ���΂Ȃ�܂���j
	//�X�s�[�h���グ�邽�߂̊ȒP��#id�̃V���[�g�J�b�g
	rquickExpr = / ^�i�H�F\ s *�i<[\ w \ W] +>�j[^>] * |���i[\ w  - ] +�j�j$ /�A

	init = jQuery.fn.init = function�iselector�Acontext�Aroot�j{
		var match�Aelem�B

		// HANDLE�F$�i ""�j�A$�inull�j�A$�i����`�j�A$�ifalse�j
		if�i�Iselector�j{
			�����Ԃ��Ă��������B
		}

		//���\�b�hinit�i�j�͑��rootjQuery���󂯓����
		//�ڍs�����jQuery.sub���T�|�[�g�ł���悤�ɂȂ�܂��igh-2101�j
		root = root || rootjQuery;

		// HTML���������������
		if�itypeof selector === "string"�j{
			if�iselector [0] === "<" &&
				selector [selector.length  -  1] === ">" &&
				selector.length> = 3�j{

				// <>�Ŏn�܂��ďI��镶�����HTML�ł���Ɖ��肵�A���K�\���`�F�b�N���X�L�b�v���܂�
				match = [null�Aselector�Anull];

			���̑�{
				match = rquickExpr.exec�i�Z���N�^�j�B
			}

			// html�ƈ�v���邩�A��id�ɃR���e�L�X�g���w�肳��Ă��Ȃ����Ƃ��m�F���܂�
			if�imatch &&�imatch [1] ||�Icontext�j�j�j{

				//�n���h���F$�ihtml�j - > $�i�z��j
				if�i[1]�Ɉ�v�j{
					context =�R���e�L�X�g��jQuery�̃C���X�^���X�Hcontext [0]�F�R���e�L�X�g

					//�X�N���v�g�����s����I�v�V�����̓o�b�N�R���p�b�g�ɂ����Ă͂܂�܂�
					// parseHTML�����݂��Ȃ��ꍇ�͈Ӑ}�I�ɃG���[���X���[������
					jQuery.merge�i����AjQuery.parseHTML�i
						[1]�ƈ�v
						context && context.nodeType�Hcontext.ownerDocument || �R���e�L�X�g�F�����A
						�{����
					;�j;

					//�n���h���F$�ihtml�A������j
					if�irsingleTag.test�imatch [1]�j&& jQuery.isPlainObject�icontext�j�j{
						for�i�R���e�L�X�g���ň�v�j{

							//�\�ł���΃R���e�L�X�g�̃v���p�e�B�̓��\�b�h�Ƃ��ČĂяo����܂�
							if�iisFunction�ithis [match]�j�j{
								this [match]�icontext [match]�j;

							// ...���̑��̏ꍇ�͑����Ƃ��Đݒ�
							���̑�{
								this.attr�imatch�Acontext [match]�j;
							}
						}
					}

					�����Ԃ��Ă��������B

				//�n���h���F$�i��id�j
				���̑�{
					elem = document.getElementById�imatch [2]�j;

					if�ielem�j{

						//�v�f�𒼐�jQuery�I�u�W�F�N�g�ɑ}�����܂�
						this [0] = elem;
						this.length = 1;
					}
					�����Ԃ��Ă��������B
				}

			//�n���h���F$�iexpr�A$�i...�j�j
			�����łȂ���΁i�Icontext || context.jquery�j{
				return�icontext || root�j.find�iselector�j;

			// HANDLE�F$�iexpr�Acontext�j
			//�i�����$�icontext�j.find�iexpr�j�Ɠ����ł��B
			���̑�{
				this.constructor�icontext�j.find�iselector�j��Ԃ��܂��B
			}

		//�n���h���F$�iDOMElement�j
		�����łȂ���΁iselector.nodeType�j{
			this [0] =�Z���N�^�B
			this.length = 1;
			�����Ԃ��Ă��������B

		// HANDLE�F$�i�t�@���N�V�����j
		//���������̃V���[�g�J�b�g
		�����łȂ���΁iisFunction�iselector�j�j{
			return root.ready�I==����`�H
				root.ready�i�Z���N�^�j�F

				// ready���Ȃ��ꍇ�͂����Ɏ��s
				�Z���N�^�ijQuery�j�B
		}

		jQuery.makeArray�iselector�Athis�j��Ԃ��܂��B
	;

//��ŃC���X�^���X�����邽�߂�init�֐���jQuery�v���g�^�C�v���w�肵�܂�
init.prototype = jQuery.fn;

//�����Q�Ƃ�����������
rootjQuery = jQuery�idocument�j;


var rparentsprev = / ^�i�H�F���e|�O�ցi�H�FUntil | All�j�j/�A

	//��ӂ̏W������J�n����Ƃ��Ɉ�ӂ̏W���𐶐����邱�Ƃ��ۏ؂���Ă��郁�\�b�h
	aranteedUnique = {
		�q�������F�{���A
		���e�F�^�A
		���̋L���F�^
		�O�̒P��Ftrue
	;

jQuery.fn.extend�i{
	�����Ă���Ffunction�itarget�j{
		var targets = jQuery�itarget�Athis�j�A
			l = targets.length;

		this.filter�ifunction�i�j{��Ԃ��Ă��������B
			var i = 0;
			for�i; i <l; i ++�j{
				if�ijQuery.contains�ithis�Atargets [i]�j�j{
					true��Ԃ��܂��B
				}
			}
		;�j�j;
	�A

	�ł��߂��F�֐��i�Z���N�^�[�A�R���e�L�X�g�j{
		var cur�A
			i = 0�A
			l = this.length�A
			matched = []�A
			targets = typeof selectors�I== "string" && jQuery�i�Z���N�^�j;

		//�|�W�V�����Z���N�^�[�͌����ă}�b�`���܂���A�Ȃ��Ȃ�_selection_�R���e�L�X�g���Ȃ�����ł�
		if�i�IrneedsContext.test�i�Z���N�^�j�j{
			for�i; i <l; i ++�j{
				for�icur = this [i]; cur && cur�I==�R���e�L�X�g; cur = cur.parentNode�j{

					//��Ƀh�L�������g�̒f�Ђ��X�L�b�v����
					if�icur.nodeType <11 &&�i�^�[�Q�b�g�H
						targets.index�icur�j> -1�F

						//��v�f��Sizzle�ɓn���Ȃ�
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector�icur�Aselector�j�j�j{

						matched.push�icur�j;
						�u���[�N;
					}
				}
			}
		}

		this.pushStack�imatched.length> 1�HjQuery.uniqueSort�imatched�j�F��v�j��Ԃ��܂��B
	�A

	//�Z�b�g���̗v�f�̈ʒu�����肵�܂�
	index�F�֐��i�v�f�j{

		//�����Ȃ��A�e�ɃC���f�b�N�X��Ԃ�
		if�i�Ielem�j{
			return�ithis [0] && this [0] .parentNode�j�Hthis.first�i�j�BprevAll�i�j�Blength�F-1;
		}

		//�Z���N�^�̃C���f�b�N�X
		if�itypeof elem === "string"�j{
			indexOf.call�ijQuery�ielem�j�Athis [0]�j��Ԃ��܂��B
		}

		//�ړI�̗v�f�̈ʒu����肷��
		indexOf.call�i����A

			// jQuery�I�u�W�F�N�g���󂯎��ƁA�ŏ��̗v�f���g���܂�
			elem.jquery�Helem [0]�Felem
		;
	�A

	�ǉ��Ffunction�iselector�Acontext�j{
		this.pushStack�i
			jQuery.uniqueSort�i
				jQuery.merge�ithis.get�i�j�AjQuery�iselector�Acontext�j�j
			�j
		;
	�A

	addBack�Ffunction�iselector�j{
		this.add��Ԃ��܂��iselector == null�H
			this.prevObject�Fthis.prevObject.filter�i�Z���N�^�j
		;
	}
;�j�j;

�֐��Z��icur�Adir�j{
	while�i�icur = cur [dir]�j&& cur.nodeType�I== 1�j{}
	cur��Ԃ��܂��B
}

jQuery.each�i{
	�e�Ffunction�ielem�j{
		var parent = elem.parentNode;
		&& parent.nodeType�I== 11�H��Ԃ��܂��B�e�Fnull
	�A
	�e�F�֐��i�G�����j{
		dir�ielem�A "parentNode"�j��Ԃ��܂��B
	�A
	���e�܂ŁFfunction�ielem�Ai�Auntil�j{
		dir�ielem�A "parentNode"�Auntil�j��Ԃ��܂��B
	�A
	next�Ffunction�ielem�j{
		�Z���Ԃ��܂��ielem�A "nextSibling"�j�B
	�A
	�O�̒P��Ffunction�ielem�j{
		�Z���Ԃ��܂��ielem�A "previousSibling"�j�B
	�A
	nextAll�Ffunction�ielem�j{
		dir�ielem�A "nextSibling"�j��Ԃ��܂��B
	�A
	prevAll�Ffunction�ielem�j{
		dir�ielem�A "previousSibling"�j��Ԃ��܂��B
	�A
	nextUntil�Ffunction�ielem�Ai�Auntil�j{
		dir�ielem�A "nextSibling"�A�܂Łj��Ԃ��܂��B
	�A
	prevUntil�Ffunction�ielem�Ai�Auntil�j{
		dir�ielem�A "previousSibling"�܂Łj��Ԃ��܂��B
	�A
	�Z��o���Ffunction�ielem�j{
		�Z���Ԃ��܂��i�ielem.parentNode || {}�j.firstChild�Aelem�j�B
	�A
	�q�������Ffunction�ielem�j{
		�Z���Ԃ��܂��ielem.firstChild�j�B
	�A
	���e�Ffunction�ielem�j{
        if�inodeName�ielem�A "iframe"�j�j{
            elem.contentDocument��Ԃ��܂��B
        }

        //�T�|�[�g�FIE 9  -  11�̂݁AiOS 7�̂݁AAndroid�u���E�U<= 4.3�̂�
        //�u���E�U�Ńe���v���[�g�v�f��ʏ�̂��̂Ƃ��Ĉ���
        //�T�|�[�g���Ȃ�
        if�inodeName�ielem�A "template"�j�j{
            elem = elem.content || elem;
        }

        jQuery.merge�i[]�Aelem.childNodes�j��Ԃ��܂��B
	}
function�iname�Afn�j{}
	jQuery.fn [name] = function�i�܂ŁA�Z���N�^�j{
		var matched = jQuery.map�ithis�Afn�Auntil�j;

		if�iname.slice�i-5�j�I== "Until"�j{
			�Z���N�^=�܂ŁB
		}

		if�iselector && typeof selector === "string"�j{
			matched = jQuery.filter�iselector�Amatched�j;
		}

		if�ithis.length> 1�j{

			//�d�����폜����
			if�i!aranteedUnique [name]�j{
				jQuery.uniqueSort�i��v�j;
			}

			//�e*�ƑO�̔h�����̋t��
			if�irparentsprev.test�iname�j�j{
				matched.reverse�i�j;
			}
		}

		this.pushStack�i��v�j��Ԃ��܂��B
	;
;�j�j;
var rnothtmlwhite =�i/ [^ \ x20 \ t \ r \ n \ f] + / g�j;



//������`���̃I�v�V�������I�u�W�F�N�g�`���̃I�v�V�����ɕϊ�����
�֐�createOptions�i�I�v�V�����j{
	var object = {};
	jQuery.each�ioptions.match�irnothtmlwhite�j|| []�Afunction�i_�Aflag�j{
		object [flag] = true;
	;�j�j;
	�I�u�W�F�N�g��Ԃ��܂��B
}

/ *
 *�ȉ��̃p�����[�^���g�p���ăR�[���o�b�N���X�g���쐬���Ă��������B
 *
 * options�F���@��ς���X�y�[�X�ŋ�؂�ꂽ�I�v�V�����̃I�v�V�����̃��X�g
 *�R�[���o�b�N���X�g���U�镑�����A���`���I�ȃI�v�V�����I�u�W�F�N�g
 *
 *�f�t�H���g�ł́A�R�[���o�b�N���X�g�̓C�x���g�R�[���o�b�N���X�g�̂悤�ɐU�镑���܂��B
 *������u���΁v�����B
 *
 *�\�ȃI�v�V�����F
 *
 * once�F�R�[���o�b�N���X�g����x�����N������邱�Ƃ�ۏ؂��܂��iDeferred�̂悤�Ɂj
 *
 * memory�F�ȑO�̒l��ǐՂ��A�ǉ����ꂽ�R�[���o�b�N���Ăяo���܂�
 *���X�g���ŐV�́u�L�����ꂽ�v�Ƃ����ɔ��˂��ꂽ��
 *�l�iDeferred�̂悤�Ɂj
 *
 * unique�F�R�[���o�b�N����x�����ǉ��ł���悤�ɂ��܂��i���X�g�ɏd�����Ȃ��悤�ɂ��܂��j�B
 *
 * stopOnFalse�F�R�[���o�b�N��false��Ԃ����Ƃ��ɌĂяo���𒆒f����
 *
 * /
jQuery.Callbacks = function�i�I�v�V�����j{

	//�K�v�ɉ����āA������`������I�u�W�F�N�g�`���ɃI�v�V������ϊ�����
	//�i�ŏ��ɃL���b�V�����`�F�b�N�C�����܂��j
	options = typeof options === "������"�H
		createOptions�i�I�v�V�����j�F
		jQuery.extend�i{}�Aoptions�j;

	var //���X�g�����݋N�������ǂ�����m�邽�߂̃t���O
		���C

		//�Y����Ȃ����X�g�̂��߂̃��X�g�t�@�C�A�l
		�L���A

		//���X�g�����ɋN������Ă��邩�ǂ�����m�邽�߂̃t���O
		���فA

		//���C��h�����߂̃t���O
		���b�N����Ă��܂�

		//���ۂ̃R�[���o�b�N���X�g
		list = []�A

		//�J��Ԃ��\���X�g�̎��s�f�[�^�̃L���[
		�L���[= []�A

		//���݋N�����Ă���R�[���o�b�N�̃C���f�b�N�X�i�K�v�ɉ����Ēǉ�/�폜�ɂ���ĕύX����܂��j
		fireIndex = -1�A

		//�R�[���o�b�N
		fire = function�i�j{

			//�V���O���t�@�C�A�����{
			locked = locked || options.once;

			//�ۗ����̂��ׂĂ̎��s�ɑ΂��ăR�[���o�b�N�����s���܂�
			// burningIndex�̃I�[�o�[���C�h�Ǝ��s���̕ύX�𑸏d����
			fired = fire = true;
			for�i; queue.length; burningIndex = -1�j{
				memory = queue.shift�i�j;
				while�i++ fireIndex <list.length�j{

					//�R�[���o�b�N�����s���đ����I�����m�F���܂�
					if�ilist [fireIndex] .apply�imemory [0]�Amemory [1]�j=== false &&
						options.stopOnFalse�j{

						//�Ō�Ɉړ����ăf�[�^��Y���ƁA.add�͍Ď��s����܂���
						fireIndex = list.length;
						������=�U�B
					}
				}
			}

			//�f�[�^���I�������f�[�^��Y��܂�
			if�i�Ioptions.memory�j{
				������=�U�B
			}

			���C= false�B

			//����ɏI��������N���[���A�b�v����
			if�ilock�j{

				//�����̒ǉ��Ăяo���p�̃f�[�^������ꍇ�͋�̃��X�g��ێ�����
				if�i�������j{
					list = [];

				//�����łȂ���΁A���̃I�u�W�F�N�g�͎g���܂�
				���̑�{
					list = "";
				}
			}
		�A

		//���ۂ̃R�[���o�b�N�I�u�W�F�N�g
		self = {

			//�R�[���o�b�N�܂��̓R�[���o�b�N�̃R���N�V���������X�g�ɒǉ����܂�
			�ǉ��Ffunction�i�j{
				if�ilist�j{

					//�ߋ��̎��s����̃�����������ꍇ�́A�ǉ�������ɋN������K�v������܂��B
					if�imemory &&�I���ˁj{
						fireIndex = list.length  -  1;
						queue.push�i�������j;
					}

					�ifunction add�iargs�j{
						jQuery.each�iargs�Afunction�i_�Aarg�j{
							if�iisFunction�iarg�j�j{
								if�i�Ioptions.unique ||�Iself.has�iarg�j�j{
									list.push�iarg�j;
								}
							�����łȂ���΁iarg && arg.length && toType�iarg�j�I== "string"�j{

								//�ċA�I�Ɍ�������
								�ǉ��iarg�j;
							}
						;�j�j;
					�i�����j;

					if�imemory &&�I���ˁj{
						�΍Ёi�j;
					}
				}
				�����Ԃ��Ă��������B
			�A

			//���X�g����R�[���o�b�N���폜����
			�폜����Ffunction�i�j{
				jQuery.each�i�����A�֐��i_�A�����j{
					var index;
					while�i�iindex = jQuery.inArray�iarg�Alist�Aindex�j�j> -1�j{
						list.splice�iindex�A1�j;

						//�N���C���f�b�N�X����������
						if�iindex <= fireIndex�j{
							fireIndex--;
						}
					}
				;�j�j;
				�����Ԃ��Ă��������B
			�A

			//����̃R�[���o�b�N�����X�g�ɂ��邩�ǂ������m�F���܂��B
			//�������^�����Ă��Ȃ��ꍇ�́Alist���R�[���o�b�N���A�^�b�`���Ă��邩�ǂ�����Ԃ��܂��B
			�����Ă���Ffunction�ifn�j{
				fn��Ԃ�
					jQuery.inArray�ifn�Alist�j> -1�F
					list.length> 0�B
			�A

			//���X�g���炷�ׂẴR�[���o�b�N���폜����
			��Ffunction�i�j{
				if�ilist�j{
					list = [];
				}
				�����Ԃ��Ă��������B
			�A

			// .fire��.add�𖳌��ɂ���
			//���݂܂��͕ۗ����̎��s�𒆎~����
			//���ׂẴR�[���o�b�N�ƒl���������܂�
			�����ɂ���Ffunction�i�j{
				locked = queue = [];
				list = memory = "";
				�����Ԃ��Ă��������B
			�A
			�����Ffunction�i�j{
				���X�g��Ԃ��܂��B
			�A

			// .fire�𖳌��ɂ���
			//���������Ȃ�����A.add�������ɂ��܂��i���ʂ��Ȃ����߁j�B
			//�ۗ����̎��s�𒆎~����
			lock�Ffunction�i�j{
				locked = queue = [];
				if�i�Imemory &&�Ifire�j{
					list = memory = "";
				}
				�����Ԃ��Ă��������B
			�A
			���b�N����Ă��܂��Ffunction�i�j{
				�߂�!!���b�N����Ă��܂��B
			�A

			//�^����ꂽ�R���e�L�X�g�ƈ����ł��ׂẴR�[���o�b�N���Ăяo��
			fireWith�Ffunction�icontext�Aargs�j{
				if�i�Ilocked�j{
					args = args || [];
					args = [context�Aargs.slice�Hargs.slice�i�j�Fargs];
					queue.push�iargs�j;
					if�i�I���ˁj{
						�΍Ёi�j;
					}
				}
				�����Ԃ��Ă��������B
			�A

			//�^����ꂽ�����ł��ׂẴR�[���o�b�N���Ăяo��
			fire�Ffunction�i�j{
				self.fireWith�ithis�Aarguments�j;
				�����Ԃ��Ă��������B
			�A

			//�R�[���o�b�N�����łɏ��Ȃ��Ƃ�1��Ăяo����Ă��邩�ǂ�����m��
			���΂��܂����Ffunction�i�j{
				�߂�!!���فB
			}
		;

	���Ȃ�Ԃ��܂��B
;


�֐��A�C�f���e�B�e�B�[�iv�j{
	v��Ԃ��B
}
�@�\�X���[�iex�j{
	���𓊂��܂��B
}

�֐�adoptValue�i�l�A�����A���ہAnoValue�j{
	var���\�b�h

	�����Ă�������{

		//�ŏ��ɖ񑩂̃A�X�y�N�g����������̐U�镑���Ƀ`�F�b�N����
		if�ivalue && isFunction�i�imethod = value.promise�j�j�j{
			method.call�ivalue�j.done�i�����j.fail�i���ہj;

		//���̑��̎蓖
		�����łȂ���΁ivalue && isFunction�i�imethod = value.then�j�j�j{
			method.call�ivalue�Aresolve�Areject�j;

		//���̑���nontable
		���̑�{

			// Array��slice�Ƀu�[���l�� `noValue`�𐮐��ɃL���X�g������` resolve`�����𐧌䂷��
			// * false�F[�l] .slice�i0�j=> resolve�i�l�j
			// * true�F[�l] .slice�i1�j=> resolve�i�j
			resolve.apply�i����`�A[�l] .slice�inoValue�j�j;
		}

	// Promises / A +�̏ꍇ�A��O���p���ɕϊ����܂�
	// jQuery.when�̓e�[�u���̓W�J���������Ȃ��̂ŁA�Ŏ�����Ă���]���ȃ`�F�b�N���X�L�b�v���邱�Ƃ��ł��܂��B
	//�����t���ŋ��ۂ�}�����邽�߂Ɂ����������܂��B
	�L���b�`�i�l�j{

		//�T�|�[�g�FAndroid 4.0�̂�
		// .call / .apply�Ȃ��ŌĂяo���ꂽ�������[�h�֐��̓O���[�o���I�u�W�F�N�g�R���e�L�X�g���擾����
		reject.apply�i����`�A[�l]�j;
	}
}

jQuery.extend�i{

	�����F�֐��ifunc�j{
		var tuples = [

				//�A�N�V�����A���X�i�[�ǉ��A�R�[���o�b�N
				// ... .the�n���h���A�����C���f�b�N�X�A[�ŏI���]
				["notify"�A "progress"�AjQuery.Callbacks�i "memory"�j�A
					jQuery.Callbacks�i "memory"�j�A2]�A
				["resolve"�A "done"�AjQuery.Callbacks�i "once memory"�j�A
					jQuery.Callbacks�i "������1��"�j�A0�A "�������ꂽ"]�A
				["����"�A "���s"�AjQuery.Callbacks�i "������1��"�j�A
					jQuery.Callbacks�i "once once"�j�A1�A "rejected"]
			]�A
			state = "pending"�A
			��= {
				state�Ffunction�i�j{
					��Ԃ�Ԃ��B
				�A
				��ɁFfunction�i�j{
					deferred.done�i�����j.fail�i�����j;
					�����Ԃ��Ă��������B
				�A
				"�L���b�`"�F�֐��ifn�j��
					promise.then�inull�Afn�j��Ԃ��܂��B
				�A

				//�o�b�N�R���p�b�g�p�̃p�C�v��ۊǂ���
				�p�C�v�F�֐��i/ * fnDone�AfnFail�AfnProgress * /�j{
					var fns = arguments;

					jQuery.Deferred�ifunction�inewDefer�j{��Ԃ�
						jQuery.each�i�^�v���A�֐��ii�A�^�v���j{

							//�^�v���iprogress�Adone�Afail�j�������idone�Afail�Aprogress�j�Ƀ}�b�s���O���܂�
							var fn = isFunction�ifns [tuple [4]]�j&& fns [tuple [4]];

							// deferred.progress�ifunction�i�j{newDefer�܂���newDefer.notify�Ƀo�C���h�j�j
							// deferred.done�ifunction�i�j{newDefer�܂���newDefer.resolve�Ƀo�C���h�j�j
							// deferred.fail�ifunction�i�j{newDefer�܂���newDefer.reject}�Ƀo�C���h�j
							����[�^�v��[1]]�ifunction�i�j{
								var�߂�l= fn && fn.apply�ithis�Aarguments�j;
								if�i�Ԃ����&& isFunction�ireturns.promise�j�j{
									returns.promise�i�j
										.progress�inewDefer.notify�j
										.done�inewDefer.resolve�j
										.fail�inewDefer.reject�j;
								���̑�{
									newDefer [tuple [0] + "With"]�i
										���́A
										fn�H[�Ԃ����]�F����
									;
								}
							;�j�j;
						;�j�j;
						fns = null�B
					} �j�B�񑩂���i�j;
				�A
				���ꂩ��Ffunction�ionFulfilled�AonRejected�AonProgress�j{
					var maxDepth = 0;
					�֐�resolve�idepth�Adeferred�Ahandler�Aspecial�j{
						return function�i�j{
							var that = this�A
								args = arguments�A
								mightThrow = function�i�j{
									���̌�var���Ԃ���܂��B

									//�T�|�[�g�FPromises / A +�Z�N�V����2.3.3.3.3
									// https://promisesaplus.com/#point-59
									//��d�����̎��݂𖳎�����
									if�idepth <maxDepth�j{
										�߂�
									}

									�߂�l= handler.apply�ithat�Aargs�j;

									//�T�|�[�g�FPromise / A +�Z�N�V����2.3.1
									// https://promisesaplus.com/#point-48
									if�i�߂�l=== deferred.promise�i�j�j{
										�V����TypeError�i "Thenable self-resolution"�j���X���[���܂��B
									}

									//�T�|�[�g�FPromises / A +�Z�N�V����2.3.3.1�A3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// `then`����x�������o��
									then =���Ԃ��ꂽ&&

										//�T�|�[�g�FPromises / A +�Z�N�V����2.3.4
										// https://promisesaplus.com/#point-64
										//�I�u�W�F�N�g�Ɗ֐������������\���ǂ������`�F�b�N����
										�itypeof���Ԃ���܂���=== "object" ||
											typeof���Ԃ���܂���=== "�֐�"�j&&
										�Ԃ����B

									//�ԋp���ꂽ�����D����������
									if�iisFunction�ithen�j�j{

										//���ʂȃv���Z�b�T�i�ʒm�j�͉�����҂���
										if�i���ʁj{
											then.call�i
												�߂��Ă����A
												�����imaxDepth�A�����AID�A����j�A
												�����imaxDepth�Adeferred�AThrower�Aspecial�j
											;

										//�ʏ�̃v���Z�b�T�i�����j���i�s���ł�
										���̑�{

											// ...�����ČÂ��𑜓x�l�𖳎����܂�
											maxDepth ++;

											then.call�i
												�߂��Ă����A
												�����imaxDepth�A�����AID�A����j�A
												�����imaxDepth�A�����A�����A���ʁj�A
												resolve�imaxDepth�Adeferred�AIdentity�A
													deferred.notifyWith�j
											;
										}

									//���̂��ׂĂ̖߂�l����������
									���̑�{

										//��փn���h���݂̂��R���e�L�X�g��n���܂�
										//�����̒l�i�d�l�O�̓���j
										if�ihandler�I== Identity�j{
											that =����`
											args = [�Ԃ����];
										}

										//�l���������܂�
										//�f�t�H���g�̃v���Z�X�͉�������܂���
										�ispecial || deferred.resolveWith�j�ithat�Aargs�j;
									}
								�A

								//�ʏ�̃v���Z�b�T�݂̂��i�����j��O���L���b�`���ċ��ۂ��܂�
								�v���Z�X=���ʁH
									mightThrow�F
									�֐��i�j {
										�����Ă�������{
											mightThrow�i�j;
										catch�ie�j{

											if�ijQuery.Deferred.exceptionHook�j{
												jQuery.Deferred.exceptionHook�ie�A
													process.stackTrace�j;
											}

											//�T�|�[�g�FPromises / A +�Z�N�V����2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											//������̗�O�𖳎����܂�
											if�idepth + 1> = maxDepth�j{

												//��փn���h���݂̂��R���e�L�X�g��n���܂�
												//�����̒l�i�d�l�O�̓���j
												if�ihandler�I== Thrower�j{
													that =����`
													args = [e];
												}

												deferred.rejectWith�ithat�Aargs�j;
											}
										}
									;

							//�T�|�[�g�FPromises / A +�Z�N�V����2.3.3.3.1
							// https://promisesaplus.com/#point-57
							//�񑩂������ɍĉ������Ă���̌�������ۂ�����܂�
							//���̌�̃G���[
							if�idepth�j{
								�v���Z�X�i�j;
							���̑�{

								//��O�̏ꍇ�A�X�^�b�N���L�^���邽�߂ɃI�v�V�����̃t�b�N���Ăяo��
								//���s���񓯊��ɂȂ�ƕʂ̕��@�Ŏ����邽��
								if�ijQuery.Deferred.getStackHook�j{
									process.stackTrace = jQuery.Deferred.getStackHook�i�j;
								}
								window.setTimeout�iprocess�j;
							}
						;
					}

					jQuery.Deferred�ifunction�inewDefer�j{��Ԃ�

						// progress_handlers.add�i...�j
						�^�v��[0] [3] .add�i
							��������i
								0�A
								newDefer�A
								isFunction�ionProgress�j�H
									onProgress�F
									�g���A
								newDefer.notifyWith
							�j
						;

						//ulfilled_handlers.add�i...�j
						�^�v��[1] [3] .add�i
							��������i
								0�A
								newDefer�A
								isFunction�ionFulfilled�j
									onFulfilled�F
									�g��
							�j
						;

						// rejected_handlers.add�i...�j
						�^�v��[2] [3] .add�i
							��������i
								0�A
								newDefer�A
								isFunction�ionRejected�j
									onRejected�F
									������l
							�j
						;
					} �j�B�񑩂���i�j;
				�A

				//���̉����ɂ��Ă̖񑩂𓾂�
				// obj���w�肳��Ă���ꍇ�́Apromise�A�X�y�N�g���I�u�W�F�N�g�ɒǉ�����܂�
				�񑩁Ffunction�iobj�j{
					obj�I= null��Ԃ��܂����HjQuery.extend�iobj�Apromise�j�F�񑩁B
				}
			�A
			����= {};

		//���X�g�ŗL�̃��\�b�h��ǉ�����
		jQuery.each�i�^�v���A�֐��ii�A�^�v���j{
			var list = tuple [2]�A
				stateString =�^�v��[5];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise [tuple [1]] = list.add;

			//�n���h�����
			if�istateString�j{
				list.add�i
					�֐��i�j {

						// state = "�������ꂽ"�i���Ȃ킿�������ꂽ�j
						// state = "rejected"
						state = stateString;
					�A

					// rejected_callbacks.disable
					// satisfiedilled_callbacks.disable
					�^�v��[3  -  i] [2] .disable�A

					// rejected_handlers.disable
					//ulfilled_handlers.disable
					�^�v��[3  -  i] [3] .disable�A

					// progress_callbacks.lock
					�^�v��[0] [2] .lock�A

					// progress_handlers.lock
					�^�v��[0] [3] .lock
				;
			}

			// progress_handlers.fire
			// satisfiedilled_handlers.fire
			// rejected_handlers.fire
			list.add�ituple [3] .fire�j;

			// deferred.notify = function�i�j{deferred.notifyWith�i...�j}
			// deferred.resolve = function�i�j{deferred.resolveWith�i...�j}
			// deferred.reject = function�i�j{deferred.rejectWith�i...�j}
			����[tuple [0]] = function�i�j{
				deferred [tuple [0] + "With"]�ithis === deferred�Hundefined�Fthis�Aarguments�j;
				�����Ԃ��Ă��������B
			;

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred [tuple [0] + "With"] = list.fireWith;
		;�j�j;

		//������񑩂ɂ���
		promise.promise�i�����j;

		//��������Η^����ꂽfunc���Ăяo��
		if�ifunc�j{
			func.call�i�����A�����j�B
		}

		// �S���ł����I
		�������ꂽ�ԕi
	�A

	//�x���w���p�[
	�Ƃ��Ffunction�isingleValue�j{
		var

			//�������̕����̐�
			�c��= arguments.length�A

			//�������̈����̐�
			i =�c��A

			//���ʃt���t�B�������g�f�[�^
			resolveContexts = Array�ii�j�A
			resolveValues = slice.call�i�����j�A

			//�}�X�^�[Deferred
			master = jQuery.Deferred�i�j�A

			//���ʂ̃R�[���o�b�N�t�@�N�g��
			updateFunc = function�ii�j{
				�߂�֐��i�l�j{
					resolveContexts [i] = this;
					resolveValues [i] = arguments.length> 1�Hslice.call�i�����j�F�l�B
					if�i�I�i - �c��j�j{
						master.resolveWith�iresolveContexts�AresolveValues�j;
					}
				;
			;

		// Promise.resolve�̂悤�ɒP������Ƌ�̈������̗p����Ă��܂�
		if�i�c��<= 1�j{
			adaptValue�isingleValue�Amaster.done�iupdateFunc�ii�j�j.resolve�Amaster.reject�A
				�I�c��j;

			//�񎟃e�[�u����W�J���邽�߂�.then�i�j���g�p����igh-3000���Q�Ɓj
			if�imaster.state�i�j=== "pending" ||
				isFunction�iresolveValues [i] && resolveValues [i] .then�j�j�j{

				master.then�i�j��Ԃ��܂��B
			}
		}

		//�����̈�����Promise.all�z��v�f�̂悤�ɏW�񂳂�Ă��܂�
		while�ii--�j{
			adoptValue�iresolveValues [i]�AupdateFunc�ii�j�Amaster.reject�j;
		}

		master.promise�i�j��Ԃ��܂��B
	}
;�j�j;


//�����͒ʏ�A�J�����̃v���O���}�[�̊ԈႢ�������܂��B
//�f�t�H���g�ň��ݍ��ނ̂ł͂Ȃ��A�ł��邾�������x�����܂��B
var rerrorNames = / ^�iEval |����|�͈�|�Q��|�\��|�^�C�v| URI�j�G���[$ /;

jQuery.Deferred.exceptionHook = function�i�G���[�A�X�^�b�N�j{

	//�T�|�[�g�FIE 8  -  9�̂�
	//�J���c�[�����J���Ă���Ƃ��ɃR���\�[�������݂���B����͂��ł���������\��������
	if�iwindow.console && window.console.warn && error && rerrorNames.test�ierror.name�j�j{
		window.console.warn�i "jQuery.Deferred��O�F" + error.message�Aerror.stack�Astack�j;
	}
;




jQuery.readyException = function�ierror�j{
	window.setTimeout�ifunction�i�j{
		�G���[���X���[���܂��B
	;�j�j;
;




// DOM���������̒x�����g�p���܂�
var readyList = jQuery.Deferred�i�j;

jQuery.fn.ready = function�ifn�j{

	readyList
		.then�ifn�j

		// jQuery.readyException���֐��Ń��b�v���ă��b�N�A�b�v����
		//�R�[���o�b�N�ł͂Ȃ��G���[�������ɔ������܂�
		//�o�^
		.catch�i�֐��i�G���[�j{
			jQuery.readyException�i�G���[�j�B
		;�j�j;

	�����Ԃ��Ă��������B
;

jQuery.extend�i{

	// DOM�͎g�p�\�� ����������true�ɐݒ肵�܂��B
	isReady�Ffalse�A

	//���̃A�C�e����҂���ǐՂ��邽�߂̃J�E���^
	// ready�C�x���g���������܂��B��6781���Q��
	readyWait�F1�A

	// DOM�̏������ł����珈������
	�������ł��āF�@�\�i�҂j{

		//�ۗ����ۗ̕������邩�A���łɏ������ł��Ă���ꍇ�͒��~���܂�
		if�iwait === true�H--jQuery.readyWait�FjQuery.isReady�j{
			�߂�
		}

		// DOM�̏������ł��Ă��邱�Ƃ�Y��Ȃ��ł�������
		jQuery.isReady = true;

		//�ʏ��DOM Ready�C�x���g�����������ꍇ�́A�f�N�������g���A�K�v�ɉ����đҋ@���܂��B
		if�iwait�I== true && --jQuery.readyWait> 0�j{
			�߂�
		}

		//�o�C���h����Ă���֐�������ꍇ�A���s����
		readyList.resolveWith�idocument�A[jQuery]�j;
	}
;�j�j;

jQuery.ready.then = readyList.then;

// ready�C�x���g�n���h���ƃZ���t�N���[���A�b�v���\�b�h
�@�\�����i�j{
	document.removeEventListener�i "DOMContentLoaded"�A�����j;
	window.removeEventListener�i "load"�Acompleted�j;
	jQuery.ready�i�j;
}

// $�idocument�j.ready�i�j���Ăяo�����P�[�X���L���b�`
//�u���E�U�C�x���g������������
//�T�|�[�g�FIE <= 9  -  10�̂�
//�Â�IE�́u�Θb�^�v�ƒʒm���邱�Ƃ�����܂�
if�idocument.readyState === "complete" ||
	�idocument.readyState�I== "loading" &&�Idocument.documentElement.doScroll�j�j{

	//�X�N���v�g�ɏ�����x�点��@���^���邽�߂ɔ񓯊��ɏ�������
	window.setTimeout�ijQuery.ready�j;

���̑�{

	//�֗��ȃC�x���g�R�[���o�b�N���g��
	document.addEventListener�i "DOMContentLoaded"�A�����j;

	// window.onload�ւ̃t�H�[���o�b�N�B����͏�ɋ@�\���܂�
	window.addEventListener�i "load"�Acompleted�j;
}




//�R���N�V�����̒l���擾����ѐݒ肷�邽�߂̑��@�\���\�b�h
//�l�ł���΁A/ s�̓I�v�V�����Ŏ��s�ł��܂�
var access = function�ielems�Afn�Akey�Avalue�Achainable�AemptyGet�Araw�j{
	var i = 0�A
		len = elems.length�A
		bulk = key == null�B

	//�����̒l��ݒ肵�܂�
	if�itoType�ikey�j=== "�I�u�W�F�N�g"�j{
		chainable = true;
		for�ii in key�j{
			�A�N�Z�X�ielems�Afn�Ai�Akey [i]�Atrue�AemptyGet�Araw�j;
		}

	//�l��1�ݒ肵�܂�
	�����łȂ���΁ivalue�I==����`�j{
		chainable = true;

		if�i�IisFunction�ivalue�j�j{
			raw = true�ł��B
		}

		if�ibulk�j{

			//�ꊇ����̓Z�b�g�S�̂ɑ΂��Ď��s����܂�
			if�iraw�j{
				fn.call�ielems�Avalue�j;
				fn = null�B

			// ...�֐��l�����s����Ƃ�������
			���̑�{
				�o���N= fn�B
				fn = function�ielem�Akey�Avalue�j{
					bulk.call�ijQuery�ielem�j�Avalue�j��Ԃ��܂��B
				;
			}
		}

		if�ifn�j{
			for�i; i <len; i ++�j{
				fn�i
					elems [i]�A�L�[�A���H
					�l�F
					value.call�ielems [i]�Ai�Afn�ielems [i]�A�L�[�j�j
				;
			}
		}
	}

	if�i�`�F�[���\�j{
		�v�f��Ԃ��B
	}

	// �擾
	if�ibulk�j{
		fn.call�ielems�j��Ԃ��܂��B
	}

	len��Ԃ��Hfn�ielems [0]�Akey�j�FemptyGet;
;


//���N�_���p�̃_�b�V��������ƈ�v
var rmsPrefix = / ^  -  ms- /�A
	rdashAlpha = /  - �i[az]�j/ g;

// camelCase�ɂ����replace�i�j�ւ̃R�[���o�b�N�Ƃ��Ďg�p����܂�
�֐�fcamelCase�iall�Aletter�j{
	return.toUpperCase�i�j��Ԃ��܂��B
}

//�_�b�V����camelCase�ɕϊ����܂��Bcss�ƃf�[�^���W���[���ɂ���Ďg�p����܂��B
//�T�|�[�g�FIE <= 9  -  11�AEdge 12  -  15
//�}�C�N���\�t�g�̓x���_�̃v���t�B�b�N�X���n���v����̂�Y��Ă��܂����i��9572�j
function camelCase�istring�j{
	string.replace�irmsPrefix�A "ms-"�j.replace�irdashAlpha�AfcamelCase�j��Ԃ��܂��B
}
var acceptData = function�i���L�ҁj{

	//���̂��̂������󂯓���܂��B
	//  - �m�[�h
	//  -  Node.ELEMENT_NODE
	//  -  Node.DOCUMENT_NODE
	//  - �I�u�W�F�N�g
	// - �ǂꂩ
	return owner.nodeType === 1 || owner.nodeType === 9 || �I�i+ owner.nodeType�j;
;




�֐�Data�i�j{
	this.expando = jQuery.expando + Data.uid ++;
}

Data.uid = 1;

Data.prototype = {

	�L���b�V���F�@�\�i���L�ҁj{

		//���L�҃I�u�W�F�N�g�ɂ��łɃL���b�V�������邩�ǂ������m�F���܂�
		var value = owner [this.expando];

		//�����łȂ��ꍇ�͍쐬����
		if�i�Ivalue�j{
			�l= {};

			//����̃u���E�U�ł͔�v�f�m�[�h�̃f�[�^���󂯓���邱�Ƃ��ł��܂�
			//��8335���Q�Ƃ��Ă��������B
			//��ɋ�̃I�u�W�F�N�g��Ԃ��܂��B
			if�iacceptData�i���L�ҁj�j{

				//���ꂪ�����񉻂܂��̓��[�v�I�[�o�[�����\�����Ⴂ�m�[�h�ł���ꍇ
				//�v���[���ȑ�����g��
				if�iowner.nodeType�j{
					owner [this.expando] = value;

				//����ȊO�̏ꍇ�͗񋓕s�\�ȃv���p�e�B�ŕی삷��
				//���̃v���p�e�B��L���ɂ���ɂ́Aconfigurable��true�ɂ���K�v������܂�
				//�f�[�^���폜�����ƍ폜����܂�
				���̑�{
					Object.defineProperty�i���L�ҁAthis.expando�A{
						�l�F�l�A
						�\���\�Ftrue
					;�j�j;
				}
			}
		}

		�߂�l
	�A
	set�Ffunction�i���L�ҁA�f�[�^�A�l�j{
		var prop
			cache = this.cache�i���L�ҁj;

		//�n���h���F[���L�ҁA�L�[�A�l]����
		//��ɃL�������P�[�X�L�[���g�p����igh-2257�j
		if�itypeof data === "string"�j{
			cache [camelCase�idata�j] = value;

		//�n���h���F[���L�ҁA{�v���p�e�B}]����
		���̑�{

			//�v���p�e�B��1���L���b�V���I�u�W�F�N�g�ɃR�s�[���܂�
			for�i�f�[�^���̎x���j{
				cache [camelCase�iprop�j] = data [prop];
			}
		}
		�L���b�V����Ԃ��܂��B
	�A
	get�Ffunction�i���L�ҁA�L�[�j{
		���^�[���L�[===����`�H
			this.cache�i���L�ҁj�F

			//��ɃL�������P�[�X�L�[���g�p����igh-2257�j
			owner [this.expando] && owner [this.expando] [camelCase�ikey�j];
	�A
	�A�N�Z�X�F�@�\�i���L�ҁA�L�[�A�l�j{

		//���̂����ꂩ�̏ꍇ
		//
		// 1.�L�[���w�肳��Ă��܂���
		// 2.������L�[���w�肳��܂������A�l���w�肳��Ă��܂���
		//
		// "read"�p�X�����ǂ�Aget���\�b�h������ł���悤�ɂ��܂�
		//�ǂ���̒l��Ԃ���
		//
		// 1.�L���b�V���I�u�W�F�N�g�S��
		// 2.�L�[�Ɋi�[����Ă���f�[�^
		//
		if�ikey ===����`||
				�i�ikey && typeof key === "string"�j&& value ===����`�j�j�j{

			this.get�iowner�Akey�j��Ԃ��܂��B
		}

		//�L�[��������ł͂Ȃ��ꍇ�A�܂��̓L�[�ƒl�̗����ł͂Ȃ��ꍇ
		//�i�����̃I�u�W�F�N�g�j�����̂����ꂩ�Ŏw��A�ݒ�܂��͊g�����܂��B
		//
		// 1.�v���p�e�B�̃I�u�W�F�N�g
		// 2.�L�[�ƒl
		//
		this.set�i���L�ҁA�L�[�A�l�j;

		// "set"�p�X��2�̃G���g���|�C���g�������Ƃ��ł���̂�
		//�ǂ̃p�X���I�����ꂽ���Ɋ�Â��ė\�z�����f�[�^��Ԃ��܂�[*]
		�߂�l�I==����` �l�F�L�[�B
	�A
	�폜�Ffunction�i���L�ҁA�L�[�j{
		var i�A
			cache = owner [this.expando];

		if�icache ===����`�j{
			�߂�
		}

		if�ikey�I==����`�j{

			//�z��܂��̓X�y�[�X�ŋ�؂�ꂽ�L�[�̕�������T�|�[�g
			if�iArray.isArray�ikey�j�j{

				// key���L�[�̔z��̏ꍇ
				//��ɃL�������P�[�X�L�[��ݒ肷��̂ŁA�폜���܂��B
				key = key.map�icamelCase�j;
			���̑�{
				key = camelCase�ikey�j;

				//�X�y�[�X���܂ރL�[�����݂���ꍇ�͂�����g�p���܂��B
				//����ȊO�̏ꍇ�́A�󔒈ȊO�̕����ƈ�v���邱�Ƃɂ���Ĕz����쐬����
				�L�[=�L���b�V���̃L�[�H
					[�L�[]�F
					�ikey.match�irnothtmlwhite�j|| []�j;
			}

			i = key.length;

			while�ii--�j{
				�L���b�V���̍폜[key [i]];
			}
		}

		//����ȏ�f�[�^���Ȃ��ꍇ�́Aexpando���폜���܂�
		if�ikey ===����`|| jQuery.isEmptyObject�icache�j�j{

			//�T�|�[�g�FChrome <= 35  -  45
			//�v���p�e�B���폜�����Webkit��Blink�̃p�t�H�[�}���X���ቺ����
			// DOM�m�[�h����B���̂��߁A�����undefined�ɐݒ肷��
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607�i�o�O��������j
			if�iowner.nodeType�j{
				owner [this.expando] =����`�B
			���̑�{
				���L�҂��폜[this.expando];
			}
		}
	�A
	hasData�F�֐��i���L�ҁj{
		var cache = owner [this.expando];
		return cache�I== undefined &&�IjQuery.isEmptyObject�icache�j;
	}
;
var dataPriv = new Data�i�j;

var dataUser = new Data�i�j;



//�����T�}���[
//
// 1. 1.9.x�u�����`�Ƃ�API�T�[�t�F�X�ƃZ�}���e�B�b�N�̌݊�������������
// 2.�X�g���[�W�����炵�ă��W���[���̕ێ琫�����コ����
//�P��̃��J�j�Y���ւ̃p�X�B
// 3.�u�v���C�x�[�g�v�f�[�^�Ɓu���[�U�[�v�f�[�^���T�|�[�g���邽�߂ɓ����P��̃��J�j�Y�����g�p���܂��B
// 4. _Never_ "����J"�f�[�^�����[�U�[�R�[�h�Ɍ��J����iTODO�FDrop _data�A_removeData�j
// 5.���[�U�I�u�W�F�N�g�Ɏ����̏ڍׂ����J���Ȃ��悤�ɂ���i��Fexpando�v���p�e�B�j
// 6. 2014�N��WeakMap�Ɏ������A�b�v�O���[�h���邽�߂̖��m�ȓ��؂�����

var rbrace = / ^�i�H�F\ {[\ w \ W] * \} | \ [[\ w \ W] * \]�j$ /�A
	rmultiDash = / [AZ] / g;

�֐�getData�i�f�[�^�j{
	if�idata === "true"�j{
		true��Ԃ��܂��B
	}

	if�idata === "false"�j{
		false��Ԃ��܂��B
	}

	if�idata === "null"�j{
		null��Ԃ��܂��B
	}

	//�������ύX���Ȃ��ꍇ�ɂ̂ݐ��l�ɕϊ����܂�
	if�idata === + data + ""�j{
		�f�[�^��Ԃ��B
	}

	if�irbrace.test�idata�j�j{
		JSON.parse�idata�j��Ԃ��܂��B
	}

	�f�[�^��Ԃ��܂��B
}

�֐�dataAttr�ielem�Akey�Adata�j{
	var name;

	//�����ŉ���������Ȃ������ꍇ�́A�������擾���Ă݂܂�
	// HTML5��data- *��������̃f�[�^
	if�i�f�[�^===����`&& elem.nodeType === 1�j{
		name = "data-" + key.replace�irmultiDash�A " -  $��"�j.toLowerCase�i�j;
		data = elem.getAttribute�iname�j;

		if�itypeof data === "string"�j{
			�����Ă�������{
				data = getData�i�f�[�^�j;
			}�L���b�`�iE�j{}

			//��ŕύX����Ȃ��悤�Ƀf�[�^��ݒ肵�Ă��������B
			dataUser.set�ielem�Akey�Adata�j;
		���̑�{
			�f�[�^=����`�B
		}
	}
	�f�[�^��Ԃ��܂��B
}

jQuery.extend�i{
	hasData�Ffunction�ielem�j{
		dataUser.hasData�ielem�j��Ԃ��܂��BdataPriv.hasData�ielem�j;
	�A

	�f�[�^�F�֐��ielem�Aname�Adata�j{
		dataUser.access�ielem�Aname�Adata�j��Ԃ��܂��B
	�A

	removeData�Ffunction�ielem�Aname�j{
		dataUser.remove�ielem�Aname�j;
	�A

	// TODO�F_data��_removeData�ւ̌Ăяo���͂��ׂĒu���������܂����B
	// dataPriv���\�b�h�𒼐ڌĂяo���ƁA�����͔p�~�����\��������܂��B
	_data�Ffunction�ielem�Aname�Adata�j{
		dataPriv.access�ielem�Aname�Adata�j��Ԃ��܂��B
	�A

	_removeData�Ffunction�ielem�Aname�j{
		dataPriv.remove�ielem�Aname�j;
	}
;�j�j;

jQuery.fn.extend�i{
	�f�[�^�F�֐��i�L�[�A�l�j{
		var i�A���O�A�f�[�^�A
			elem = this [0]�A
			attrs = elem && elem.attributes;

		//���ׂĂ̒l���擾
		if�ikey ===����`�j{
			if�ithis.length�j{
				data = dataUser.get�ielem�j;

				if�ielem.nodeType === 1 &&�IdataPriv.get�ielem�A "hasDataAttrs"�j�j�j{
					i = attrs.length;
					while�ii--�j{

						//�T�|�[�g�FIE 11�̂�
						// attrs�v�f��null�ł����܂��܂���i��14894�j
						if�iattrs [i]�j{
							name = attrs [i] .name;
							if�iname.indexOf�i "data-"�j=== 0�j{
								name = camelCase�iname.slice�i5�j�j;
								dataAttr�ielem�Aname�Adata [name]�j;
							}
						}
					}
					dataPriv.set�ielem�A "hasDataAttrs"�Atrue�j;
				}
			}

			�f�[�^��Ԃ��܂��B
		}

		//�����̒l��ݒ肵�܂�
		if�itypeof key === "object"�j{
			this.each�ifunction�i�j{��Ԃ��܂��B
				dataUser.set�ithis�Akey�j;
			;�j�j;
		}

		���^�[���A�N�Z�X�ithis�Afunction�ivalue�j{
			VAR�f�[�^�B

			//�Ăяo������jQuery�I�u�W�F�N�g�i�v�f����v����j����ł͂Ȃ�
			//�i���������āA����[0]�ɗv�f������j������
			// value�p�����[�^�͖���`�ł͂���܂���ł����B���jQuery�I�u�W�F�N�g
			// elem = this [0]�ɑ΂��� `undefined`�ɂȂ�
			//�f�[�^�L���b�V����ǂݍ������Ƃ����ꍇ�́A��O���X���[���܂��B
			if�ielem && value ===����`�j{

				//�L���b�V������f�[�^���擾���悤�Ƃ��Ă��܂�
				//�L�[�͏��Data�ŃL�������P�[�X�ɂȂ�܂�
				data = dataUser.get�ielem�Akey�j;
				if�idata�I==����`�j{
					�f�[�^��Ԃ��܂��B
				}

				//�f�[�^���u�����v���悤�Ƃ��܂���
				// HTML5�J�X�^���f�[�^ -  * attrs
				data = dataAttr�ielem�Akey�j;
				if�idata�I==����`�j{
					�f�[�^��Ԃ��܂��B
				}

				//�{���Ɋ撣��܂������A�f�[�^�����݂��܂���B
				�߂�
			}

			//�f�[�^��ݒ肵�܂�
			this.each�ifunction�i�j{

				//��ɃL�������P�[�X�L�[��ۑ����܂�
				dataUser.set�ithis�Akey�Avalue�j;
			;�j�j;
		}�Anull�A�l�Aarguments.length> 1�Anull�Atrue�j;
	�A

	removeData�F�֐��i�L�[�j{
		this.each�ifunction�i�j{��Ԃ��܂��B
			dataUser.remove�ithis�Akey�j;
		;�j�j;
	}
;�j�j;


jQuery.extend�i{
	�L���[�F�֐��ielem�Atype�Adata�j{
		var�L���[�B

		if�ielem�j{
			type =�itype || "fx"�j+ "queue";
			queue = dataPriv.get�ielem�Atype�j;

			//���ꂪ�P�Ȃ郋�b�N�A�b�v�ł���΁A���΂₭�o�ăf�L���[���X�s�[�h�A�b�v
			if�i�f�[�^�j{
				if�i�Iqueue || Array.isArray�idata�j�j{
					queue = dataPriv.access�ielem�Atype�AjQuery.makeArray�idata�j�j;
				���̑�{
					queue.push�idata�j;
				}
			}
			���^�[���L���[|| [];
		}
	�A

	�f�L���[�Ffunction�ielem�Atype�j{
		type = type || "fx";

		var queue = jQuery.queue�ielem�Atype�j�A
			startLength = queue.length�A
			fn = queue.shift�i�j�A
			hooks = jQuery._queueHooks�ielem�Atype�j�A
			next = function�i�j{
				jQuery.dequeue�ielem�Atype�j;
			;

		// fx�L���[���f�L���[���ꂽ�ꍇ�́A��ɐi�s�󋵃Z���`�l�����폜���Ă�������
		if�ifn === "inprogress"�j{
			fn = queue.shift�i�j;
			startLength--;
		}

		if�ifn�j{

			//�i���Z���`�l����ǉ����āAfx�L���[���쐬����Ȃ��悤�ɂ��܂��B
			//�����I�Ƀf�L���[
			if�itype === "fx"�j{
				queue.unshift�i "inprogress"�j;
			}

			//�Ō�̃L���[��~�@�\���N���A����
			hooks.stop���폜���܂��B
			fn.call�ielem�Anext�Ahooks�j;
		}

		if�i�IstartLength &&�t�b�N�j{
			hooks.empty.fire�i�j;
		}
	�A

	//����J -  queueHooks�I�u�W�F�N�g�𐶐����邩�A���݂̃I�u�W�F�N�g��Ԃ�
	_queueHooks�Ffunction�ielem�Atype�j{
		var key = type + "queueHooks";
		dataPriv.get�ielem�Akey�j��Ԃ��܂�|| dataPriv.access�ielem�Akey�A{
			��̏ꍇ�FjQuery.Callbacks�i "������1��"�j.add�ifunction�i�j{
				dataPriv.remove�ielem�A[type + "queue"�Akey]�j;
			�j
		;�j�j;
	}
;�j�j;

jQuery.fn.extend�i{
	�L���[�F�֐��i�^�C�v�A�f�[�^�j{
		var setter = 2;

		if�itypeof type�I== "string"�j{
			data = type;
			type = "fx";
			setter--;
		}

		if�iarguments.length <setter�j{
			jQuery.queue�ithis [0]�Atype�j��Ԃ��܂��B
		}

		�f�[�^��Ԃ�===����`�H
			���� �F
			this.each�ifunction�i�j{
				var queue = jQuery.queue�ithis�Atype�Adata�j;

				//���̃L���[�Ɋm���Ƀt�b�N����
				jQuery._queueHooks�ithis�Atype�j;

				if�itype === "fx" && queue [0]�I== "inprogress"�j{
					jQuery.dequeue�ithis�Atype�j;
				}
			;�j�j;
	�A
	�f�L���[�F�֐��i�^�C�v�j{
		this.each�ifunction�i�j{��Ԃ��܂��B
			jQuery.dequeue�ithis�Atype�j;
		;�j�j;
	�A
	clearQueue�Ffunction�itype�j{
		this.queue��Ԃ��܂��itype || "fx"�A[]�j;
	�A

	//����̃^�C�v�̃L���[������Ƃ��ɉ������ꂽ�񑩂��擾����
	//��ł��i�f�t�H���g�ł�fx���^�ł��j
	�񑩁Ffunction�itype�Aobj�j{
		var tmp�A
			�J�E���g= 1�A
			defer = jQuery.Deferred�i�j�A
			elements = this�A
			i = this.length�A
			resolve = function�i�j{
				if�i�I�i--count�j�j{
					defer.resolveWith�ielements�A[elements]�j;
				}
			;

		if�itypeof type�I== "string"�j{
			obj = type;
			type =����`
		}
		type = type || "fx";

		while�ii--�j{
			tmp = dataPriv.get�ielements [i]�Atype + "queueHooks"�j;
			if�itmp && tmp.empty�j{
				++�𐔂��܂��B
				tmp.empty.add�i�����j;
			}
		}
		resolve�i�j;
		defer.promise�iobj�j��Ԃ��܂��B
	}
;�j�j;
var pnum =�i/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/�j.source;

var rcssNum = new RegExp�i "^�i�H�F�i[+  - ]�j= |�j�i" + pnum + "�j�i[az��] *�j$"�A "i"�j;


var cssExpand = ["Top"�A "Right"�A "Bottom"�A "Left"];

var isHiddenWithinTree = function�ielem�Ael�j{

		// isHiddenWithinTree��jQuery��filter�֐�����Ăяo�����Ƃ��ł��܂��B
		//���̏ꍇ�A�v�f��2�Ԗڂ̈����ɂȂ�܂�
		elem = el || elem;

		//�C�����C���X�^�C�������D��Ă���
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			//�����łȂ���΁A�v�Z�X�^�C�����`�F�b�N����
			//�T�|�[�g�FFirefox <= 43  -  45
			//�ڑ�����Ă��Ȃ��v�f�͌v�Z���ꂽ�\���������Ƃ��ł��܂��B
			//�h�L�������g��
			jQuery.contains�ielem.ownerDocument�Aelem�j&&

			jQuery.css�ielem�A "display"�j=== "none";
	;

var swap =�֐��ielem�A�I�v�V�����A�R�[���o�b�N�A�����j{
	var ret�A���O�A
		old = {};

	//�Â��l���o���āA�V�����l��}�����܂�
	for�i�I�v�V�������j{
		old [name] = elem.style [name];
		elem.style [name] = options [name];
	}

	ret = callback.apply�ielem�Aargs || []�j;

	//�Â��l�����ɖ߂�
	for�i�I�v�V�������j{
		elem.style [name] = old [name];
	}

	ret��Ԃ��B
;




�֐�adjustCSS�ielem�Aprop�AvalueParts�Atween�j{
	VAR�����A�X�P�[���A
		maxIterations = 20�A
		currentValue = tween�H
			�֐��i�j {
				tween.cur�i�j��Ԃ��܂��B
			�F
			�֐��i�j {
				jQuery.css�ielem�Aprop�A ""�j��Ԃ��܂��B
			�A
		initial = currentValue�i�j�A
		unit = valueParts && valueParts [3] || �ijQuery.cssNumber [prop]�H ""�F "px"�j�A

		//�J�n�l�̌v�Z�͐��ݓI�ȒP�ʂ̕s��v�ɕK�v�ł�
		initialInUnit =�ijQuery.cssNumber [prop] || unit�I== "px" && + initial�j&&
			rcssNum.exec�ijQuery.css�ielem�Aprop�j�j;

	if�iinitialInUnit && initialInUnit [3]�I==�P�ʁj{

		//�T�|�[�g�FFirefox <= 54
		// CSS�̏������̊���h�����߂ɔ����ڕW�l�𔼕��ɂ���igh-2144�j
		�����������^ �Q�B

		// jQuery.css�ɂ���ĕ񍐂��ꂽ�M�����j�b�g
		unit = unit || initialInUnit [3];

		//�[���ȊO�̏o���_����J��Ԃ��ߎ�����
		initialInUnit = +����|| 1;

		while�imaxIterations--�j{

			//�őP�̐�����]�����čX�V���܂��i2�{�ɂ���Ɛ������[���ɂȂ�܂��j�B
			//�X�P�[����1�ȏ�ł���ΏI�����܂��i�Â�*�V�������i���|�W�e�B�u�ɂ��܂��j�B
			jQuery.style�ielem�Aprop�AinitialInUnit + unit�j;
			if�i�i1  - �X�P�[���j*�i1  - �i�X�P�[��= currentValue�i�j/ initial || 0.5�j�j<= 0�j{
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style�ielem�Aprop�AinitialInUnit + unit�j;

		//��Ńg�D�C�[���v���p�e�B��K���X�V���Ă�������
		valueParts = valueParts || [];
	}

	if�ivalueParts�j{
		initialInUnit = + initialInUnit || +������|| 0;

		//�w�肵���ꍇ�͑��΃I�t�Z�b�g�i+ = /  -  =�j��K�p����
		�����ς�= valueParts [1]�H
			initialInUnit +�ivalueParts [1] + 1�j* valueParts [2]�F
			+ valueParts [2];
		if�i�g�D�C�[���j{
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end =�����ς݁B
		}
	}
	�ԕi�����ς݁B
}


var defaultDisplayMap = {};

�֐�getDefaultDisplay�ielem�j{
	var temp�A
		doc = elem.ownerDocument�A
		nodeName = elem.nodeName�A
		display = defaultDisplayMap [nodeName];

	if�i�\���j{
		�f�B�X�v���C�ɖ߂�܂��B
	}

	temp = doc.body.appendChild�idoc.createElement�inodeName�j�j;
	display = jQuery.css�itemp�A "display"�j;

	temp.parentNode.removeChild�i�ꎞ�j;

	if�idisplay === "none"�j{
		display = "block";
	}
	defaultDisplayMap [nodeName] = display;

	�f�B�X�v���C�ɖ߂�܂��B
}

�֐�showHide�ielements�Ashow�j{
	var�f�B�X�v���C�Aelem�A
		�l= []�A
		index = 0�A
		length = elements.length;

	//�ύX���K�v�ȗv�f�̐V�����\���l�����肵�܂�
	for�i; index <length; index ++�j{
		elem = elements [index];
		if�i�Ielem.style�j{
			��������;
		}

		display = elem.style.display;
		if�i�\���j{

			//�J�X�P�[�h�ɉB���ꂽ�v�f�̉�������������̂ŁA�����́i�����Ēx���j
			//�\���l����łȂ�����A���̍ŏ��̃��[�v�Ń`�F�b�N���K�v�ł�
			//�C�����C���܂��͕����\��j
			if�idisplay === "none"�j{
				values [index] = dataPriv.get�ielem�A "display"�j|| �k��;
				if�i�Ivalues [index]�j{
					elem.style.display = "";
				}
			}
			if�ielem.style.display === "" && isHiddenWithinTree�ielem�j�j{
				values [index] = getDefaultDisplay�ielem�j;
			}
		���̑�{
			if�idisplay�I== "none"�j{
				values [index] = "none";

				//�㏑�����Ă�����̂��o���Ă��܂�
				dataPriv.set�ielem�A "display"�Adisplay�j;
			}
		}
	}

	//���̃��t���[������邽�߂ɁA2�Ԗڂ̃��[�v�ŗv�f�̕\����ݒ肵�܂�
	for�iindex = 0; index <length; index ++�j{
		if�ivalues [index]�I= null�j{
			elements [index] .style.display = values [index];
		}
	}

	�v�f��Ԃ��܂��B
}

jQuery.fn.extend�i{
	show�Ffunction�i�j{
		showHide�ithis�Atrue�j��Ԃ��܂��B
	�A
	�B���Ffunction�i�j{
		showHide�ithis�j��Ԃ��܂��B
	�A
	�؂�ւ��F�@�\�i��ԁj{
		if�itypeof state === "boolean"�j{
			��Ԃ�Ԃ��Hthis.show�i�j�Fthis.hide�i�j;
		}

		this.each�ifunction�i�j{��Ԃ��܂��B
			if�iisHiddenWithinTree�ithis�j�j{
				jQuery�ithis�j.show�i�j;
			���̑�{
				jQuery�ithis�j.hide�i�j;
			}
		;�j�j;
	}
;�j�j;
var rcheckableType =�i/ ^�i?:�`�F�b�N�{�b�N�X|���W�I�j$ / i�j;

var rtagName =�i/ <�i[az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] +�j/ i�j;

var rscriptType =�i/ ^ $ | ^ module $ | \ /�i?: java | ecma�jscript / i�j;



// XHTML���T�|�[�g���邽�߂ɂ����̃^�O�����K�v������܂��i��13200�j
var wrapMap = {

	//�T�|�[�g�FIE <= 9�̂�
	�I�v�V�����F[1�A "<select multiple = 'multiple'>"�A "</select>"]�A

	// XHTML�p�[�T�[�͗v�f�ɖ��@�̂悤�ɗv�f��}�����܂���
	//�^�O�X�[�v�p�[�T�Ɠ������@�B�����玄�����͒Z�����邱�Ƃ͂ł��܂���
	//�����<tbody>�܂��͑��̕K�{�v�f���ȗ����邱�Ƃɂ���āB
	thead�F[1�A "<table>"�A "</table>"]�A
	col�F[2�A "<table> <colgroup>"�A "</colgroup> </table>"]�A
	tr�F[2�A "<table> <tbody>"�A "</tbody> </table>"]�A
	td�F[3�A "<table> <tbody> <tr>"�A "</tr> </tbody> </table>"]�A

	_default�F[0�A ""�A ""]
;

//�T�|�[�g�FIE <= 9�̂�
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


�֐�getAll�i�R���e�L�X�g�A�^�O�j{

	//�T�|�[�g�FIE <= 9  -  11�̂�
	//�z�X�g�I�u�W�F�N�g�ɑ΂�������̂Ȃ����\�b�h�Ăяo����������邽�߂�typeof���g�p����i��15151�j
	var ret;

	if�itypeof context.getElementsByTagName�I== "����`"�j{
		ret = context.getElementsByTagName�itag || "*"�j;

	�����łȂ���΁itypeof context.querySelectorAll�I== "undefined"�j{
		ret = context.querySelectorAll�itag || "*"�j;

	���̑�{
		ret = [];
	}

	if�itag ===����`|| tag && nodeName�icontext�Atag�j�j{
		jQuery.merge�i[context]�Aret�j��Ԃ��܂��B
	}

	ret��Ԃ��B
}


//�X�N���v�g�����ɕ]���ς݂Ƃ��ă}�[�N����
�֐�setGlobalEval�ielems�ArefElements�j{
	var i = 0�A
		l = elems.length;

	for�i; i <l; i ++�j{
		dataPriv.set�i
			elems [i]�A
			"globalEval"�A
			�IrefElements || dataPriv.get�irefElements [i]�A "globalEval"�j
		;
	}
}


var rhtml = / <|�����H\ w +; /;

function buildFragment�ielems�A�R���e�L�X�g�A�X�N���v�g�A�I���A�����j{
	var elem�Atmp�Atag�Awrap�Acontains�Aj�A
		fragment = context.createDocumentFragment�i�j�A
		nodes = []�A
		i = 0�A
		l = elems.length;

	for�i; i <l; i ++�j{
		elem = elems [i];

		if�ielem || elem === 0�j{

			//�m�[�h�𒼐ڒǉ�����
			if�itoType�ielem�j=== "�I�u�W�F�N�g"�j{

				//�T�|�[�g�FAndroid <= 4.0�̂݁APhantomJS 1�̂�
				// push.apply�i_�Aarraylike�j�͌Ñ��WebKit�ŃX���[�����
				jQuery.merge�inodes�Aelem.nodeType�H[elem]�Felem�j;

			//��HTML���e�L�X�g�m�[�h�ɕϊ�����
			�����łȂ���΁i�Irhtml.test�ielem�j�j{
				nodes.push�icontext.createTextNode�ielem�j�j;

			// HTML��DOM�m�[�h�ɕϊ�
			���̑�{
				tmp = tmp || fragment.appendChild�icontext.createElement�i "div"�j�j;

				//�W���\�����t�V���A�������܂�
				tag =�irtagName.exec�ielem�j|| [""�A ""]�j[1] .toLowerCase�i�j;
				wrap = wrapMap [�^�O] || wrapMap._default;
				tmp.innerHTML = wrap [1] + jQuery.htmlPrefilter�ielem�j+ wrap [2];

				//���b�p�[����Đ������R���e���c�ɍ~���
				j = wrap [0];
				while�ij--�j{
					tmp = tmp.lastChild;
				}

				//�T�|�[�g�FAndroid <= 4.0�̂݁APhantomJS 1�̂�
				// push.apply�i_�Aarraylike�j�͌Ñ��WebKit�ŃX���[�����
				jQuery.merge�inodes�Atmp.childNodes�j;

				//�ŏ�ʃR���e�i���o���Ă���
				tmp = fragment.firstChild;

				//�쐬�����m�[�h���Ǘ����Ă��邱�Ƃ��m�F���܂��i��12392�j
				tmp.textContent = "";
			}
		}
	}

	//���b�p�[���t���O�����g����폜���܂�
	fragment.textContent = "";

	�� �� �O�B
	while�i�ielem = nodes [i ++]�j�j{

		//���łɃR���e�L�X�g�R���N�V�����ɂ���v�f���X�L�b�v����itrac-4087�j
		if�iselection && jQuery.inArray�ielem�Aselection�j> -1�j{
			if�i�����j{
				ignored.push�ielem�j;
			}
			��������;
		}

		contains = jQuery.contains�ielem.ownerDocument�Aelem�j;

		//�t���O�����g�ɒǉ�
		tmp = getAll�ifragment.appendChild�ielem�j�A "script"�j;

		//�X�N���v�g�]��������ۑ�����
		if�i���܂ށj{
			setGlobalEval�itmp�j;
		}

		//���s�t�@�C�����L���v�`������
		if�i�X�N���v�g�j{
			�� �� �O�B
			while�i�ielem = tmp [j ++]�j�j{
				if�irscriptType.test�ielem.type || ""�j�j{
					scripts.push�ielem�j;
				}
			}
		}
	}

	�t���O�����g��Ԃ��܂��B
}


�i �֐��i�j {
	var fragment = document.createDocumentFragment�i�j�A
		div = fragment.appendChild�idocument.createElement�i "div"�j�j�A
		input = document.createElement�i "input"�j;

	//�T�|�[�g�FAndroid 4.0  -  4.3�̂�
	//���O���ݒ肳��Ă���ƃ`�F�b�N��Ԃ�������i��11217�j
	//�T�|�[�g�FWindows Web Apps�iWWA�j
	// `name`��` type`��WWA��.setAttribute���g��Ȃ���΂Ȃ�Ȃ��i��14901�j
	input.setAttribute�i "type"�A "radio"�j;
	input.setAttribute�i "checked"�A "checked"�j;
	input.setAttribute�i "name"�A "t"�j;

	div.appendChild�i���́j;

	//�T�|�[�g�FAndroid <= 4.1�̂�
	//�Â�WebKit�̓t���O�����g�̃`�F�b�N��Ԃ𐳂����������܂���
	support.checkClone = div.cloneNode�itrue�j.cloneNode�itrue�j.lastChild.checked;

	//�T�|�[�g�FIE <= 11�̂�
	// textarea�i����у`�F�b�N�{�b�N�X�jdefaultValue����������������Ă��邱�Ƃ��m�F���Ă�������
	div.innerHTML = "<textarea> x </textarea>";
	support.noCloneChecked = !! div.cloneNode�itrue�j.lastChild.defaultValue;
�i�j;
var documentElement = document.documentElement;



var
	rkeyEvent = / ^ key /�A
	rmouseEvent = / ^�i�H�F�}�E�X|�|�C���^|�R���e�L�X�g���j���[|�h���b�O|�h���b�v�j|�N���b�N/�A
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

�֐�returnTrue�i�j{
	true��Ԃ��܂��B
}

�֐�returnFalse�i�j{
	false��Ԃ��܂��B
}

//�T�|�[�g�FIE <= 9�̂�
//�ڍׂɂ��Ắ�13393���Q��
function safeActiveElement�i�j{
	�����Ă�������{
		document.activeElement��Ԃ��܂��B
	}�L���b�`�i�G���[�j{}
}

�֐�on�ielem�Atypes�Aselector�Adata�Afn�Aone�j{
	var origFn�A�^�C�v�B

	//�^�͌^/�n���h���̃}�b�v�ɂ��邱�Ƃ��ł��܂�
	if�itypeof types === "�I�u�W�F�N�g"�j{

		//�i�^�C�v - �I�u�W�F�N�g�A�Z���N�^�A�f�[�^�j
		if�itypeof selector�I== "string"�j{

			//�i�^�C�v - �I�u�W�F�N�g�A�f�[�^�j
			�f�[�^=�f�[�^|| �Z���N�^;
			�Z���N�^=����`�B
		}
		for�i�^��ł����ށj{
			on�ielem�Atype�Aselector�Adata�Atypes [type]�Aone�j;
		}
		elem��Ԃ��܂��B
	}

	if�idata == null && fn == null�j{

		//�i�^�C�v�Afn�j
		fn =�Z���N�^�B
		data = selector = undefined;
	�����łȂ���΁ifn == null�j{
		if�itypeof selector === "string"�j{

			//�i�^�C�v�A�Z���N�^�Afn�j
			fn =�f�[�^�B
			�f�[�^=����`�B
		���̑�{

			//�i�^�C�v�A�f�[�^�Afn�j
			fn =�f�[�^�B
			�f�[�^=�Z���N�^�B
			�Z���N�^=����`�B
		}
	}
	if�ifn === false�j{
		fn = returnFalse;
	�����łȂ���΁i�Ifn�j{
		elem��Ԃ��܂��B
	}

	if�ione === 1�j{
		origFn = fn;
		fn = function�ievent�j{

			//�C�x���g�ɂ͏�񂪊܂܂�Ă��邽�߁A��̃Z�b�g���g�p�ł��܂�
			jQuery�i�j�Boff�i�C�x���g�j;
			origFn.apply�ithis�Aarguments�j��Ԃ��܂��B
		;

		//�Ăяo������origFn���g�p���č폜�ł���悤�ɁA����GUID���g�p���܂�
		fn.guid = origFn.guid || �iorigFn.guid = jQuery.guid ++�j;
	}
	elem.each�ifunction�i�j{��Ԃ�
		jQuery.event.add�ithis�Atypes�Afn�Adata�Aselector�j;
	;�j�j;
}

/ *
 *�C�x���g���Ǘ����邽�߂̃w���p�[�֐� - �p�u���b�N�C���^�[�t�F�C�X�̈ꕔ�ł͂���܂���B
 *�����̃A�C�f�A�ɂ��āADean Edwards��addEvent���C�u�������Q�Ƃ��Ă��������B
 * /
jQuery.event = {

	�O���[�o���F {}�A

	�ǉ��Ffunction�ielem�Atypes�Ahandler�Adata�Aselector�j{

		var handleObjIn�AeventHandle�Atmp�A
			events�At�AhandleObj�A
			special�Ahandler�Atype�A�l�[���X�y�[�X�AorigType�A
			elemData = dataPriv.get�ielem�j;

		// noData�܂���text / comment�m�[�h�ɃC�x���g��Y�t���Ȃ��i�������A�v���[���I�u�W�F�N�g�͋�����j
		if�i�IelemData�j{
			�߂�
		}

		//�Ăяo�����́A�n���h���̑���ɃJ�X�^���f�[�^�̃I�u�W�F�N�g��n�����Ƃ��ł��܂�
		if�ihandler.handler�j{
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		//�A�^�b�`���ɖ����ȃZ���N�^����O�𓊂���悤�ɂ���
		// elem����v�f�m�[�h�idocument�Ȃǁj�̏ꍇ��documentElement�ɑ΂��ĕ]������
		if�iselector�j{
			jQuery.find.matchesSelector�idocumentElement�Aselector�j;
		}

		//�n���h������ӂ�ID�������Ă��邱�Ƃ��m�F���A��ł������������폜�����肷�邽�߂Ɏg�p����
		if�i�Ihandler.guid�j{
			handler.guid = jQuery.guid ++;
		}

		//���ꂪ�ŏ��̃C�x���g�ł���΁A�v�f�̃C�x���g�\���ƃ��C���n���h��������������
		if�i�I�ievents = elemData.events�j�j{
			events = elemData.events = {};
		}
		if�i�I�ieventHandle = elemData.handle�j�j{
			eventHandle = elemData.handle = function�ie�j{

				// jQuery.event.trigger�i�j��2�Ԗڂ̃C�x���g��j��
				//�y�[�W���A�����[�h���ꂽ��ɃC�x���g���Ăяo���ꂽ�Ƃ�
				return typeof jQuery�I== "undefined" && jQuery.event.triggered�I== e.type�H
					jQuery.event.dispatch.apply�ielem�Aarguments�j�F����`�B
			;
		}

		//�X�y�[�X�ŋ�؂�ꂽ�����̃C�x���g���������܂�
		types =�itypes || ""�j.match�irnothtmlwhite�j|| [""];
		t = types.length;
		while�it--�j{
			tmp = rtypenamespace.exec�itypes [t]�j|| [];
			type = origType = tmp [1];
			���O���=�itmp [2] || ""�j.split�i "�B"�j.sort�i�j;

			//���O��Ԃ݂̂̃n���h�����A�^�b�`���Ȃ��ŁA�K��*�^�ɂ���K�v������܂�
			if�i�Itype�j{
				��������;
			}

			//�C�x���g�����̎�ނ�ύX�����ꍇ�́A�ύX���ꂽ��ނ̓��ʂȃC�x���g�n���h�����g�p����
			special = jQuery.event.special [type] || {};

			//�Z���N�^����`����Ă���ꍇ�́A���ʂȃC�x���gAPI�^�C�v�����肵�A����ȊO�̏ꍇ�̓^�C�v���w��
			type =�iselector�Hspecial.delegateType�Fspecial.bindType�j|| �^�C�v;

			//�V�������Z�b�g���ꂽ�^�C�v�Ɋ�Â���special���X�V����
			special = jQuery.event.special [type] || {};

			// handleObj�͂��ׂẴC�x���g�n���h���ɓn����܂�
			handleObj = jQuery.extend�i{
				�^�C�v�F�^�C�v�A
				origType�ForigType�A
				�f�[�^�F�f�[�^�A
				handler�F�n���h���A
				guid�Fhandler.guid�A
				�Z���N�^�F�Z���N�^�A
				needsContext�Fselector && jQuery.expr.match.needsContext.test�iselector�j�A
				���O��ԁFnamespaces.join�i "�B"�j
			handleObjIn�j;

			//�ŏ��̃C�x���g�ł���΁A�C�x���g�n���h���L���[�����������܂�
			if�i�I�i�n���h���[=�C�x���g[�^�C�v]�j�j{
				�n���h��=�C�x���g[�^�C�v] = [];
				handlers.delegateCount = 0;

				//����C�x���g�n���h����false��Ԃ��ꍇ�ɂ̂�addEventListener���g�p����
				if�i�Ispecial.setup ||
					special.setup.call�ielem�Adata�A���O��ԁAeventHandle�j=== false�j{

					if�ielem.addEventListener�j{
						elem.addEventListener�itype�AeventHandle�j;
					}
				}
			}

			if�ispecial.add�j{
				special.add.call�ielem�AhandleObj�j;

				if�i�IhandleObj.handler.guid�j{
					handleObj.handler.guid = handler.guid;
				}
			}

			//�v�f�̃n���h�����X�g�ɒǉ��A�O�ɑ�s
			if�iselector�j{
				handlers.splice�ihandlers.delegateCount ++�A0�AhandleObj�j;
			���̑�{
				handlers.push�ihandleObj�j;
			}

			//�C�x���g�œK���̂��߂ɁA�ǂ̃C�x���g������܂łɎg�p���ꂽ����ǐՂ��܂�
			jQuery.event.global [type] = true;
		}

	�A

	//�v�f����C�x���g�܂��͈�A�̃C�x���g���f�^�b�`����
	�폜�Ffunction�ielem�Atypes�Ahandler�Aselector�AmappedTypes�j{

		var j�AorigCount�Atmp�A
			events�At�AhandleObj�A
			special�Ahandler�Atype�A�l�[���X�y�[�X�AorigType�A
			elemData = dataPriv.hasData�ielem�j&& dataPriv.get�ielem�j;

		if�i�IelemData ||�I�ievents = elemData.events�j�j{
			�߂�
		}

		// types����type.namespace���Ƃ�1��; �^�C�v�͏ȗ��\
		types =�itypes || ""�j.match�irnothtmlwhite�j|| [""];
		t = types.length;
		while�it--�j{
			tmp = rtypenamespace.exec�itypes [t]�j|| [];
			type = origType = tmp [1];
			���O���=�itmp [2] || ""�j.split�i "�B"�j.sort�i�j;

			//�v�f�̂��ׂẴC�x���g�i���̖��O��Ԃɑ��݂���ꍇ�j���o�C���h��������
			if�i�Itype�j{
				for�i�C�x���g����́j{
					jQuery.event.remove�ielem�Atype + types [t]�A�n���h���A�Z���N�^�Atrue�j;
				}
				��������;
			}

			special = jQuery.event.special [type] || {};
			type =�iselector�Hspecial.delegateType�Fspecial.bindType�j|| �^�C�v;
			�n���h���[=�C�x���g[�^�C�v] || [];
			tmp = tmp [2] &&
				new RegExp�i "�i^ | \\�B�j" + namespaces.join�i "\\�B�i�H�F�B* \\�B|�j"�j+ "�i\\�B| $�j"�j;

			//��v����C�x���g���폜���܂�
			origCount = j = handlers.length;
			while�ij--�j{
				handleObj = handlers [j];

				if�i�imappedTypes || origType === handleObj.origType�j&&
					�i�Ihandler || handler.guid === handleObj.guid�j&&
					�i�Itmp || tmp.test�ihandleObj.namespace�j�j&&
					�i�Iselector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector�j�j{
					handlers.splice�ij�A1�j;

					if�ihandleObj.selector�j{
						handlers.delegateCount--;
					}
					if�ispecial.remove�j{
						special.remove.call�ielem�AhandleObj�j;
					}
				}
			}

			//�������폜���ăn���h�����������݂��Ȃ��ꍇ�́A�ėp�C�x���g�n���h�����폜���܂�
			//�i���ʂȃC�x���g�n���h���̍폜���ɖ����̍ċA����������\�����������j
			if�iorigCount &&�Ihandlers.length�j{
				if�i�Ispecial.teardown ||
					special.teardown.call�ielem�A���O��ԁAelemData.handle�j=== false�j{

					jQuery.removeEvent�ielem�Atype�AelemData.handle�j;
				}

				�C�x���g���폜����[type]�B
			}
		}

		//�g�p����Ȃ��Ȃ����ꍇ�̓f�[�^�ƃG�L�X�p���h���폜
		if�ijQuery.isEmptyObject�ievents�j�j{
			dataPriv.remove�ielem�A "�C�x���g�̏���"�j;
		}
	�A

	�f�B�X�p�b�`�Ffunction�inativeEvent�j{

		//�l�C�e�B�u�C�x���g�I�u�W�F�N�g���珑�����݉\��jQuery.Event���쐬����
		var event = jQuery.event.fix�inativeEvent�j;

		var i�Aj�Aret�A��v�AhandleObj�AhandlerQueue�A
			args = new Array�iarguments.length�j�A
			�n���h���[=�idataPriv.get�ithis�A "events"�j|| {}�j[event.type] || []�A
			special = jQuery.event.special [event.type] || {};

		//�i�ǂݎ���p�j�l�C�e�B�u�C�x���g�ł͂Ȃ��A�C�����ꂽjQuery.Event���g�p����
		args [0] =�C�x���g�B

		for�ii = 1; i <arguments.length; i ++�j{
			args [i] = arguments [i];
		}

		event.delegateTarget = this;

		//�}�b�v���ꂽ�^��preDispatch�t�b�N���Ăяo���A�K�v�ɉ����Ă�����x�C��������
		if�ispecial.preDispatch && special.preDispatch.call�ithis�Aevent�j=== false�j{
			�߂�
		}

		//�n���h�������肵�܂�
		handlerQueue = jQuery.event.handlers.call�ithis�Aevent�Ahandlers�j;

		//�ŏ��Ƀf���Q�[�g�����s���� �ނ�͎������̉��̔ɐB���~�߂����Ǝv����������Ȃ�
		�� �� �O�B
		while�i�imatched = handlerQueue [i ++]�j&&�Ievent.isPropagationStopped�i�j�j{
			event.currentTarget = matched.elem;

			�� �� �O�B
			while�i�ihandleObj = matched.handlers [j ++]�j&&
				�Ievent.isImmediatePropagationStopped�i�j�j{

				//�g���K�[���ꂽ�C�x���g��1�j���O��Ԃ������Ȃ��A�܂���2�j���O��Ԃ����K�v������܂�
				//�o�C���h���ꂽ�C�x���g���̃T�u�Z�b�g�܂��͂���Ɠ������T�u�Z�b�g�i�����Ƃ����O��Ԃ������Ƃ͂ł��Ȃ��j
				if�i�Ievent.rnamespace || event.rnamespace.test�ihandleObj.namespace�j�j{

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret =�i�ijQuery.event.special [handleObj.origType] || {}�j.handle ||
						handleObj.handler�j.apply�imatched.elem�Aargs�j;

					if�iret�I==����`�j{
						if�i�ievent.result = ret�j=== false�j{
							event.preventDefault�i�j;
							event.stopPropagation�i�j;
						}
					}
				}
			}
		}

		//�}�b�s���O���ꂽ�^��postDispatch�t�b�N���Ăяo���܂�
		if�ispecial.postDispatch�j{
			special.postDispatch.call�ithis�Aevent�j;
		}

		event.result��Ԃ��܂��B
	�A

	�n���h���[�F�֐��i�C�x���g�A�n���h���[�j{
		var i�AhandleObj�Asel�AmatchedHandlers�AmatchedSelectors�A
			handlerQueue = []�A
			delegateCount = handlers.delegateCount�A
			cur = event.target;

		//�f���Q�[�g�n���h����T��
		if�idelegateCount &&

			//�T�|�[�g�FIE <= 9
			//�u���b�N�z�[����SVG <use>�C���X�^���X�c���[�itrac-13180�j
			cur.nodeType &&

			//�T�|�[�g�FFirefox <= 42
			//���|�C���^�{�^���������d�l�ᔽ�̃N���b�N��}�����܂����B�itrac-3861�j
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			//�T�|�[�g�FIE 11�̂�
			// ...���W�I���̖͂��L�[�u�N���b�N�v�͂��܂���A `button` -1�������Ƃ��ł��܂��igh-2343�j
			�I�ievent.type === "�N���b�N" && event.button> = 1�j�j{

			for�i; cur�I== this; cur = cur.parentNode || this�j{

				//�v�f�ȊO���`�F�b�N���Ȃ��i��13208�j
				//�����ȗv�f�ɑ΂���N���b�N���������Ȃ��i��6911�A��8165�A��11382�A��11764�j
				if�icur.nodeType === 1 &&�I�ievent.type === "�N���b�N" && cur.disabled === true�j�j{
					matchedHandlers = [];
					matchedSelectors = {};
					for�ii = 0; i <delegateCount; i ++�j{
						handleObj = handlers [i];

						// Object.prototype�̃v���p�e�B�Ƌ������Ȃ��悤�ɂ��܂����i��13203�j
						sel = handleObj.selector + "";

						if�imatchedSelectors [sel] ===����`�j{
							matchedSelectors [sel] = handleObj.needsContext�H
								jQuery�isel�Athis�j.index�icur�j> -1�F
								jQuery.find�isel�Athis�Anull�A[cur]�j.length;
						}
						if�imatchedSelectors [sel]�j{
							matchedHandlers.push�ihandleObj�j;
						}
					}
					if�imatchedHandlers.length�j{
						handlerQueue.push�i{elem�Fcur�A�n���h���FmatchedHandlers}�j;
					}
				}
			}
		}

		//�c��́i���ڃo�C���h���ꂽ�j�n���h����ǉ����܂�
		cur = this;
		if�idelegateCount <handlers.length�j{
			handlerQueue.push�i{elem�Fcur�A�n���h���Fhandlers.slice�idelegateCount�j}�j;
		}

		handlerQueue��Ԃ��܂��B
	�A

	addProp�Ffunction�iname�Ahook�j{
		Object.defineProperty�ijQuery.Event.prototype�Aname�A{
			�񋓉\�F�^�A
			�\���\�Ftrue�A

			�擾�FisFunction�i�t�b�N�j�H
				�֐��i�j {
					if�ithis.originalEvent�j{
							�߂�t�b�N�ithis.originalEvent�j;
					}
				�F
				�֐��i�j {
					if�ithis.originalEvent�j{
							this.originalEvent [name]��Ԃ��܂��B
					}
				�A

			set�Ffunction�ivalue�j{
				Object.defineProperty�ithis�Aname�A{
					�񋓉\�F�^�A
					�\���\�Ftrue�A
					�������݉\�F�^�A
					�l�F�l
				;�j�j;
			}
		;�j�j;
	�A

	�C���Ffunction�ioriginalEvent�j{
		originalEvent [jQuery.expando]��Ԃ��܂����H
			originalEvent�F
			new jQuery.Event�ioriginalEvent�j;
	�A

	����F {
		load�F{

			//��������image.load�C�x���g��window.load�Ƀo�u�����O���Ȃ��悤�ɂ���
			noBubble�F�^
		�A
		�t�H�[�J�X�F{

			//�\�ł���΃l�C�e�B�u�C�x���g�𔭐�������̂ŁA�ڂ���/�t�H�[�J�X�V�[�P���X�͐�����
			�g���K�[�Ffunction�i�j{
				if�ithis�I== safeActiveElement�i�j&& this.focus�j{
					this.focus�i�j;
					false��Ԃ��܂��B
				}
			�A
			delegateType�F "focusin"
		�A
		�ڂ����F{
			�g���K�[�Ffunction�i�j{
				if�ithis === safeActiveElement�i�j&& this.blur�j{
					this.blur�i�j;
					false��Ԃ��܂��B
				}
			�A
			delegateType�F "�t�H�[�J�X�A�E�g"
		�A
		�N���b�N�F{

			//�`�F�b�N�{�b�N�X�̏ꍇ�A�l�C�e�B�u�C�x���g���N�����A�`�F�b�N��Ԃ��������悤�ɂ���
			�g���K�[�Ffunction�i�j{
				if�ithis.type === "checkbox" && this.click && nodeName�ithis�A "input"�j�j�j{
					this.click�i�j;
					false��Ԃ��܂��B
				}
			�A

			//�u���E�U�Ԃ̈�ѐ���ۂ��߁A�����N��Ńl�C�e�B�u��.click�i�j���N�����Ȃ�
			_default�Ffunction�ievent�j{
				nodeName�ievent.target�A "a"�j��Ԃ��܂��B
			}
		�A

		beforeunload�F{
			postDispatch�Ffunction�ievent�j{

				//�T�|�[�g�FFirefox 20�ȍ~
				// Firefox��returnValue�t�B�[���h���ݒ肳��Ă��Ȃ��ꍇ�͌x�����܂���B
				if�ievent.result�I==����`&& event.originalEvent�j{
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
;

jQuery.removeEvent = function�ielem�Atype�Ahandle�j{

	//���́uif�v�͕��ʂ̃I�u�W�F�N�g�ɕK�v�ł�
	if�ielem.removeEventListener�j{
		elem.removeEventListener�itype�Ahandle�j;
	}
;

jQuery.Event = function�isrc�Aprops�j{

	// 'new'�L�[���[�h�Ȃ��ŃC���X�^���X����������
	if�i�I�i����instanceof jQuery.Event�j�j{
		�V����jQuery.Event�isrc�Aprops�j��Ԃ��܂��B
	}

	//�C�x���g�I�u�W�F�N�g
	if�isrc && src.type�j{
		this.originalEvent = src;
		this.type = src.type;

		//�h�L�������g��c��܂���C�x���g�́A�֎~�Ƃ��ă}�[�N����Ă���\��������܂�
		//�c���[�̉��ɂ���n���h���ɂ���� �������l�𔽉f���Ă��������B
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented ===����`&&

				//�T�|�[�g�FAndroid <= 2.3�̂�
				src.returnValue === false�H
			returnTrue�F
			returnFalse;

		//�^�[�Q�b�g�v���p�e�B���쐬����
		//�T�|�[�g�FSafari <= 6  -  7�̂�
		//�^�[�Q�b�g�̓e�L�X�g�m�[�h�ł͂����܂���i��504�A��13143�j
		this.target =�isrc.target && src.target.nodeType === 3�j
			src.target.parentNode�F
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// �C�x���g�^�C�v
	���̑�{
		this.type = src;
	}

	//�����I�ɒ񋟂��ꂽ�v���p�e�B���C�x���g�I�u�W�F�N�g�ɒu��
	if�i������j{
		jQuery.extend�ithis�Aprops�j;
	}

	//���M�C�x���g�Ƀ^�C���X�^���v���Ȃ��ꍇ�̓^�C���X�^���v���쐬���܂�
	this.timeStamp = src && src.timeStamp || Date.now�i�j;

	//�C���ς݂Ƃ��ă}�[�N
	this [jQuery.expando] = true;
;

// jQuery.Event��ECMAScript����o�C���f�B���O�Ŏw�肳��Ă���DOM3�C�x���g�Ɋ�Â��Ă��܂�
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	�R���X�g���N�^�FjQuery.Event�A
	isDefaultPrevented�FreturnFalse�A
	isPropagationStopped�FreturnFalse�A
	isImmediatePropagationStopped�FreturnFalse�A
	isSimulated�Ffalse�A

	preventDefault�Ffunction�i�j{
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if�ie &&�Ithis.isSimulated�j{
			e.preventDefault�i�j;
		}
	�A
	stopPropagation�Ffunction�i�j{
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if�ie &&�Ithis.isSimulated�j{
			e.stopPropagation�i�j;
		}
	�A
	stopImmediatePropagation�Ffunction�i�j{
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if�ie &&�Ithis.isSimulated�j{
			e.stopImmediatePropagation�i�j;
		}

		this.stopPropagation�i�j;
	}
;

// KeyEvent�����MouseEvent�ŗL�̏�������܂ނ��ׂĂ̈�ʓI�ȃC�x���g��������܂�
jQuery.each�i{
	altKey�F��������
	�A�F�^�A
	�L�����Z���\�Ftrue�A
	changedTouches�Ftrue�A
	ctrlKey�Ftrue�A
	�ڍׁF�^�A
	eventPhase�Ftrue�A
	metaKey�Ftrue�A
	pageX�Ftrue�A
	pageY�Ftrue�A
	shiftKey�Ftrue�A
	�����F�^
	"char"�F�^�A
	charCode�Ftrue�A
	�L�[�F�^�A
	keyCode�Ftrue�A
	�{�^���F�^�A
	�{�^���F�^�A
	clientX�Ftrue�A
	clientY�Ftrue�A
	offsetX�Ftrue�A
	offsetY�Ftrue�A
	pointerId�Ftrue�A
	pointerType�Ftrue�A
	screenX�F�^�A
	screenY�F�{���A
	targetTouches�Ftrue�A
	toElement�Ftrue�A
	�G��܂��F�{���A

	which�Ffunction�ievent�j{
		var button = event.button;

		//�L�[�C�x���g�ɂ����ǉ�
		if�ievent.which == null && rkeyEvent.test�ievent.type�j�j{
			event.charCode�I= null��Ԃ��܂��Bevent.charCode�Fevent.keyCode;
		}

		//�N���b�N���Ēǉ����܂��F1 === left; 2 ===�^��; 3 ===������
		if�i�Ievent.which && button�I==����`&& rmouseEvent.test�ievent.type�j�j{
			if�i�{�^����1�j{
				1��Ԃ��܂��B
			}

			if�i�{�^����2�j{
				3��Ԃ��܂��B
			}

			if�i�{�^����4�j{
				2��Ԃ��܂��B
			}

			0��Ԃ��܂��B
		}

		�C�x���g��Ԃ��܂��B
	}
jQuery.event.addProp�j;

//�}�E�X�I�[�o�[/�A�E�g����уC�x���g���ԃ`�F�b�N���g�p���āA�}�E�X���S/���E�C�x���g���쐬����
//���̂��߁A�C�x���g�ϔC��jQuery�ŋ@�\���܂��B
// pointerenter / pointerleave��pointerover / pointerout�ɑ΂��ē������Ƃ�����
//
//�T�|�[�g�FSafari 7�̂�
// Safari��mouseenter�𑗐M����p�x���������� ����F
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
//�o�O�̐����p�i����͌Â�Chrome�o�[�W�����ɂ����݂��Ă��܂����j�B
jQuery.each�i{
	mouseenter�F "�}�E�X�I�[�o�["�A
	mouseleave�F "�}�E�X�A�E�g"�A
	�|�C���^�[�F "�|�C���^�I�[�o�["�A
	pointerleave�F "�|�C���^�A�E�g"
�֐��iorig�Afix�j{
	jQuery.event.special [orig] = {
		delegateType�F�C���A
		bindType�F�C���A

		�n���h���Ffunction�ievent�j{
			var ret�A
				�^�[�Q�b�g=����A
				related = event.relatedTarget�A
				handleObj = event.handleObj;

			// mouseenter / leave�̏ꍇ�Arelated���^�[�Q�b�g�̊O���ɂ���ꍇ�̓n���h�����Ăяo���܂��B
			// NB�F�}�E�X���u���E�U�E�B���h�E���o����������肵���ꍇ�ArelatedTarget�͂���܂���
			if�i�Irelated ||�irelated�I== target &&�IjQuery.contains�itarget�Arelated�j�j�j�j{
				event.type = handleObj.origType;
				ret = handleObj.handler.apply�ithis�Aarguments�j;
				event.type =�C���B
			}
			ret��Ԃ��B
		}
	;
;�j�j;

jQuery.fn.extend�i{

	on�Ffunction�i�^�C�v�A�Z���N�^�A�f�[�^�Afn�j{
		�ithis�Atypes�Aselector�Adata�Afn�j��Ԃ��܂��B
	�A
	one�Ffunction�itypes�Aselector�Adata�Afn�j{
		�ithis�Atypes�Aselector�Adata�Afn�A1�j��Ԃ��܂��B
	�A
	off�Ffunction�itypes�Aselector�Afn�j{
		var handleObj�A�^�C�v�B
		if�itypes && types.preventDefault && types.handleObj�j{

			//�ievent�j��jQuery.Event�𑗏o����
			handleObj = types.handleObj;
			jQuery�itypes.delegateTarget�j.off�i
				handleObj.namespace�H
					handleObj.origType + "" + handleObj.namespace�F
					handleObj.origType�A
				handleObj.selector�A
				handleObj.handler
			;
			�����Ԃ��Ă��������B
		}
		if�itypeof types === "�I�u�W�F�N�g"�j{

			//�itypes-object [�Aselector]�j
			for�i�^��ł����ށj{
				this.off�itype�Aselector�Atypes [type]�j;
			}
			�����Ԃ��Ă��������B
		}
		if�iselector === false || typeof selector === "�֐�"�j{

			//�itypes [�Afn]�j
			fn =�Z���N�^�B
			�Z���N�^=����`�B
		}
		if�ifn === false�j{
			fn = returnFalse;
		}
		this.each�ifunction�i�j{��Ԃ��܂��B
			jQuery.event.remove�ithis�Atypes�Afn�Aselector�j;
		;�j�j;
	}
;�j�j;


var

	/ * eslint-disable max-len * /

	// https://github.com/eslint/eslint/issues/3229���Q�Ƃ��Ă��������B
	rxhtmlTag = / <�i?! area | br | col | embed | hr | img | input | link | meta | param�j�i�i[[az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] *�j[^>] *�j\ /> / gi�A

	/ * eslint-enable * /

	//�T�|�[�g�FIE <= 10  -  11�AEdge 12  -  13�̂�
	// IE / Edge�Ő��K�\���O���[�v���g�p����Ɛ[���ȑ��x�ቺ�������N�����܂��B
	// https://connect.microsoft.com/IE/feedback/details/1736512/���Q�Ƃ��Ă��������B
	rnoInnerhtml = / <script | <style | <link / i�A

	// checked = "checked"�܂���checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i�A
	rcleanScript = / ^ \ s * <�I�i�H�F\ [CDATA \ [|  - �j|�i�H�F\] \] |  - �j> \ s * $ / g;

//�V�����s���܂ނ��߂ɁA�e�e�[�u������tbody��D�悵�܂�
�֐�operationTarget�ielem�Acontent�j{
	if�inodeName�ielem�A "table"�j&&
		nodeName�icontent.nodeType�I== 11�Hcontent�Fcontent.firstChild�A "tr"�j�j{

		jQuery�ielem�j.children�i "tbody"�j��Ԃ��܂��B[0] || elem;
	}

	elem��Ԃ��܂��B
}

//���S��DOM����̂��߂ɃX�N���v�g�v�f��type������u��/��������
�֐�disableScript�ielem�j{
	elem.type =�ielem.getAttribute�i "type"�j�I== null�j+ "/" + elem.type;
	elem��Ԃ��܂��B
}
�֐�restoreScript�ielem�j{
	if�i�ielem.type || ""�j.slice�i0�A5�j=== "true /"�j{
		elem.type = elem.type.slice�i5�j;
	���̑�{
		elem.removeAttribute�i "type"�j;
	}

	elem��Ԃ��܂��B
}

�֐�cloneCopyEvent�isrc�Adest�j{
	var i�Al�Atype�ApdataOld�ApdataCur�AudataOld�AudataCur�A�C�x���g�B

	if�idest.nodeType�I== 1�j{
		�߂�
	}

	// 1.�l�f�[�^���R�s�[����F�C�x���g�A�n���h���Ȃ�
	if�idataPriv.hasData�isrc�j�j{
		pdataOld = dataPriv.access�isrc�j;
		pdataCur = dataPriv.set�idest�ApdataOld�j;
		events = pdataOld.events;

		if�i�C�x���g�j{
			pdataCur.handle���폜���܂��B
			pdataCur.events = {};

			for�i�C�x���g����́j{
				for�ii = 0�Al =�C�x���g[�^�C�v] .length; i <l; i ++�j{
					jQuery.event.add�idest�Atype�Aevents [type] [i]�j;
				}
			}
		}
	}

	// 2.���[�U�[�f�[�^���R�s�[����
	if�idataUser.hasData�isrc�j�j{
		udataOld = dataUser.access�isrc�j;
		udataCur = jQuery.extend�i{}�AudataOld�j;

		dataUser.set�idest�AudataCur�j;
	}
}

// IE�̃o�O���C���A�T�|�[�g�e�X�g������
�֐�fixInput�isrc�Adest�j{
	var nodeName = dest.nodeName.toLowerCase�i�j;

	//�������ꂽ�`�F�b�N�{�b�N�X�܂��̓��W�I�{�^���̃`�F�b�N��Ԃ�ێ����܂���B
	if�inodeName === "input" && rcheckableType.test�isrc.type�j�j{
		dest.checked = src.checked;

	//�I�v�V�����̃N���[�����쐬����Ƃ��ɁA�I�������I�v�V�������f�t�H���g�̑I����Ԃɖ߂��܂���
	�����łȂ���΁inodeName === "input" || nodeName === "textarea"�j{
		dest.defaultValue = src.defaultValue;
	}
}

�֐�domManip�i�R���N�V�����A�����A�R�[���o�b�N�A�����j{

	//����q�ɂȂ����z��𕽒R������
	args = concat.apply�i[]�Aargs�j;

	var�t���O�����g�A�܂��A�X�N���v�g�AhasScript�A�m�[�h�A�h�L�������g�A
		i = 0�A
		l = collection.length�A
		iNoClone = 1  -  1�A
		�l= args [0]�A
		valueIsFunction = isFunction�ivalue�j;

	// WebKit�ł́Achecked���܂ރt���O�����g�𕡐����邱�Ƃ͂ł��܂���
	if�ivalueIsFunction ||
			�il> 1 && typeof�l=== "������" &&
				�Isupport.checkClone && rchecked.test�ivalue�j�j�j{
		return collection.each�ifunction�iindex�j{
			var self = collection.eq�iindex�j;
			if�ivalueIsFunction�j{
				args [0] = value.call�ithis�Aindex�Aself.html�i�j�j;
			}
			domManip�iself�Aargs�A�R�[���o�b�N�A�����j�B
		;�j�j;
	}

	if�il�j{
		fragment = buildFragment�iargs�A�R���N�V����[0] .ownerDocument�Afalse�Acollection�A�����j;
		first = fragment.firstChild;

		if�ifragment.childNodes.length === 1�j{
			�t���O�����g=�ŏ��B
		}

		//�R�[���o�b�N���Ăяo�����߂ɁA�V�����R���e���c�܂��͖������ꂽ�v�f�ւ̋�����v������
		if�i�ŏ���||�͖�������܂��j{
			scripts = jQuery.map�igetAll�ifragment�A "script"�j�AdisableScript�j;
			hasScripts = scripts.length;

			//�Ō�̃A�C�e���Ɍ��̃t���O�����g���g�p����
			//�ŏ��̂��̂ł͂Ȃ��I������\�������邽��
			//����̏󋵂Ō���ċ�ɂ���Ă���i��8070�j�B
			for�i; i <l; i ++�j{
				node = fragment;

				if�ii�I== iNoClone�j{
					node = jQuery.clone�inode�Atrue�Atrue�j;

					//��ŕ������邽�߂ɃN���[���X�N���v�g�ւ̎Q�Ƃ�ێ�����
					if�ihasScripts�j{

						//�T�|�[�g�FAndroid <= 4.0�̂݁APhantomJS 1�̂�
						// push.apply�i_�Aarraylike�j�͌Ñ��WebKit�ŃX���[�����
						jQuery.merge�iscripts�AgetAll�inode�A "script"�j�j;
					}
				}

				callback.call�icollection [i]�Anode�Ai�j;
			}

			if�ihasScripts�j{
				doc = scripts [scripts.length  -  1] .ownerDocument;

				//�X�N���v�g���ēx�L���ɂ���
				jQuery.map�i�X�N���v�g�ArestoreScript�j;

				//�ŏ��̕����}�����Ɏ��s�\�X�N���v�g��]������
				for�ii = 0; i <hasScripts; i ++�j{
					node = scripts [i];
					if�irscriptType.test�inode.type || ""�j&&
						�IdataPriv.access�inode�A "globalEval"�j&&
						jQuery.contains�idoc�Anode�j�j{

						if�inode.src &&�inode.type || ""�j.toLowerCase�i�j�I== "module"�j{

							//�I�v�V������AJAX�ˑ��֌W�B���݂��Ȃ��ꍇ�̓X�N���v�g�����s���܂���
							if�ijQuery._evalUrl�j{
								jQuery._evalUrl�inode.src�j;
							}
						���̑�{
							DOMEval�inode.textContent.replace�ircleanScript�A ""�j�Adoc�Anode�j;
						}
					}
				}
			}
		}
	}

	�R���N�V������Ԃ��܂��B
}

�֐�remove�ielem�Aselector�AkeepData�j{
	var�m�[�h�A
		�m�[�h=�Z���N�^�HjQuery.filter�iselector�Aelem�j�Felem�A
		�� �� �O�B

	for�i;�inode = nodes [i]�j�I= null; i ++�j{
		if�i�IkeepData && node.nodeType === 1�j{
			jQuery.cleanData�igetAll�inode�j�j;
		}

		if�inode.parentNode�j{
			if�ikeepData && jQuery.contains�inode.ownerDocument�Anode�j�j{
				setGlobalEval�igetAll�inode�A "script"�j�j;
			}
			node.parentNode.removeChild�inode�j;
		}
	}

	elem��Ԃ��܂��B
}

jQuery.extend�i{
	htmlPrefilter�Ffunction�ihtml�j{
		html.replace�irxhtmlTag�A "<$ 1> </ $ 2>"�j��Ԃ��܂��B
	�A

	clone�Ffunction�ielem�AdataAndEvents�AdeepDataAndEvents�j{
		var i�Al�AsrcElements�AdestElements�A
			clone = elem.cloneNode�itrue�j�A
			inPage = jQuery.contains�ielem.ownerDocument�Aelem�j;

		// IE�̃N���[���쐬�̖����C��
		if�i�Isupport.noCloneChecked &&�ielem.nodeType === 1 || elem.nodeType === 11�j&&
				�IjQuery.isXMLDoc�ielem�j�j{

			//�p�t�H�[�}���X��̗��R����A������Sizzle������܂��Bhttps://jsperf.com/getall-vs-sizzle/2
			destElements = getAll�iclone�j;
			srcElements = getAll�ielem�j;

			�ii = 0�Al = srcElements.length; i <1; i ++�j{�ɑ΂���
				fixInput�isrcElements [i]�AdestElements [i]�j;
			}
		}

		//���̃C�x���g����N���[���ɃC�x���g���R�s�[����
		if�idataAndEvents�j{
			if�ideepDataAndEvents�j{
				srcElements = srcElements || getAll�ielem�j;
				destElements = destElements || getAll�i�N���[���j�B

				�ii = 0�Al = srcElements.length; i <1; i ++�j{�ɑ΂���
					cloneCopyEvent�isrcElements [i]�AdestElements [i]�j;
				}
			���̑�{
				cloneCopyEvent�ielem�Aclone�j;
			}
		}

		//�X�N���v�g�]��������ۑ�����
		destElements = getAll�iclone�A "script"�j;
		if�idestElements.length> 0�j{
			setGlobalEval�idestElements�A�IinPage && getAll�ielem�A "script"�j�j;
		}

		//�N���[���Z�b�g��Ԃ�
		�N���[����Ԃ��܂��B
	�A

	cleanData�Ffunction�ielems�j{
		var�f�[�^�A�v�f�A�^�C�v�A
			special = jQuery.event.special�A
			�� �� �O�B

		for�i;�ielem = elems [i]�j�I==����`; i ++�j{
			if�iacceptData�ielem�j�j{
				if�i�idata = elem [dataPriv.expando]�j�j{
					if�idata.events�j{
						for�idata.events����́j{
							if�ispecial [type]�j{
								jQuery.event.remove�ielem�Atype�j;

							//�����jQuery.event.remove�̃I�[�o�[�w�b�h��������邽�߂̃V���[�g�J�b�g�ł�
							���̑�{
								jQuery.removeEvent�ielem�Atype�Adata.handle�j;
							}
						}
					}

					//�T�|�[�g�FChrome <= 35  -  45+
					// delete���g�p��������undefined�������܂��B�f�[�^��remove���Q�Ƃ��Ă��������B
					elem [dataPriv.expando] =����`�B
				}
				if�ielem [dataUser.expando]�j{

					//�T�|�[�g�FChrome <= 35  -  45+
					// delete���g�p��������undefined�������܂��B�f�[�^��remove���Q�Ƃ��Ă��������B
					elem [dataUser.expando] =����`�B
				}
			}
		}
	}
;�j�j;

jQuery.fn.extend�i{
	�؂藣���Ffunction�iselector�j{
		remove�ithis�Aselector�Atrue�j��Ԃ��܂��B
	�A

	�폜����Ffunction�iselector�j{
		remove�ithis�Aselector�j��Ԃ��܂��B
	�A

	�e�L�X�g�F�֐��i�l�j{
		���^�[���A�N�Z�X�ithis�Afunction�ivalue�j{
			�߂�l===����`�H
				jQuery.text�ithis�j�F
				this.empty�i�j�Beach�ifunction�i�j{
					if�ithis.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9�j{
						this.textContent = value;
					}
				;�j�j;
		null�Avalue�Aarguments.length�j;
	�A

	�ǉ��Ffunction�i�j{
		domManip�ithis�Aarguments�Afunction�ielem�j{��Ԃ��܂��B
			if�ithis.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9�j{
				var target = editingTarget�ithis�Aelem�j;
				target.appendChild�ielem�j;
			}
		;�j�j;
	�A

	�擪�ɒǉ��Ffunction�i�j{
		domManip�ithis�Aarguments�Afunction�ielem�j{��Ԃ��܂��B
			if�ithis.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9�j{
				var target = editingTarget�ithis�Aelem�j;
				target.insertBefore�ielem�Atarget.firstChild�j;
			}
		;�j�j;
	�A

	before�Ffunction�i�j{
		domManip�ithis�Aarguments�Afunction�ielem�j{��Ԃ��܂��B
			if�ithis.parentNode�j{
				this.parentNode.insertBefore�ielem�Athis�j;
			}
		;�j�j;
	�A

	��Ffunction�i�j{
		domManip�ithis�Aarguments�Afunction�ielem�j{��Ԃ��܂��B
			if�ithis.parentNode�j{
				this.parentNode.insertBefore�ielem�Athis.nextSibling�j;
			}
		;�j�j;
	�A

	��Ffunction�i�j{
		var elem�A
			�� �� �O�B

		for�i;�ielem = this [i]�j�I= null; i ++�j{
			if�ielem.nodeType === 1�j{

				//���������[�N��h��
				jQuery.cleanData�igetAll�ielem�Afalse�j�j;

				//�c��̃m�[�h���폜���܂�
				elem.textContent = "";
			}
		}

		�����Ԃ��Ă��������B
	�A

	clone�Ffunction�idataAndEvents�AdeepDataAndEvents�j{
		dataAndEvents = dataAndEvents == null�Hfalse�FdataAndEvents�B
		deepDataAndEvents = deepDataAndEvents == null�HdataAndEvents�FdeepDataAndEvents;

		this.map�ifunction�i�j{��Ԃ�
			jQuery.clone�ithis�AdataAndEvents�AdeepDataAndEvents�j��Ԃ��܂��B
		;�j�j;
	�A

	html�Ffunction�ivalue�j{
		���^�[���A�N�Z�X�ithis�Afunction�ivalue�j{
			var elem = this [0] || {}�A
				i = 0�A
				l = this.length;

			if�i�l===����`&& elem.nodeType === 1�j{
				elem.innerHTML��Ԃ��܂��B
			}

			//�V���[�g�J�b�g���g�p����innerHTML���g�p�ł��邩�ǂ������m�F
			if�itypeof value === "string" &&�IrnoInnerhtml.test�ivalue�j&&
				�IwrapMap [�irtagName.exec�ivalue�j|| [""�A ""]�j[1] .toLowerCase�i�j]�j{

				value = jQuery.htmlPrefilter�ivalue�j;

				�����Ă�������{
					for�i; i <l; i ++�j{
						elem = this [i] || {};

						//�v�f�m�[�h���폜���ă��������[�N��h��
						if�ielem.nodeType === 1�j{
							jQuery.cleanData�igetAll�ielem�Afalse�j�j;
							elem.innerHTML = value;
						}
					}

					elem = 0�B

				// innerHTML���g�p����Ɨ�O���X���[�����ꍇ�́Afallback���\�b�h���g�p����
				}�L���b�`�iE�j{}
			}

			if�ielem�j{
				this.empty�i�j�Bappend�ivalue�j;
			}
		null�Avalue�Aarguments.length�j;
	�A

	replaceWith�Ffunction�i�j{
		var ignored = [];

		//��������Ȃ��e�R���e�L�X�g�v�f��V�����R���e���c�ɒu�������ĕύX��������
		domManip�ithis�Aarguments�Afunction�ielem�j{��Ԃ��܂��B
			var parent = this.parentNode;

			if�ijQuery.inArray�i����A��������܂��j<0�j{
				jQuery.cleanData�igetAll�ithis�j�j;
				if�i�e�j{
					parent.replaceChild�ielem�Athis�j;
				}
			}

		//�R�[���o�b�N�̌Ăяo������������
		��������܂��j�B
	}
;�j�j;

jQuery.each�i{
	appendTo�F "�ǉ�"�A
	prependTo�F "prepend"�A
	insertBefore�F "�O"�A
	insertAfter�F "��"�A
	replaceAll�F "replaceWith"
�֐��i���O�A�I���W�i���j{
	jQuery.fn [name] = function�iselector�j{
		var elems�A
			ret = []�A
			insert = jQuery�i�Z���N�^�j�A
			last = insert.length  -  1�A
			�� �� �O�B

		for�i; i <= last; i ++�j{
			elems = i ===�Ō�Hthis�Fthis.clone�itrue�j;
			jQuery�iinsert [i]�j[�I���W�i��]�ielems�j;

			//�T�|�[�g�FAndroid <= 4.0�̂݁APhantomJS 1�̂�
			// push.apply�i_�Aarraylike�j�͌Ñ��WebKit�ŃX���[�����̂�// .get�i�j
			push.apply�iret�Aelems.get�i�j�j;
		}

		this.pushStack�iret�j��Ԃ��܂��B
	;
;�j�j;
var rnumnonpx = new RegExp�i "^�i" + pnum + "�j�i?! px�j[az��] + $"�A "i"�j;

var getStyles = function�ielem�j{

		//�T�|�[�g�FIE <= 11�̂݁AFirefox <= 30�i��15098�A��14150�j
		// IE�̓|�b�v�A�b�v�ō쐬���ꂽ�v�f���X���[���܂�
		//���̊ԁAFF�� "defaultView.getComputedStyle"����ăt���[���v�f���X���[���܂��B
		var view = elem.ownerDocument.defaultView;

		if�i�Iview ||�Iview.opener�j{
			view = window;
		}

		view.getComputedStyle�ielem�j��Ԃ��܂��B
	;

var rboxStyle = new RegExp�icssExpand.join�i "|"�j�A "i"�j;



�i �֐��i�j {

	// pixelPosition��boxSizingReliable�̗����̃e�X�g�����s����̂ɕK�v�ȃ��C�A�E�g��1����
	// 2�Ԗڂ̌v�Z��ߖ񂷂邽�߂ɓ����Ɏ��s����܂��B
	�֐�computeStyleTests�i�j{

		//����̓V���O���g���ł��B1�񂾂����s����K�v������܂�
		if�i�Idiv�j{
			�߂�
		}

		"container.style.cssText ="�ʒu�F��΁A���F-11111px�A���F60px; " +
			"margin-top�F1px;�p�f�B���O�F0;�{�[�_�[�F0";
		div.style.cssText =
			"�ʒu�F����;�\���F�u���b�N;�{�b�N�X�T�C�Y�F�{�[�_�[�{�b�N�X;�I�[�o�[�t���[�F�X�N���[��;" +
			"�}�[�W���F�I�[�g�A�{�[�_�[�F1�s�N�Z���A�p�f�B���O�F1�s�N�Z���A" +
			"���F60���A��F1��";
		documentElement.appendChild�i�R���e�i�j.appendChild�idiv�j;

		var divStyle = window.getComputedStyle�idiv�j;
		pixelPositionVal = divStyle.top�I== "1��";

		//�T�|�[�g�FAndroid 4.0  -  4.3�̂݁AFirefox <= 3  -  44
		trustedMarginLeftVal = roundPixelMeasures�idivStyle.marginLeft�j=== 12;

		//�T�|�[�g�FAndroid 4.0  -  4.3�̂݁ASafari <= 9.1  -  10.1�AiOS <= 7.0  -  9.3
		//�������̃X�^�C���̓p�[�Z���e�[�W�l�ŕԂ���܂����A�����ł͂���܂���
		div.style.right = "60��";
		pixelBoxStylesVal = roundPixelMeasures�idivStyle.right�j=== 36;

		//�T�|�[�g�FIE 9  -  11�̂�
		//�{�b�N�X�̃T�C�Y�ύX�̂��߂̃R���e���c���@�̌�񍐂����o����Fborder-box�v�f
		boxSizingReliableVal = roundPixelMeasures�idivStyle.width�j=== 36;

		//�T�|�[�g�FIE 9�̂�
		//�I�[�o�[�t���[�����o���܂��F�X�N���[���̂˂���igh-3699�j
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "��΂�";

		documentElement.removeChild�icontainer�j;

		// div�𖳌��ɂ��āA�������ɕۑ�����Ȃ��悤�ɂ��܂��B
		//����͊��Ɏ��s���ꂽ�`�F�b�N�̈�ɂ��Ȃ�܂�
		div = null�B
	}

	�֐�roundPixelMeasures�i����l�j{
		Math.round�iparseFloat�imeasure�j�j��Ԃ��܂��B
	}

	var pixelPositionVal�AboxSizingReliableVal�AscrollboxSizeVal�ApixelBoxStylesVal�A
		trustedMarginLeftVal�A
		container = document.createElement�i "div"�j�A
		div = document.createElement�i "div"�j;

	//����ꂽ�i�u���E�U�ȊO�́j���ő��߂ɏI������
	if�i�Idiv.style�j{
		�߂�
	}

	//�T�|�[�g�FIE <= 9  -  11�̂�
	//�������ꂽ�v�f�̃X�^�C�����������ꂽ�\�[�X�v�f�ɉe������i��8908�j
	div.style.backgroundClip = "content-box";
	div.cloneNode�itrue�j.style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend�isupport�A{
		boxSizingReliable�Ffunction�i�j{
			computeStyleTests�i�j;
			boxSizingReliableVal��Ԃ��܂��B
		�A
		pixelBoxStyles�Ffunction�i�j{
			computeStyleTests�i�j;
			pixelBoxStylesVal��Ԃ��܂��B
		�A
		pixelPosition�Ffunction�i�j{
			computeStyleTests�i�j;
			pixelPositionVal��Ԃ��܂��B
		�A
		trustedMarginLeft�Ffunction�i�j{
			computeStyleTests�i�j;
			trustedMarginLeftVal��Ԃ��܂��B
		�A
		scrollboxSize�Ffunction�i�j{
			computeStyleTests�i�j;
			scrollboxSizeVal��Ԃ��܂��B
		}
	;�j�j;
�i�j;


�֐�curCSS�ielem�A���O�A�v�Z�l�j{
	var width�AminWidth�AmaxWidth�Aret�A

		//�T�|�[�g�FFirefox 51�ȍ~
		//�ǂ������킯���v�Z�O�ɃX�^�C�����擾����
		//�Ԉ�����l���擾���邱�ƂɊւ�������C�����܂�
		//�Ɨ������v�f
		style = elem.style;

	�v�Z=�v�Z|| getStyles�ielem�j;

	// getPropertyValue�͎��̖ړI�ɕK�v�ł��B
	// .css�i 'filter'�j�iIE 9�̂݁A��12537�j
	// .css�i ' -  customProperty�j�i��3144�j
	if�i�v�Z�l�j{
		ret = calculate.getPropertyValue�iname�j|| calculate [name];

		if�iret === "" &&�IjQuery.contains�ielem.ownerDocument�Aelem�j�j{
			ret = jQuery.style�ielem�Aname�j;
		}

		//�uDean Edwards�ɂ��f���炵���n�b�N�v�ւ̃I�}�[�W��
		// Android�u���E�U�͂������̒l�̃p�[�Z���e�[�W��Ԃ��܂�
		//�������A���͊m���Ƀs�N�Z���̂悤�ł��B
		//�����CSSOM�h���t�g�d�l�Ɉᔽ���Ă��܂��F
		// https://drafts.c??sswg.org/cssom/#resolved-values
		if�i�Isupport.pixelBoxStyles�i�j&& rnumnonpx.test�iret�j&& rboxStyle.test�iname�j�j{

			//���̒l���o���Ă���
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			//�v�Z�l�����o�����߂ɐV�����l������
			style.minWidth = style.maxWidth = style.width = ret;
			ret = calculate.width;

			//�ύX�����l�����ɖ߂�
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	�߂�lret�I==����`�H

		//�T�|�[�g�FIE <= 9  -  11�̂�
		// IE��zIndex�l�𐮐��Ƃ��ĕԂ��܂��B
		ret + ""�F
		ret;
}


�֐�addGetHookIf�iconditionFn�AhookFn�j{

	//�t�b�N���`���܂��B�{���ɕK�v�ȏꍇ�͍ŏ��̎��s���`�F�b�N���܂��B
	�߂�{
		get�Ffunction�i�j{
			if�iconditionFn�i�j�j{

				//�t�b�N�͕K�v����܂���i�܂��͎g�p�ł��Ȃ����߁A�g�p�ł��܂���j�B
				//�ˑ��֌W���Ȃ��ꍇ�͍폜���܂��B
				this.get���폜���Ă��������B
				�߂�
			}

			//�t�b�N���K�v�ł��B�T�|�[�g�e�X�g���ēx���s����Ȃ��悤�ɍĒ�`���Ă��������B
			return�ithis.get = hookFn�j.apply�ithis�Aarguments�j;
		}
	;
}


var

	//�\����none�܂��̓e�[�u���Ŏn�܂�ꍇ�͓���ւ��\
	// "table"�A "table-cell"�A�܂��� "table-caption"������
	//�\���l�ɂ��ẮA��������Q�Ƃ��Ă��������Bhttps://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/�A
	rcustomProp = / ^  -  /�A
	cssShow = {�ʒu�F "���"�A�\���ݒ�F "��\��"�A�\���F "�u���b�N"}�A
	cssNormalTransform = {
		letterSpacing�F "0"�A
		fontWeight�F "400"
	�A

	cssPrefixes = ["Webkit"�A "Moz"�A "ms"]�A
	emptyStyle = document.createElement�i "div"�j.style;

//�x���_�̉\��������ړ����t���v���p�e�B�Ƀ}�b�v���ꂽcss�v���p�e�B��Ԃ��܂�
�֐�vendorPropName�iname�j{

	//�ړ����̂Ȃ��x���_���̃V���[�g�J�b�g
	if�iemptyStyle���̖��O�j{
		���O��Ԃ��܂��B
	}

	//�x���_�[�ړ����̖��O���m�F����
	var capName = name [0] .toUpperCase�i�j+ name.slice�i1�j�A
		i = cssPrefixes.length;

	while�ii--�j{
		name = cssPrefixes [i] + capName;
		if�iemptyStyle���̖��O�j{
			���O��Ԃ��܂��B
		}
	}
}

// jQuery.cssProps������������̂ɉ����ă}�b�s���O���ꂽ�v���p�e�B��Ԃ�
//�x���_�[�ړ����̃v���p�e�B�B
�֐�finalPropName�iname�j{
	var ret = jQuery.cssProps [name];
	if�i�Iret�j{
		ret = jQuery.cssProps [name] = vendorPropName�iname�j|| ��;
	}
	ret��Ԃ��B
}

�֐�setPositiveNumber�ielem�Avalue�Asubtract�j{

	//���ׂĂ̑��΁i+/-�j�l�͂��ł�
	//���̎��_�Ő��K��
	var matches = rcssNum.exec�i�l�j;
	�}�b�`��Ԃ��H

		// cssHooks�̂悤�Ɏg�p���ꂽ�ꍇ�ȂǁA����`�� "���Z"����ی삷��
		Math.max�i0�A��v����[2]  - �i���Z����|| 0�j�j+�i��v����[3] || "px"�j�F
		�l;
}

�֐�boxModelAdjustment�ielem�Adimension�Abox�AisBorderBox�Astyles�AcalculateVal�j{
	var i = dimension === "width"�H1�F0�A
		extra = 0�A
		�f���^�� �O�B

	//�����͕K�v�Ȃ���������܂���
	if�ibox ===�iisBorderBox�H "border"�F "content"�j�j�j{
		0��Ԃ��܂��B
	}

	�i; i <4; i + = 2�j{�ɂ���

		//�����̃{�b�N�X���f���̓}�[�W�������O
		if�ibox === "margin"�j{
			delta + = jQuery.css�ielem�Abox + cssExpand [i]�Atrue�Astyles�j;
		}

		//�����ɃR���e���c�{�b�N�X������ꍇ�A "padding"�A "border"�A�܂��� "margin"��T���Ă��܂��B
		if�i�IisBorderBox�j{

			//�p�f�B���O��ǉ�
			delta + = jQuery.css�ielem�A "padding" + cssExpand [i]�Atrue�Astyles�j;

			// "border"�܂��� "margin"�̏ꍇ�́Aborder��ǉ����܂�
			if�ibox�I== "�p�f�B���O"�j{
				delta + = jQuery.css�ielem�A "border" + cssExpand [i] + "Width"�Atrue�Astyles�j;

			//����������ȊO�̏ꍇ�͒ǐՂ��܂�
			���̑�{
				extra + = jQuery.css�ielem�A "border" + cssExpand [i] + "Width"�Atrue�Astyles�j;
			}

		//�{�[�_�[�{�b�N�X�icontent + padding + border�j���g���Ă����ɗ����ꍇ�A "content"��T���Ă��܂��B
		// "�p�f�B���O"�܂��� "�}�[�W��"
		���̑�{

			// "content"�̏ꍇ�A�p�f�B���O�����Z����
			if�ibox === "content"�j{
				�f���^ -  = jQuery.css�ielem�A "padding" + cssExpand [i]�Atrue�Astyles�j;
			}

			// "content"�܂��� "padding"�̏ꍇ�́Aborder������
			if�ibox�I== "margin"�j{
				�f���^ -  = jQuery.css�ielem�A "border" + cssExpand [i] + "Width"�Atrue�Astyles�j;
			}
		}
	}

	// calculateVal���w�肵�ėv�����ꂽ�ꍇ�ɁA���̃R���e���c�{�b�N�X�X�N���[���K�^�[���l������
	if�i�IisBorderBox && calculateVal> = 0�j{

		// offsetWidth / offsetHeight�́A�R���e���c�A�p�f�B���O�A�X�N���[���K�^�[�A����у{�[�_�[�̊ۂ߂����v�ł��B
		//�����̃X�N���[���a�����肵�āA�c������Z���Đ؂�̂Ă܂�
		�f���^+ = Math.max�i0�AMath.ceil�i
			elem ["offset" +����[0] .toUpperCase�i�j+ dimension.slice�i1�j]  - 
			calculateVal  - 
			�f���^ - 
			�ǉ� - 
			0.5
		;�j;
	}

	�f���^��Ԃ��܂��B
}

�֐�getWidthOrHeight�ielem�Adimension�Aextra�j{

	//�v�Z�X�^�C������n�߂�
	var styles = getStyles�ielem�j�A
		val = curCSS�ielem�Adimension�Astyles�j�A
		isBorderBox = jQuery.css�ielem�A "boxSizing"�Afalse�A�X�^�C���j=== "border-box"�A
		valueIsBorderBox = isBorderBox;

	//�T�|�[�g�FFirefox <= 54
	//�K�v�ɉ����āA�𗍂��Ă���s�N�Z���ȊO�̒l��Ԃ��܂��B
	if�irnumnonpx.test�ival�j�j{
		if�i�Iextra�j{
			val��Ԃ��܂��B
		}
		val = "auto";
	}

	//�M���ł��Ȃ��l��Ԃ��u���E�U�̏ꍇ�́A�X�^�C�����m�F���Ă�������
	// getComputedStyle�͐M�����̂Ȃ�elem.style�ɐÂ��Ƀt�H�[���o�b�N����
	valueIsBorderBox = valueIsBorderBox &&
		�isupport.boxSizingReliable�i�j|| val === elem.style [dimension]�j;

	//�l�� "auto"�̏ꍇ��offsetWidth / offsetHeight�Ƀt�H�[���o�b�N����
	//�����I�ɐݒ肳��Ă��Ȃ��C�����C���v�f�ł��ꂪ��������igh-3571�j
	//�T�|�[�g�FAndroid <= 4.1  -  4.3�̂�
	//����ĕ񍐂��ꂽ�C�����C�����@�ɂ�offsetWidth / offsetHeight���g�p����igh-3602�j
	if�ival === "auto" ||
		�IparseFloat�ival�j��jQuery.css�ielem�A "display"�Afalse�Astyles�j=== "inline"�j{

		val = elem ["offset" +����[0] .toUpperCase�i�j+ dimension.slice�i1�j];

		// offsetWidth / offsetHeight�̓{�[�_�[�{�b�N�X�̒l��񋟂��܂�
		valueIsBorderBox = true;
	}

	// ""�𐳋K�����Ď���
	val = parseFloat�ival�j|| 0;

	//�v�f�̃{�b�N�X���f���𒲐����܂�
	return�ival +
		boxModelAdjustment�i
			�G�����A
			���@�A
			�]����|| �iisBorderBox�H "border"�F "content"�j�A
			valueIsBorderBox�A
			�X�^�C���A

			//�X�N���[���K�^�[�̌v�Z��v�����邽�߂Ɍ��݂̌v�Z�T�C�Y��񋟂���igh-3589�j
			���@��
		�j
	�j+ "px";
}

jQuery.extend�i{

	//�f�t�H���g���㏑�����邽�߂̃X�^�C���v���p�e�B�t�b�N��ǉ�����
	//�X�^�C���v���p�e�B���擾����ѐݒ肷�铮��
	cssHooks�F{
		�s�����x�F{
			get�Ffunction�ielem�A�v�Z�j{
				if�i�v�Z�l�j{

					//�s�����x�����ɐ��l���擾����K�v������܂�
					var ret = curCSS�ielem�A "opacity"�j;
					ret === ""��Ԃ� "1"�Fret�B
				}
			}
		}
	�A

	//���j�b�g���Ȃ��\�������邱���̃v���p�e�B�Ɂupx�v�������I�ɒǉ����Ȃ�
	cssNumber�F{
		"animationIterationCount"�Ftrue�A
		"columnCount"�Ftrue�A
		"fillOpacity"�Ftrue�A
		"flexGrow"�Ftrue�A
		"flexShrink"�Ftrue�A
		"fontWeight"�Ftrue�A
		"lineHeight"�F�^�A
		"�s�����x"�F�^�A
		"����"�F�^�A
		"�ǎ�"�F�^�A
		"���S�l"�F�^�A
		"zIndex"�Ftrue�A
		"�Y�[��"�F�^
	�A

	//���O��ύX�������v���p�e�B��ǉ����܂�
	//�l��ݒ�܂��͎擾����
	cssProps�F{}�A

	// DOM�m�[�h��style�v���p�e�B���擾���Đݒ肵�܂�
	�X�^�C���F�֐��ielem�A���O�A�l�A�ǉ��j{

		//�e�L�X�g����уR�����g�m�[�h�ɃX�^�C����ݒ肵�Ȃ�
		if�i�Ielem || elem.nodeType === 3 || elem.nodeType === 8 ||�Ielem.style�j{
			�߂�
		}

		//���������O�ō�Ƃ��Ă��邱�Ƃ��m�F���Ă�������
		var ret�Atype�A�t�b�N�A
			origName = camelCase�iname�j�A
			isCustomProp = rcustomProp.test�iname�j�A
			style = elem.style;

		//���������O�ō�Ƃ��Ă��邱�Ƃ��m�F���Ă��������B�������͂��܂���
		// CSS�J�X�^���v���p�e�B�̏ꍇ�͒l��₢���킹����
		//���[�U�[��`�̂��̂ł��B
		if�i�IisCustomProp�j{
			name = finalPropName�iorigName�j;
		}

		//�ړ����̕t�����o�[�W�������t�b�N���Ă���A�ړ����̂Ȃ��o�[�W�������t�b�N���܂�
		hooks = jQuery.cssHooks [name] || jQuery.cssHooks [origName];

		//�l��ݒ肵�Ă��邩�ǂ������m�F���܂�
		if�ivalue�I==����`�j{
			type = typeof�l�B

			// "+ ="�܂��� " -  ="�𑊑ΐ��ɕϊ�����i��7345�j
			if�itype === "string" &&�iret = rcssNum.exec�i�l�j�j&& ret [1]�j{
				�l= adjustCSS�ielem�Aname�Aret�j;

				//�o�O��9237���C��
				type = "���l";
			}

			// null��NaN�̒l���ݒ肳��Ă��Ȃ����Ƃ��m�F����i��7116�j
			if�ivalue == null || value�I== value�j{
				�߂�
			}

			//���l���n���ꂽ�ꍇ�́A�P�ʂ�ǉ����܂��i�����CSS�v���p�e�B�������j�B
			if�itype === "number"�j{
				�l+ = ret && ret [3] || �ijQuery.cssNumber [origName]�H ""�F "px"�j;
			}

			// background- *������͌��̃N���[���̒l�ɉe������
			if�i�Isupport.clearCloneStyle && value === "" && name.indexOf�i "background"�j=== 0�j{
				style [name] = "inherit";
			}

			//�t�b�N���񋟂���Ă���ꍇ�͂��̒l���g�p���A����ȊO�̏ꍇ�͎w�肳�ꂽ�l��ݒ肵�܂�
			if�i�Ihooks ||�I�i�t�b�N�� "set"�j||
				�ivalue = hooks.set�ielem�Avalue�Aextra�j�j�I==����`�j{

				if�iisCustomProp�j{
					style.setProperty�iname�Avalue�j;
				���̑�{
					style [name] = value;
				}
			}

		���̑�{

			//�t�b�N���񋟂��ꂽ�ꍇ�A��������v�Z����Ă��Ȃ��l���擾���܂�
			if�ihooks && hooks &&�� "get"
				�iret = hooks.get�ielem�Afalse�Aextra�j�j�I==����`�j{

				ret��Ԃ��B
			}

			//�����łȂ���ΒP�ɃX�^�C���I�u�W�F�N�g����l���擾����
			�X�^�C��[���O]��Ԃ��܂��B
		}
	�A

	css�Ffunction�ielem�Aname�Aextra�Astyles�j{
		var val�Anum�A�t�b�N�A
			origName = camelCase�iname�j�A
			isCustomProp = rcustomProp.test�iname�j;

		//���������O�ō�Ƃ��Ă��邱�Ƃ��m�F���Ă��������B�������͂��܂���
		// CSS�J�X�^���v���p�e�B�̏ꍇ�͒l��ύX������
		//���[�U�[��`�̂��̂ł��B
		if�i�IisCustomProp�j{
			name = finalPropName�iorigName�j;
		}

		//�ړ����̕t�������O�̌�ɐړ����̂Ȃ����O�𑱂��Ď���
		hooks = jQuery.cssHooks [name] || jQuery.cssHooks [origName];

		//�t�b�N���񋟂��ꂽ�ꍇ�A��������v�Z�l���擾����
		if�ihooks && "hook"�̒��� "get"�j{
			val = hooks.get�ielem�Atrue�Aextra�j;
		}

		//����ȊO�̏ꍇ�A�v�Z�l���擾������@�����݂���ꍇ�͂�����g�p����
		if�ival ===����`�j{
			val = curCSS�ielem�Aname�Astyles�j;
		}

		// "normal"���v�Z�l�ɕϊ����܂�
		if�ival === "normal" && cssNormalTransform���̖��O�j{
			val = cssNormalTransform [name];
		}

		//�����܂��͏C���q���w�肳��Aval�����l�Ɍ�����ꍇ��//���l�ɂ���
		if�iextra === "" || extra�j{
			num = parseFloat�ival�j;
			extra === true��Ԃ��܂�|| isFinite�inum�jnum || �O�F�������B
		}

		val��Ԃ��܂��B
	}
;�j�j;

jQuery.each�i["height"�A "width"]�A�֐��ii�A�����j{
	jQuery.cssHooks [dimension] = {
		get�Ffunction�ielem�A�v�Z�ς݁Aextra�j{
			if�i�v�Z�l�j{

				//�����Ȃ��悤�Ɍ�����΁A����̗v�f�͎������������Ƃ��ł��܂�
				//�������A���݂̕\���X�^�C�����K�v�ł�
				rdisplayswap.test�ijQuery.css�ielem�A "display"�j�j��Ԃ��܂��B

					//�T�|�[�g�FSafari 8�ȍ~
					// Safari�̃e�[�u����ɂ�0�ȊO��offsetWidth��zero������܂�
					�\�����ύX����Ȃ�����A// getBoundingClientRect�i�j�Bwidth�B
					//�T�|�[�g�FIE <= 11�̂�
					//�ؒf���ꂽ�m�[�h��getBoundingClientRect�����s����
					// IE�ł̓G���[���������܂��B
					�i�Ielem.getClientRects�i�j�Blength ||�Ielem.getBoundingClientRect�i�j�Bwidth�j�H
						swap�ielem�AcssShow�Afunction�i�j{
							getWidthOrHeight�ielem�Adimension�Aextra�j��Ԃ��܂��B
						�j�F
						getWidthOrHeight�ielem�Adimension�Aextra�j;
			}
		�A

		set�Ffunction�ielem�Avalue�Aextra�j{
			var����v���܂��B
				styles = getStyles�ielem�j�A
				isBorderBox = jQuery.css�ielem�A "boxSizing"�Afalse�A�X�^�C���j=== "border-box"�A
				subtract = extra && boxModelAdjustment�i
					�G�����A
					���@�A
					�ǉ��́A
					isBorderBox�A
					�X�^�C��
				;

			// offset *�ƌv�Z�l���r���āA�M�����̒Ⴂ���E�{�b�N�X�̐��@���v�Z���A
			//�{�[�_�[�ƃp�f�B���O���擾���邽�߂ɃR���e���c�{�b�N�X���U������igh-3699�j
			if�iisBorderBox && support.scrollboxSize�i�j=== styles.position�j{
				���Z -  = Math.ceil�i
					elem ["offset" +����[0] .toUpperCase�i�j+ dimension.slice�i1�j]  - 
					parseFloat�istyles [dimension]�j - 
					boxModelAdjustment�ielem�Adimension�A "border"�Afalse�Astyles�j - 
					0.5
				;
			}

			//�l�������K�v�ȏꍇ�̓s�N�Z���ɕϊ�
			if�i���Z&&�imatches = rcssNum.exec�ivalue�j�j&&
				�i[3]�ƈ�v���܂�|| "px"�j�I== "px"�j{

				elem.style [dimension] = value;
				�l= jQuery.css�ielem�Adimension�j;
			}

			setPositiveNumber�ielem�Avalue�Asubtract�j��Ԃ��܂��B
		}
	;
;�j�j;

jQuery.cssHooks.marginLeft = addGetHookIf�isupport.reliableMarginLeft�A
	�֐��ielem�A�v�Z�ς݁j{
		if�i�v�Z�l�j{
			return�iparseFloat�icurCSS�ielem�A "marginLeft"�j�j||
				elem.getBoundingClientRect�i�j�Bleft  - 
					swap�ielem�A{marginLeft�F0}�Afunction�i�j{
						elem.getBoundingClientRect�i�j��Ԃ��܂��B
					�j
				�j+ "px";
		}
	}
;

//�����̃t�b�N�́A�v���p�e�B���g�����邽�߂�animate�ɂ���Ďg�p����܂��B
jQuery.each�i{
	�]���F ""�A
	�p�f�B���O�F ""�A
	�{�[�_�[�F "��"
�֐��i�v���t�B�b�N�X�A�T�t�B�b�N�X�j{
	jQuery.cssHooks [�v���t�B�b�N�X+�T�t�B�b�N�X] = {
		�@�\�i�l�j{��W�J���܂��B
			var i = 0�A
				�W�J���ꂽ= {}�A

				//������łȂ��ꍇ�͒P��̐��l�����肵�܂�
				parts = typeof value === "string"�Hvalue.split�i ""�j�F[�l];

			for�i; i <4; i ++�j{
				�W�J���ꂽ[�v���t�B�b�N�X+ cssExpand [i] +�T�t�B�b�N�X] =
					parts [i] || parts [i  -  2] || �p�[�c[0];
			}

			�W�J���ꂽ
		}
	;

	if�iprefix�I== "margin"�j{
		jQuery.cssHooks [�v���t�B�b�N�X+�T�t�B�b�N�X] .set = setPositiveNumber;
	}
;�j�j;

jQuery.fn.extend�i{
	css�Ffunction�iname�Avalue�j{
		return access�ithis�Afunction�ielem�Aname�Avalue�j{
			var�X�^�C���Alen�A
				map = {}�A
				�� �� �O�B

			if�iArray.isArray�iname�j�j{
				styles = getStyles�ielem�j;
				len = name.length;

				for�i; i <len; i ++�j{
					map [name [i]] = jQuery.css�ielem�Aname [i]�Afalse�Astyles�j;
				}

				�n�}��Ԃ��B
			}

			�߂�l�I==����`
				jQuery.style�ielem�Aname�Avalue�j�F
				jQuery.css�ielem�Aname�j;
		}�Aname�Avalue�Aarguments.length> 1�j;
	}
;�j�j;


�֐��g�D�C�[���ielem�Aoptions�Aprop�Aend�Aeasing�j{
	�V����Tween.prototype.init�ielem�Aoptions�Aprop�Aend�Aeasing�j��Ԃ��܂��B
}
jQuery.Tween = Tween;

Tween.prototype = {
	�R���X�g���N�^�FTween�A
	init�Ffunction�ielem�A�I�v�V�����A������A�I���A�ɘa�A�P�ʁj{
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur�i�j;
		this.end = end;
		this.unit = unit || �ijQuery.cssNumber [prop]�H ""�F "px"�j;
	�A
	cur�Ffunction�i�j{
		var hooks = Tween.propHooks [this.prop];

		�t�b�N��Ԃ���hooks.get�H
			hooks.get�i������j�F
			Tween.propHooks._default.get�ithis�j;
	�A
	���s�F�@�\�i�p�[�Z���g�j{
		�y�������A
			hooks = Tween.propHooks [this.prop];

		if�ithis.options.duration�j{
			this.pos = eased = jQuery.easing [this.easing]�i
				percent�Athis.options.duration *�p�[�Z���g�A0�A1�Athis.options.duration
			;
		���̑�{
			this.pos = eased = percent;
		}
		this.now =�ithis.end  -  this.start�j*�ɘa���ꂽ+ this.start;

		if�ithis.options.step�j{
			this.options.step.call�ithis.elem�Athis.now�Athis�j;
		}

		if�ihook && hooks.set�j{
			hooks.set�i����j�B
		���̑�{
			Tween.propHooks._default.set�ithis�j;
		}
		�����Ԃ��Ă��������B
	}
;

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_�f�t�H���g�F {
		get�Ffunction�itween�j{
			var����;

			// DOM�v�f�ł͂Ȃ��ꍇ�́A�v�f�̃v���p�e�B�𒼐ڎg�p���܂�
			//�܂��͈�v����X�^�C���v���p�e�B�����݂��Ȃ��ꍇ
			if�itween.elem.nodeType�I== 1 ||
				tween.elem [tween.prop]�I= null && tween.elem.style [tween.prop] == null�j{
				tween.elem [tween.prop]��Ԃ��܂��B
			}

			// 3�Ԗڂ̃p�����[�^�Ƃ��ċ�̕������.css�ɓn���ƁA�����I��
			// parseFloat�����݁A��͂����s�����ꍇ�͕�����Ƀt�H�[���o�b�N����B
			// "10px"�̂悤�ȒP���Ȓl��Float�Ƀp�[�X����܂��B
			// "rotate�i1rad�j"�̂悤�ȕ��G�Ȓl�͂��̂܂ܕԂ���܂��B
			result = jQuery.css�itween.elem�Atween.prop�A ""�j;

			//�󕶎���Anull�Aundefined�A����� "auto"��0�ɕϊ�����܂��B
			return�I����|| ����=== "auto"�H�O�F���ʁB
		�A
		set�Ffunction�itween�j{

			//�o�b�N�R���p�b�g�ɃX�e�b�v�t�b�N���g�p����B
			// cssHook������ꍇ�͂�����g�p���܂��B
			//�\�ȏꍇ��.style���g�p���A�\�ȏꍇ�̓v���[���ȃv���p�e�B���g�p���܂��B
			if�ijQuery.fx.step [tween.prop]�j{
				jQuery.fx.step [tween.prop]�itween�j;
			�����łȂ���΁itween.elem.nodeType === 1 &&
				�itween.elem.style [jQuery.cssProps [tween.prop]]�I= null ||
					jQuery.cssHooks [tween.prop]�j�j{
				jQuery.style�itween.elem�Atween.prop�Atween.now + tween.unit�j;
			���̑�{
				tween.elem [tween.prop] = tween.now;
			}
		}
	}
;

//�T�|�[�g�FIE <= 9�̂�
//�ؒf���ꂽ�m�[�h�ɐݒ肷��p�j�b�N�x�[�X�̃A�v���[�`
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set�Ffunction�itween�j{
		if�itween.elem.nodeType && tween.elem.parentNode�j{
			tween.elem [tween.prop] = tween.now;
		}
	}
;

jQuery.easing = {
	���`�F�֐��ip�j{
		p��Ԃ��܂��B
	�A
	�X�C���O�F�֐��ip�j{
		0.5��Ԃ��܂� -  Math.cos�ip * Math.PI�j/ 2;
	�A
	_default�F "�X�E�B���O"
;

jQuery.fx = Tween.prototype.init;

// 1.8�����̊g���|�C���g���o�b�N�R���p�b�g
jQuery.fx.step = {};




var
	fxNow�AinProgress�A
	rfxtypes = / ^�i�H�Ftoggle | show | hide�j$ /�A
	rrun = / queueHooks $ /;

�@�\�X�P�W���[���i�j{
	if�iinProgress�j{
		if�idocument.hidden === false && window.requestAnimationFrame�j{
			window.requestAnimationFrame�ischedule�j;
		���̑�{
			window.setTimeout�ischedule�AjQuery.fx.interval�j;
		}

		jQuery.fx.tick�i�j;
	}
}

//�����I�ɍ쐬���ꂽ�A�j���[�V�����͓����I�Ɏ��s����܂�
�֐�createFxNow�i�j{
	window.setTimeout�ifunction�i�j{
		fxNow =����`�B
	;�j�j;
	return�ifxNow = Date.now�i�j�j;
}

//�W���̃A�j���[�V�������쐬���邽�߂̃p�����[�^�𐶐�����
�֐�genFx�itype�AincludeWidth�j{
	var which�A
		i = 0�A
		attrs = {height�Ftype};

	// width���܂߂�ƁA���ׂĂ�cssExpand�l�����s���邽�߂�step�l��1�ɂȂ�܂��B
	//����ȊO�̏ꍇ�A���E�̒l���X�L�b�v���邽�߂�step�̒l��2
	includeWidth = includeWidth�H1�F0�B
	for�i; i <4; i + = 2  -  includeWidth�j{
		which = cssExpand [i];
		attrs ["margin" + which] = attrs ["padding" + which] = type;
	}

	if�iincludeWidth�j{
		attrs.opacity = attrs.width = type;
	}

	attrs��Ԃ��܂��B
}

�֐�createTween�ivalue�Aprop�Aanimation�j{
	var tween�A
		collection =�iAnimation.tweeners [prop] || []�j.concat�iAnimation.tweeners ["*"]�j�A
		index = 0�A
		length = collection.length;
	for�i; index <length; index ++�j{
		if�i�itween = collection [index] .call�ianimation�Aprop�Avalue�j�j�j�j{

			//���̃v���p�e�B�͊������܂���
			�g�D�C�[����Ԃ��܂��B
		}
	}
}

�֐�defaultPrefilter�ielem�Aprops�Aopts�j{
	var prop�Avalue�Atoggle�Ahooks�Aoldfire�ApropTween�ArestoreDisplay�Adisplay�A
		isBox = "width" in props || ������́u�����v
		anim =����A
		orig = {}�A
		style = elem.style�A
		hidden = elem.nodeType && isHiddenWithinTree�ielem�j�A
		dataShow = dataPriv.get�ielem�A "fxshow"�j;

	//�L���[�X�L�b�v�̃A�j���[�V������fx�t�b�N��������
	if�i�Iopts.queue�j{
		hooks = jQuery._queueHooks�ielem�A "fx"�j;
		if�ihooks.unqueued == null�j{
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function�i�j{
				if�i�Ihooks.unqueued�j{
					oldfire�i�j;
				}
			;
		}
		hooks.unqueued ++;

		anim.always�ifunction�i�j{

			//���ꂪ��������O��complete�n���h�����m���ɌĂяo�����悤�ɂ���
			anim.always�ifunction�i�j{
				hooks.unqueued--;
				if�i�IjQuery.queue�ielem�A "fx"�j.length�j{
					hooks.empty.fire�i�j;
				}
			;�j�j;
		;�j�j;
	}

	//�A�j���[�V�����̕\��/��\�������o
	for�iprop in prop�j�j{
		value = props [prop];
		if�irfxtypes.test�ivalue�j�j{
			��������폜���܂�[prop]�B
			toggle = toggle || �l=== "toggle";
			if�ivalue ===�i�B���H "hide"�F "show"�j�j�j{

				//���ꂪ�u�V���[�v�̏ꍇ�͔�\���ɂ����ӂ�
				//��~�����\��/��\���̃f�[�^�͂܂�����܂�
				if�ivalue === "show" && dataShow && dataShow [prop]�I==����`�j{
					hidden = true�ł��B

				//���̂��ׂĂ̖�����̕\��/��\���f�[�^�𖳎�����
				���̑�{
					��������;
				}
			}
			orig [prop] = dataShow && dataShow [prop] || jQuery.style�ielem�Aprop�j;
		}
	}

	//���ꂪ.hide�i�j�̂悤�ȉ������Ȃ��ꍇ�́A������܂��B
	propTween =�IjQuery.isEmptyObject�iprops�j;
	if�i�IpropTween && jQuery.isEmptyObject�iorig�j�j{
		�߂�
	}

	//�{�b�N�X�A�j���[�V�������́u�I�[�o�[�t���[�v����сu�\���v�X�^�C���𐧌�����
	if�iisBox && elem.nodeType === 1�j{

		//�T�|�[�g�FIE <= 9  -  11�AEdge 12  -  15
		// IE�͏ȗ��`�𐄘_���Ȃ����߁A3�̃I�[�o�[�t���[�������ׂĂ��L�^���܂�
		//�����l��overflowX��overflowY����AEdge�͒P�Ƀ~���[�����O����
		// overflowX�̒l
		opts.overflow = [style.overflow�Astyle.overflowX�Astyle.overflowY];

		// CSS�J�X�P�[�h�����Â��\��/��\���f�[�^��D�悵�ĕ\���^�C�v�����ʂ���
		restoreDisplay = dataShow && dataShow.display;
		if�irestoreDisplay == null�j{
			restoreDisplay = dataPriv.get�ielem�A "display"�j;
		}
		display = jQuery.css�ielem�A "display"�j;
		if�idisplay === "none"�j{
			if�irestoreDisplay�j{
				display = restoreDisplay;
			���̑�{

				//�������ꎞ�I�ɋ������ċ�łȂ��l���擾����
				showHide�i[elem]�Atrue�j;
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css�ielem�A "display"�j;
				showHide�i[elem]�j;
			}
		}

		//�C�����C���v�f���C�����C���u���b�N�Ƃ��ăA�j���[�g����
		if�idisplay === "inline" || display === "inline-block" && restoreDisplay�I= null�j{
			if�ijQuery.css�ielem�A "float"�j=== "none"�j{

				//�����ȕ\��/��\���A�j���[�V�����̍Ō�Ɍ��̕\���l�𕜌�����
				if�i�IpropTween�j{
					anim.done�ifunction�i�j{
						style.display = restoreDisplay;
					;�j�j;
					if�irestoreDisplay == null�j{
						display = style.display;
						restoreDisplay = display === "none"�H""�F�\�����܂��B
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if�iopts.overflow�j{
		style.overflow = "hidden";
		anim.always�ifunction�i�j{
			style.overflow = opts.overflow [0];
			style.overflowX = opts.overflow [1];
			style.overflowY = opts.overflow [2];
		;�j�j;
	}

	//�A�j���[�V�����̕\��/��\������������
	propTween = false;
	for�iorig in prop�j{

		//���̗v�f�A�j���[�V�����̈�ʓI�ȕ\��/��\���ݒ�
		if�i�IpropTween�j{
			if�idataShow�j{
				if�idataShow�ł� "hidden"�j{
					hidden = dataShow.hidden;
				}
			���̑�{
				dataShow = dataPriv.access�ielem�A "fxshow"�A{display�FrestoreDisplay}�j;
			}

			// .stop�i�j�Btoggle�i�j�����]����悤�ɉB��/�\���\�ȃg�O�����i�[����
			if�i�؂�ւ��j{
				dataShow.hidden =�Ihidden;
			}

			//�A�j���[�V����������O�ɗv�f��\������
			if�ihidden�j{
				showHide�i[elem]�Atrue�j;
			}

			/ * eslint-disable no-loop-func * /

			anim.done�ifunction�i�j{

			/ * eslint-enable no-loop-func * /

				// "hide"�A�j���[�V�����̍Ō�̃X�e�b�v�́A���ۂɂ͗v�f���B�����Ƃł�
				if�i�Ihidden�j{
					showHide�i[elem]�j;
				}
				dataPriv.remove�ielem�A "fxshow"�j;
				for�iorig in prop�j{
					jQuery.style�ielem�Aprop�Aorig [prop]�j;
				}
			;�j�j;
		}

		//�v���p�e�B���Ƃ̐ݒ�
		propTween = createTween�ihidden�HdataShow [prop]�F0�Aprop�Aanim�j;
		if�i�I�idataShow�̏�����j�j{
			dataShow [prop] = propTween.start;
			if�ihidden�j{
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter�iprops�AspecialEasing�j{
	var�C���f�b�N�X�A���O�A�C�[�W���O�A�l�A�t�b�N�B

	//�L�������P�[�X�A�X�y�V�����C�[�W���O�AcssHook�p�X�̓W�J
	for�iprops�̃C���f�b�N�X�j{
		name = camelCase�iindex�j;
		easing = specialEasing [name];
		value = props [index];
		if�iArray.isArray�ivalue�j�j{
			easing = value [1];
			�l= props [index] =�l[0];
		}

		if�iindex�I== name�j{
			props [name] = value;
			props [index]���폜���܂��B
		}

		hooks = jQuery.cssHooks [name];
		if�ihooks && "hooks in" hooks�j�j{
			value = hooks.expand�ivalue�j;
			props [name]���폜���܂��B

			//�܂�����$ .extend�ł͂���܂���A����͊����̃L�[���㏑�����܂���B
			//������ "���O"������̂� 'index'���ė��p
			for�i�l�̃C���f�b�N�X�j{
				if�i�I�i������̃C���f�b�N�X�j�j{
					props [index] = value [index];
					specialEasing [index] =�C�[�W���O;
				}
			}
		���̑�{
			specialEasing [name] = easing;
		}
	}
}

�@�\�A�j���[�V�����ielem�Aproperties�Aoptions�j{
	var���ʁA
		��~�A
		index = 0�A
		length = Animation.prefilters.length�A
		deferred = jQuery.Deferred�i�j�Balways�ifunction�i�j{

			//�Fanimated�Z���N�^��elem�ƈ�v���Ȃ�
			tick.elem���폜���܂��B
		�A�j
		tick = function�i�j{
			if�i��߂��j{
				false��Ԃ��܂��B
			}
			var currentTime = fxNow || createFxNow�i�j�A
				�c��= Math.max�i0�Aanimation.startTime + animation.duration  -  currentTime�j�A

				//�T�|�[�g�FAndroid 2.3�̂�
				//�Õ��ȃN���b�V���̃o�O�ŁA `1  - �i0.5 || 0�j`���g�����Ƃ��ł��Ȃ��i��12497�j
				temp = residual / animation.duration || 0�A
				�p�[�Z���g= 1  - ���x�A
				index = 0�A
				length = animation.tweens.length;

			for�i; index <length; index ++�j{
				animation.tweens [index] .run�i�p�[�Z���g�j;
			}

			deferred.notifyWith�ielem�A[animation�Apercent�A�c��]�j;

			//���ׂ����Ƃ������Ƃ���̂Ȃ�A
			if�i�p�[�Z���g<1 && length�j{
				�c���Ԃ��܂��B
			}

			//���ꂪ��̃A�j���[�V�����̏ꍇ�́A�ŏI�i���ʒm����������
			if�i�Ilength�j{
				deferred.notifyWith�ielem�A[animation�A1�A0]�j;
			}

			//�A�j���[�V�������������Ă��̌��_��񍐂���
			deferred.resolveWith�ielem�A[animation]�j;
			false��Ԃ��܂��B
		�A
		animation = deferred.promise�i{
			elem�Felem�A
			������FjQuery.extend�i{}�Aproperties�j�A
			opts�FjQuery.extend�itrue�A{
				specialEasing�F{}�A
				�ɘa�FjQuery.easing._default
			�A�I�v�V�����j�A
			originalProperties�F�v���p�e�B�A
			originalOptions�F�I�v�V�����A
			startTime�FfxNow || createFxNow�i�j�A
			���ԁFoptions.duration�A
			�g�D�C�[���F[]�A
			createTween�Ffunction�iprop�Aend�j{
				var tween = jQuery.Tween�ielem�Aanimation.opts�Aprop�Aend�A
						animation.opts.specialEasing [prop] || animation.opts.easing�j;
				animation.tweens.push�itween�j;
				�g�D�C�[����Ԃ��܂��B
			�A
			��~�F�@�\�igotoEnd�j{
				var index = 0�A

					//�Ō�܂Ői��ł���ꍇ�́A���ׂẴg�D�C�[�������s������
					//�����łȂ���΂��̕������΂�
					length = gotoEnd�Hanimation.tweens.length�F0;
				if�i��߂��j{
					�����Ԃ��Ă��������B
				}
				��~= true�B
				for�i; index <length; index ++�j{
					animation.tweens [index] .run�i1�j;
				}

				//�Ō�̃t���[�����Đ������Ƃ��ɉ������܂��B�����łȂ���΁A���ۂ��܂�
				if�igotoEnd�j{
					deferred.notifyWith�ielem�A[animation�A1�A0]�j;
					deferred.resolveWith�ielem�A[animation�AgotoEnd]�j;
				���̑�{
					deferred.rejectWith�ielem�A[animation�AgotoEnd]�j;
				}
				�����Ԃ��Ă��������B
			}
		�A�j
		props = animation.props;

	propFilter�iprops�Aanimation.opts.specialEasing�j;

	for�i; index <length; index ++�j{
		result = Animation.prefilters [index] .call�ianimation�Aelem�Aprops�Aanimation.opts�j;
		if�i���ʁj{
			if�iisFunction�iresult.stop�j�j{
				jQuery._queueHooks�ianimation.elem�Aanimation.opts.queue�j.stop =
					result.stop.bind�iresult�j;
			}
			���ʂ�Ԃ��܂��B
		}
	}

	jQuery.map�iprops�AcreateTween�Aanimation�j;

	if�iisFunction�ianimation.opts.start�j�j{
		animation.opts.start.call�ielem�Aanimation�j;
	}

	//�I�v�V��������R�[���o�b�N��Y�t����
	�A�j���[�V����
		.progress�ianimation.opts.progress�j
		.done�ianimation.opts.done�Aanimation.opts.complete�j
		.fail�ianimation.opts.fail�j
		.always�ianimation.opts.always�j;

	jQuery.fx.timer�i
		jQuery.extend�itick�A{
			elem�Felem�A
			anim�F�A�j���[�V�����A
			�L���[�Fanimation.opts.queue
		�j
	;

	�A�j���[�V������Ԃ��܂��B
}

jQuery.Animation = jQuery.extend�i�A�j���[�V�����A{

	�g�D�C�i�[�F{
		"*"�F[�֐��iprop�Avalue�j{
			var tween = this.createTween�iprop�Avalue�j;
			adjustCSS�itween.elem�Aprop�ArcssNum.exec�i�l�j�Atween�j;
			�g�D�C�[����Ԃ��܂��B
		]]
	�A

	�g�D�C�i�[�Ffunction�iprops�Acallback�j{
		if�iisFunction�iprops�j�j{
			callback = props;
			props = ["*"];
		���̑�{
			props = props.match�irnothtmlwhite�j;
		}

		var prop
			index = 0�A
			length = props.length;

		for�i; index <length; index ++�j{
			prop = props [index];
			Animation.tweeners [prop] = Animation.tweeners [prop] || [];
			Animation.tweeners [prop] .unshift�icallback�j;
		}
	�A

	�v���t�B���^�F[defaultPrefilter]�A

	prefilter�Ffunction�i�R�[���o�b�N�A�擪�ɒǉ��j{
		if�i�O�Ɂj{
			Animation.prefilters.unshift�i�R�[���o�b�N�j;
		���̑�{
			Animation.prefilters.push�i�R�[���o�b�N�j;
		}
	}
;�j�j;

jQuery.speed = function�ispeed�Aeasing�Afn�j{
	var opt = speed && typeof speed === "�I�u�W�F�N�g"�HjQuery.extend�i{}�Aspeed�j�F{
		�����Ffn || �Ifn &&�C�[�W���O||
			isFunction�ispeed�j&& speed�A
		���ԁF�X�s�[�h
		�C�[�W���O�Ffn &&�C�[�W���O|| easing &&�IisFunction�ieasing�j&&�C�[�W���O
	;

	// fx���I�t�̏ꍇ�͏I����Ԃɐi��
	if�ijQuery.fx.off�j{
		opt.duration = 0;

	���̑�{
		if�itypeof opt.duration�I== "number"�j{
			if�ijQuery.fx.speeds��opt.duration�j{
				opt.duration = jQuery.fx.speeds [opt.duration];

			���̑�{
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// opt.queue�𐳋K�� -  true / undefined / null  - > "fx"
	if�iopt.queue == null || opt.queue === true�j{
		opt.queue = "fx";
	}

	//�L���[
	opt.old = opt.complete;

	opt.complete = function�i�j{
		if�iisFunction�iopt.old�j�j{
			opt.old.call�ithis�j;
		}

		if�iopt.queue�j{
			jQuery.dequeue�ithis�Aopt.queue�j;
		}
	;

	opt��Ԃ��܂��B
;

jQuery.fn.extend�i{
	fadeTo�Ffunction�i�X�s�[�h�Ato�A�C�[�W���O�A�R�[���o�b�N�j{

		//�s�����x��0�ɐݒ肵����ɔ�\���̗v�f��\������
		this.filter�iisHiddenWithinTree�j.css�i "opacity"�A0�j.show�i�j��Ԃ��܂��B

			//�w�肵���l�ɃA�j���[�g����
			.end�i�j�Banimate�i{opacity�Fto}�A�X�s�[�h�A�C�[�W���O�A�R�[���o�b�N�j;
	�A
	�A�j���[�g�F�@�\�i�v���b�v�A�X�s�[�h�A�C�[�W���O�A�R�[���o�b�N�j{
		var empty = jQuery.isEmptyObject�iprop�j�A
			optall = jQuery.speed�i�X�s�[�h�A�C�[�W���O�A�R�[���o�b�N�j�A
			doAnimation = function�i�j{

				//�������Ƃ̊ɘa�������Ȃ��悤�ɏ�����̃R�s�[�𑀍삷��
				var anim = Animation�ithis�AjQuery.extend�i{}�Aprop�j�Aoptall�j;

				//��̃A�j���[�V�����A�܂��͎d�グ�͂����ɉ������܂�
				if�iempty || dataPriv.get�ithis�A "finish"�j�j{
					anim.stop�itrue�j;
				}
			;
			doAnimation.finish = doAnimation;

		��ɖ߂� optall.queue === false�H
			this.each�idoAnimation�j�F
			this.queue�ioptall.queue�AdoAnimation�j;
	�A
	stop�Ffunction�itype�AclearQueue�AgotoEnd�j{
		var stopQueue = function�ihooks�j{
			var stop = hooks.stop;
			hooks.stop���폜���܂��B
			��~�igotoEnd�j;
		;

		if�itypeof type�I== "string"�j{
			gotoEnd = clearQueue;
			clearQueue = type;
			type =����`
		}
		if�iclearQueue && type�I== false�j{
			this.queue�itype || "fx"�A[]�j;
		}

		this.each�ifunction�i�j{��Ԃ��܂��B
			var dequeue = true�A
				index = type�I= null && type + "queueHooks"�A
				timers = jQuery.timers�A
				data = dataPriv.get�ithis�j;

			if�iindex�j{
				if�idata [index] && data [index] .stop�j{
					stopQueue�idata [index]�j;
				}
			���̑�{
				for�i�f�[�^���̃C���f�b�N�X�j{
					if�idata [index] && data [index] .stop && rrun.test�iindex�j�j{
						stopQueue�idata [index]�j;
					}
				}
			}

			for�iindex = timers.length; index--;�j{
				if�itimers [index] .elem === this &&
					�itype == null || timers [index] .queue === type�j�j{

					timers [index] .anim.stop�igotoEnd�j;
					�f�L���[= false�B
					timers.splice�iindex�A1�j;
				}
			}

			//�Ō�̃X�e�b�v����������Ȃ������ꍇ�́A�L���[���̎��̃X�e�b�v���J�n���܂��B
			//�^�C�}�[�͌��݁A���S�ȃR�[���o�b�N���Ăяo���܂��B
			//����炪gotoEnd�������ꍇ�Ɍ���A�f�L���[���܂��B
			if�idequeue ||�IgotoEnd�j{
				jQuery.dequeue�ithis�Atype�j;
			}
		;�j�j;
	�A
	�I���F�֐��i�^�C�v�j{
		if�itype�I== false�j{
			type = type || "fx";
		}
		this.each�ifunction�i�j{��Ԃ��܂��B
			var index�A
				data = dataPriv.get�ithis�j�A
				queue = data [type + "queue"]�A
				hooks = data [type + "queueHooks"]�A
				timers = jQuery.timers�A
				����=�L���[�Hqueue.length�F0;

			//�v���C�x�[�g�f�[�^�̏I���t���O��L���ɂ���
			data.finish = true;

			//�ŏ��ɃL���[����ɂ���
			jQuery.queue�ithis�Atype�A[]�j;

			if�ihook && hooks.stop�j{
				hooks.stop.call�ithis�Atrue�j;
			}

			//�A�N�e�B�u�ȃA�j���[�V������T���Ċ���������
			for�iindex = timers.length; index--;�j{
				if�itimers [index] .elem === this && timers [index] .queue === type�j{
					timers [index] .anim.stop�itrue�j;
					timers.splice�iindex�A1�j;
				}
			}

			//�Â��L���[�ŃA�j���[�V������T���Ă���������������
			for�iindex = 0; index <length; index ++�j{
				if�iqueue [index] && queue [index] .finish�j{
					queue [index] .finish.call�ithis�j;
				}
			}

			//�d�グ�t���O���I�t�ɂ���
			data.finish���폜���܂��B
		;�j�j;
	}
;�j�j;

jQuery.each�i["toggle"�A "show"�A "hide"]�A�֐��ii�Aname�j{
	var cssFn = jQuery.fn [name];
	jQuery.fn [name] = function�i�X�s�[�h�A�C�[�W���O�A�R�[���o�b�N�j{
		�߂葬�x== null || typeof speed === "�u�[���l"�H
			cssFn.apply�i����A�����j�F
			this.animate�igenFx�iname�Atrue�j�Aspeed�Aeasing�Acallback�j;
	;
;�j�j;

// �J�X�^���A�j���[�V�����̃V���[�g�J�b�g�𐶐����܂�
jQuery.each�i{
	slideDown�FgenFx�i "show"�j�A
	slideUp�FgenFx�i "hide"�j�A
	slideToggle�FgenFx�i "toggle"�j�A
	fadeIn�F{opacity�F "show"}�A
	fadeOut�F{�s�����x�F "��\��"}�A
	fadeToggle�F{opacity�F "toggle"}
function�iname�Aprops�j{}
	jQuery.fn [name] = function�i�X�s�[�h�A�C�[�W���O�A�R�[���o�b�N�j{
		this.animate�i������A�X�s�[�h�A�C�[�W���O�A�R�[���o�b�N�j��Ԃ��܂��B
	;
;�j�j;

jQuery.timers = [];
jQuery.fx.tick = function�i�j{
	var timer�A
		i = 0�A
		timers = jQuery.timers;

	fxNow = Date.now�i�j;

	for�i; i <timers.length; i ++�j{
		timer = timers [i];

		//�^�C�}�[�����s���A������������S�ɂ�����폜����i�O������̍폜���\�j
		if�i�Itimer�i�j&& timers [i] === timer�j{
			timers.splice�ii--�A1�j;
		}
	}

	if�i�Itimers.length�j{
		jQuery.fx.stop�i�j;
	}
	fxNow =����`�B
;

jQuery.fx.timer = function�itimer�j{
	jQuery.timers.push�itimer�j;
	jQuery.fx.start�i�j;
;

jQuery.fx.interval = 13;
jQuery.fx.start = function�i�j{
	if�iinProgress�j{
		�߂�
	}

	inProgress = true;
	�X�P�W���[���i�j;
;

jQuery.fx.stop = function�i�j{
	inProgress = null�B
;

jQuery.fx.speeds = {
	�x���F600�A
	�����F200�A

	//�f�t�H���g���x
	_�f�t�H���g�F400
;


//���𓾂āAClint Helfers�ɂ��v���O�C������ɂ��Ă��܂��B
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function�itime�Atype�j{
	time = jQuery.fx jQuery.fx.speeds [����] || ���Ԃł��B
	type = type || "fx";

	this.queue�itype�Afunction�inext�Ahooks�j{��Ԃ��܂��B
		var timeout = window.setTimeout�inext�Atime�j;
		hooks.stop = function�i�j{
			window.clearTimeout�i�^�C���A�E�g�j;
		;
	;�j�j;
;


�i �֐��i�j {
	var input = document.createElement�i "input"�j�A
		select = document.createElement�i "select"�j�A
		opt = select.appendChild�idocument.createElement�i "option"�j�j;

	input.type = "checkbox";

	//�T�|�[�g�FAndroid <= 4.3�̂�
	//�`�F�b�N�{�b�N�X�̃f�t�H���g�l�� "on"�ł�
	support.checkOn = input.value�I== "";

	//�T�|�[�g�FIE <= 11�̂�
	// selectedIndex�ɃA�N�Z�X���ăf�t�H���g�̃I�v�V������I������K�v������
	support.optSelected = opt.selected;

	//�T�|�[�g�FIE <= 11�̂�
	//���W�I�ɂȂ�����ɓ��͂����̒l������
	input = document.createElement�i "input"�j;
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
�i�j;


var boolHook�A
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend�i{
	attr�Ffunction�iname�Avalue�j{
		�A�N�Z�X��Ԃ��ithis�AjQuery.attr�Aname�Avalue�Aarguments.length> 1�j�B
	�A

	removeAttr�Ffunction�iname�j{
		this.each�ifunction�i�j{��Ԃ��܂��B
			jQuery.removeAttr�ithis�Aname�j;
		;�j�j;
	}
;�j�j;

jQuery.extend�i{
	attr�Ffunction�ielem�Aname�Avalue�j{
		var ret�A�t�b�N�A
			nType = elem.nodeType;

		//�e�L�X�g�A�R�����g�A�����m�[�h�̑������擾/�ݒ肵�Ȃ�
		if�inType === 3 || nType === 8 || nType === 2�j{
			�߂�
		}

		//�������T�|�[�g����Ă��Ȃ��ꍇ��prop�Ƀt�H�[���o�b�N
		if�itypeof elem.getAttribute === "����`"�j{
			jQuery.prop�ielem�Aname�Avalue�j��Ԃ��܂��B
		}

		//�����t�b�N�͏������̃o�[�W�����ɂ���Č��肳��܂�
		//�K�v�ȃt�b�N����`����Ă���΂�������݂܂�
		if�inType�I== 1 ||�IjQuery.isXMLDoc�ielem�j�j{
			hooks = jQuery.attrHooks [name.toLowerCase�i�j] ||
				�ijQuery.expr.match.bool.test�iname�j�HboolHook�F����`�j;
		}

		if�ivalue�I==����`�j{
			if�ivalue === null�j{
				jQuery.removeAttr�ielem�Aname�j;
				�߂�
			}

			if�ihooks && hooks &&�� "set"
				�iret = hooks.set�ielem�Avalue�Aname�j�j�I==����`�j{
				ret��Ԃ��B
			}

			elem.setAttribute�iname�Avalue + ""�j;
			�߂�l
		}

		if�ihook���� "get��hook in &&�iret = hooks.get�ielem�Aname�j�j�I== null�j{
			ret��Ԃ��B
		}

		ret = jQuery.find.attr�ielem�Aname�j;

		//���݂��Ȃ�������null��Ԃ��܂��B����`�ɐ��K�����܂�
		ret == null��Ԃ��܂����H����`�Fret�B
	�A

	attrHooks�F{
		�^�C�v�F{
			set�Ffunction�ielem�Avalue�j{
				if�i�Isupport.radioValue && value === "���W�I" &&
					nodeName�ielem�A "input"�j�j{
					var val = elem.value;
					elem.setAttribute�i "type"�Avalue�j;
					if�ival�j{
						elem.value = val;
					}
					�߂�l
				}
			}
		}
	�A

	removeAttr�Ffunction�ielem�Avalue�j{
		�ϐ����A
			i = 0�A

			//�������ɂ�HTML�ȊO�̋󔒕������܂߂邱�Ƃ��ł��܂�
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match�irnothtmlwhite�j;

		if�iattrNames && elem.nodeType === 1�j{
			while�i�iname = attrNames [i ++]�j�j{
				elem.removeAttribute�iname�j;
			}
		}
	}
;�j�j;

//�u�[���������t�b�N����
boolHook = {
	set�Ffunction�ielem�Avalue�Aname�j{
		if�ivalue === false�j{

			// false�ɐݒ肳��Ă���ꍇ�̓u�[���l�������폜���܂�
			jQuery.removeAttr�ielem�Aname�j;
		���̑�{
			elem.setAttribute�iname�Aname�j;
		}
		���O��Ԃ��܂��B
	}
;

jQuery.each�ijQuery.expr.match.bool.source.match�i/ \ w + / g�j�A�֐��ii�A���O�j{
	var getter = attrHandle [name] || jQuery.find.attr;

	attrHandle [name] = function�ielem�Aname�AisXML�j{
		var ret�A�n���h���A
			lowercaseName = name.toLowerCase�i�j;

		if�i�IisXML�j{

			//�Q�b�^�[���炱�̊֐����ꎞ�I�ɍ폜���Ė������[�v���������
			handle = attrHandle [��������];
			attrHandle [lowercaseName] = ret;
			ret = getter�ielem�Aname�AisXML�j�I= null�H
				�������̖��O�F
				�k��;
			attrHandle [��������] =�n���h���B
		}
		ret��Ԃ��B
	;
;�j�j;




var rfocusable = / ^�i�H�Finput | select | textarea | button�j$ / i�A
	rclickable = / ^�i�H�Fa | area�j$ / i;

jQuery.fn.extend�i{
	prop�Ffunction�iname�Avalue�j{
		�A�N�Z�X��Ԃ��ithis�AjQuery.prop�Aname�Avalue�Aarguments.length> 1�j�B
	�A

	removeProp�Ffunction�iname�j{
		this.each�ifunction�i�j{��Ԃ��܂��B
			������폜���܂��B[jQuery.propFix [name] || ���O];
		;�j�j;
	}
;�j�j;

jQuery.extend�i{
	prop�Ffunction�ielem�Aname�Avalue�j{
		var ret�A�t�b�N�A
			nType = elem.nodeType;

		//�e�L�X�g�A�R�����g�A�����m�[�h�̃v���p�e�B���擾/�ݒ肵�Ȃ�
		if�inType === 3 || nType === 8 || nType === 2�j{
			�߂�
		}

		if�inType�I== 1 ||�IjQuery.isXMLDoc�ielem�j�j{

			//���O���C�����ăt�b�N��t����
			name = jQuery.propFix [name] || ��;
			hooks = jQuery.propHooks [name];
		}

		if�ivalue�I==����`�j{
			if�ihooks && hooks &&�� "set"
				�iret = hooks.set�ielem�Avalue�Aname�j�j�I==����`�j{
				ret��Ԃ��B
			}

			return�ielem [name] = value�j;
		}

		if�ihook���� "get��hook in &&�iret = hooks.get�ielem�Aname�j�j�I== null�j{
			ret��Ԃ��B
		}

		elem [name]��Ԃ��܂��B
	�A

	propHooks�F{
		tabIndex�F{
			get�Ffunction�ielem�j{

				//�T�|�[�g�FIE <= 9  -  11�̂�
				// elem.tabIndex�͕K��������Ԃ��܂���
				//�����I�ɐݒ肳��Ă��Ȃ��ꍇ�͐������l
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				//�K�؂ȑ����������g�p����i��12072�j
				var tabindex = jQuery.find.attr�ielem�A "tabindex"�j;

				if�itabindex�j{
					parseInt�itabindex�A10�j��Ԃ��܂��B
				}

				if�i
					rfocusable.test�ielem.nodeName�j||
					rclickable.test�ielem.nodeName�j&&
					elem.href
				�j{
					0��Ԃ��܂��B
				}

				-1��Ԃ��܂��B
			}
		}
	�A

	propFix�F{
		"for"�F "htmlFor"�A
		"�N���X"�F "�N���X��"
	}
;�j�j;

//�T�|�[�g�FIE <= 11�̂�
// selectedIndex�v���p�e�B�ւ̃A�N�Z�X
//�u���E�U�ɑI�����ꂽ�ݒ��D�悳����
//�I�v�V����
//�Q�b�^�[�̓f�t�H���g�̃I�v�V�������I������Ă��邱�Ƃ��m�F���܂�
// optgroup�ɂ���Ƃ�
//���̃R�[�h�ł�eslint���[�� "no-unused-expressions"�͖����ł�
//���̂悤�ȉ������l�����Ă��Ȃ��̂�
if�i�Isupport.optSelected�j{
	jQuery.propHooks.selected = {
		get�Ffunction�ielem�j{

			/ * eslint no-unused-expressions�F "off" * /

			var parent = elem.parentNode;
			if�iparent && parent.parentNode�j{
				parent.parentNode.selectedIndex;
			}
			null��Ԃ��܂��B
		�A
		set�Ffunction�ielem�j{

			/ * eslint no-unused-expressions�F "off" * /

			var parent = elem.parentNode;
			if�i�e�j{
				parent.selectedIndex;

				if�iparent.parentNode�j{
					parent.parentNode.selectedIndex;
				}
			}
		}
	;
}

jQuery.each�i[
	"tabIndex"�A
	"readOnly"�A
	"maxLength"�A
	"cellSpacing"�A
	"cellPadding"�A
	"rowSpan"�A
	"colSpan"�A
	"useMap"�A
	"�g��"�A
	"contentEditable"
]�A �֐��i�j {
	jQuery.propFix [this.toLowerCase�i�j] = this;
;�j�j;




	// HTML�̎d�l�ɏ]���ċ󔒂��폜���Đ܂肽����
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	�֐�stripAndCollapse�ivalue�j{
		var tokens = value.match�irnothtmlwhite�j|| [];
		tokens.join�i ""�j��Ԃ��܂��B
	}


�֐�getClass�ielem�j{
	elem.getAttribute && elem.getAttribute�i "class"�j||��Ԃ��܂��B"";
}

�֐�classesToArray�ivalue�j{
	if�iArray.isArray�ivalue�j�j{
		�߂�l
	}
	if�itypeof value === "string"�j{
		�߂�l�Bmatch�irnothtmlwhite�j|| [];
	}
	return [];
}

jQuery.fn.extend�i{
	addClass�Ffunction�ivalue�j{
		var�N���X�Aelem�Acur�AcurValue�Aclazz�Aj�AfinalValue�A
			�� �� �O�B

		if�iisFunction�ivalue�j�j{
			this.each�ifunction�ij�j{��Ԃ��܂��B
				jQuery�ithis�j.addClass�ivalue.call�ithis�Aj�AgetClass�ithis�j�j�j;
			;�j�j;
		}

		classes = classesToArray�ivalue�j;

		if�iclasses.length�j{
			while�i�ielem = this [i ++]�j�j{
				curValue = getClass�ielem�j;
				cur = elem.nodeType === 1 &&�i "" + stripAndCollapse�icurValue�j+ ""�j;

				if�icur�j{
					�� �� �O�B
					while�i�iclazz = classes [j ++]�j�j{
						if�icur.indexOf�i "" + clazz + ""�j<0�j{
							cur + = clazz + "";
						}
					}

					//�s�v�ȃ����_�����O������邽�߁A�Ⴄ�ꍇ�ɂ̂ݑ�����Ă��������B
					finalValue = stripAndCollapse�icur�j;
					if�icurValue�I== finalValue�j{
						elem.setAttribute�i "class"�AfinalValue�j;
					}
				}
			}
		}

		�����Ԃ��Ă��������B
	�A

	removeClass�Ffunction�ivalue�j{
		var�N���X�Aelem�Acur�AcurValue�Aclazz�Aj�AfinalValue�A
			�� �� �O�B

		if�iisFunction�ivalue�j�j{
			this.each�ifunction�ij�j{��Ԃ��܂��B
				jQuery�ithis�j.removeClass�ivalue.call�ithis�Aj�AgetClass�ithis�j�j�j;
			;�j�j;
		}

		if�i�Iarguments.length�j{
			this.attr�i "class"�A ""�j;��Ԃ��܂��B
		}

		classes = classesToArray�ivalue�j;

		if�iclasses.length�j{
			while�i�ielem = this [i ++]�j�j{
				curValue = getClass�ielem�j;

				//���̎��͈��k�������コ���邽�߂ɂ����ɂ���܂��iaddClass���Q�Ɓj�B
				cur = elem.nodeType === 1 &&�i "" + stripAndCollapse�icurValue�j+ ""�j;

				if�icur�j{
					�� �� �O�B
					while�i�iclazz = classes [j ++]�j�j{

						// * all *�C���X�^���X���폜���܂�
						while�icur.indexOf�i "" + clazz + ""�j> -1�j{
							cur = cur.replace�i "" + clazz + ""�A ""�j;
						}
					}

					//�s�v�ȃ����_�����O������邽�߁A�Ⴄ�ꍇ�ɂ̂ݑ�����Ă��������B
					finalValue = stripAndCollapse�icur�j;
					if�icurValue�I== finalValue�j{
						elem.setAttribute�i "class"�AfinalValue�j;
					}
				}
			}
		}

		�����Ԃ��Ă��������B
	�A

	toggleClass�Ffunction�ivalue�AstateVal�j{
		var type = typeof�l�A
			isValidValue = type === "string" || Array.isArray�ivalue�j;

		if�itypeof stateVal === "boolean" && isValidValue�j{
			stateVal��Ԃ��܂����Hthis.addClass�ivalue�j�Fthis.removeClass�ivalue�j;
		}

		if�iisFunction�ivalue�j�j{
			this.each�ifunction�ii�j{��Ԃ��܂��B
				jQuery�ithis�j.toggleClass�i
					value.call�ithis�Ai�AgetClass�ithis�j�AstateVal�j�A
					stateVal
				;
			;�j�j;
		}

		this.each�ifunction�i�j{��Ԃ��܂��B
			var className�Ai�Aself�AclassName�B

			if�iisValidValue�j{

				//�X�̃N���X����؂�ւ���
				�� �� �O�B
				self = jQuery�ithis�j;
				classNames = classesToArray�ivalue�j;

				while�i�iclassName = classNames [i ++]�j�j{

					//�^����ꂽ�eclassName���X�y�[�X��؂�̃��X�g�Ń`�F�b�N����
					if�iself.hasClass�iclassName�j�j{
						self.removeClass�iclassName�j;
					���̑�{
						self.addClass�iclassName�j;
					}
				}

			//�N���X���S�̂�؂�ւ���
			�����łȂ���΁ivalue === undefined || type === "boolean"�j{
				className = getClass�ithis�j;
				if�iclassName�j{

					//�ݒ肳��Ă���ꍇ��className���i�[
					dataPriv.set�ithis�A "__className__"�AclassName�j;
				}

				//�v�f���N���X���������Ă���ꍇ�A�܂��� `false`���n���ꂽ�ꍇ
				//���̌�A�N���X���S�̂��폜���܂��i���݂���ꍇ�͏�L�ŕۑ��������́j�B
				//�����łȂ���ΈȑO�ɕۑ����ꂽ���̂��i��������΁j���ɖ߂�
				//�����i�[����Ă��Ȃ��ꍇ�͋�̕�����Ƀt�H�[���o�b�N����
				if�ithis.setAttribute�j{
					this.setAttribute�i "class"�A
						className || �l=== false�H
						""�F
						dataPriv.get�ithis�A "__className__"�j|| �u�v
					;
				}
			}
		;�j�j;
	�A

	hasClass�F�֐��i�Z���N�^�j{
		var className�Aelem�A
			�� �� �O�B

		className = "" +�Z���N�^+ "";
		while�i�ielem = this [i ++]�j�j{
			if�ielem.nodeType === 1 &&
				�i "" + stripAndCollapse�igetClass�ielem�j�j+ ""�j.indexOf�iclassName�j> -1�j{
					true��Ԃ��܂��B
			}
		}

		false��Ԃ��܂��B
	}
;�j�j;




var rreturn = / \ r / g;

jQuery.fn.extend�i{
	val�F�֐��i�l�j{
		var hooks�Aret�AvalueIsFunction�A
			elem = this [0];

		if�i�Iarguments.length�j{
			if�ielem�j{
				hooks = jQuery.valHooks [elem.type] ||
					jQuery.valHooks [elem.nodeName.toLowerCase�i�j];

				if�ihook &&
					�t�b�N&&�� "get"
					�iret = hooks.get�ielem�A "value"�j�j�I==����`
				�j{
					ret��Ԃ��B
				}

				ret = elem.value;

				//�ł���ʓI�ȕ�����̃P�[�X����������
				if�itypeof ret === "string"�j{
					ret.replace�irreturn�A ""�j��Ԃ��܂��B
				}

				//�l��null / undef�܂��͐��l�̏ꍇ�̏���
				ret == null��Ԃ��܂����H""�Fret;
			}

			�߂�
		}

		valueIsFunction = isFunction�ivalue�j;

		this.each�ifunction�ii�j{��Ԃ��܂��B
			var val;

			if�ithis.nodeType�I== 1�j{
				�߂�
			}

			if�ivalueIsFunction�j{
				val = value.call�ithis�Ai�AjQuery�ithis�j.val�i�j�j;
			���̑�{
				val = value;
			}

			// null / undefined�� ""�Ƃ��Ĉ����܂��B�����𕶎���ɕϊ�����
			if�ival == null�j{
				val = "";

			�����łȂ���΁itypeof val === "number"�j{
				val + = "";

			�����łȂ���΁iArray.isArray�ival�j�j{
				val = jQuery.map�ival�Afunction�ivalue�j{
					�߂�l== null�H""�F�l+ "";
				;�j�j;
			}

			hooks = jQuery.valHooks [this.type] || jQuery.valHooks [this.nodeName.toLowerCase�i�j];

			// set������`��Ԃ��ꍇ�A�ʏ�̐ݒ�ɖ߂�
			if�i�Ihooks ||�I�i "set" in hooks�j|| hooks.set�ithis�Aval�A "value"�j===����`�j{
				this.value = val;
			}
		;�j�j;
	}
;�j�j;

jQuery.extend�i{
	valHooks�F{
		�I�v�V�����F{
			get�Ffunction�ielem�j{

				var val = jQuery.find.attr�ielem�A "value"�j;
				�߂�lval�I= null�H
					val�F

					//�T�|�[�g�FIE <= 10  -  11�̂�
					// option.text����O���X���[����i��14686�A��14858�j
					//�󔒂��폜���Đ܂肽����
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse�ijQuery.text�ielem�j�j;
			}
		�A
		�I�����Ă��������F{
			get�Ffunction�ielem�j{
				var�l�A�I�v�V�����Ai�A
					options = elem.options�A
					index = elem.selectedIndex�A
					one = elem.type === "select-one"�A
					�l= 1�H�k�� �F []�A
					�ő�= 1�Hindex + 1�Foptions.length;

				if�iindex <0�j{
					�� ���ő�B

				���̑�{
					��= 1�H�C���f�b�N�X�F0�B
				}

				//�I���������ׂẴI�v�V���������[�v���܂�
				for�i; i <max; i ++�j{
					option = options [i];

					//�T�|�[�g�FIE <= 9�̂�
					// IE8-9�̓t�H�[�����Z�b�g��ɑI�����ꂽ���̂��X�V���Ȃ��i��2551�j
					if�i�ioption.selected || i === index�j&&

							//�����ɂȂ��Ă���A�܂��͖����ɂȂ��Ă���optgroup�ɂ���I�v�V������Ԃ��Ȃ�
							�Ioption.disabled &&
							�i�Ioption.parentNode.disabled ||
								�InodeName�ioption.parentNode�A "optgroup"�j�j�j{

						//�I�v�V�����̓���̒l���擾
						�l= jQuery�i�I�v�V�����j.val�i�j;

						// 1��̑I���Ŕz��͕K�v����܂���
						if�ione�j{
							�߂�l
						}

						//�����I���Ŕz���Ԃ�
						values.push�ivalue�j;
					}
				}

				�߂�l
			�A

			set�Ffunction�ielem�Avalue�j{
				var optionSet�Aoption�A
					options = elem.options�A
					values = jQuery.makeArray�ivalue�j�A
					i = options.length;

				while�ii--�j{
					option = options [i];

					/ * eslint-disable no-cond-assign * /

					if�ioption.selected =
						jQuery.inArray�ijQuery.valHooks.option.get�i�I�v�V�����j�Avalues�j> -1
					�j{
						optionSet = true;
					}

					/ * eslint-enable no-cond-assign * /
				}

				//��v���Ȃ��l���ݒ肳��Ă���ꍇ�A�u���E�U�͈�т��ē��삷��悤�ɋ������܂�
				if�i�IoptionSet�j{
					elem.selectedIndex = -1;
				}
				�߂�l
			}
		}
	}
;�j�j;

//���W�I�ƃ`�F�b�N�{�b�N�X�Q�b�^�[/�Z�b�^�[
jQuery.each�i["radio"�A "checkbox"]�Afunction�i�j{
	jQuery.valHooks [this] = {
		set�Ffunction�ielem�Avalue�j{
			if�iArray.isArray�ivalue�j�j{
				return�ielem.checked = jQuery.inArray�ijQuery�ielem�j.val�i�j�Avalue�j> -1�j;
			}
		}
	;
	if�i�Isupport.checkOn�j{
		jQuery.valHooks [this] .get = function�ielem�j{
			elem.getAttribute�i "value"�j=== null��Ԃ��܂����H"on"�Felem.value;
		;
	}
;�j�j;




//�����݂̂��܂�jQuery��Ԃ��܂�


�E�B���h�E����support.focusin = "onfocusin"�B


var rfocusMorph = / ^�i�H�Ffocusinfocus | focusoutblur�j$ /�A
	stopPropagationCallback = function�ie�j{
		e.stopPropagation�i�j;
	;

jQuery.extend�ijQuery.event�A{

	�g���K�[�F�֐��i�C�x���g�A�f�[�^�Aelem�AonlyHandlers�j{

		var i�Acur�Atmp�AbubbleType�Aontype�A�n���h���Aspecial�AlastElement�A
			eventPath = [elem || ���� ]�A
			type = hasOwn.call�ievent�A "type"�j�Hevent.type�F�C�x���g�A
			namespaces = hasOwn.call�ievent�A "namespace"�j�Hevent.namespace.split�i "�B"�j�F[];

		cur = lastElement = tmp = elem = elem || ����;

		//�e�L�X�g�m�[�h�ƃR�����g�m�[�h�ŃC�x���g���s��Ȃ�
		if�ielem.nodeType === 3 || elem.nodeType === 8�j{
			�߂�
		}

		//�t�H�[�J�X�C��/�A�E�g���郂�[�t���t�H�[�J�X/�ڂ����܂��B���������C���Ă��Ȃ����Ƃ��m�F����
		if�irfocusMorph.test�itype + jQuery.event.triggered�j�j{
			�߂�
		}

		if�itype.indexOf�i "�B"�j> -1�j{

			//���O��ԕt���g���K�[ handle�i�j���̃C�x���g�^�C�v�ƈ�v���鐳�K�\�����쐬���܂�
			namespaces = type.split�i "�B"�j;
			type = namespaces.shift�i�j;
			namespaces.sort�i�j;
		}
		ontype = type.indexOf�i "�F"�j<0 && "on" + type;

		//�Ăяo������jQuery.Event�I�u�W�F�N�g�AObject�A�܂��͒P�ɃC�x���g�^�������n�����Ƃ��ł���
		event = event [jQuery.expando]
			�C�x���g�F
			new jQuery.Event�itype�Atypeof event === "object" && event�j;

		//�l�C�e�B�u�}�X�N�̏ꍇ�̓r�b�g�}�X�N��1���g���K���܂��BjQuery�̏ꍇ�́�2�i���true�j
		event.isTrigger = onlyHandlers�H2�F3
		event.namespace = namespaces.join�i "�B"�j;
		event.rnamespace = event.namespace�H
			new RegExp�i "�i^ | \\�B�j" + namespaces.join�i "\\�B�i�H�F�B* \\�B|�j"�j+ "�i\\�B| $�j"�j�F
			�k��;

		//�C�x���g���ė��p����Ă���ꍇ�ɔ����ăC�x���g���N���[���A�b�v����
		event.result = undefined;
		if�i�Ievent.target�j{
			event.target = elem;
		}

		//���M�f�[�^�𕡐����ăC�x���g��擪�ɒǉ����A�n���h���������X�g���쐬����
		data = data == null�H
			[�C�x���g]�F
			jQuery.makeArray�idata�A[event]�j;

		//���ʂȃC�x���g�����̊O���ɕ`��ł���悤�ɂ���
		special = jQuery.event.special [type] || {};
		if�i�IonlyHandlers && special.trigger && special.trigger.apply�ielem�Adata�j=== false�j{
			�߂�
		}

		// W3C�C�x���g�d�l�ɏ]���ăC�x���g�`�d�p�X�����O�Ɍ��肷��i��9951�j
		//�h�L�������g�܂Ńo�u�����A���ɃE�B���h�E�܂Ńo�u������B�O���[�o��ownerDocument var���Ď�����i��9724�j
		if�i�IonlyHandlers &&�Ispecial.noBubble &&�IisWindow�ielem�j�j{

			bubbleType = special.delegateType || �^�C�v;
			if�i�IrfocusMorph.test�ibubbleType + type�j�j{
				cur = cur.parentNode;
			}
			for�i; cur; cur = cur.parentNode�j{
				eventPath.push�icur�j;
				tmp = cur;
			}

			//�h�L�������g�ɂȂ����ꍇ�ɂ̂݃E�B���h�E��ǉ�����i��F�v���[����obj�╪�����ꂽDOM�ł͂Ȃ��j
			if�itmp ===�ielem.ownerDocument || document�j�j{
				eventPath.push�itmp.defaultView || tmp.parentWindow || window�j;
			}
		}

		//�C�x���g�p�X�Ńn���h�����N������
		�� �� �O�B
		while�i�icur = eventPath [i ++]�j&&�Ievent.isPropagationStopped�i�j�j{
			lastElement = cur;
			event.type = i> 1
				bubbleType�F
				special.bindType || �^�C�v;

			// jQuery�n���h��
			handle =�idataPriv.get�icur�A "events"�j|| {}�j[event.type] &&
				dataPriv.get�icur�A "handle"�j;
			if�ihandle�j{
				handle.apply�icur�Adata�j;
			}

			//�l�C�e�B�u�n���h��
			handle = ontype && cur [ontype];
			if�ihandle && handle.apply && acceptData�icur�j�j{
				event.result = handle.apply�icur�Adata�j;
				if�ievent.result === false�j{
					event.preventDefault�i�j;
				}
			}
		}
		event.type = type;

		//�N���f�t�H���g�̃A�N�V������W���Ȃ������ꍇ�́A�����ł�������s����
		if�i�IonlyHandlers &&�Ievent.isDefaultPrevented�i�j�j{

			if�i�i�I�Ispecial._default ||
				special._default.apply�ieventPath.pop�i�j�Adata�j=== false�j&&
				acceptData�ielem�j�j{

				//�C�x���g�Ɠ������O�Ń^�[�Q�b�g�̃l�C�e�B�uDOM���\�b�h���Ăяo���܂��B
				//�E�B���h�E��Ńf�t�H���g�̃A�N�V���������s���܂���B�O���[�o���ϐ������݂���ꏊ�ł��i��6170�j
				if�iontype && isFunction�ielem [type]�j&&�IisWindow�ielem�j�j{

					// FOO�i�j���\�b�h���Ăяo�����Ƃ���onFOO�C�x���g���ăg���K���܂���
					tmp = elem [ontype];

					if�itmp�j{
						elem [ontype] = null�B
					}

					//���łɏ�̃o�u�������Ă���̂ŁA�����C�x���g�̍ăg���K�[��h���܂�
					jQuery.event.triggered = type;

					if�ievent.isPropagationStopped�i�j�j{
						lastElement.addEventListener�itype�AstopPropagationCallback�j;
					}

					elem [type]�i�j;

					if�ievent.isPropagationStopped�i�j�j{
						lastElement.removeEventListener�itype�AstopPropagationCallback�j;
					}

					jQuery.event.triggered = undefined;

					if�itmp�j{
						elem [ontype] = tmp;
					}
				}
			}
		}

		event.result��Ԃ��܂��B
	�A

	//�ʂ̃C�x���g���V�~�����[�g���邽�߂̃h�i�[�C�x���g�̃s�M�[�o�b�N
	// `focus�iin | out�j`�C�x���g�ɂ̂ݎg�p����܂�
	�V�~�����[�g�F�֐��i�^�C�v�A�v�f�A�C�x���g�j{
		var e = jQuery.extend�i
			�V����jQuery.Event�i�j�A
			�C�x���g�A
			{
				�^�C�v�F�^�C�v�A
				isSimulated�Ftrue
			}
		;

		jQuery.event.trigger�ie�Anull�Aelem�j;
	}

;�j�j;

jQuery.fn.extend�i{

	�g���K�[�F�@�\�i�^�C�v�A�f�[�^�j{
		this.each�ifunction�i�j{��Ԃ��܂��B
			jQuery.event.trigger�itype�Adata�Athis�j;
		;�j�j;
	�A
	triggerHandler�F�֐��i�^�C�v�A�f�[�^�j{
		var elem = this [0];
		if�ielem�j{
			jQuery.event.trigger�itype�Adata�Aelem�Atrue�j��Ԃ��܂��B
		}
	}
;�j�j;


//�T�|�[�g�FFirefox <= 44
// Firefox�ɂ̓t�H�[�J�X�iin | out�j�C�x���g������܂���
//�֘A�`�P�b�g -  https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
//�T�|�[�g�FChrome <= 48  -  49�ASafari <= 9.0  -  9.1
// focus�iin | out�j�C�x���g��focus��blur�C�x���g�̌�ɔ������܂��B
//����͎d�l�ᔽ�ł� -  http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
//�֘A�`�P�b�g -  https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if�i�Isupport.focusin�j{
	jQuery.each�i{focus�F "focusin"�A�ڂ����F "focusout"}�A�֐��iorig�Afix�j{

		//�N�����t�H�[�J�X�C��/�t�H�[�J�X�A�E�g��]��ł���ԂɒP��̃L���v�`���n���h�����h�L�������g�ɃA�^�b�`����
		var handler = function�ievent�j{
			jQuery.event.simulate�ifix�Aevent.target�AjQuery.event.fix�ievent�j�j;
		;

		jQuery.event.special [�C��] = {
			�Z�b�g�A�b�v�Ffunction�i�j{
				var doc = this.ownerDocument || ���́A
					attaches = dataPriv.access�idoc�Afix�j;

				if�i�I�Y�t�j{
					doc.addEventListener�iorig�Ahandler�Atrue�j;
				}
				dataPriv.access�idoc�Afix�A�iattach || 0�j+ 1�j;
			�A
			�����Ffunction�i�j{
				var doc = this.ownerDocument || ���́A
					attaches = dataPriv.access�idoc�Afix�j -  1;

				if�i�I�Y�t�j{
					doc.removeEventListener�iorig�Ahandler�Atrue�j;
					dataPriv.remove�idoc�Afix�j;

				���̑�{
					dataPriv.access�idoc�Afix�Aattach�j;
				}
			}
		;
	;�j�j;
}
var location = window.location;

var nonce = Date.now�i�j;

var rquery =�i/ \�H/�j;



//�N���X�u���E�UXML���
jQuery.parseXML = function�idata�j{
	var xml;
	if�i�Idata || typeof data�I== "������"�j{
		null��Ԃ��܂��B
	}

	//�T�|�[�g�FIE 9  -  11�̂�
	// IE�͖����ȓ��͂�parseFromString���X���[���܂��B
	�����Ă�������{
		xml =�inew window.DOMParser�i�j�j.parseFromString�idata�A "text / xml"�j;
	catch�ie�j{
		xml =����`�B
	}

	if�i�Ixml || xml.getElementsByTagName�i "parsererror"�j.length�j{
		jQuery.error�i "������XML�F" + data�j;
	}
	xml��Ԃ��B
;


var
	rbracket = / \ [\] $ /�A
	rCRLF = / \ r�H\ n / g�A
	rsubmitterTypes = / ^�i�H�F���M|�{�^��|�摜|���Z�b�g|�t�@�C���j$ / i�A
	rsubmittable = / ^�i?: input | select | textarea | keygen�j/ i;

function buildParams�i�v���t�B�b�N�X�Aobj�A�g���f�B�V���i���A�ǉ��j{
	var name;

	if�iArray.isArray�iobj�j�j{

		//�z�񍀖ڂ𒼗񉻂��܂��B
		jQuery.each�iobj�Afunction�ii�Av�j{
			if�i�`���I��|| rbracket.test�iprefix�j�j{

				//�e�z�񍀖ڂ��X�J���[�Ƃ��Ĉ����܂��B
				�ǉ��i�v���t�B�b�N�X�Av�j�B

			���̑�{

				//���ڂ̓X�J���[�ȊO�i�z��܂��̓I�u�W�F�N�g�j�ŁA���̐��l�C���f�b�N�X���G���R�[�h���܂��B
				buildParams�i
					prefix + "[" +�itypeof v === "object" && v�I= null�Hi�F ""�j+ "]"�A
					v�A
					�`���I��
					�ǉ�����
				;
			}
		;�j�j;

	�����łȂ���΁i�Itraditional && toType�iobj�j=== "object"�j{

		//�I�u�W�F�N�g���ڂ𒼗񉻂��܂��B
		for�iobj�̖��O�j{
			buildParams�i�v���t�B�b�N�X+ "[" +���O+ "]"�Aobj [���O]�A�g���f�B�V���i���A�ǉ��j;
		}

	���̑�{

		//�X�J�����ڂ𒼗񉻂��܂��B
		add�iprefix�Aobj�j;
	}
}

//�t�H�[���v�f�̔z��܂��͈�A�̂𒼗񉻂��܂�
//�L�[/�l���N�G���������
jQuery.param = function�ia�Atraditional�j{
	var�v���t�B�b�N�X�A
		s = []�A
		add = function�ikey�AvalueOrFunction�j{

			// value���֐��̏ꍇ�A������Ăяo���Ă��̖߂�l���g��
			var value = isFunction�ivalueOrFunction�j�H
				valueOrFunction�i�j�F
				valueOrFunction;

			s [s.length] = encodeURIComponent�ikey�j+ "=" +
				encodeURIComponent�ivalue == null�H ""�Fvalue�j;
		;

	//�z�񂪓n���ꂽ�ꍇ�́A���ꂪ�t�H�[���v�f�̔z��ł���Ƒz�肵�܂��B
	if�iArray.isArray�ia�j||�ia.jquery &&�IjQuery.isPlainObject�ia�j�j�j{

		//�t�H�[���v�f�𒼗񉻂���
		jQuery.each�ia�Afunction�i�j{
			add�ithis.name�Athis.value�j;
		;�j�j;

	���̑�{

		//�`���I�ł���΁A�u�Â��v���@�i���@1.3.2�ȏ�j���G���R�[�h���܂�
		�����łȂ���΁Aparams���ċA�I�ɃG���R�[�h���܂��B
		for�ia�̐ړ����j{
			buildParams�i�v���t�B�b�N�X�A[�v���t�B�b�N�X]�A�g���f�B�V���i���A�ǉ��j�B
		}
	}

	//���ʂ̃V���A������Ԃ��܂�
	s.join�i "��"�j��Ԃ��܂��B
;

jQuery.fn.extend�i{
	���񉻁Ffunction�i�j{
		jQuery.param�ithis.serializeArray�i�j�j��Ԃ��܂��B
	�A
	serializeArray�Ffunction�i�j{
		this.map�ifunction�i�j{��Ԃ�

			//�t�H�[���v�f���t�B���^�����O�܂��͒ǉ����邽�߂� "elements"��propHook��ǉ��ł��܂�
			var elements = jQuery.prop�ithis�A "elements"�j;
			�v�f��Ԃ��HjQuery.makeArray�ielements�j�F����B
		�j
		.filter�ifunction�i�j{
			var type = this.type;

			// fieldset [disabled]���@�\����悤��.is�i "�Fdisabled"�j���g�p
			this.name &&��Ԃ��܂�jQuery�ithis�j.is�i "�Fdisabled"�j&&
				rsubmittable.test�ithis.nodeName�j&&�IrsubmitterTypes.test�itype�j&&
				�ithis.checked ||�IrcheckableType.test�itype�j�j;
		�j
		.map�i�֐��ii�Aelem�j{
			var val = jQuery�ithis�j.val�i�j;

			if�ival == null�j{
				null��Ԃ��܂��B
			}

			if�iArray.isArray�ival�j�j{
				jQuery.map�ival�Afunction�ival�j{��Ԃ��܂��B
					�߂�l{���O�Felem.name�A�l�Fval.replace�irCRLF�A "\ r \ n"�j};
				;�j�j;
			}

			�߂�l{���O�Felem.name�A�l�Fval.replace�irCRLF�A "\ r \ n"�j};
		} �j�B�擾����i�j;
	}
;�j�j;


var
	�� �Q�O �� �^���Q�O �^ ���A
	rhash = /#.*$/�A
	rantiCache = /�i[�H��]�j_ = [^��] * /�A
	rheaders = / ^�i�B*�H�j�F[\ t] *�i[^ \ r \ n] *�j$ / mg�A

	//��7653�A��8125�A��8152�F���[�J���v���g�R�����o
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/�A
	rnoContent = / ^�i�H�FGET | HEAD�j$ /�A
	rprotocol = / ^ \ / \ //�A

	/ *�v���t�B���^
	 * 1�j�J�X�^��dataType�𓱓�����̂ɖ𗧂��܂��i��Ƃ���ajax / jsonp.js���Q�Ƃ��Ă��������j�B
	 * 2�j�����͌Ă΂�܂��F
	 *  - �A�������߂�O��
	 *  - �p�����[�^�̃V���A������is.processData��true�̏ꍇ�As.data�͕�����ł��j
	 * 3�j�L�[�̓f�[�^�^�ł�
	 * 4�j�L���b�`�I�[���V���{�� "*"���g�p�\
	 * 5�j���s��transport dataType�Ŏn�܂�A�K�v�Ȃ�� "*"�܂ő����܂�
	 * /
	�v���t�B���^= {}�A

	/ *�o�C���f�B���O��]������
	 * 1�j�L�[�̓f�[�^�^�ł�
	 * 2�j�L���b�`�I�[���V���{�� "*"���g�p�\
	 * 3�j�I����transport dataType�Ŏn�܂�A�K�v�Ȃ�� "*"�֍s��
	 * /
	transports = {}�A

	//�R�����g�v�����[�O��char�V�[�P���X������܂��i��10098�j; ���������Ȃ��߁A���k���������K�v������܂�
	allTypes = "* /"�Bconcat�i "*"�j�A

	//�h�L�������g�̏o������͂��邽�߂̃A���J�[�^�O
	originAnchor = document.createElement�i "a"�j;
	originAnchor.href = location.href;

// jQuery.ajaxPrefilter�����jQuery.ajaxTransport�̃x�[�X�u�R���X�g���N�^�v
function addToPrefiltersOrTransports�i�\���́j{

	// dataTypeExpression�̓I�v�V�����ł���A�f�t�H���g�� "*"�ł��B
	�߂�֐��idataTypeExpression�Afunc�j{

		if�itypeof dataTypeExpression�I== "������"�j{
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType�A
			i = 0�A
			dataTypes = dataTypeExpression.toLowerCase�i�j�Bmatch�irnothtmlwhite�j|| [];

		if�iisFunction�ifunc�j�j{

			// dataTypeExpression�̊edataType�ɂ���
			while�i�idataType = dataTypes [i ++]�j�j{

				//�v��������ΑO�ɒǉ�
				if�idataType [0] === "+"�j{
					dataType = dataType.slice�i1�j|| "*";
					�i�\����[�f�[�^�^] =�\����[�f�[�^�^] || []�j.unshift�ifunc�j;

				//����ȊO�̏ꍇ�͒ǉ�
				���̑�{
					�i�\����[�f�[�^�^] =�\����[�f�[�^�^] || []�j.push�ifunc�j;
				}
			}
		}
	;
}

//�v���t�B���^�[�ƃg�����X�|�[�g�̃x�[�X�����@�\
function inspectPrefiltersOrTransports�i�\���́A�I�v�V�����AoriginalOptions�AjqXHR�j{

	�����ςݕϐ�= {}�A
		seekingTransport =�istructure === transports�j;

	�֐������idataType�j{
		var���I������܂����B
		inspected [dataType] = true;
		jQuery.each�i�\����[�f�[�^�^] || []�A�֐��i_�AprefilterOrFactory�j{
			var dataTypeOrTransport = prefilterOrFactory�ioptions�AoriginalOptions�AjqXHR�j;
			if�itypeof dataTypeOrTransport === "������" &&
				�IseekingTransport &&�Iinspected [dataTypeOrTransport]�j{

				options.dataTypes.unshift�idataTypeOrTransport�j;
				inspect�idataTypeOrTransport�j;
				false��Ԃ��܂��B
			�����łȂ���΁iseekingTransport�j{
				return�I�iselected = dataTypeOrTransport�j;
			}
		;�j�j;
		�I����Ԃ��܂��B
	}

	inspect��Ԃ��ioptions.dataTypes [0]�j|| �Iinspected ["*"] && inspect�i "*"�j;
}

// ajax�I�v�V�����̓��ʂȊg��
//����� "flat"�I�v�V���������܂�
//��9887���C��
�֐�ajaxExtend�itarget�Asrc�j{
	var�L�[�A�[���A
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for�isrc�̃L�[�j{
		if�isrc [key]�I==����`�j{
			�iflatOptions [key]�Htarget�F�ideep ||�ideep = {}�j�j�j[key] = src [key];
		}
	}
	if�ideep�j{
		jQuery.extend�itrue�Atarget�Adeep�j;
	}

	�^�[�Q�b�g��Ԃ��܂��B
}

/ * ajax���N�G�X�g�ɑ΂��郌�X�|���X���������܂��B
 *  - ������dataType�������܂��icontent-type�Ɨ\�z�����dataType�̊Ԃ𒇉�܂��j�B
 *  - �Ή����鉞����Ԃ��܂�
 * /
�֐�ajaxHandleResponses�is�AjqXHR�A���X�|���X�j{

	var ct�Atype�AfinalDataType�AfirstDataType�A
		contents = s.contents�A
		dataTypes = s.dataTypes;

	// auto dataType���폜���A���̉ߒ���content-type���擾����
	while�idataTypes [0] === "*"�j{
		dataTypes.shift�i�j;
		if�ict ===����`�j{
			ct = s.mimeType || jqXHR.getResponseHeader�i "Content-Type"�j;
		}
	}

	//���m�̃R���e���c�^�C�v�������Ă��邩�ǂ������m�F���܂�
	if�ict�j{
		for�i���e����͂��Ă��������j{
			if�icontents [type] && contents [type] .test�ict�j�j{
				dataTypes.unshift�itype�j;
				�u���[�N;
			}
		}
	}

	//���҂����dataType�ɑ΂��ĉ��������邩�ǂ������m�F���܂�
	if�i���X�|���X����dataTypes [0]�j{
		finalDataType = dataTypes [0];
	���̑�{

		//�ϊ��\�ȃf�[�^�^������
		for�i�񓚂���͂��Ă��������j{
			if�i�IdataTypes [0] || s.converters [type + "" + dataTypes [0]]�j{
				finalDataType = type;
				�u���[�N;
			}
			if�i�IfirstDataType�j{
				firstDataType = type;
			}
		}

		//�܂��͍ŏ��̂��̂��g��
		finalDataType = finalDataType || firstDataType;
	}

	// dataType�����������ꍇ
	//�K�v�ɉ����ă��X�g��dataType��ǉ����܂�
	//�Ή����郌�X�|���X��Ԃ�
	if�ifinalDataType�j{
		if�ifinalDataType�I== dataTypes [0]�j{
			dataTypes.unshift�ifinalDataType�j;
		}
		���X�|���X��Ԃ�[finalDataType];
	}
}

/ *���N�G�X�g�ƌ��̃��X�|���X���^����ꂽ�ꍇ�̃`�F�[���ϊ�
 * jqXHR�C���X�^���X��responseXXX�t�B�[���h���ݒ�
 * /
�֐�ajaxConvert�is�A�����AjqXHR�AisSuccess�j{
	var conv2�A���݁Aconv�Atmp�Aprev�A
		�R���o�[�^�[= {}�A

		//�ϊ��̂��߂ɕύX����K�v������ꍇ�ɔ����āAdataTypes�̃R�s�[�𑀍삵�܂�
		dataTypes = s.dataTypes.slice�i�j;

	//�������̃L�[�ŃR���o�[�^�[�}�b�v���쐬���܂�
	if�idataTypes [1]�j{
		for�i�R���o�[�W�����̃R���o�[�W�������j{
			converters [conv.toLowerCase�i�j] = s.converters [conv];
		}
	}

	current = dataTypes.shift�i�j;

	//�e�����f�[�^�^�ɕϊ�
	while�i���݁j{

		if�is.responseFields [����]�j{
			jqXHR [s.responseFields [����]] =���X�|���X�B
		}

		//�w�肳��Ă���ꍇ��dataFilter��K�p����
		if�i�Iprev && isSuccess && s.dataFilter�j{
			response = s.dataFilter�iresponse�As.dataType�j;
		}

		prev = current
		current = dataTypes.shift�i�j;

		if�i���݁j{

			//���݂�dataType��auto�ȊO�̏ꍇ�ɂ̂ݍs����Ƃ�����܂�
			if�icurrent === "*"�j{

				����=�O

			//�O��dataType���񎩓��Ō��݂̂��̂ƈقȂ�ꍇ�̓��X�|���X��ϊ�����
			�����łȂ���΁iprev�I== "*" && prev�I== current�j{

				//�_�C���N�g�R���o�[�^�[��T��
				conv = converters [prev + "" + current] || �R���o�[�^�[["*" + current];

				//������Ȃ��ꍇ�̓y�A��T���܂�
				if�i�Iconv�j{
					for�i�R���o�[�^�[��conv2�j{

						// conv2���d�����o�͂���ꍇ
						tmp = conv2.split�i ""�j;
						if�itmp [1] === current�j{

							// prev���󂯕t�������͂ɕϊ��ł���ꍇ
							conv = converters [prev + "" + tmp [0]] ||
								�R���o�[�^�[["*" + tmp [0]];
							if�iconv�j{

								//�Ïk�����R���o�[�^
								if�iconv === true�j{
									conv = converters [conv2];

								//����ȊO�̏ꍇ�́A���ԃf�[�^�^��}�����܂�
								�����łȂ���΁iconverters [conv2]�I== true�j{
									current = tmp [0];
									dataTypes.unshift�itmp [1]�j;
								}
								�u���[�N;
							}
						}
					}
				}

				//�R���o�[�^��K�p����i�����łȂ��ꍇ�j
				if�iconv�I== true�j{

					//�G���[���������Ȃ�����A�G���[���L���b�`���ĕԂ�
					if�iconv && s.throws�j{
						response = conv�iresponse�j;
					���̑�{
						�����Ă�������{
							response = conv�iresponse�j;
						catch�ie�j{
							�߂�{
								state�F "parsererror"�A
								�G���[�F�R���o�[�W�����He�F "" + prev + "����" + current�ւ̕ϊ��Ȃ� "
							;
						}
					}
				}
			}
		}
	}

	�߂�l{��ԁF "����"�A�f�[�^�F����}�B
}

jQuery.extend�i{

	//�A�N�e�B�u�ȃN�G������ێ����邽�߂̃J�E���^
	�A�N�e�B�u�F0�A

	//���̃��N�G�X�g�̂��߂�Last-Modified�w�b�_�L���b�V��
	�ŏI�X�V���F {}�A
	etag�F{}�A

	ajaxSettings�F{
		url�Flocation.href�A
		�^�C�v�F "GET"�A
		isLocal�FrlocalProtocol.test�ilocation.protocol�j�A
		�O���[�o���F�^�A
		processData�Ftrue�A
		�񓯊��Ftrue�A
		contentType�F "application / x-www-form-urlencoded; charset = UTF-8"�A

		/ *
		�^�C���A�E�g�F0�A
		�f�[�^�Fnull�A
		dataType�Fnull�A
		���[�U�[���Fnull�A
		�p�X���[�h�Fnull�A
		�L���b�V���Fnull�A
		�X���[�Ffalse�A
		�g���f�B�V���i���F�U�A
		�w�b�_�F{}�A
		* /

		�󂯓���܂��F{
			"*"�F �����ȃ^�C�v�A
			text�F "text / plain"�A
			html�F "�e�L�X�g/ HTML"�A
			xml�F "�A�v���P�[�V����/ xml�A�e�L�X�g/ xml"�A
			json�F "application / json�Atext / javascript"
		�A

		���e�F{
			xml�F/ \ bxml \ b /�A
			html�F/ \ bhtml /�A
			json�F/ \ bjson \ b /
		�A

		responseFields�F{
			xml�F "responseXML"�A
			�e�L�X�g�F "responseText"�A
			json�F "responseJSON"
		�A

		//�f�[�^�R���o�[�^�[
		//�P��̃X�y�[�X�Ń\�[�X�i�܂��̓L���b�`�I�[�� "*"�j�ƈ���^�C�v�𕪗�����L�[
		�R���o�[�^�[�F{

			//�������e�L�X�g�ɕϊ�����
			"* text"�F������A

			// HTML����e�L�X�g�ցitrue =�ϊ��Ȃ��j
			"�e�L�X�gHTML"�Ftrue�A

			//�e�L�X�g��JSON���Ƃ��ĕ]�����܂�
			"�e�L�X�gJSON"�FJSON.parse�A

			//�e�L�X�g��xml�Ƃ��ĉ�͂��܂�
			"�e�L�X�gxml"�FjQuery.parseXML
		�A

		//�[���g�����Ă͂����Ȃ��I�v�V�����̏ꍇ�F
		//���Ȃ��������ɂ��Ȃ����g�̃J�X�^���I�v�V������ǉ����邱�Ƃ��ł��܂�
		//�����āA�쐬���ׂ��ł͂Ȃ��͂��̂���
		//�[���g������Ă��܂��iajaxExtend���Q�Ɓj
		flatOptions�F{
			url�F�{���A
			�R���e�L�X�g�Ftrue
		}
	�A

	//�{�i�I�Ȑݒ�I�u�W�F�N�g��target�ɍ쐬���܂�
	// ajaxSettings�t�B�[���h��settings�t�B�[���h�̗���������܂��B
	// target���ȗ����ꂽ�ꍇ�AajaxSettings�ɏ������݂܂��B
	ajaxSetup�Ffunction�itarget�Asettings�j{
		�ݒ��Ԃ��܂����H

			//�ݒ�I�u�W�F�N�g�̍\�z
			ajaxExtend�iajaxExtend�itarget�AjQuery.ajaxSettings�j�A�ݒ�j�F

			// ajaxSettings���g������
			ajaxExtend�ijQuery.ajaxSettings�Atarget�j;
	�A

	ajaxPrefilter�FaddToPrefiltersOrTransports�i�v���t�B���^�j�A
	ajaxTransport�FaddToPrefiltersOrTransports�i�g�����X�|�[�g�j�A

	//���C�����\�b�h
	ajax�Ffunction�iurl�Aoptions�j{

		// url���I�u�W�F�N�g�̏ꍇ�A1.5���O�̏������V�~�����[�g����
		if�itypeof url === "object"�j{
			options = url;
			url =����`
		}

		//�I�v�V�����������I�ɃI�u�W�F�N�g�ɂ���
		options = options || {};

		var�g�����X�|�[�g�A

			//�L���b�V���h�~�p�����[�^�Ȃ���URL
			cacheURL�A

			//���X�|���X�w�b�_
			responseHeadersString�A
			responseHeaders�A

			//�^�C���A�E�g�n���h��
			timeoutTimer�A

			// Url cleanup var
			urlAnchor�A

			//���N�G�X�g��ԁi���M����false�A��������true�ɂȂ�܂��j
			�������܂����A

			//�O���[�o���C�x���g�𑗏o���邩�ǂ�����m��
			fireGlobals�A

			//���[�v�ϐ�
			���A

			// URL�̃L���b�V������Ă��Ȃ�����
			�L���b�V������Ă��Ȃ��A

			//�ŏI�I�v�V�����I�u�W�F�N�g���쐬���܂�
			s = jQuery.ajaxSetup�i{}�Aoptions�j�A

			//�R�[���o�b�N�R���e�L�X�g
			callbackContext = s.context || s�A

			//�O���[�o���C�x���g�̃R���e�L�X�g��DOM�m�[�h�܂���jQuery�R���N�V�����̏ꍇ�AcallbackContext
			globalEventContext = s.context &&
				�icallbackContext.nodeType || callbackContext.jquery�j�H
					jQuery�icallbackContext�j�F
					jQuery.event�A

			//����
			deferred = jQuery.Deferred�i�j�A
			completeDeferred = jQuery.Callbacks�i "������1��"�j�A

			//�X�e�[�^�X�ˑ��̃R�[���o�b�N
			statusCode = s.statusCode || {}�A

			//�w�b�_�[�i��x�ɑ��M����܂��j
			requestHeaders = {}�A
			requestHeadersNames = {}�A

			//�f�t�H���g�̒��~���b�Z�[�W
			strAbort = "�L�����Z��"�A

			//�U��xhr
			jqXHR = {
				readyState�F0�A

				//�K�v�ɉ����ăw�b�_�n�b�V���e�[�u�����\�z����
				getResponseHeader�Ffunction�ikey�j{
					var match;
					if�i�����j{
						if�i�IresponseHeaders�j{
							responseHeaders = {};
							while�i�imatch = rheaders.exec�iresponseHeadersString�j�j�j�j{
								responseHeaders [match [1] .toLowerCase�i�j] = match [2];
							}
						}
						match = responseHeaders [key.toLowerCase�i�j];
					}
					match == null��Ԃ��܂����Hnull�F��v
				�A

				//���̕�����
				getAllResponseHeaders�Ffunction�i�j{
					�ԕi�����HresponseHeadersString�Fnull�B
				�A

				//�w�b�_���L���b�V�����܂�
				setRequestHeader�Ffunction�iname�Avalue�j{
					if�icompleted == null�j{
						name = requestHeadersNames [name.toLowerCase�i�j] =
							requestHeadersNames [name.toLowerCase�i�j] || ��;
						requestHeaders [name] = value;
					}
					�����Ԃ��Ă��������B
				�A

				//���X�|���X��content-type�w�b�_���㏑�����܂�
				overrideMimeType�Ffunction�itype�j{
					if�icompleted == null�j{
						s.mimeType = type;
					}
					�����Ԃ��Ă��������B
				�A

				//�X�e�[�^�X�ˑ��̃R�[���o�b�N
				statusCode�Ffunction�imap�j{
					var code;
					if�imap�j{
						if�i�����j{

							//�K�؂ȃR�[���o�b�N�����s����
							jqXHR.always�imap [jqXHR.status]�j;
						���̑�{

							//�Â��R�[���o�b�N��ێ�����悤�ɐV�����R�[���o�b�N��x���ǉ����܂�
							for�i�}�b�v���̃R�[�h�j{
								statusCode [code] = [statusCode [code]�Amap [code]];
							}
						}
					}
					�����Ԃ��Ă��������B
				�A

				//���N�G�X�g���L�����Z������
				���~�Ffunction�istatusText�j{
					var finalText = statusText || strAbort;
					if�i�A���j{
						transport.abort�ifinalText�j;
					}
					done�i0�AfinalText�j;
					�����Ԃ��Ă��������B
				}
			;

		//�x����Y�t
		deferred.promise�ijqXHR�j;

		//�񋟂���Ă��Ȃ��ꍇ�̓v���g�R����ǉ����܂��i�v���t�B���^�͂�������҂��邩������܂���j
		//�ݒ�I�u�W�F�N�g���̌����URL����������i��10093�F�Â������Ƃ̈�ѐ��j
		//���p�\�ȏꍇ��url�p�����[�^���g�p���܂�
		s.url =�i�iurl || s.url || location.href�j+ ""�j
			.replace�irprotocol�Alocation.protocol + "//"�j;

		//�`�P�b�g�ɏ]���ē��͂���G�C���A�X���\�b�h�I�v�V������12004
		s.type = options.method || options.type || s.method || s.type;

		// dataTypes���X�g�𒊏o���܂�
		s.dataTypes =�is.dataType || "*"�j.toLowerCase�i�j�Bmatch�irnothtmlwhite�j|| [""];

		//�I���W�������݂̃I���W���ƈ�v���Ȃ��ꍇ�́A�N���X�h���C�����N�G�X�g�����Ԃɍs���܂��B
		if�is.crossDomain == null�j{
			urlAnchor = document.createElement�i "a"�j;

			//�T�|�[�g�FIE <= 8  -  11�AEdge 12  -  15
			// URL���s���Ȍ`���̏ꍇ�AIE��href�v���p�e�B�ւ̃A�N�Z�X�ŗ�O���X���[���܂��B
			//��http://example.com:80x/
			�����Ă�������{
				urlAnchor.href = s.url;

				//�T�|�[�g�FIE <= 8  -  11�̂�
				// s.url�����΃p�X�̏ꍇ�A�A���J�[�̃z�X�g�v���p�e�B���������ݒ肳��Ȃ�
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host�I==
					urlAnchor.protocol + "//" + urlAnchor.host;
			catch�ie�j{

				// URL�̉�͒��ɃG���[�����������ꍇ�́A���ꂪcrossDomain�ł���Ƒz�肵�܂��B
				//�����ȏꍇ�̓g�����X�|�[�g�ɂ���ċ��ۂ����
				s.crossDomain = true;
			}
		}

		//�܂�������łȂ��ꍇ�̓f�[�^��ϊ�����
		if�is.data && s.processData && typeof s.data�I== "������"�j{
			s.data = jQuery.param�is.data�As.traditional�j;
		}

		//�v���t�B���^��K�p
		inspectPrefiltersOrTransports�i�v���t�B���^�As�A�I�v�V�����AjqXHR�j;

		//���N�G�X�g���v���t�B���^���Œ��~���ꂽ�ꍇ�A�����Œ�~����
		if�i�����j{
			jqXHR��Ԃ��܂��B
		}

		//���B�͋��߂�ꂽ�獡�̎��_�Ő��E�I�ȃC�x���g���N�������Ƃ��ł��܂�
		// AMD�̎g�p�V�i���I��jQuery.event������`�̏ꍇ�̓C�x���g�𔭐������Ȃ��i��15118�j
		fireGlobals = jQuery.event && s.global;

		//�V������A�̃��N�G�X�g���Ď�����
		if�ifireGlobals && jQuery.active ++ === 0�j{
			jQuery.event.trigger�i "ajaxStart"�j;
		}

		//�^��啶���ɂ���
		s.type = s.type.toUpperCase�i�j;

		//���N�G�X�g�ɃR���e���c�����邩�ǂ����𔻒f
		s.hasContent =�IrnoContent.test�is.type�j;

		// If-Modified-Since���g���Ă����ꍇ�ɔ����āAURL��ۑ����܂�
		//�����/�܂���If-None-Match�w�b�_�[
		// URL������ȒP�ɂ��邽�߂Ƀn�b�V�����폜
		cacheURL = s.url.replace�irhash�A ""�j;

		//�R���e���c�̂Ȃ����N�G�X�g�ɑ΂��邻�̑��̃I�v�V��������
		if�i�Is.hasContent�j{

			//���ɖ߂����Ƃ��ł���悤�Ƀn�b�V�����o���Ă���
			uncached = s.url.slice�icacheURL.length�j;

			//�f�[�^�����p�\�ł��菈������K�v������ꍇ�́Aurl�Ƀf�[�^��ǉ����܂�
			if�is.data &&�is.processData || typeof s.data === "������"�j�j�j{
				cacheURL + =�irquery.test�icacheURL�j�H "��"�F "�H"�j+ s.data;

				//��9682�F�ŏI�I�ȍĎ��s�Ŏg�p����Ȃ��悤�Ƀf�[�^���폜����
				s.data���폜���܂��B
			}

			//�K�v�ɉ����ăA���`�L���b�V���p�����[�^��ǉ��܂��͍X�V���܂�
			if�is.cache === false�j{
				cacheURL = cacheURL.replace�irantiCache�A "$ 1"�j;
				uncached =�irquery.test�icacheURL�j�H "��"�F "�H"�j+ "_ =" +�inonce ++�j+ uncached;
			}

			//�v�������URL�Ƀn�b�V���ƃA���`�L���b�V����ݒ肷��igh-1732�j
			s.url = cacheURL +�L���b�V������Ă��܂���B

		//���ꂪ�{�f�B�R���e���c����G���R�[�h����Ă���ꍇ�� '��20'�� '+'�ɕύX���܂��igh-2658�j
		�����łȂ���΁is.data && s.processData &&
			�is.contentType || ""�j.indexOf�i "application / x-www-form-urlencoded"�j=== 0�j{
			s.data = s.data.replace�ir20�A "+"�j;
		}

		// ifModified���[�h�̏ꍇ�́AIf-Modified-Since�܂���If-None-Match�w�b�_�[��ݒ肵�܂��B
		if�is.ifModified�j{
			if�ijQuery.lastModified [cacheURL]�j{
				jqXHR.setRequestHeader�i "If-Modified-Since"�AjQuery.lastModified [cacheURL]�j;
			}
			if�ijQuery.etag [cacheURL]�j{
				jqXHR.setRequestHeader�i "��v���Ȃ��ꍇ"�AjQuery.etag [cacheURL]�j;
			}
		}

		//�f�[�^�����M����Ă���ꍇ�͐������w�b�_��ݒ肷��
		if�is.data && s.hasContent && s.contentType�I== false || options.contentType�j{
			jqXHR.setRequestHeader�i "Content-Type"�As.contentType�j;
		}

		// dataType�ɉ����āA�T�[�o�[��Accepts�w�b�_�[��ݒ肵�܂�
		jqXHR.setRequestHeader�i
			"���ӂ���"�A
			s.dataTypes [0] && s.accepts [s.dataTypes [0]]�H
				s.accepts [s.dataTypes [0]] +
					�is.dataTypes [0]�I== "*"�H "�A" + allTypes + "; q = 0.01"�F ""�j�F
				s.accepts ["*"]
		;

		//�w�b�_�I�v�V�������`�F�b�N
		for�i����s.headers�Ɂj{
			jqXHR.setRequestHeader�ii�As.headers [i]�j;
		}

		//�J�X�^���w�b�_�[/ MIME�^�C�v�Ƒ����A�{�[�g��������
		if�is.beforeSend &&
			�is.beforeSend.call�icallbackContext�AjqXHR�As�j=== false ||�����j�j{

			//�܂��s���Ă��Ȃ��ꍇ�͒��~���Ė߂�
			jqXHR.abort�i�j��Ԃ��܂��B
		}

		//���~���邱�Ƃ̓L�����Z���ł͂Ȃ��Ȃ�܂���
		strAbort = "���~";

		//�����ɃR�[���o�b�N���C���X�g�[������
		completeDeferred.add�is.complete�j;
		jqXHR.done�is.success�j;
		jqXHR.fail�is.error�j;

		//��ʋ@�ւ𗘗p����
		transport = inspectPrefiltersOrTransports�itransports�As�Aoptions�AjqXHR�j;

		//�g�����X�|�[�g���Ȃ��ꍇ�A�������~���܂�
		if�i�Itransport�j{
			�����i-1�A "�]���Ȃ�"�j;
		���̑�{
			jqXHR.readyState = 1;

			//�O���[�o���C�x���g�𑗐M
			if�ifireGlobals�j{
				globalEventContext.trigger�i "ajaxSend"�A[jqXHR�As]�j;
			}

			//���N�G�X�g��ajaxSend���Œ��~���ꂽ�ꍇ�́A�����Œ�~����
			if�i�����j{
				jqXHR��Ԃ��܂��B
			}

			// �^�C���A�E�g
			if�is.async && s.timeout> 0�j{
				timeoutTimer = window.setTimeout�ifunction�i�j{
					jqXHR.abort�i "timeout"�j;
				s.timeout�j;
			}

			�����Ă�������{
				completed = false�B
				transport.send�irequestHeaders�Adone�j;
			catch�ie�j{

				//�������O���ăX���[���܂�
				if�i�����j{
					e�𓊂��܂��B
				}

				//���̐l�����ʂƂ��ē`�d����
				done�i-1�Ae�j;
			}
		}

		//���ׂĊ���������R�[���o�b�N
		�@�\�����i�X�e�[�^�X�AnativeStatusText�A���X�|���X�A�w�b�_�j{
			var isSuccess�A�����A�G���[�A�����A�ύX�A
				statusText = nativeStatusText;

			//�J��Ԃ��̌Ăяo���𖳎�����
			if�i�����j{
				�߂�
			}

			completed = true�B

			//�^�C���A�E�g�����݂���ꍇ�̓N���A���܂�
			if�itimeoutTimer�j{
				window.clearTimeout�itimeoutTimer�j;
			}

			//�����̃K�x�[�W�R���N�V�����̂��߂̊ԐڎQ�Ɠ]��
			//�ijqXHR�I�u�W�F�N�g���g�p�������ԂɊ֌W�Ȃ��j
			transport = undefined;

			//���X�|���X�w�b�_���L���b�V������
			responseHeadersString = headers || "";

			// readyState��ݒ肵�܂�
			jqXHR.readyState = status> 0 4�F0�B

			//�����������ǂ������m�F
			isSuccess = status> = 200 && status <300 || status === 304;

			//���X�|���X�f�[�^���擾����
			if�i�񓚁j{
				response = ajaxHandleResponses�is�AjqXHR�A���X�|���X�j;
			}

			//���Ɋ֌W�Ȃ��ϊ�����i���̂悤�ɂ���responseXXX�t�B�[���h�͏�ɐݒ肳���j
			response = ajaxConvert�is�Aresponse�AjqXHR�AisSuccess�j;

			//���������ꍇ�́A�^�`�F�[�j���O����������
			if�iisSuccess�j{

				// ifModified���[�h�̏ꍇ�́AIf-Modified-Since�܂���If-None-Match�w�b�_�[��ݒ肵�܂��B
				if�is.ifModified�j{
					modified = jqXHR.getResponseHeader�i "Last-Modified"�j;
					if�i�C���ς݁j{
						jQuery.lastModified [cacheURL] = modified;
					}
					modified = jqXHR.getResponseHeader�i "etag"�j;
					if�i�C���ς݁j{
						jQuery.etag [cacheURL] = modified;
					}
				}

				//�R���e���c���Ȃ��ꍇ
				if�istatus === 204 || s.type === "HEAD"�j{
					statusText = "nocontent";

				//�ύX����Ă��Ȃ��ꍇ
				�����łȂ���΁istatus === 304�j{
					statusText = "notmodified";

				//�f�[�^������ꍇ�́A�ϊ����܂��傤
				���̑�{
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess =�Ierror;
				}
			���̑�{

				// statusText����G���[�𒊏o���A���f���Ȃ��悤�ɐ��K������
				error = statusText;
				if�istatus ||�IstatusText�j{
					statusText = "�G���[";
					if�i�X�e�[�^�X<0�j{
						�X�e�[�^�X= 0�B
					}
				}
			}

			//�U��xhr�I�u�W�F�N�g�̃f�[�^��ݒ肵�܂�
			jqXHR.status = status�B
			jqXHR.statusText =�inativeStatusText || statusText�j+ "";

			//����/�G���[
			if�iisSuccess�j{
				deferred.resolveWith�icallbackContext�A[�����A�X�e�[�^�X�e�L�X�g�AjqXHR]�j;
			���̑�{
				deferred.rejectWith�icallbackContext�A[jqXHR�AstatusText�Aerror]�j;
			}

			//�X�e�[�^�X�ˑ��̃R�[���o�b�N
			jqXHR.statusCode�istatusCode�j;
			statusCode =����`�B

			if�ifireGlobals�j{
				globalEventContext.trigger�iisSuccess�H "ajaxSuccess"�F "ajaxError"�A
					[jqXHR�As�AisSuccess�H�����F�G���[]�j;
			}

			//����
			completeDeferred.fireWith�icallbackContext�A[jqXHR�AstatusText]�j;

			if�ifireGlobals�j{
				globalEventContext.trigger�i "ajaxComplete"�A[jqXHR�As]�j;

				//�O���[�o��AJAX�J�E���^�[����������
				if�i�I�i--jQuery.active�j�j{
					jQuery.event.trigger�i "ajaxStop"�j;
				}
			}
		}

		jqXHR��Ԃ��܂��B
	�A

	getJSON�Ffunction�iurl�Adata�Acallback�j{
		jQuery.get�iurl�Adata�Acallback�A "json"�j��Ԃ��܂��B
	�A

	getScript�Ffunction�iurl�Acallback�j{
		jQuery.get�iurl�Aundefined�Acallback�A "script"�j��Ԃ��܂��B
	}
;�j�j;

jQuery.each�i["get"�A "post"]�A�֐��ii�A���\�b�h�j{
	jQuery [method] = function�iurl�Adata�Acallback�Atype�j{

		//�f�[�^�������ȗ������ꍇ�͈������V�t�g���܂�
		if�iisFunction�idata�j�j{
			type = type || �܂�Ԃ��d�b;
			�R�[���o�b�N=�f�[�^�B
			�f�[�^=����`�B
		}

		// URL�̓I�v�V�����I�u�W�F�N�g�ɂ��邱�Ƃ��ł��܂��i���̏ꍇ��.url���K�v�ł��j
		jQuery.ajax�ijQuery.extend�i{
			URL�FURL�A
			type�F���\�b�h
			dataType�F�^�C�v�A
			�f�[�^�F�f�[�^�A
			�����F�R�[���o�b�N
		jQuery.isPlainObject�iurl�j&& url�j�j;
	;
;�j�j;


jQuery._evalUrl = function�iurl�j{
	jQuery.ajax�i{��Ԃ�
		URL�FURL�A

		//���[�U�[��ajaxSetup��ʂ��Ă�����I�[�o�[���C�h�ł���̂ŁA����𖾎��I�ɂ��܂��i��11264�j
		�^�C�v�F "GET"�A
		dataType�F "�X�N���v�g"�A
		�L���b�V���F�^�A
		�񓯊��Ffalse�A
		�O���[�o���F�U�A
		"throw"�F�^
	;�j�j;
;


jQuery.fn.extend�i{
	wrapAll�F�֐��iHTML�j{
		var wrap;

		if�ithis [0]�j{
			if�iisFunction�ihtml�j�j{
				html = html.call�ithis [0]�j;
			}

			//�^�[�Q�b�g�����b�v����v�f
			wrap = jQuery�ihtml�Athis [0] .ownerDocument�j.eq�i0�j.clone�itrue�j;

			if�ithis [0] .parentNode�j{
				wrap.insertBefore�ithis [0]�j;
			}

			wrap.map�ifunction�i�j{
				var elem = this;

				while�ielem.firstElementChild�j{
					elem = elem.firstElementChild;
				}

				elem��Ԃ��܂��B
			�ithis�j��ǉ����܂��B
		}

		�����Ԃ��Ă��������B
	�A

	wrapInner�Ffunction�ihtml�j{
		if�iisFunction�ihtml�j�j{
			this.each�ifunction�ii�j{��Ԃ��܂��B
				jQuery�ithis�j.wrapInner�ihtml.call�ithis�Ai�j�j;
			;�j�j;
		}

		this.each�ifunction�i�j{��Ԃ��܂��B
			var self = jQuery�ithis�j�A
				contents = self.contents�i�j;

			if�icontents.length�j{
				contents.wrapAll�ihtml�j;

			���̑�{
				self.append�ihtml�j;
			}
		;�j�j;
	�A

	���b�v�F�֐��iHTML�j{
		var htmlIsFunction = isFunction�ihtml�j;

		this.each�ifunction�ii�j{��Ԃ��܂��B
			jQuery�ithis�j.wrapAll�ihtmlIsFunction�Hhtml.call�ithis�Ai�j�Fhtml�j;
		;�j�j;
	�A

	���b�v����������Ffunction�iselector�j{
		this.parent�i�Z���N�^�j.not�i "body"�j.each�ifunction�i�j{
			jQuery�ithis�j.replaceWith�ithis.childNodes�j;
		;�j�j;
		�����Ԃ��Ă��������B
	}
;�j�j;


jQuery.expr.pseudos.hidden = function�ielem�j{
	return�IjQuery.expr.pseudos.visible�ielem�j;
;
jQuery.expr.pseudos.visible = function�ielem�j{
	return !!�ielem.offsetWidth || elem.offsetHeight || elem.getClientRects�i�j�Blength�j;
;




jQuery.ajaxSettings.xhr = function�i�j{
	�����Ă�������{
		�V�����E�B���h�E��Ԃ��BXMLHttpRequest�i�j;
	}�L���b�`�iE�j{}
;

var xhrSuccessStatus = {

		//�t�@�C���v���g�R���͏�ɃX�e�[�^�X�R�[�h0��Ԃ��A200�Ɖ��肷��
		0�F200�A

		//�T�|�[�g�FIE <= 9�̂�
		//��1450�F204�ł���ׂ��Ƃ���IE��1223��Ԃ����Ƃ�����
		1223�F204
	�A
	xhrSupported = jQuery.ajaxSettings.xhr�i�j;

support.cors = !! xhrSupported &&�ixhrSupported�� "withCredentials"�j;
support.ajax = xhrSupported = !! xhrSupported;

jQuery.ajaxTransport�i�֐��i�I�v�V�����j�j
	var callback�AerrorCallback;

	//�N���X�h���C����XMLHttpRequest�ŃT�|�[�g����Ă���ꍇ�ɂ̂݋�����܂�
	if�isupport.cors || xhrSupported &&�Ioptions.crossDomain�j{
		�߂�{
			���M�F�@�\�i�w�b�_�A���S�j{
				var i�A
					xhr = options.xhr�i�j;

				xhr.open�i
					options.type�A
					options.url�A
					options.async�A
					options.username�A
					options.password
				;

				//�񋟂���Ă���΃J�X�^���t�B�[���h��K�p����
				if�ioptions.xhrFields�j{
					for�i����options.xhrFields�Ɂj{
						xhr [i] = options.xhrFields [i];
					}
				}

				//�K�v�ɉ�����MIME�^�C�v���㏑������
				if�ioptions.mimeType && xhr.overrideMimeType�j{
					xhr.overrideMimeType�ioptions.mimeType�j;
				}

				// X-Requested-With�w�b�_
				//�N���X�h���C�����N�G�X�g�̏ꍇ�A�v���t���C�g�̏�����
				//�W�O�\�[�p�Y���̂悤�Ȃ��̂ŁA�m���ɂ����ݒ肷�邱�Ƃ͌����Ă���܂���B
				//�i��Ƀ��N�G�X�g���Ƃɐݒ肷�邱�Ƃ��AajaxSetup���g�p���Đݒ肷�邱�Ƃ��ł��܂��j
				//����h���C�����N�G�X�g�̏ꍇ�A���łɒ񋟂���Ă���ꍇ�̓w�b�_�[��ύX���܂���B
				if�i�Ioptions.crossDomain &&�I�w�b�_�[["X-Requested-With"]�j�j{
					headers ["X-Requested-With"] = "XMLHttpRequest";
				}

				//�w�b�_��ݒ�
				for�i�w�b�_�[��i�j{
					xhr.setRequestHeader�ii�Aheaders [i]�j;
				}

				// �܂�Ԃ��d�b
				�R�[���o�b�N=�֐��i�^�C�v�j{
					return function�i�j{
						if�i�R�[���o�b�N�j{
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if�itype === "abort"�j{
								xhr.abort�i�j;
							�����łȂ���΁itype === "error"�j{

								//�T�|�[�g�FIE <= 9�̂�
								//�蓮�̃l�C�e�B�u�A�{�[�g�ŁAIE9�̓X���[���܂�
								// readyState�ł͂Ȃ��v���p�e�B�A�N�Z�X�ŃG���[����������
								if�itypeof xhr.status�I== "number"�j{
									�����i0�A "�G���["�j;
								���̑�{
									�R���v���[�g�i

										// File�Fprotocol�͏�ɃX�e�[�^�X0��Ԃ��܂��B��8605���Q�ƁA��14207
										xhr.status�A
										xhr.statusText
									;
								}
							���̑�{
								�R���v���[�g�i
									xhrSuccessStatus [xhr.status] || xhr.status�A
									xhr.statusText�A

									//�T�|�[�g�FIE <= 9�̂�
									// IE9�ɂ�XHR2������܂��񂪁A�o�C�i�����X���[���܂��itrac-11426�j�B
									//�e�L�X�g�ȊO��XHR2�̏ꍇ�́A�Ăяo�����ɏ���������igh-2498�j
									�ixhr.responseType || "text"�j�I== "text" ||
									typeof xhr.responseText�I== "������"�H
										{binary�Fxhr.response}�F
										{text�Fxhr.responseText}�A
									xhr.getAllResponseHeaders�i�j
								;
							}
						}
					;
				;

				//�C�x���g�𒮂�
				xhr.onload = callback�i�j;
				errorCallback = xhr.onerror = xhr.ontimeout = callback�i "error"�j;

				//�T�|�[�g�FIE 9�̂�
				// onabort��u�������邽�߂�onreadystatechange���g�p����
				//�ߑ�����Ȃ������A�{�[�g����������
				if�ixhr.onabort�I==����`�j{
					xhr.onabort = errorCallback;
				���̑�{
					xhr.onreadystatechange = function�i�j{

						//�^�C���A�E�g�ɂȂ�O��readyState���`�F�b�N���ĕύX���܂�
						if�ixhr.readyState === 4�j{

							//�G���[���ŏ��ɌĂяo�����Ƃ������܂�
							//�������A����̓l�C�e�B�u�A�{�[�g���������܂���
							//�܂��AerrorCallback��ϐ��ɕۑ����܂�
							// xhr.onerror�ɃA�N�Z�X�ł��Ȃ�
							window.setTimeout�ifunction�i�j{
								if�i�R�[���o�b�N�j{
									errorCallback�i�j;
								}
							;�j�j;
						}
					;
				}

				//���~�R�[���o�b�N���쐬���܂�
				callback = callback�i "abort"�j;

				�����Ă�������{

					//���N�G�X�g�𑗐M���܂��i����ɂ���O����������\��������܂��j
					xhr.send�ioptions.hasContent && options.data || null�j;
				catch�ie�j{

					//��14683�F���ꂪ�܂��G���[�Ƃ��Ēʒm����Ă��Ȃ��ꍇ�̂ݍăX���[
					if�i�R�[���o�b�N�j{
						e�𓊂��܂��B
					}
				}
			�A

			���~�Ffunction�i�j{
				if�i�R�[���o�b�N�j{
					�܂�Ԃ��d�b�i�j;
				}
			}
		;
	}
;�j�j;




//�����I��dataType���񋟂���Ă��Ȃ��Ƃ��ɃX�N���v�g���������s����Ȃ��悤�ɂ���igh-2432���Q�Ɓj
jQuery.ajaxPrefilter�i�֐��j{
	if�is.crossDomain�j{
		s.contents.script = false;
	}
;�j�j;

//�X�N���v�gdataType���C���X�g�[�����܂�
jQuery.ajaxSetup�i{
	�󂯓���܂��F{
		�X�N���v�g�F "text / javascript�Aapplication / javascript�A" +
			"application / ecmascript�Aapplication / x-ecmascript"
	�A
	���e�F{
		script�F/ \ b�i�H�Fjava | ecma�jscript \ b /
	�A
	�R���o�[�^�[�F{
		"�e�L�X�g�X�N���v�g"�F�֐��i�e�L�X�g�j{
			jQuery.globalEval�i�e�L�X�g�j�B
			�e�L�X�g��Ԃ��܂��B
		}
	}
;�j�j;

//�L���b�V���̓���ȃP�[�X��crossDomain����������
jQuery.ajaxPrefilter�i "script"�Afunction�is�j{
	if�is.cache ===����`�j{
		s.cache = false�B
	}
	if�is.crossDomain�j{
		s.type = "GET";
	}
;�j�j;

//�X�N���v�g�^�O�n�b�N�]�����o�C���h����
jQuery.ajaxTransport�i "script"�Afunction�is�j{

	//���̃g�����X�|�[�g�̓N���X�h���C�����N�G�X�g�݂̂������܂��B
	if�is.crossDomain�j{
		var�X�N���v�g�A�R�[���o�b�N�B
		�߂�{
			�����Ă��������Ffunction�i_�Acomplete�j{
				script = jQuery�i "<script>"�j.prop�i{
					charset�Fs.scriptCharset�A
					src�Fs.url
				�i�j
					"���[�h�G���["�A
					�R�[���o�b�N= function�ievt�j{
						script.remove�i�j;
						callback = null�B
						if�ievt�j{
							�����ievt.type === "�G���["�H404�F200�Aevt.type�j�B
						}
					}
				;

				//�l�C�e�B�uDOM������g�p���āAdomManip AJAX�g���b�N���������
				document.head.appendChild�iscript [0]�j;
			�A
			���~�Ffunction�i�j{
				if�i�R�[���o�b�N�j{
					�܂�Ԃ��d�b�i�j;
				}
			}
		;
	}
;�j�j;




var oldCallbacks = []�A
	rjsonp = /�i=�j\�H�i�H=��| $�j| \�H\�H/;

//�f�t�H���g��JSONP�ݒ�
jQuery.ajaxSetup�i{
	jsonp�F "�R�[���o�b�N"�A
	jsonpCallback�Ffunction�i�j{
		var callback = oldCallbacks.pop�i�j|| �ijQuery.expando + "_" +�inonce ++�j�j;
		this [callback] = true;
		�R�[���o�b�N��Ԃ��܂��B
	}
;�j�j;

// jsonp���N�G�X�g�ɑ΂���I�v�V�����̌��o�A���K���A����уR�[���o�b�N�̃C���X�g�[��
jQuery.ajaxPrefilter�i "json jsonp"�A�֐��is�AoriginalSettings�AjqXHR�j{

	var callbackName�A�㏑���AresponseContainer�A
		jsonProp = s.jsonp�I== false &&�irjsonp.test�is.url�j�H
			"URL"�F
			typeof s.data === "������" &&
				�is.contentType || ""�j
					.indexOf�i "application / x-www-form-urlencoded"�j=== 0 &&
				rjsonp.test�is.data�j&&�u�f�[�^�v
		;

	//�\�z�����f�[�^�^�� "jsonp"�ł���ꍇ�A�܂��͐ݒ肷��p�����[�^������ꍇ�͏������܂�
	if�ijsonProp || s.dataTypes [0] === "jsonp"�j{

		//�R�[���o�b�N�����擾���A����Ɋ֘A�t����ꂽ�����̒l���L�����܂�
		callbackName = s.jsonpCallback = isFunction�is.jsonpCallback�j�H
			s.jsonpCallback�i�j�F
			s.jsonpCallback;

		// URL�܂��̓t�H�[���f�[�^�ɃR�[���o�b�N��}������
		if�ijsonProp�j{
			s [jsonProp] = s [jsonProp] .replace�irjsonp�A "$ 1" + callbackName�j;
		�����łȂ���΁is.jsonp�I== false�j{
			s.url + =�irquery.test�is.url�j�H "��"�F "�H"�j+ s.jsonp + "=" + callbackName;
		}

		//�X�N���v�g���s��Ƀf�[�^�R���o�[�^���g�p����JSON���擾����
		s.converters ["script json"] = function�i�j{
			if�i�IresponseContainer�j{
				jQuery.error�icallbackName + "�͌Ăяo����܂���ł���"�j;
			}
			responseContainer [0]��Ԃ��܂��B
		;

		// Force json dataType
		s.dataTypes [0] = "json";

		//�R�[���o�b�N���C���X�g�[������
		overwritten = window [callbackName];
		window [callbackName] = function�i�j{
			responseContainer = arguments;
		;

		//�N���[���A�b�v�@�\�i�R���o�[�^�[��ɔ����j
		jqXHR.always�ifunction�i�j{

			//�ȑO�̒l�����݂��Ȃ������ꍇ - �폜���܂�
			if�i�㏑�����ꂽ===����`�j{
				jQuery�i�E�B���h�E�j.removeProp�icallbackName�j;

			//�����łȂ���Ί����̒l�𕜌�����
			���̑�{
				window [callbackName] =�㏑������܂����B
			}

			//�����ۑ�
			if�is [callbackName]�j{

				//�I�v�V�������ė��p���Ă���肪�������Ȃ����Ƃ��m�F���Ă�������
				s.jsonpCallback = originalSettings.jsonpCallback;

				//����g�p���邽�߂ɃR�[���o�b�N����ۑ����܂�
				oldCallbacks.push�icallbackName�j;
			}

			//���ꂪ�֐��ł���A����������ꍇ�͌Ăяo��
			if�iresponseContainer && isFunction�i�㏑���j�j{
				�㏑������܂����iresponseContainer [0]�j�B
			}

			responseContainer =�㏑��=����`�B
		;�j�j;

		//�X�N���v�g�ɈϔC����
		"script"��Ԃ��܂��B
	}
;�j�j;




//�T�|�[�g�FSafari 8�̂�
// Safari 8�ł�document.implementation.createHTMLDocument�ɂ���č쐬���ꂽ����
//�Z��t�H�[����܂肽���݂܂��B2�Ԗڂ̂��͍̂ŏ��̂��̂̎q�ɂȂ�܂��B
//���̂��߁ASafari 8�ł͂��̃Z�L�����e�B�΍�𖳌��ɂ���K�v������܂��B
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument =�ifunction�i�j{
	var body = document.implementation.createHTMLDocument�i ""�j.body;
	body.innerHTML = "<form> </form> <form> </form>";
	body.childNodes.length === 2��Ԃ��܂��B
�i�j;


//���� "data"��HTML�̕�����łȂ���΂Ȃ�܂���
// context�i�I�v�V�����j�F�w�肳�ꂽ�ꍇ�A�t���O�����g�͂��̃R���e�L�X�g�ō쐬����܂��B
//�f�t�H���g��document
// keepScripts�i�I�v�V�����j�Ftrue�̏ꍇ�Ahtml������œn���ꂽ�X�N���v�g���܂܂�܂�
jQuery.parseHTML = function�idata�Acontext�AkeepScripts�j{
	if�itypeof data�I== "������"�j{
		return [];
	}
	if�itypeof context === "boolean"�j{
		keepScripts = context;
		context = false;
	}

	var base�A��͍ς݁A�X�N���v�g�B

	if�i�Icontext�j{

		//�X�N���v�g�܂��̓C�����C���C�x���g�n���h���������Ɏ��s����Ȃ��悤�ɂ���
		// document.implementation���g�p����
		if�isupport.createHTMLDocument�j{
			context = document.implementation.createHTMLDocument�i ""�j;

			//�쐬�����h�L�������g�̃x�[�Xhref��ݒ肵�܂�
			// URL���܂ނ��ׂẲ�͍ςݗv�f
			//�h�L�������g��URL�Ɋ�??�Â��Ă��܂��igh-2965�j
			base = context.createElement�i "base"�j;
			base.href = document.location.href;
			context.head.appendChild�ibase�j;
		���̑�{
			context = document;
		}
	}

	parsed = rsingleTag.exec�i�f�[�^�j�B
	scripts =�IkeepScripts && [];

	//�P��^�O
	if�i��͍ς݁j{
		[context.createElement�iparsed [1]�j]��Ԃ��܂��B
	}

	parsed = buildFragment�i[data]�Acontext�Ascripts�j;

	if�iscripts && scripts.length�j{
		jQuery�i�X�N���v�g�j.remove�i�j;
	}

	jQuery.merge�i[]�Aparsed.childNodes�j��Ԃ��܂��B
;


/ **
 *�y�[�W��URL��ǂݍ���
 * /
jQuery.fn.load = function�iurl�Aparams�Acallback�j{
	�ϐ��Z���N�^�A�^�C�v�A�����A
		����=����A
		off = url.indexOf�i ""�j;

	if�ioff> -1�j{
		selector = stripAndCollapse�iurl.slice�ioff�j�j;
		url = url.slice�i0�Aoff�j;
	}

	//�֐��̏ꍇ
	if�iisFunction�iparams�j�j{

		//����̓R�[���o�b�N���Ǝv���܂�
		callback = params;
		params =����`�B

	//�����łȂ���΁Aparam��������쐬����
	�����łȂ���΁iparams && typeof params === "object"�j{
		type = "POST";
	}

	//�ύX����v�f������ꍇ�́A���N�G�X�g�𑗐M���܂�
	if�iself.length> 0�j{
		jQuery.ajax�i{
			URL�FURL�A

			// "type"�ϐ�������`�̏ꍇ�A "GET"���\�b�h���g�p����܂��B
			//���̃t�B�[���h�̒l�𖾎��I�ɂ���
			//���[�U�[��ajaxSetup���\�b�h����ăI�[�o�[���C�h�ł��܂�
			�^�C�v�F�^�C�v|| "�擾����"�A
			dataType�F "html"�A
			�f�[�^�Fparams
		.done�i�֐��iresponseText�j{

			//���S�ȃR�[���o�b�N�Ŏg�p���邽�߂Ƀ��X�|���X��ۑ����܂�
			response = arguments;

			self.html�i�Z���N�^�H

				//�Z���N�^���w�肳��Ă���ꍇ�́A�_�~�[��div�Ő������v�f��T���܂�
				// IE�� 'Permission Denied'�G���[��������邽�߂ɃX�N���v�g�����O
				jQuery�i "<div>"�j.append�ijQuery.parseHTML�iresponseText�j�j.find�iselector�j�F

				//�����łȂ���Ί��S�Ȍ��ʂ��g��
				responseText�j;

		//���N�G�X�g����������ƁA���̊֐��� "data"�A "status"�A "jqXHR"���擾���܂��B
		//���������X�|���X����Őݒ肳��Ă���̂ł����͖�������܂��B
		//���s�����ꍇ�A���̊֐��� "jqXHR"�A "status"�A "error"���擾���܂��B
		.allways�i�R�[���o�b�N&&�֐��ijqXHR�Astatus�j{
			self.each�ifunction�i�j{
				callback.apply�ithis�Aresponse || [jqXHR.responseText�Astatus�AjqXHR]�j;
			;�j�j;
		;�j�j;
	}

	�����Ԃ��Ă��������B
;




//���ʂ�AJAX�C�x���g���������邽�߂̈�A�̊֐���Y�t����
jQuery.each�i[
	"ajaxStart"�A
	"ajaxStop"�A
	"ajaxComplete"�A
	"ajaxError"�A
	"ajaxSuccess"�A
	"ajaxSend"
]�A�֐��ii�A�^�j{
	jQuery.fn [type] = function�ifn�j{
		this.on�itype�Afn�j��Ԃ��܂��B
	;
;�j�j;




jQuery.expr.pseudos.animated = function�ielem�j{
	jQuery.grep��Ԃ��܂��ijQuery.timers�Afunction�ifn�j{
		elem === fn.elem��Ԃ��܂��B
	����;
;




jQuery.offset = {
	setOffset�Ffunction�ielem�Aoptions�Ai�j{
		var curPosition�AcurLeft�AcurCSSTop�AcurTop�AcurOffset�AcurCSSLeft�AcalculatePosition�A
			position = jQuery.css�ielem�A "position"�j�A
			curElem = jQuery�ielem�j�A
			props = {};

		//�ŏ��Ɉʒu��ݒ肵�A�ÓI�v�f�ł���/�����ݒ肳���
		if�iposition === "static"�j{
			elem.style.position = "relative";
		}

		curOffset = curElem.offset�i�j;
		curCSSTop = jQuery.css�ielem�A "top"�j;
		curCSSLeft = jQuery.css�ielem�A "left"�j;
		calculatePosition =�i�ʒu=== "���" ||�ʒu=== "�Œ�"�j&&
			�icurCSSTop + curCSSLeft�j.indexOf�i "auto"�j> -1�B

		//���̂����ꂩ�̏ꍇ�A�ʒu���v�Z�ł���悤�ɂ���K�v������܂�
		//��܂��͍��͎����ňʒu�͐�΂܂��͌Œ�
		if�icalculatePosition�j{
			curPosition = curElem.position�i�j;
			curTop = curPosition.top;
			curLeft = curPosition.left;

		���̑�{
			curTop = parseFloat�icurCSSTop�j|| 0;
			curLeft = parseFloat�icurCSSLeft�j|| 0;
		}

		if�iisFunction�ioptions�j�j{

			//���W�����̕ύX��������ɂ́A������jQuery.extend���g�p����igh-1848�j
			options = options.call�ielem�Ai�AjQuery.extend�i{}�AcurOffset�j�j;
		}

		if�ioptions.top�I= null�j{
			props.top =�ioptions.top  -  curOffset.top�j+ curTop;
		}
		if�ioptions.left�I= null�j{
			props.left =�ioptions.left  -  curOffset.left�j+ curLeft;
		}

		if�i�I�v�V������ "using"�j{
			options.using.call�ielem�Aprops�j;

		���̑�{
			curElem.css�i�v���b�v�j�B
		}
	}
;

jQuery.fn.extend�i{

	// offset�i�j�́A�v�f�̋��E�{�b�N�X���h�L�������g�̌��_�Ɋ֘A�t���܂�
	offset�Ffunction�i�I�v�V�����j{

		//�Z�b�^�[�̘A�����ێ�����
		if�iarguments.length�j{
			�I�v�V������Ԃ�===����`�H
				���� �F
				this.each�i�֐��ii�j{
					jQuery.offset.setOffset�ithis�Aoptions�Ai�j;
				;�j�j;
		}

		var rect�A�����A
			elem = this [0];

		if�i�Ielem�j{
			�߂�
		}

		//�ؒf����B���ꂽ�v�f�i�\���F�Ȃ��j�ɑ΂��ă[����Ԃ��igh-2310�j
		//�T�|�[�g�FIE <= 11�̂�
		// getBoundingClientRect�����s���܂�
		// IE�Őؒf���ꂽ�m�[�h�̓G���[���X���[���܂�
		if�i�Ielem.getClientRects�i�j�Blength�j{
			{top�F0�Aleft�F0}��Ԃ��܂��B
		}

		//�r���[�|�[�g�X�N���[�����r���[�|�[�g����gBCR�ɒǉ����ăh�L�������g���Έʒu���擾
		rect = elem.getBoundingClientRect�i�j;
		win = elem.ownerDocument.defaultView;
		�߂�{
			top�Frect.top + win.pageYOffset�A
			���Frect.left + win.pageXOffset
		;
	�A

	// position�i�j�͗v�f�̃}�[�W���{�b�N�X�����̃I�t�Z�b�g�̐e�̃p�f�B���O�{�b�N�X�Ɋ֘A�t����
	//�����CSS�̐�Δz�u�̓���ɑΉ����܂�
	position�Ffunction�i�j{
		if�i�Ithis [0]�j{
			�߂�
		}

		var offsetParent�Aoffset�Adoc�A
			elem = this [0]�A
			parentOffset = {top�F0�Aleft�F0};

		// position�F�Œ�v�f�̓r���[�|�[�g����I�t�Z�b�g����܂��B�r���[�|�[�g���̂͏�Ƀ[���I�t�Z�b�g�������܂��B
		if�ijQuery.css�ielem�A "position"�j=== "fixed"�j{

			//�ʒu������Ffixed��getBoundingClientRect�����p�\�ł��邱�Ƃ��Ӗ����܂�
			offset = elem.getBoundingClientRect�i�j;

		���̑�{
			offset = this.offset�i�j;

			//�h�L�������g�܂��͂��̃��[�g�v�f�ɂȂ邱�Ƃ��ł���* real * offset�̐e���������
			//�ÓI�ɔz�u���ꂽ�v�f�����ʂ��ꂽ�Ƃ�
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while�ioffsetParent &&
				�ioffsetParent === doc.body || offsetParent === doc.documentElement�j&&
				jQuery.css�ioffsetParent�A "position"�j=== "static"�j{

				offsetParent = offsetParent.parentNode;
			}
			if�ioffsetParent && offsetParent�I== elem && offsetParent.nodeType === 1�j{

				//���E���͂��̃R���e���c�̋N�_�̊O���ɂ���̂ŁA���̃I�t�Z�b�g�ɑg�ݍ���
				parentOffset = jQuery�ioffsetParent�j.offset�i�j;
				parentOffset.top + = jQuery.css�ioffsetParent�A "borderTopWidth"�Atrue�j;
				parentOffset.left + = jQuery.css�ioffsetParent�A "borderLeftWidth"�Atrue�j;
			}
		}

		//�e�I�t�Z�b�g�Ɨv�f�]������������
		�߂�{
			top�Foffset.top  -  parentOffset.top  -  jQuery.css�ielem�A "marginTop"�Atrue�j�A
			left�Foffset.left  -  parentOffset.left  -  jQuery.css�ielem�A "marginLeft"�Atrue�j
		;
	�A

	//���̃��\�b�h�͎��̏ꍇ��documentElement��Ԃ��܂��B
	// 1�joffsetParent�̂Ȃ�iframe���̗v�f�̏ꍇ�A���̃��\�b�h��
	//�e�E�B���h�E��documentElement
	// 2�j��\���܂��͐؂藣���ꂽ�v�f
	// 3�jbody�܂���html�v�f�A�܂�html�m�[�h�̏ꍇ - ���ꎩ�g��Ԃ��܂�
	//
	//�������A�����̗�O�͎��ۂ̃��[�X�P�[�X�Ƃ��Ē񎦂��ꂽ���Ƃ͂���܂���
	//�����Ă��D�܂������ʂƍl�����邩������܂���B
	//
	//�������A���̘_���͕ۏ؂��ꂽ���̂ł͂Ȃ��A�����I�ɕύX�����\��������܂��B
	offsetParent�Ffunction�i�j{
		this.map�ifunction�i�j{��Ԃ�
			var offsetParent = this.offsetParent;

			while�ioffsetParent && jQuery.css�ioffsetParent�A "position"�j=== "static"�j{
				offsetParent = offsetParent.offsetParent;
			}

			offsetParent��Ԃ��܂�|| documentElement;
		;�j�j;
	}
;�j�j;

// scrollLeft�����scrollTop���\�b�h���쐬���܂�
jQuery.each�i{scrollLeft�F "pageXOffset"�AscrollTop�F "pageYOffset"}�Afunction�imethod�Aprop�j{
	var top = "pageYOffset" === prop;

	jQuery.fn [method] = function�ival�j{
		return access�ithis�Afunction�ielem�Amethod�Aval�j{

			//�h�L�������g�ƃE�B���h�E����������
			var win;
			if�iisWindow�ielem�j�j{
				win = elem;
			�����łȂ���΁ielem.nodeType === 9�j{
				win = elem.defaultView;
			}

			if�ival ===����`�j{
				������Ԃ��Hwin [prop]�Felem [method];
			}

			if�i���j{
				win.scrollTo�i
					�I�� �Hval�Fwin.pageXOffset�A
					�� �Hval�Fwin.pageYOffset
				;

			���̑�{
				elem [method] = val;
			}
		method�Aval�Aarguments.length�j;
	;
;�j�j;

//�T�|�[�g�FSafari <= 7  -  9.1�AChrome <= 37  -  49
// jQuery.fn.position���g�p���ď�/����cssHook��ǉ����܂�
// Webkit�̃o�O�Fhttps://bugs.webkit.org/show_bug.cgi?id=29084
//�_�Ńo�O�Fhttps://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle�́Atop / left / bottom / right�Ɏw�肳�ꂽ�Ƃ��Ƀp�[�Z���g��Ԃ��܂��B
// css���W���[����offset���W���[���Ɉˑ�������̂ł͂Ȃ��A�����Ń`�F�b�N���Ă�������
jQuery.each�i["top"�A "left"]�Afunction�ii�Aprop�j{
	jQuery.cssHooks [prop] = addGetHookIf�isupport.pixelPosition�A
		�֐��ielem�A�v�Z�ς݁j{
			if�i�v�Z�l�j{
				calculate = curCSS�ielem�Aprop�j;

				// curCSS���p�[�Z���e�[�W��Ԃ��ꍇ�́Aoffset�Ƀt�H�[���o�b�N����
				rnumnonpx.test�i�v�Z�ς݁j��Ԃ��܂����H
					jQuery�ielem�j.position�i�j[prop] + "px"�F
					�v�Z�ς݁B
			}
		}
	;
;�j�j;


// innerHeight�AinnerWidth�Aheight�Awidth�AouterHeight�A�����outerWidth���\�b�h���쐬���܂�
jQuery.each�i{Height�F "height"�AWidth�F "width"}�Afunction�iname�Atype�j{
	jQuery.each�i{�p�f�B���O�F "����" +���O�A���e�F�^�C�v�A ""�F "�O��" +���O}�A
		function�idefaultExtra�AfuncName�j{

		//�}�[�W����outerHeight�AouterWidth�̂�
		jQuery.fn [funcName] = function�i�}�[�W���A�l�j{
			var chainable = arguments.length &&�idefaultExtra || typeof margin�I== "boolean"�j�A
				extra = defaultExtra || �imargin === true || value === true�H "margin"�F "border"�j;

			return access�ithis�Afunction�ielem�Atype�Avalue�j{
				var doc;

				if�iisWindow�ielem�j�j{

					// $�iwindow�j.outerWidth /�X�N���[���o�[���܂ލ�����w / h��Ԃ��igh-1729�j
					funcName.indexOf�i "outer"�j=== 0��Ԃ��܂����H
						elem ["inner" + name]�F
						elem.document.documentElement ["client" + name];
				}

				//�����̕��܂��͍������擾����
				if�ielem.nodeType === 9�j{
					doc = elem.documentElement;

					// [Width / Height]�܂���offset [Width / Height]�܂��̓N���C�A���g[Width / Height]�̂����ꂩ���X�N���[�����܂��B
					//�ǂ��炩�傫����
					Math.max�i��Ԃ��܂��B
						elem.body ["scroll" + name]�Adoc ["scroll" + name]�A
						elem.body ["offset" + name]�Adoc ["offset" + name]�A
						doc ["�N���C�A���g" +���O]
					;
				}

				�߂�l===����`�H

					//�v�f�̕��܂��͍������擾���AparseFloat��v�����邪�����͂��Ȃ�
					jQuery.css�ielem�Atype�Aextra�j�F

					//�v�f�̕��܂��͍�����ݒ肵�܂�
					jQuery.style�ielem�Atype�Avalue�Aextra�j;
			�A�^�C�v�A�A���\�H�}�[�W���F����`�A�A���\�j
		;
	;�j�j;
;�j�j;


jQuery.each�i�i "�ڂ����t�H�[�J�X�t�H�[�J�X�C���t�H�[�J�X�A�E�g���T�C�Y�X�N���[��dblclick" +
	"�}�E�X�_�E���}�E�X�A�b�v�}�E�X�Ń}�E�X�I�[�o�[�}�E�X�I�[�o�[�}�E�X�Ń}�E�X�L�[���O��" +
	"�I�𑗐M�L�[�_�E���L�[�v���X�L�[�A�b�v�R���e�L�X�g���j���[�̕ύX"�j.split�i ""�j�A
	�֐��ii�A���O�j{

	//�C�x���g�o�C���f�B���O����������
	jQuery.fn [name] = function�idata�Afn�j{
		arguments.length> 0��Ԃ��܂����B
			this.on�iname�Anull�Adata�Afn�j�F
			this.trigger�iname�j;
	;
;�j�j;

jQuery.fn.extend�i{
	�z�o�[�F�֐��ifnOver�AfnOut�j�i
		this.mouseenter�ifnOver�j.mouseleave�ifnOut || fnOver�j��Ԃ��܂��B
	}
;�j�j;




jQuery.fn.extend�i{

	bind�Ffunction�itypes�Adata�Afn�j{
		this.on�itypes�Anull�Adata�Afn�j��Ԃ��܂��B
	�A
	�o�C���h����������Ffunction�itypes�Afn�j{
		this.off�itypes�Anull�Afn�j��Ԃ��܂��B
	�A

	�f���Q�[�g�F�֐��i�Z���N�^�A�^�C�v�A�f�[�^�Afn�j{
		this.on�itypes�Aselector�Adata�Afn�j��Ԃ��܂��B
	�A
	���ɖ߂��Ffunction�iselector�Atypes�Afn�j{

		//�i�l�[���X�y�[�X�j�܂��́iselector�Atypes [�Afn]�j
		arguments.length === 1��Ԃ��܂����H
			this.off�i�Z���N�^�A "**"�j�F
			this.off�itypes�Aselector || "**"�Afn�j;
	}
;�j�j;

//�֐����R���e�L�X�g�Ƀo�C���h���܂��B
//����
// jQuery.proxy�͕W�����𐄐i���邽�߂ɐ�������Ă��܂���i����Function��bind�j�B
//�������A�Ԃ��Ȃ��폜�̗\��͂���܂���
jQuery.proxy = function�ifn�Acontext�j{
	var tmp�Aargs�A�v���L�V�B

	if�itypeof context === "string"�j{
		tmp = fn [context];
		context = fn;
		fn = tmp�B
	}

	//�d�l���Ń^�[�Q�b�g���Ăяo���\���ǂ����𔻒f���邽�߂̃N�C�b�N�`�F�b�N
	//�����TypeError�𓊂��܂����Aundefined��Ԃ��܂��B
	if�i�IisFunction�ifn�j�j{
		����`��Ԃ��܂��B
	}

	//�V�~�����[�g���ꂽ�o�C���h
	args = slice.call�iarguments�A2�j;
	proxy = function�i�j{
		fn.apply�icontext || this�Aargs.concat�islice.call�iarguments�j�j�j��Ԃ��܂��B
	;

	//��ӂ̃n���h����GUID�����̃n���h���Ɠ����ɐݒ肵�āA�폜�ł���悤�ɂ���
	proxy.guid = fn.guid = fn.guid || jQuery.guid ++;

	�v���L�V��Ԃ��܂��B
;

jQuery.holdReady = function�ihold�j{
	if�ihold�j{
		jQuery.readyWait ++;
	���̑�{
		jQuery.ready�itrue�j;
	}
;
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now�B

jQuery.isNumeric = function�iobj�j{

	// jQuery 3.0�ȍ~�AisNumeric�͂ɐ�������܂�
	//������Ɛ����i�v���~�e�B�u�܂��̓I�u�W�F�N�g�j
	//�L�����ɋ������邱�Ƃ��ł���igh-2662�j
	var type = jQuery.type�iobj�j;
	return�itype === "number" || type === "string"�j&&

		// parseFloat NaN�ɂ�鐔�l�L���X�g�̌댟�o�i ""�j
		// ...�������A�擪�̐���������A����16�i�����e�����i "0x ..."�j������ĉ��߂���
		//���Z�͖������NaN�ɋ�������
		�IisNaN�iobj  -  parseFloat�iobj�j�j;
;




// jQuery�͑���AMD���W���[���ƘA���ł���̂ŁA���O�t��AMD���W���[���Ƃ��ēo�^����
// define���g�p����\���̂���t�@�C��
//������AMD���W���[���𗝉����Ă��܂��B�w�����ꂽAMD�͍ł����S�ōł����S�ł�
//�o�^���@ AMD�̃��W���[������
//�t�@�C��������h�����AjQuery�͒ʏ포�����Ŕz�M����܂�
// �t�@�C�����BAMD���W���[�����]��ł���悤�ɃO���[�o�����쐬������ɂ�������Ă�������
//���̃o�[�W������jQuery���\���ɂ��邽�߂�noConflict���Ăяo���ɂ́A���܂������܂��B

//�ő���̈ڐA���̂��߂ɁAjQuery�ł͂Ȃ����C�u�����͂��ׂ��ł�
//�������g�𓽖����W���[���Ƃ��Đ錾���܂��B
// AMD���[�_�[�����݂��܂��BjQuery�͓��ʂȏꍇ�ł��B�ڍׂɂ��ẮA
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if�itypeof define === "�֐�" && define.amd�j{
	define�i "jquery"�A[]�Afunction�i�j{
		jQuery��Ԃ��܂��B
	;�j�j;
}




var

	//�㏑���̏ꍇ��jQuery�Ƀ}�b�v����
	_jQuery = window.jQuery�A

	//�㏑������ꍇ��$�Ƀ}�b�v����
	_ $ =�E�B���h�E�B

jQuery.noConflict = function�ideep�j{
	if�iwindow�B$ === jQuery�j{
		�E�B���h�E�B$ = _ $;
	}

	if�ideep && window.jQuery === jQuery�j{
		window.jQuery = _jQuery;
	}

	jQuery��Ԃ��܂��B
;

// AMD�ł�jQuery��$���ʎq�����J����
//�i��7102���R�����g�F10�Ahttps://github.com/jquery/jquery/pull/557�j
//����уu���E�U�G�~�����[�^�p��CommonJS�i��13566�j
if�i�InoGlobal�j{
	window.jQuery = window�B$ = jQuery;
}




jQuery��Ԃ��܂��B
;�j�j;