Ext.define('app.xtemplate.select_zjh', {});
function areaCh(val) {
    var county = {
        "兰州": ["城关区", "七里河", "西固区", "安宁区", "红古区", "永登县", "皋兰县", "榆中县"],
        "嘉峪关市": ["嘉峪关市"],
        "金昌市": ["金川区", "永昌县"],
        "白银市": ["白银区", "平川区", "靖远县", "会宁县", "景泰县"],
        "天水市": ["秦州区", "麦积区", "清水县", "秦安县", "甘谷县", "武山县", "张家川回族自治县"],
        "武威市": ["凉州区", "民勤县", "古浪县", "天祝藏族自治县"],
        "张掖市": ["甘州区", "民乐县", "临泽县", "高台县", "山丹县", "肃南裕固族自治县"],
        "平凉市": ["崆峒区", "泾川县", "灵台县", "崇信县", "华亭县", "庄浪县", "静宁县"],
        "酒泉市": ["肃州区", "玉门市", "敦煌市", "金塔县", "瓜州县", "肃北蒙古族自治县", "阿克塞哈萨克族自治县"],
        "庆阳市": ["西峰区", "庆城县", "环　县", "华池县", "合水县", "正宁县", "宁　县", "镇原县"],
        "定西市": ["安定区", "通渭县", "陇西县", "渭源县", "临洮县", "漳　县", "岷　县"],
        "陇南市": ["武都区", "成　县", "文　县", "宕昌县", "康　县", "西和县", "礼　县", "徽　县", "两当县"],
        "临夏州": ["临夏市", "临夏县", "康乐县", "永靖县", "广河县", "和政县", "东乡族自治县", "积石山保安族东乡族撒拉族自治县"],
        "甘南州": ["合作市", "临潭县", "卓尼县", "舟曲县", "迭部县", "玛曲县", "碌曲县", "夏河县"]
    }

    Ext.select('#country option').remove();

    for (var i = 0; i < county[val].length; i++){
        Ext.select('#country').first().insertHtml("afterBegin", "<option>" + county[val][i] + "</option>");
    }
};


function areaZjh(val) {
    var csrc_type2 = {
    "农、林、牧、渔业": ["农业", "林业", "畜牧业", "渔业", "农、林、牧、渔服务业"],
    "采矿业": ["煤炭开采和洗选业", "石油和天然气开采业", "黑色金属矿采选业", "有色金属矿采选业", "非金属矿采选业", "开采辅助活动", "其他采矿业"],
    "制造业": ["食品制造业", "酒、饮料和精制茶制造业", "烟草制品业", "纺织业", "纺织服装、服饰业", "皮革、毛皮、羽毛及其制品和制鞋业", "木材加工和木、竹、藤、棕、草制品业", "家具制造业", "造纸和纸制品业", "印刷和记录媒介复制业", "文教、工美、体育和娱乐用品制造业", "石油加工、炼焦和核燃料加工业", "化学原料和化学制品制造业", "医药制造业", "化学纤维制造业", "橡胶和塑料制品业", "非金属矿物制品业", "黑色金属冶炼和压延加工业", "有色金属冶炼和压延加工业", "金属制品业", "通用设备制造业", "专用设备制造业", "汽车制造业", "铁路、船舶、航空航天和其他运输设备制造业", "电气机械和器材制造业", "计算机、通信和其他电子设备制造业", "仪器仪表制造业", "其他制造业", "废弃资源综合利用业", "金属制品、机械和设备修理业"],
    "电力、热力、燃气及水生产和供应业": ["电力、热力生产和供应业", "燃气生产和供应业", "水的生产和供应业"],
    "建筑业": ["房屋建筑业", "土木工程建筑业", "建筑安装业", "建筑装饰和其他建筑业"],
    "批发和零售业": ["批发业", "零售业"],
    "交通运输、仓储和邮政业": ["铁路运输业", "道路运输业", "水上运输业", "航空运输业", "管道运输业", "装卸搬运和运输代理业", "仓储业", "邮政业"],
    "住宿和餐饮业": ["住宿业", "餐饮业"],
    "信息传输、软件和信息技术服务业": ["电信、广播电视和卫星传输服务", "互联网和相关服务", "软件和信息技术服务业"],
    "金融业": ["货币金融服务", "资本市场服务", "保险业", "其他金融业"],
    "房地产业": ["房地产业"],
    "租赁和商务服务业": ["租赁业", "商务服务业"],
    "科学研究和技术服务业" : ["研究和试验发展", "专业技术服务业", "科技推广和应用服务业"],
    "水利、环境和公共设施管理业" : ["水利管理业", "生态保护和环境治理业", "公共设施管理业"],
    "居民服务、修理和其他服务业" : ["居民服务业", "机动车、电子产品和日用产品修理业", "其他服务业"],
    "教育": ["教育"],
    "卫生和社会工作": ["卫生", "社会工作"],
    "文化、体育和娱乐业": ["新闻和出版业", "广播、电视、电影和影视录音制作业", "文化艺术业", "体育", "娱乐业"],
    "综合": ["综合"]
    }

    Ext.select('#csrc_type2 option').remove();
    for (var i = 0; i < csrc_type2[val].length; i++){
        Ext.select('#csrc_type2').first().insertHtml("afterBegin", "<option>" + csrc_type2[val][i] + "</option>");
    }
};

var indclass2 = {
    "农、林、牧、渔业": ["农业","林业","畜牧业","渔业","农、林、牧、渔服务业"],
    "采矿业": ["煤炭开采和洗选业","石油和天然气开采业","黑色金属矿采选业","有色金属矿采选业","非金属矿采选业","其他采矿业"],
    "制造业": ["农副食品加工业","食品制造业","饮料制造业","烟草制品业","纺织业","纺织服装、鞋、帽制造业","皮革、毛皮、羽毛(绒)及其制品业","木材加工及木、竹、藤、棕、草制品业","家具制造业","造纸及纸制品业","印刷业和记录媒介的复制","文教体育用品制造业","石油加工、炼焦及核燃料加工业","化学原料及化学制品制造业","医药制造业","化学纤维制造业","橡胶制品业","塑料制品业","非金属矿物制品业","黑色金属冶炼及压延加工业","有色金属冶炼及压延加工业","金属制品业","通用设备制造业","专用设备制造业","交通运输设备制造业","电气机械及器材制造业","通信设备、计算机及其他电子设备制造业","仪器仪表及文化、办公用机械制造业","工艺品及其他制造业","废弃资源和废旧材料回收加工业"],
    "电力、燃气及水的生产和供应业": ["电力、热力的生产和供应业","燃气生产和供应业","水的生产和供应业"],
    "建筑业": ["房屋和土木工程建筑业","建筑安装业","建筑装饰业","其他建筑业"],
    "交通运输、仓储和邮政业": ["铁路运输业","道路运输业","城市公共交通业","水上运输业","航空运输业","管道运输业","装卸搬运和其他运输服务业","仓储业","邮政业"],
    "信息传输、计算机服务和软件业": ["电信和其他信息传输服务业","计算机服务业","软件业"],
    "批发和零售业": ["批发业","零售业"],
    "住宿和餐饮业": ["住宿业","餐饮业"],
    "金融业": ["银行业","证券业","保险业","其他金融活动"],
    "房地产业": ["房地产业"],
    "租赁和商务服务业": ["租赁业","商务服务业"],
    "科学研究、技术服务和地质勘查业": ["研究与试验发展","专业技术服务业","科技交流和推广服务业","地质勘查业"],
    "水利、环境和公共设施管理业": ["水利管理业","环境管理业","公共设施管理业"],
    "居民服务和其他服务业": ["居民服务业","其他服务业"],
    "教育": ["教育"],
    "卫生、社会保障和社会福利业": ["卫生","社会保障业","社会福利业"],
    "文化、体育和娱乐业": ["新闻出版业","广播、电视、电影和音像业","文化艺术业","体育","娱乐业"],
    "公共管理和社会组织": ["中国共产党机关","国家机构","人民政协和民主党派","群众团体、社会团体和宗教组织","基层群众自治组织"],
    "国际组织": ["国际组织"]
}

//var indclass3 = {
//    "农、林、牧、渔业": ["农业","林业","畜牧业","渔业","农、林、牧、渔服务业"],
//    "采矿业": ["煤炭开采和洗选业","石油和天然气开采业","黑色金属矿采选业","有色金属矿采选业","非金属矿采选业","其他采矿业"],
//    "制造业": ["农副食品加工业","食品制造业","饮料制造业","烟草制品业","纺织业","纺织服装、鞋、帽制造业","皮革、毛皮、羽毛(绒)及其制品业","木材加工及木、竹、藤、棕、草制品业","家具制造业","造纸及纸制品业","印刷业和记录媒介的复制","文教体育用品制造业","石油加工、炼焦及核燃料加工业","化学原料及化学制品制造业","医药制造业","化学纤维制造业","橡胶制品业","塑料制品业","非金属矿物制品业","黑色金属冶炼及压延加工业","有色金属冶炼及压延加工业","金属制品业","通用设备制造业","专用设备制造业","交通运输设备制造业","电气机械及器材制造业","通信设备、计算机及其他电子设备制造业","仪器仪表及文化、办公用机械制造业","工艺品及其他制造业","废弃资源和废旧材料回收加工业"],
//    "电力、燃气及水的生产和供应业": ["电力、热力的生产和供应业","燃气生产和供应业","水的生产和供应业"],
//    "建筑业": ["房屋和土木工程建筑业","建筑安装业","建筑装饰业","其他建筑业"],
//    "交通运输、仓储和邮政业": ["铁路运输业","道路运输业","城市公共交通业","水上运输业","航空运输业","管道运输业","装卸搬运和其他运输服务业","仓储业","邮政业"],
//    "信息传输、计算机服务和软件业": ["电信和其他信息传输服务业","计算机服务业","软件业"],
//    "批发和零售业": ["批发业","零售业"],
//    "住宿和餐饮业": ["住宿业","餐饮业"],
//    "金融业": ["银行业","证券业","保险业","其他金融活动"],
//    "房地产业": ["房地产业"],
//    "租赁和商务服务业": ["租赁业","商务服务业"],
//    "科学研究、技术服务和地质勘查业": ["研究与试验发展","专业技术服务业","科技交流和推广服务业","地质勘查业"],
//    "水利、环境和公共设施管理业": ["水利管理业","环境管理业","公共设施管理业"],
//    "居民服务和其他服务业": ["居民服务业","其他服务业"],
//    "教育": ["教育"],
//    "卫生、社会保障和社会福利业": ["卫生","社会保障业","社会福利业"],
//    "文化、体育和娱乐业": ["新闻出版业","广播、电视、电影和音像业","文化艺术业","体育","娱乐业"],
//    "公共管理和社会组织": ["中国共产党机关","国家机构","人民政协和民主党派","群众团体、社会团体和宗教组织","基层群众自治组织"],
//    "国际组织": ["国际组织"]
//}

function industry1(val) {
    Ext.select('#indclass2 option').remove();
    for (var i = 0; i < indclass2[val].length; i++){
        Ext.select('#indclass2').first().insertHtml("afterBegin", "<option>" + indclass2[val][i] + "</option>");
    }
};

