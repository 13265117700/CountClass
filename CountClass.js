class Count{
  constructor(props){
    this.state = {
      id: props.id,
      value: props.value || 0,
      change: props.change,
      _countNumberInput:null,
    };

    this._init();
  }

  _init(){
    this._HTML();
  }

  _HTML(){
    let find = $(`#${this.state.id}`).find('input');
    find[0].value = this.state.value;
    this.state._countNumberInput = find[0];
    console.log(this.state.value,this.state.id,this.state._countNumberInput)


    $(`#${this.state.id}`).on('click','.count-number-btn_decrease',this.decrease.bind(this));
    $(`#${this.state.id}`).on('click','.count-number-btn_increase',this.increase.bind(this));
  }

  getValue(){
    return this.state.value
  }

  setValue(val){
    let isNumber = (typeof val === 'number');
    if(isNumber){
      this.state.value = val;
      this.state._countNumberInput.value = val;
      typeof this.state.change === 'function' && this.state.change(val)
    }else{
      console.log('参数必须为数字')
    }
  }

  decrease(){
    let value = this.state.value - 1;
    this.setValue(value)
  }

  increase(){
    let value = this.state.value + 1;
    this.setValue(value)
  }
}

const PAGE = {
  data:{
    count_1: null,
    count_2: null
  },

  init:function(){
    this.initCount();
  },

  initCount:function(){
    PAGE.data.count_1 = new Count({
      id:'count_1',
      value:1,
      change:function(val){
        console.log(val)
      }
    })

    PAGE.data.count_2 = new Count({
      id:'count_2',
      value:10,
      change:function(val){
        console.log(val)
      }
    })

    PAGE.data.count_2 = new Count({
      id:'count_3',
      value:20,
      change:function(val){
        console.log(val)
      }
    })
  }
}
PAGE.init()