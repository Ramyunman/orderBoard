(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OB_001");
            this.set_titletext("주문게시판");
            this.set_border("1px solid black");
            this.set_visible("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_searchCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ordStatCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta02","150","-1","1130","111",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","0","150","110",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 조건");
            obj.set_font("bold 16px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_background("ivory");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regOrd","12","124","108","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("주문 등록");
            obj.set_enable("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ordNo","259","15","174","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","158","4","98","41",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("주문 번호");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_cmpYn","589","-2","51","51",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00","457","3","108","41",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("법인 고객 여부");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_ordStat","590","52","177","42",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("CD_VAL1");
            obj.set_datacolumn("CD_NM1");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("ds_ordStatCombo");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01","453","51","108","41",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("주문 상태");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_custGb","902","2","193","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_custGb_innerdataset = new nexacro.NormalDataset("rdo_custGb_innerdataset", obj);
            rdo_custGb_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">P</Col><Col id=\"datacolumn\">개인</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">법인</Col></Row><Row><Col id=\"codecolumn\">R</Col><Col id=\"datacolumn\">임직원</Col></Row></Rows>");
            obj.set_innerdataset(rdo_custGb_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("sta01_02","779","6","108","41",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("고객 구분");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ordList","12","173","918","537",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"135\"/><Column size=\"72\"/><Column size=\"60\"/><Column size=\"69\"/><Column size=\"60\"/><Column size=\"99\"/><Column size=\"196\"/><Column size=\"70\"/><Column size=\"156\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"주문번호\"/><Cell col=\"1\" text=\"주문상태\"/><Cell col=\"2\" text=\"고객번호\"/><Cell col=\"3\" text=\"고객명\"/><Cell col=\"4\" text=\"고객구분\"/><Cell col=\"5\" text=\"전화번호\"/><Cell col=\"6\" text=\"주소\"/><Cell col=\"7\" text=\"상품명\"/><Cell col=\"8\" text=\"주문일시\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_updOrd","137","124","108","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("주문 수정");
            obj.set_enable("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delOrd","262","124","108","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("주문 삭제");
            obj.set_enable("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_03","152","54","108","41",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("고객명");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_custNm","259","59","174","35",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Button("btn_selectOrd","1110","8","111","93",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("조 회");
            obj.set_background("blue");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_color("aliceblue");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("OB_001.xfdl", function() {

        this.OB_001_onload = function(obj,e)
        {
        	//alert("onload 함수 실행");

        	//OB_001.xfdl이 화면에 로드될 때 검색 조건의 주문상태 콤보박스를 초기화 시켜준다.
        	//서버에 요청을 하기 전에 서버로 전달해줘야할 인자값은 뭐가 있을지 생각해야한다.
        	//--> 주문 상태값만을 불러오기 위해선 TB_CD_MST 테이블 WHERE 절에 CD_VL = '001' 이라는 조건을 걸어줘야 한다.
        	//따라서 DATASET에 001이라는 값을 넣어 서버로 전달해보자.

        	//ds_searchCombo 데이터셋을 생성하고 서버로 전달한 인자값을 추가해보자.
        	this.ds_searchCombo.clearData();	// 데이터셋 초기화
        	this.ds_searchCombo.addRow();		// 데이터셋에 값을 세팅하기 위해 1줄의 ROW를 추가
        	this.ds_searchCombo.setColumn(0,"CD_VAL","001");	// 추가된 0번째 ROW의 CD_VAL 컬럼에 001이라는 값을 세팅한다.

        	//서버로 데이터를 전송한다.
        	//서버로 데이터를 전송하기 전 필요한 값들을 세팅한다.
        	var strSvcId	= "selectCommonCode";					// 넥사크로에서 transaction을 구분하기 위한 id값 이 id는 차후 fnCallback 함수에서 쓰인다.
        	var strSvcUrl	= "selectCommonCode.do";				// Java Controller에서 이 주소를 식별하여 요청을 처리한다.
        	var inData		= "ds_search = ds_searchCombo";			// 서버로 전송할 데이터셋 세팅 = 문자 기준 왼쪽이 서버 오른쪽이 프론트 데이터셋이다.
        															// 프론트의 ds_searchCombo를 서버의 ds_search 값을 대입하겠다는 의미이다.
        															// 서버측(.java)에도 = 기준 왼쪽 데이터셋명(ds_search)과 반드시! 동일하게 명명해야 한다.

        	var outData		= "ds_ordStatCombo = ds_commonCode";	// 서버로부터 값을 전달받을 데이터셋 세팅
        															// 위와는 반대로 = 문자 기준 왼쪽이 프론트 오른쪽이 서버 데이터셋이다.
        															// 서버의 ds_commonCode 서버의 ds_ordStatCombo로 값을 대입하겠다는 의미이다.
        															// 서버측(.java)에도 = 기준 오른쪽 데이터셋명(ds_commonCode)과 반드시! 동일하게 명명해야 한다.
        	var strArg		= "";									// 데이터셋이 아닌 값을 보낼때 쓰는 필드지만 데이터셋을 쓰는걸로 통일하자.
        	var callBackFnc	= "fnCallback"; // 프레임웍 사이클의 9번에 해당한다. 서버로 부터 값을 받은 이후 프론트에서 이행해야할 작업 코드를
        									// fnCallback 함수에서 작성한다.

        	//넥사크로 N에서 제공하는 서버로 요청하는 공통함수를 쓴다.
        	this.gfnTransaction( strSvcId	,
        						 strSvcUrl	,
        						 inData		,
        						 outData	,
        						 strArg		,
        						 callBackFnc);	// 세팅한 값을 담아 서버로 데이터 전송
        };

        this.btn_selectOrd_onclick = function(obj,e)
        {
        	alert("주문리스트 조회");
        };

        this.btn_regOrd_onclick = function(obj,e)
        {
        	alert("주문 등록 실행");
        };

        this.btn_updOrd_onclick = function(obj,e)
        {
        	alert("주문 수정 실행");
        };

        this.btn_delOrd_onclick = function(obj,e)
        {
        	alert("주문 삭제 실행");
        };

        this.grd_ordList_oncellclick = function(obj,e)
        {
        	// 그리드 더블 클릭 시 실행
        };

        this.chk_cmpYn_onchanged = function(obj,e)
        {
        	alert("onchanged 함수 실행");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.OB_001_onload,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.btn_regOrd.addEventHandler("onclick",this.btn_regOrd_onclick,this);
            this.chk_cmpYn.addEventHandler("onchanged",this.chk_cmpYn_onchanged,this);
            this.sta01_00.addEventHandler("onclick",this.sta01_00_onclick,this);
            this.sta01_01.addEventHandler("onclick",this.sta01_01_onclick,this);
            this.grd_ordList.addEventHandler("oncellclick",this.grd_ordList_oncellclick,this);
            this.btn_updOrd.addEventHandler("onclick",this.btn_updOrd_onclick,this);
            this.btn_delOrd.addEventHandler("onclick",this.btn_delOrd_onclick,this);
            this.btn_selectOrd.addEventHandler("onclick",this.btn_selectOrd_onclick,this);
        };
        this.loadIncludeScript("OB_001.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
