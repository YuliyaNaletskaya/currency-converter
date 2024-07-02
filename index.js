let languages = {
    "ru": {
        "title": "ФилТехБанк",
        "date": "Дата",
        "enter": "Ввод курсов",
        "add_cur": "добавить валюту",
        "summa": "сумма",
        "cur": "валюта",
        "rate": "курс",
        "byn": "в бел руб.",
        "total": "Итого:",
        "graph": "График",
        "info": "Справка",
        "save": "Запомнить",
        "info_name": 'Справка "ФилТехБанк"',
        "annotation": "Данное приложение позволяет посчитать накопления. <br> Пользоваться нашим приложением очень просто.",
        "select_language": "Выберите язык приложения.",
        "select_date": "Выберите дату.",
        "input_sum": "Введите сумму накоплений и выберите одну из предложенных валют (евро, доллар, белорусский рубль, российский рубль).",
        "select_currency": "Если ваши накопления хранятся в различных валютах, нажмите "+", чтобы добавить валюту. Появится новое поле для ввода данных.",
        "select_total": "Внизу таблицы в графе итого вы можете посчитать ваши накопления. нажав на нужную валюту.",
        "click_graph": "При нажатии на кнопку ГРАФИК вы можете увидеть график ваших накоплений.",
        "click_info": "При нажатии на кнопку СПРАВКА появляется окно с информацией о работе программы.",
        "click_save" : "При нажатии на кнопку ЗАПОМНИТЬ вы можете запомнить введённую вами информацию.",
    },

    "be": {
        "title": "ФiлТэхБанк",
        "date": "Дата",
        "enter": "Увод курсаў",
        "add_cur": "дадаць валюту",
        "summa": "сума",
        "cur": "валюта",
        "rate": "курс",
        "byn": "у бел. руб.",
        "total": "Усяго",
        "graph": "Графiк",
        "info": "Даведка",
        "save": "Запомнiць",
        "info_name": 'Даведка "Філтэхбанк"',
        "annotation": "Гэты дадатак дазваляе палічыць зберажэнні.",
        "select_language": "Абярыце мову дадатку.",
        "select_date": "Абярыце дату.",
        "input_sum": "Увядзіце суму зберажэнняў і абярыце адну з прапанаваных валют (еўра, даляр, беларускі рубель, расійскі рубель).",
        "select_currency": "Калі вашы зберажэнні захоўваюцца ў розных валютах, націсніце "+", каб дадаць валюту. З'явіцца новае поле для ўводу даных.",
        "select_total": "Унізе табліцы ў графе разам вы можаце палічыць вашы зберажэнні, націснуўшы на патрэбную валюту.",
        "click_graph": "Пры націску на кнопку ГРАФIК вы можаце ўбачыць графік вашых зберажэнняў.",
        "click_info": "Пры націску на кнопку ДАВЕДКА акрываецца акно з інфармацыяй аб працы праграмы.",
        "click_save" : "Пры націску на кнопку ЗАПОМНIЦЬ вы можаце запомніць уведзеную вамі інфармацыю.",
    }, 

    "en": {
        "title": "PhilTechBank",
        "date": "date",
        "enter": "enter exchange",
        "add_cur": "add currency",
        "summa": "sum",
        "cur": "currency",
        "rate": "rate",
        "byn": "BYN",
        "total": "total",
        "graph": "chart",
        "info": "information",
        "save": "save",
        "info_name": "FilTehBank help",
        "annotation": "This application allows you to calculate the savings. <br> Using our application is very simple.",
        "select_language": "Select the application language.",
        "select_date": "Select a date.",
        "input_sum": "Input the amount of savings and select one of the suggested currencies (euro, dollar, Belarusian ruble, Russian ruble).",
        "select_currency": "If your savings are stored in different currencies, click "+" to add a currency. A new data entry field will appear.",
        "select_total": "At the bottom of the table in the TOTAL column, you can count your savings. by clicking on the desired currency..",
        "click_graph": "When you click on the GRAPH button, you can see a graph of your savings.",
        "click_info": "When you click on the HELP button, a window appears with information about the operation of the program.",
        "click_save" : "When you click on the REMEMBER button, you can remember the information you entered."
    },

    "cn": {
        "title": "语言工程银行",
        "date": "日期",
        "enter": "输入汇率",
        "add_cur": "添加货币",
        "summa": "金额",
        "cur": "货币",
        "rate": "汇率",
        "byn": "白俄卢布",
        "total": "总计",
        "graph": "图表", 
        "info": "帮助",
        "save": "保存",
        "info_name": "语言工程银行帮助。",
        "annotation": "此应用程序允许您计算节省 <br>使用我们的应用程序非常简单。",
        "select_language": "选择应用程序语言。",
        "select_date": "选择日期。",
        "input_sum": "输入储蓄金额并选择建议的货币之一（欧元，美元，白俄罗斯卢布，俄罗斯卢布)。",
        "select_currency": "如果您的储蓄以不同货币持有，请点击“+”添加货币。将出现一个新的数据输入字段。",
        "select_total": "在总计列的表的底部，您可以计算您的储蓄。 通过点击所需的货币。",
        "click_graph": "当你点击图表按钮，你可以看到你的储蓄图表。",
        "click_info": "当您单击帮助按钮时，会出现一个窗口，其中包含有关程序操作的信息。",
        "click_save" : "当您点击记住按钮时，您可以记住您输入的信息。",
    
    },
        //Функция смены языков.
    }
    let switcher = document.getElementById("switcher");
    let allLang = ["ru", "be", "en", "cn"];
    allLang.forEach(function(language){
        let button = document.createElement("button");
        button.textContent = language;
        button.addEventListener("click", function(){
            switchLanguage(language);
        });
        switcher.appendChild(button);
    })

function switchLanguage(lang){
    for(let key in languages[lang]){
        document.getElementById(key).innerHTML = languages[lang][key];
    }
}

document.querySelector('form').addEventListener('submit', function (ev){
    ev.preventDefault();
   // window.history.back();
  }, true);

  // Проверка даты на валидность. Если дата больше текущей, записывает текущую дату.
document.querySelector('#datecur').addEventListener('change', getValidDate);

    function getValidDate() {
        /* с 11 по 16 строки - это очистка полей формы при изменении даты*/
		let barr = document.querySelectorAll("[type='text']");
            console.log(barr);
            for (let item of barr) {
                item.value = '';
            }
            console.log(barr);

        let dateCur = document.querySelector('#datecur').value;
            console.log(dateCur);

        let giorno = new Date();
            console.log(giorno);

            let dateUse = new Date(Date.parse(dateCur));
                console.log(dateUse);

            let giornoStr = giorno.toLocaleDateString('en-ca');
                console.log(giornoStr);
            
            if (giorno > dateUse) {
                //Извлекаем из localStorage данные на выбранную дату:
                const getDate = JSON.parse(localStorage.getItem(dateCur));
                if (getDate) {
                   console.log(getDate);
                          
                    for (let i=1; i < getDate.summa.length; i++) {
                        let newDiv = document.querySelector('div[name="block"]').cloneNode(true);
                        newDiv.name = "block" + i;
                        document.querySelector('.calculate').append(newDiv);
                    }
                        const sumArr = document.querySelectorAll('input[name^="sum"]');
                        const currArr = document.querySelectorAll('input[name^="currency"]');
                        const rateArr = document.querySelectorAll('input[name^="rate"]');
                        const bynArr = document.querySelectorAll('input[name^="byn"]');
                        
                        for (let ind = 0; ind < getDate.summa.length; ind++) {
                            sumArr[ind].value = getDate.summa[ind];
                            currArr[ind].value = getDate.currency[ind];
                            rateArr[ind].value = getDate.rate[ind];
                            bynArr[ind].value = getDate.byn[ind];
                        }
                        
                        document.querySelector('input[name="total"]').value = getDate.total;
                        document.querySelector('input[name="total"]').style.color = "red";
                        document.querySelectorAll('input[type="text"]').forEach(elem => elem.style.color = "red");

                console.log(getDate);
                } 
            } else {
                    document.querySelector('#datecur').value = giornoStr;
                }
    }

//jQuery плагин для курса

var uri = 'https://api.nbrb.by/';
       // $(function () {         
            $('.calculate').on('focusin', '[name^="currency"]', function (ev){
                $(ev.target).val('');
                $(ev.target).next().next().val('');
                console.log($(ev.target).val()); 
            });  
                $('.calculate').on('change', '[name^="currency"]', function (event) {
                    var elTarget = $(event.target);
                        console.log($(event.target)); 
                    var elChange = $(elTarget).next().next();
                        //$(elChange).empty();
                        //  console.log($(elTarget).next().next());                       
                        if (elTarget.val() == 'BYN') {                             
                                $(elChange).val(1);
                            } else {
                                rate(2, elTarget, elChange); 
                            };
                });
        //});

        function parseStrDate(s) {
            var parts = s.split('-');
            if (parts.length != 3) return NaN;

            parts[0] = parseInt(parts[0], 10);
            parts[1] = parseInt(parts[1], 10);
            parts[2] = parseInt(parts[2], 10);

            if (isNaN(parts[0]) || isNaN(parts[1]) || isNaN(parts[2])) return NaN;
            if (parts[0] < 0 || parts[1] < 0 || parts[2] < 0) return NaN;

            return new Date(parts[0], parts[1]-1, parts[2]);
        };

        function rate(p, elTarget, elChange) {
            $.getJSON(uri + 'ExRates/Rates/' + $(elTarget).val(), { 'onDate': parseStrDate($('#datecur').val()).toUTCString(), 'ParamMode': p })
          .done(function (data) {                 
              $(elChange).val(data.Cur_OfficialRate/data.Cur_Scale);
              console.log(data.Cur_OfficialRate);
              console.log(data.Cur_Scale);
          });
        };

//Вывод данных по валютом в текст:
    document.querySelector('#enter').addEventListener('click', rates);
        function rates() {
            $.getJSON(uri + 'ExRates/Rates', { 'onDate': parseStrDate($('#datecur').val()).toUTCString(), 'Periodicity': 0 })
          .done(function (data) {
              $.each(data, function (key, item) {
                  $('<p>', { text: JSON.stringify(item) }).appendTo($('body'));                  
                });
                console.log(JSON.stringify(data));
            });            
        }

    document.querySelector('#add').addEventListener('click', newString);
        
    document.querySelector('.calculate').addEventListener('click', removeString);

document.querySelector('.calculate');
let i = 1;
let resultsArr =[];

// Создание новых строк:
function newString() {
    let divCalc = document.querySelector('.calculate');

    let block = document.createElement('div');
    block.className = "block";
    block.setAttribute("name", "block" + i);
    divCalc.append(block);

    let input = document.createElement('input');
    input.type = "text";
    input.name = "sum" + i;

        block.append(input);
        let inputCur = input.cloneNode(true);
        inputCur.name = "currency" + i;
        inputCur.setAttribute("list", "currencies" + i);
        input.after(inputCur);

    let datalist = document.createElement('datalist');
    datalist.id = "currencies" + i;
    inputCur.after(datalist);
    datalist.append(appOption());

        let inputRate = input.cloneNode(true);
        inputRate.name = "rate" + i;
        datalist.after(inputRate);

        let inputByn = input.cloneNode(true);
        inputByn.name = "byn";
        inputByn.setAttribute('readonly', true);
        inputRate.after(inputByn);

    let button = document.createElement('button');
    button.innerHTML = "x";
    block.append(button);
    i++;
    console.log(block);
}
// Создание элементов option для новой строки:
    function appOption() {
        let fragment = new DocumentFragment();

            for (let i=0; i <=3; i++) {
                let option = document.createElement('option');
                const currency = ["USD", "EUR", "BYN", "RUB"];
                option.append(currency[i]);
                fragment.append(option);
            }
        return fragment;
    }

// Удаление строк:
function removeString(e) {
    if (e.target.tagName != 'BUTTON') {
        return;
    } else {
            console.log(e.target.parentElement);
            let removeDiv = e.target.parentElement;
            let newTotalSum = document.querySelector('input[name="total"]').value - removeDiv.querySelector('input[name^="byn"]').value;

            e.target.parentElement.remove();
            document.querySelector('input[name="total"]').value = newTotalSum;
        }
}

 // Расчеты в строках и итога в бел.р.:

document.querySelector('.calculate').addEventListener('change', getResult);
    function getResult(event) {
        console.log(event.target);
      //  if (event.target.tagName != 'INPUT') return;

        let divEvent = event.target.parentElement;
            console.log(divEvent);

        let sumEvent = divEvent.querySelector('input[name^="sum"]').value;        

        let rateEvent = divEvent.querySelector('input[name^="rate"]').value;
            console.log(rateEvent);

        let result;
            if (isNaN(sumEvent) || sumEvent < 0) {
                alert("Введена не корректная сумма");
            } else if (isNaN(rateEvent) || rateEvent < 0) {
                    alert("Введен не корректный курс");                
                    } else if (!sumEvent || !rateEvent) {
                        return;
                        } else {
                            sumEvent = Math.round(sumEvent * 100) / 100;
                            console.log(sumEvent);          
                            
                            result = Math.round(sumEvent * rateEvent * 100) / 100;
                            divEvent.querySelector('input[name^="byn"]').value = result;
                            console.log(result);
                        }

        let arr = document.querySelectorAll('input[name^="byn"]');
            console.log(arr);
            console.log(+arr[0].value);

        let totalSum = getImputValue(arr, 0);
            console.log(totalSum);
        document.querySelector('input[name="total"]').value = totalSum;
        document.querySelector('input[name="total"]').style.color = "black";
        document.querySelectorAll('input[type="text"]').forEach(elem => elem.style.color = "black");
    }

    //Функция для извелечения значений из коллекции результатов и подсчет итоговой суммы:
        function getImputValue(arr, total) {
            for (let ind =0; ind < arr.length; ind++)  {
                    let res = +arr[ind].value;
                    total += res;   
            }
            return total;
        }

        //Изменение итога в зависимости от выбранной валюты.
        
        document.querySelector('#byns').onclick = function() {
            let totalSum = getImputValue(document.querySelectorAll('input[name^="byn"]'), 0);
            document.querySelector('input[name="total"]').value = totalSum * 1;
        };

        $(function () {
            $('#euro').click(function () {                
                $('[name="total"]').empty();
                var totalSum = getImputValue($('[name^="byn"]'), 0);          
                    rateTot(2, "EUR", totalSum);
            });
        });

        $(function () {
            $('#usd').click(function () {                
                $('[name="total"]').empty();
                var totalSum = getImputValue($('[name^="byn"]'), 0);          
                    rateTot(2, "USD", totalSum);
            });
        });
        function rateTot(p, nbCur, totalSum) {
            $.getJSON(uri + 'ExRates/Rates/' + nbCur, { 'date': parseStrDate($('#datecur').val()).toString(), 'ParamMode': p })
          .done(function (data) {                 
              $('[name="total"]').val(Math.round(totalSum /data.Cur_OfficialRate *100)/100);
             // console.log(data.Cur_OfficialRate);
          });
        };

        /*Первый вариант с фиксированным курсом на все даты*/
      /*  document.querySelector('#euro').onclick = function() {
            let totalSum = getImputValue(document.querySelectorAll('[name^="byn"]'), 0);            
            document.querySelector('input[name="total"]').value = Math.round(totalSum / 3.4 * 100) / 100;
        };*/

       /* document.querySelector('#usd').onclick = function() {
            let totalSum = getImputValue(document.querySelectorAll('[name^="byn"]'), 0);
            document.querySelector('input[name="total"]').value = Math.round(totalSum / 2.9 * 100) / 100;
        };*/


        //Скрыть/показать справку
        document.querySelector('#info').addEventListener('click', getInfoDoc);
            
            function getInfoDoc() {
                const info = document.querySelector('.info');                     
                    if (info.style.display != "block") { 
                        info.style.display = "block";
                        } else {
                            info.style.display = "none";
                            }
            }


        //Запись данных в localStorage по клику на кнопку "Запомнить":
        document.querySelector('#save').addEventListener('click', setValueStore);

        function setValueStore() {
            const totalInDate = document.querySelector('input[name="total"]').value;
            let dateCur = document.querySelector('#datecur').value;
            //  localStorage.setItem(dateCur, totalInDate);
            //  console.log(localStorage.getItem(dateCur));
            const sumArr = document.querySelectorAll('input[name^="sum"]');
            const currArr = document.querySelectorAll('input[name^="currency"]');
            const rateArr = document.querySelectorAll('input[name^="rate"]');
            const bynArr = document.querySelectorAll('input[name^="byn"]');

            const date = {
                data: dateCur,
                summa: property (sumArr),
                currency: property (currArr),
                rate: property (rateArr),
                byn: property (bynArr),
                total: totalInDate
            }
            console.log(date);
            
            localStorage.setItem(dateCur, JSON.stringify(date));
            console.log(JSON.parse(localStorage.getItem(dateCur)));
        }

            // Функция для создания свойств сохраняемого объекта
            function property (array) {
                const saveArr = [];
                for (let index = 0; index < array.length; index++) {
                    saveArr.push(array[index].value);                                
                }
                console.log(saveArr);
                return saveArr;
            }
        