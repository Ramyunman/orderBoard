(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OB_001_01");
            this.set_titletext("주문등록팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta00","0","25","141","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("고객명");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","0","69","141","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("휴대폰번호");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01","0","114","141","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("생년월일/사업자번호");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_02","0","158","141","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("주소");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_03","1","203","141","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("고객구분");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_04","0","246","141","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("주문상품");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_custNm","156","26","224","33",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_phone","156","71","224","33",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_birBizNo","156","115","224","33",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_addr","156","159","224","33",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_custGbNm","158","203","162","36",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_displaynulltext("선택");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_custGbNm00","158","246","162","36",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_displaynulltext("선택");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regOrd","48","310","130","55",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("주문 등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit","208","310","130","55",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("OB_001_01.xfdl", function() {

        this.OB_001_01_onload = function(obj,e)
        {
        	alert("onload함수 실행");

        	// 주문 등록을 위한 주문상태, 주문상품 콤보박스 초기화
        };

        this.btn_regOrd_onclick = function(obj,e)
        {
        	alert("주문 등록 버튼 실행");
        };

        this.btn_exit_onclick = function(obj,e)
        {
        	alert("닫기 버튼 실행");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.OB_001_01_onload,this);
            this.btn_regOrd.addEventHandler("onclick",this.btn_regOrd_onclick,this);
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
        };
        this.loadIncludeScript("OB_001_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
