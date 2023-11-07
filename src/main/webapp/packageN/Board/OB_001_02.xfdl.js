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
            this.set_titletext("주문수정팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta00_03","21","23","141","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("주문 상태");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_04","20","66","141","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("주문 상품");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_ordStatNm","178","23","162","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_displaynulltext("선택");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_itemNm","178","66","162","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_displaynulltext("선택");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_chgOrd","48","120","130","55",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("주문 수정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit","208","120","130","55",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,200,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("OB_001_02.xfdl", function() {

        this.OB_001_01_onload = function(obj,e)
        {
        	alert("onload함수 실행");

        	//주문 등록을 위한 주문상태, 주문상품 콤보박스 초기화
        };

        this.btn_chgOrd_onclick = function(obj,e)
        {
        	alert("주문 수정 버튼 실행");
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
            this.btn_chgOrd.addEventHandler("onclick",this.btn_chgOrd_onclick,this);
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
        };
        this.loadIncludeScript("OB_001_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
