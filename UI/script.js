

var articles = [
{
	id: '1',
	title: 'Жительница Брестской области: «Поставили в паспорте отметку о том, что я обязанное лицо, это как вообще?» МВД: «Все законно»',
	summary: '40-летняя Инна является обязанным лицом уже давно: родительских прав в отношении ее первого сына она лишилась лет семь назад.',
	createdAt: new Date('2017-03-01T10:30:00'),
	author: 'Сентябрь',
	content: '40-летняя Инна является обязанным лицом уже давно: родительских прав в отношении ее первого сына она лишилась лет семь назад. Женщина говорит, что с тех пор «держится» и старается не пить. Правда, утверждает, что в ее паспорте до сих пор стоит «черная метка», из-за которой она не может устроиться ни на хорошую работу, ни получить ссуду на покупку жилья.',
	newsTags: ['женщина', 'дети', 'ребенок']
},
{
	id: '2',
	title: 'Оранжевая война. Репортаж о том, как сходят с ума в Италии',
	summary: 'Вжу-ух! Пока в тебя летит апельсин, ты можешь вспомнить всю свою жизнь.',
	createdAt: new Date('2017-02-10T13:10:00'),
	author: 'Октябрь',
	content: 'Вжу-ух! Пока в тебя летит апельсин, ты можешь вспомнить всю свою жизнь. Люди в оранжевых майках, шальная доза адреналина, фингалы, улыбки, солнце убегает из Пьемонта на Лазурный берег, а полицейские танцуют ча-ча-ча — репортажем с безумной апельсиновой битвы в Италии Onliner.by открывает большой цикл материалов о весне, буднях Европы и новом туристическом сезоне-2017.',
	newsTags: ['война', 'Италия', 'весна']
},
{
	id: '3',
	title: 'Угрозы парнем в маске',
	summary: 'Парень в маске пытался учить жизни мать своего друга и ее сожителя с помощью пневматического пистолета',
	createdAt: new Date('2017-02-21T01:55:00'),
	author: 'Ноябрь',
	content: 'В последний день зимы в Вилейке задержали парня 1998 года рождения. В 8:25 он ворвался в квартиру местной жительницы с пневматическим пистолетом. Молодой человек угрожал его применением, а после скрылся. Его задержали через два часа. Налетчиком оказался приятель сына пострадавшей, сообщили в УВД Миноблисполкома.',
	newsTags: [ 'Вилейка', 'налетчик', 'квартира']
},
{
	id: '4',
	title: 'Контролеры без формы',
	summary: 'Контролеры без форменных жилетов появятся в общественном транспорте не сегодня',
	createdAt: new Date('2017-02-27T15:34:00'),
	author: 'Декабрь',
	content: 'Чиновники «Минсктранса» уточнили: решение примут в ближайшем будущем. Напомним, раньше была озвучена дата 1 марта. Планировалось, что с этого дня жилеты снимут контролеры трамваев. Но пока проверять оплату проезда без форменных жилетов они не будут.',
	newsTags: ['чиновники', 'март', 'проезд']
},
{
	id: '5',
	title: 'Нужны ли поезда',
	summary: 'Минск — Варшава на поезде — надо? БЖД интересуется мнением пассажиров',
	createdAt: new Date('2017-02-23T11:45:00'),
	author: 'Январь',
	content: 'Состав белорусского формирования из Минска в Варшаву ходил вплоть до весны 2015 года. В силу разных причин с тех пор пассажиры, предпочитающие железную дорогу, вынуждены пользоваться московским поездом №9/10. Цена места купе — примерно 130 рублей. Время в пути — 10 часов. БЖД прорабатывает вопрос хитрой комбинации, которая позволит удешевить билет и сократить время. Нужно ваше мнение.',
	newsTags: ['Варшава', 'поезд', 'билет']
},
{
	id: '6',
	title: '100 летие милиции',
	summary: 'Алкоголь в спецмагазинах и сокращение штата МВД. О чем говорил министр внутренних дел накануне 100-летия белорусской милиции?',
	createdAt: new Date('2017-01-15T09:30:00'),
	author: 'Февраль',
	content: 'МВД не оставляет попыток ограничить продажу алкоголя в вечернее время и вынести продажу спиртного за пределы продуктовых магазинов. По словам Игоря Шуневича, в стране 75% убийств совершается в состоянии алкогольного опьянения. О чем говорил министр на пресс-конференции к 100-летию белорусской милиции?',
	newsTags: ['милиция', 'алкоголь', 'МВД']
},
{
	id: '7',
	title: 'Пожар в общаге',
	summary: 'В Минске из-за пожара в студенческом общежитии эвакуировали 200 человек',
	createdAt: new Date('2017-01-11T08:15:00'),
	author: 'Март',
	content: 'Сегодня около 18:00 в студенческом общежитии Белорусской государственной академии искусств на улице Сурганова, 14 произошло возгорание. Сильного пожара не было, но из-за задымления сотрудникам МЧС пришлось эвакуировать из пятиэтажного здания всех людей.',
	newsTags: ['повар', 'Минск', 'общежитие']
},
{
	id: '8',
	title: 'Новый дизайн',
	summary: 'Студия Артемия Лебедева создала дизайн для устройств белорусской компании',
	createdAt: new Date('2017-01-15T07:44:00'),
	author: 'Апрель',
	content: 'Российская студия Артемия Лебедева создала дизайн настенных панелей для систем дистанционного управления, разрабатываемых белорусской компанией «Неро электроникс». Речь идет о панелях, с помощью которых можно регулировать различные системы умного дома.',
	newsTags: ['панели', 'управление', 'дом']
},
{
	id: '9',
	title: 'Оборотень в погонах',
	summary: '«Таким, как я, нет места в рядах милиции». Второй день суда над бывшим руководителем ГАИ Барановичей',
	createdAt: new Date('2017-02-02T11:25:00'),
	author: 'Май',
	content: 'В среду продолжилось заседание суда над бывшим руководителем ГАИ Барановичского района. Андрей Волковыцкий обвиняется в том, что в пьяном виде совершил наезд на нерегулируемом пешеходном переходе на женщину. Та погибла, у нее осталось двое детей. Мужчина вину признал полностью. Сегодня состоялись прения сторон. Отец погибшей предъявил иск о возмещении морального вреда в 94 тысячи рублей. Гособвинитель попросил назначить обвиняемому пять лет лишения свободы. В последнем слове Волковыцкий попросил не судить по его поступку обо всех сотрудниках милиции.',
	newsTags: ['суд', 'милиция', 'погибшая']
},
{
	id: '10',
	title: 'Подорожание отопления',
	summary: 'С 1 марта в Беларуси дорожает отопление, горячее водоснабжение, электроэнергия и газ',
	createdAt: new Date('2017-01-15T11:55:00'),
	author: 'Июнь',
	content: 'Постановлением Совета министров Республики Беларусь проиндексированы субсидируемые государством цены на газ, тарифы на электрическую и тепловую энергию для нужд отопления и горячего водоснабжения для населения. Об этом сообщает сайт Совмина.',
	newsTags: ['отопление', 'газ', 'государство']
},
{
	id: '11',
	title: 'Фото спорткара',
	summary: 'В сеть попали фотографии интерьера спорткара Renault Alpine A110',
	createdAt: new Date('2017-02-19T09:30:00'),
	author: 'Июль',
	content: 'Слухи о дебюте серийного Alpine А110 от Renault ходят уже давно. Буквально каждый месяц где-то появляются неподтвержденные данные о премьере этой машины. Последняя информация гласит, что дебют А110 состоится 7 марта в Женеве. Кстати, некоторые издания утверждали, что автомобиль назовут А120. Сегодня ресурс Carscoops опубликовал первые фотографии серийной версии спорткара.',
	newsTags: ['автомобиль', 'фотография']
},
{
	id: '12',
	title: 'Тачка нарасхват',
	summary: 'Алексей продает Hyundai Genesis — тюнингованное спортивное купе выходного дня',
	createdAt: new Date('2017-02-23T11:42:00'),
	author: 'Август',
	content: 'Этот Hyundai Genesis имеет обозначение R-Spec, что от слова racing. Становится очевидным, для чего предназначено это заднеприводное купе (вот объявление продавца). Алексей сразу расставляет акценты: «В машине нет ничего для комфорта, только кондиционер. Подвеска максимально жесткая. Мощность повышена. Контакт с дорогой и скорость — вот для чего нужен этот автомобиль». Мы решили проверить, насколько хорош Genesis после нескольких этапов тюнинга, направленных на развитие динамики.',
	newsTags: ['автомобиль', 'нарасхват', 'фотография']
},
{
	id: '13',
	title: 'Дача под Минском',
	summary: 'Выбираем летнюю «резиденцию». Какую дачу под Минском можно купить за $6—10 тысяч в эквиваленте',
	createdAt: new Date('2017-03-31T14:23:00'),
	author: 'Сентябрь',
	content: 'В минувшие выходные выдалась шашлычная погода и кто-то наверняка открыл дачный сезон. Небольшой домик на природе, участок в пять-шесть соток, баня. Мечта? Времена дефицита давно сменились изобилием на прилавках, а дачные традиции белорусов по-прежнему сильны. У тех, кто пока не обзавелся своей загородной «резиденцией», сегодня есть выбор. Рынок как раз оживает после зимы, а цены наверняка будут ниже, чем в прошлом году. Мы изучили некоторые варианты.',
	newsTags: ['дача', 'шашлыки']
},
{
	id: '14',
	title: 'Сказка эмигранта',
	summary: 'Минчанка улетела во Францию: «сказка» эмигранта и будни молодой европейской семьи на 33 «квадратах»',
	createdAt: new Date('2017-04-01T08:25:00'),
	author: 'Октябрь',
	content: 'Город Гренобль положили на блюдечко, окружили горами и лесами, отмыли альпийскими ручьями — живи и получай кайф. Ольга переехала сюда недавно, взяв с собой кошку Боcю и пару сумок с вещами. Вместе с мужем — французом Алексом — они встречают нас в своей небольшой, но уютной квартирке в тихом городском квартале. Ольга, как эмигрант с минимальным стажем, не может скрыть внутреннего счастья, рассказывая о жизни, переезде и любви. Бодрым монологом о быте молодой европейской семьи и его отличии от белорусских реалий Onliner.by продолжает цикл «Евровесна», организованный при содействии xistore.by.',
	newsTags: [ 'имиграция', 'Франция' ]
},
{
	id: '15',
	title: 'Немного о лоукостах',
	summary: 'Минтранс: лоукостам нет никаких причин не летать в Беларусь, это решение самих компаний',
	createdAt: new Date('2017-04-04T11:51:00'),
	author: 'Ноябрь',
	content: 'На сегодняшний день компаниям, которые осуществляют авиарейсы по принципу лоукоста, нет никаких причин не летать в Беларусь. Это проблема самих лоукостов. Такое мнение высказал сегодня министр транспорта и коммуникаций Беларуси Анатолий Сивак.',
	newsTags: ['лоукосты', 'авиарейсы']
},
{
	id: '16',
	title: 'Родственники в Тегеране',
	summary: 'Читатель: «„Аэрофлот“ отправил моих родственников „в один конец“ в Тегеран. Там их три с половиной часа продержали в полиции»',
	createdAt: new Date('2017-04-07T17:20:00'),
	author: 'Декабрь',
	content: 'В редакцию Onliner.by обратился читатель. Он утверждает, что его родственники столкнулись с серьезной проблемой: «Аэрофлот» сначала отменил рейс из Минска в Москву, а затем переписал им билеты без подтверждения «Катарскими авиалиниями». «Получилось, что моих родственников отправили в один конец!» — возмущается Глеб.',
	newsTags: ['аэрофлот', 'Тегеран']
},
{
	id: '17',
	title: 'Маленькие квартиры Минска',
	summary: 'Стиральная машина в коридоре и кухня 5 «квадратов». Обзор самых маленьких квартир Минска',
	createdAt: new Date('2017-04-09T21:44:00'),
	author: 'Январь',
	content: 'Судя по тому, что самые малогабаритные квартиры в новостройках, как правило, имеют размер около 30 квадратных метров, именно такая площадь, по мнению застройщиков, минимально подходит для комфортной жизни. Но в сервисе по продаже вторичного жилья можно обнаружить варианты и меньшей площади — от 22 квадратных метров. Это самые дешевые предложения на рынке недвижимости. Как выглядят и где находятся такие квартиры?',
	newsTags: ['кухня', 'площадь']
},
{
	id: '18',
	title: 'Поимка редкого покемона',
	summary: 'Сингапурский пенсионер умер от сердечного приступа после поимки редкого покемона',
	createdAt: new Date('2017-04-11T23:50:00'),
	author: 'Февраль',
	content: 'В Сингапуре 67-летний геймер умер от сердечного приступа, который случился вскоре после поимки редкого покемона по имени Лапрас. Он считается очень осторожным, умным и способным легко понимать человеческую речь. Лян Вейминь, передает Asia One, достиг в Pokemon Go 28-го уровня, в его «Покедексе» было зарегистрировано 200 существ — это указывает на увлеченность пожилого мужчины игрой.',
	newsTags: ['покемоны', 'Сингапур']
},
{
	id: '19',
	title: 'Новый Honda Civic Type-R',
	summary: 'Новый Honda Civic Type-R получил 320-сильный турбомотор и «механику»',
	createdAt: new Date('2017-04-15T01:33:00'),
	author: 'Март',
	content: 'На автосалоне в Женеве поклонники Honda смогут познакомиться с новейшим хетчбэком Civic Type-R. Модель поступит в продажу уже летом, но до Беларуси «заряженная» модель не доедет — мы любим исключительно «бэушные» Honda. Последний «Тайп-Эр» унаследовал 2-литровый VTEC TURBO от предыдущего поколения хетчбэка.',
	newsTags: ['механика', 'Беларусь', 'тест']
},
{
	id: '20',
	title: 'Спортивные объекты',
	summary: 'Белорусским строителям предложили возводить спортивные объекты в Калужской области',
	createdAt: new Date('2017-04-17T04:20:00'),
	author: 'Апрель',
	content: 'Белорусские строители уже построили в Калужской области несколько жилых кварталов. А в ближайшее время им могут доверить возведение на территории России объектов спортивной инфраструктуры в рамках подготовки к проведению чемпионата мира по футболу 2018 года. Об этом пишет «Республиканская строительная газета».',
	newsTags: ['строители', 'Беларусь', 'тест']
}
];

var tags = ['женщина', 'дети', 'ребенок', 'война', 'Италия', 'весна', 'Вилейка', 'налетчик', 'квартира', 'чиновники', 'март', 'проезд', 'Варшава', 'поезд', 'билет', 'милиция', 'алкоголь', 'МВД', 'повар', 'Минск', 'общежитие',
'панели', 'управление', 'дом', 'суд', 'милиция', 'погибшая', 'отопление', 'газ', 'государство', 'автомобиль', 'фотография', 'дача', 'шашлыки', 'имиграция', 'Франция', 'лоукосты', 'авиарейсы', 'аэрофлот', 'Тегеран',
'кухня', 'площадь', 'покемоны', 'Сингапур', 'механика', 'Беларусь', 'строители', 'Беларусь'];



	function compare(a,b) {
		if(a.createdAt > b.createdAt)
			return -1;
		if (a.createdAt < b.createdAt)
			return 1;
		return 0;
	}
	
var articlesExecuting = (function () {

	function getArticles(amountToSkip, amountToGet, filterConfig) {
		
        if(typeof(amountToGet) !== 'number') {
            amountToGet = 10;
        }
        if (typeof(amountToSkip) !== 'number') {
            amountToSkip = 0;
        }
        var articlesForReturning = [];
		articles.sort(compare);
		if (filterConfig != undefined && filterConfig.author != undefined) {
			if (typeof(amountToSkip) == 'number' && typeof(amountToGet) == 'number') {
				for (var i = amountToSkip; i < amountToGet; i++) {
					if (articles[i].author == filterConfig.author) {
						articlesForReturning.push(articles[i]);
					}
				}
				return articlesForReturning;
			}
		}
		if (filterConfig != undefined && filterConfig.newsTags != undefined) {
			if (typeof(amountToSkip) == 'number' && typeof(amountToGet) == 'number') {
				for (var i = amountToSkip; i < amountToGet; i++) {
					for (var j = 0; j < articles[i].newsTags.length; j++) {
						for (var ind = 0; ind < filterConfig.newsTags.length; ind++) {
							if (articles[i].newsTags[j] == filterConfig.newsTags[ind]) {
								articlesForReturning.push(articles[i]);
							}
						
						}

					}
					
				}
				return articlesForReturning;
			}
		}
		else {
			for (var i = amountToSkip; i < amountToGet; i++) {
				articlesForReturning.push(articles[i]);
			}
			return articlesForReturning;

		}
		

	}

	function getArticle(index) {
			for (var i = 0; i < articles.length; i++) {
                if (articles[i].id == index) {
                	return article[i];
                }
			}
	}

	function validateArticle(article) {
		if (typeof(article.id) != 'string') {
			return false;
		}

		var count = 0;
		for (var i = 0; i < articles.length; i++) {
			for (var j = i + 1; j < articles.length - 1; j++) {
				if (articles[i].id == articles[j].id || article.id == articles[i].id) {
					count++;
				}
			}
		}
		if (count >= 1) {
			return false;

        }
        if (article.id == null) {
			return false;
		}

		if (typeof(article.title) != 'string') {
			return false;
		}
		if (article.title.length >= 150) {
			return false;
		}
		if (article.title == '') {
			return false;
		}
		if (article.title == null) {
			return false;
		}

		if (typeof(article.summary) != 'string') {
			return false;
		}
		if (article.summary.length >= 200) {
			return false;
		}
		if (article.summary == null) {
			return false;
		}

		if ((article.createdAt instanceof Date) == false) {
			return false;
		}
		if (article.createdAt == null) {
			return false;
		}

		if (typeof(article.author) != 'string') {
			return false;
		}
		if (article.author == null) {
			return false;
		}
		if (article.author == '') {
			return false;
		}

        if (typeof(article.content) != 'string') {
            return false;
        }
        if (article.content == null) {
            return false;
        }
        if (article.content == '') {
            return false;
        }
        if(article.newsTags.length == 0) {
        	return false; 
        } 

        return true;
	}
	
	function addArticle(article) {
		if(!validateArticle()) {
			return false;
		}
		else {
			articles.push(article);
			return true;
		}
    }
	
	function editArticle(id, article) {
		var newArticle;
		for (var i = 0; i < articles.length(); i++) {
			if (articles[i].id == id) {
				if(validateArticle(articles[i])) {
					if (article.title != undefined) {
						articles[i].title = article.title;
					}
					if (article.content != undefined) {
						articles[i].content = article.content;
					}
					if (article.summary != undefined) {
						aritcles[i].summary = article.content;
					}
				}
				return true;
			}
		}
	}

	function removeArticle(id) {
	    if (typeof(id) != 'string') {
	        return false;
	    }
	    for (var i = 0; i < articles.length; i++) {
	        if (id == articles[i].id) {
	            articles.splice(i,1);
	            return true;
	        }
	    }
	}
	

	function addTag(id, tag) {
		if (typeof(tag) == 'string' && typeof(id) == 'string' 
			&& function checkIfExist() {
				for (var i = 0; i < tags.length; i++) {
					if (tag == tags[i]) {
						return true;
					}
				}
				return false;
			}) {
			for (var i = 0; i < articles.length; i++) {
				if (articles[i].id == id) {
					articles[i].newsTags.push(tag);
					return true;
				}
			}
		}
	}

	function removeTag(id, tag) {
		if (typeof(tag) == 'string' && typeof(id) == 'string') {
			for (var i = 0; i < articles.length; i++) {
				if (articles[i].id == id) {
					for (var j = 0; j < articles[i].newsTags.length; j++) {
						if (articles[i].newsTags[j] == tag) {
							articles[i].newsTags.splice(j,1);
							for (var ind = 0; ind < articles[i].newsTags.length; ind++) {
								console.log(articles[i].newsTags[ind]);
							}
							return true;

						}
					}
				}
			}
		}
	}
	
	return {
		getArticles,
		getArticle,
		validateArticle,
		addArticle,
		editArticle,
		removeArticle,
		addTag,
		removeTag
	};
}());




var articleRenderer = (function () {
    var ARTICLE_TEMPLATE;
    var ARTICLE_LIST_NODE;

    function init() {
        
        ARTICLE_TEMPLATE = document.querySelector('#template-article-list-item');
        ARTICLE_LIST_NODE = document.querySelector('.news-list');
    }

    function insertArticlesInDOM(articles) {
        
        var articlesNodes = renderArticles(articles);
        
        articlesNodes.forEach(function (node) {
            ARTICLE_LIST_NODE.appendChild(node);
        });
    }

    function insertArticleInDom(article) {
    	var articleNode = renderArticle(article);

    	ARTICLE_LIST_NODE.appendChild(articleNode);


    }

    function removeArticlesFromDom() {
    	ARTICLE_LIST_NODE.innerHTML = '';
    }

    function removeArticleFromDom(id) {  
    	
    	
  		for (var i = 0; i < ARTICLE_LIST_NODE.childNodes.length; i++) {
   			if (ARTICLE_LIST_NODE.childNodes[i].dataset.id === id) {
   				ARTICLE_LIST_NODE.removeChild(ARTICLE_LIST_NODE.childNodes[i]);
   				return true;
   			}
  		}
  	}


    

    function renderArticles(articles) {
        
        return articles.map(function (article) {
            return renderArticle(article);
        });
    }

    function renderArticle(article) {
        
        var template = ARTICLE_TEMPLATE;
  	    template.content.querySelector('.news').dataset.id = article.id;
        template.content.querySelector('.newsName').textContent = article.title;
        template.content.querySelector('.newsContent').textContent = article.summary;
        template.content.querySelector('.authored').textContent = 'Создано пользователем' + ' ' + article.author + ',';
        template.content.querySelector('.date').textContent = formatDate(article.createdAt);
        var tags = [];

        article.newsTags.forEach(function(item){
        	tags.push(item);
        });

        template.content.querySelector('.tags').textContent = tags.join(' ');

        
        return template.content.querySelector('.news').cloneNode(true);
    }

   
    function formatDate(d) {
        return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + ' ' +
            d.getHours() + ':' + d.getMinutes();
    }

    function editArticleInDOM(id, newArticle) { 
		for(var i = 0 ; i < ARTICLE_LIST_NODE.childNodes.length; i++){ 
			if (ARTICLE_LIST_NODE.childNodes[i].dataset.id === id) { 
				var newArticleNode = renderArticle(newArticle); 
				ARTICLE_LIST_NODE.replaceChild(newArticleNode,ARTICLE_LIST_NODE.childNodes[i]); 
			} 
		} 
	}
	


    return {
        init: init,
        insertArticlesInDOM: insertArticlesInDOM,
        insertArticleInDom: insertArticleInDom,
        removeArticlesFromDom: removeArticlesFromDom,
        removeArticleFromDom: removeArticleFromDom,
        editArticleInDOM: editArticleInDOM
    };
}());



document.addEventListener('DOMContentLoaded', startApp);


function startApp(skip = 0, top = 20) {
   
    articleRenderer.init();
    
   	renderArticles(skip,top);
}


function renderArticles(skip, top) {
    
    articleRenderer.removeArticlesFromDom();

    
    var articles = articlesExecuting.getArticles(skip, top);

    
    articleRenderer.insertArticlesInDOM(articles);
}

var primitiveMethodsExecuting = (function() {

	function getNewsById(id) {
		var news = document.querySelector('.news-list');
		if (typeof(id) === 'string') {
			for (var i = 0; i < news.childNodes.length; i++) {
				if (news.childNodes[i].dataset.id == id) {
					return news.childNodes[i];
				}
			}
		} else {
			return false;
		}
	}

	function deleteElementFromStringArray(arrayOfStrings, stringForDeleting) {
		if (Array.isArray(arrayOfStrings) && typeof(stringForDeleting) === 'string') {
			var i = arrayOfStrings.indexOf(stringForDeleting);
			while (i != -1) {				
				arrayOfStrings.splice(i,1);
				i = arrayOfStrings.indexOf(stringForDeleting);
			}
			return arrayOfStrings;	
		} else {
			return false;
		}	
	}

	function replaceElementInStringArray(arrayOfStrings, stringForReplacing, inputString) {
		if (Array.isArray(arrayOfStrings) && typeof(stringForReplacing) === 'string'
			&& typeof(inputString) === 'string') {
			var i = arrayOfStrings.indexOf(stringForReplacing);
			while (i != -1) {
				arrayOfStrings.splice(i,1,inputString);
				i = arrayOfStrings.indexOf(stringForReplacing);
			}
			return arrayOfStrings;
		} else {
			return false;
		}
	}

	return {
		getNewsById,
		deleteElementFromStringArray,
		replaceElementInStringArray
	};

}());

// ask how to do lesser amount of checkings
// about functions removetag and edittag (too big amount of duplicated code)
// how to work with tags without using additional array

var tagExecuting = (function () {

	function addTagIntoList(id, tag) {
		if(typeof(tag) == 'string' && typeof(id) == 'string') {
			var requiredNews = primitiveMethodsExecuting.getNewsById(id);
			requiredNews.querySelector('.tags').textContent = requiredNews.querySelector('.tags').textContent + ' ' + tag;
			return true;		
		} else {
			return false;
		}
	}

	function removeTagFromList(id, tag) {
		if (typeof(id) === 'string' && typeof(tag) === 'string') {
			var requiredNews = primitiveMethodsExecuting.getNewsById(id);
			var tagsFromNews = requiredNews.querySelector('.tags').textContent;
			var tagsFromNewsMas = [];
			tagsFromNewsMas = tagsFromNews.split(' ');
			tagsFromNewsMas = primitiveMethodsExecuting.deleteElementFromStringArray(tagsFromNewsMas, tag);
			requiredNews.querySelector('.tags').textContent = tagsFromNewsMas.join(' ');
			return true;
		} else {
			return false;
		}	
	}

	function editTagInList(id, tagForEditing, newTag) {
		if (typeof(id) === 'string' && typeof(tagForEditing) === 'string' 
			&& typeof(newTag) === 'string') {
			var requiredNews = primitiveMethodsExecuting.getNewsById(id);
			var tagsFromNews = requiredNews.querySelector('.tags').textContent;
			var tagsFromNewsMas = [];
			tagsFromNewsMas = tagsFromNews.split(' ');
			tagsFromNewsMas = primitiveMethodsExecuting.replaceElementInStringArray(tagsFromNewsMas, tagForEditing, newTag);
			requiredNews.querySelector('.tags').textContent = tagsFromNewsMas.join(' ');
			return true;
		} else {
			return false;
		}
	} 

	return {
		addTagIntoList,
		removeTagFromList,
		editTagInList
	};
}()); 

	var changingAppearanceForUser = (function () {
		
	var user = 'Batya vseh Bat';	
		
	function changeAppearanceForUnsignedUser() {
		if (user) {
			document.querySelector('.userName').textContent = 'Имя пользователя';
			document.querySelector('.signOut').textContent = 'Войти';
		}
	}

	function changeAppearanceForSignedUser() {
		if (user) {
			document.querySelector('.userName').textContent = 'Станислав Сахарчук';
			document.querySelector('.signOut').textContent = 'Выйти';
		}
	}
	return {
		changeAppearanceForSignedUser,
		changeAppearanceForUnsignedUser
	};
}());











	