
/* ===== SPACES DATA ===== */
const SPACES = [
  {
    id: 'living', name: '客厅', icon: '🛋️',
    headerDesc: '客厅是老年人日常活动最核心的区域，地面平整度、家具尖角、照明充足度均需重点关注。',
    riskLevel: 'high',
    hazards: [
      { title: '家具尖角未防护', desc: '茶几、电视柜等家具尖角易造成磕碰伤害，建议安装防撞护角。', icon: '⚠️', level: 'high', solution: '安装防撞护角（硅胶软包角或泡棉包角）' },
      { title: '地面存在高低差', desc: '地毯边缘、门槛等地面高差是老年人绊倒的主要原因，建议消除或铺设斜坡垫。', icon: '🪜', level: 'high', solution: '铺设斜坡垫消除高差，或移除地毯' },
      { title: '沙发过高/过软', desc: '座高超过50cm或沙发过软会导致老年人起身困难，建议更换适老助起沙发。', icon: '🛋️', level: 'mid', solution: '更换助起沙发或适老沙发（座高45-50cm为宜）' },
      { title: '照明不足', desc: '客厅照度不足会影响老年人视力判断，建议增设暖色LED灯，照度不低于300lux。', icon: '💡', level: 'mid', solution: '增设暖色LED灯，照度不低于300lux' }
    ]
  },
  {
    id: 'bedroom', name: '卧室', icon: '🛏️',
    headerDesc: '卧室是老年人停留时间最长的空间，夜间起夜安全、床边防护、紧急呼叫是改造重点。',
    riskLevel: 'high',
    hazards: [
      { title: '无夜间照明', desc: '夜间起夜时黑暗环境极易导致跌倒，建议在床底、走廊安装感应夜灯。', icon: '🌙', level: 'high', solution: '安装床底感应夜灯+走廊感应灯，感应距离3m以上' },
      { title: '床边无护栏', desc: '睡眠中翻身跌落风险高，建议安装床边护栏或抓杆（高度60-70cm）。', icon: '🛏️', level: 'high', solution: '安装床边护栏或抓杆（高度60-70cm）' },
      { title: '无紧急呼叫', desc: '紧急情况时能否及时求助非常关键，建议床头安装一键紧急呼叫按钮。', icon: '🆘', level: 'high', solution: '床头安装一键紧急呼叫按钮，联动家人手机或监控中心' },
      { title: '床高不合适', desc: '床高过高或过低都会增加起卧难度，标准适老床高应为45-50cm。', icon: '📐', level: 'mid', solution: '更换电动护理床（可调节高度），或加装床脚垫片' }
    ]
  },
  {
    id: 'bathroom', name: '卫生间', icon: '🚿',
    headerDesc: '卫生间是家中跌倒最高发的区域，湿滑地面、无扶手是主要隐患，需重点改造。',
    riskLevel: 'high',
    hazards: [
      { title: '地面湿滑', desc: '湿滑地面是卫生间跌倒的头号原因，建议铺设防滑贴或防滑地砖（R10级以上）。', icon: '💧', level: 'high', solution: '铺设防滑贴或更换防滑地砖（R10级以上）' },
      { title: '马桶旁无扶手', desc: '扶手能帮助老年人稳定起身，建议在马桶旁安装L型或U型扶手。', icon: '🚽', level: 'high', solution: '安装马桶扶手（L型或U型）或更换助起马桶' },
      { title: '无淋浴椅', desc: '站立洗澡消耗体力，易疲劳跌倒，建议配置淋浴椅或助浴器，安装手持花洒。', icon: '🚿', level: 'high', solution: '配置淋浴椅或助浴器，安装手持花洒' },
      { title: '墙面无连续扶手', desc: '从马桶到淋浴区需要连续扶手支撑，建议沿墙安装L型或U型扶手（高度75-85cm，承重≥150kg）。', icon: '🤲', level: 'mid', solution: '沿墙安装L型或U型扶手，高度75-85cm，承重≥150kg' }
    ]
  },
  {
    id: 'kitchen', name: '厨房', icon: '🍳',
    headerDesc: '厨房涉及用火用电安全，操作台高度、地面防滑、燃气报警均需重点关注。',
    riskLevel: 'mid',
    hazards: [
      { title: '操作台面过高', desc: '台面高度不当会导致腰酸背痛和重心不稳，建议调低台面至75-80cm（坐轮椅者70-75cm）。', icon: '📏', level: 'mid', solution: '调低台面至75-80cm，坐轮椅者降至70-75cm' },
      { title: '高处储物', desc: '常用物品放置在需要踮脚或爬高才能拿到的地方，建议增设中部柜（高度100-130cm）。', icon: '🗄️', level: 'mid', solution: '增设中部柜/中部架（高度100-130cm），常用物品放置中间层' },
      { title: '地面油渍水渍', desc: '油渍水渍会大幅降低地面防滑性，建议使用防滑贴/防滑地垫，保持地面干净。', icon: '🫧', level: 'high', solution: '使用防滑贴/防滑地垫，保持地面干净' },
      { title: '无燃气报警器', desc: '燃气泄漏是重大安全隐患，建议安装燃气报警器+自动切断阀。', icon: '🔥', level: 'high', solution: '安装燃气报警器+自动切断阀，联动报警' }
    ]
  },
  {
    id: 'entrance', name: '玄关/过道', icon: '🚪',
    headerDesc: '玄关门槛、过道照明、换鞋便利性直接影响出入安全，是适老化改造的重要一环。',
    riskLevel: 'mid',
    hazards: [
      { title: '进门有门槛', desc: '门槛是居家跌倒的高发点之一，建议移除门槛，或铺设室内斜坡垫（坡度≤1:12）。', icon: '🚧', level: 'high', solution: '移除门槛，或铺设室内斜坡垫（坡度≤1:12）' },
      { title: '门洞过窄', desc: '门洞净宽不足80cm会阻碍轮椅通行，建议拓宽门洞并安装折叠门或推拉门。', icon: '🚪', level: 'mid', solution: '拓宽门洞至≥80cm，并安装折叠门或推拉门' },
      { title: '无换鞋凳', desc: '单腿站立换鞋极易跌倒，建议设置换鞋凳（高35-45cm）+墙面扶手辅助站立。', icon: '👟', level: 'mid', solution: '设置换鞋凳（高35-45cm）+墙面扶手辅助站立' },
      { title: '过道照明不足', desc: '昏暗的过道是夜间跌倒的高发区，建议安装感应式壁灯（照度≥100lux）。', icon: '🔦', level: 'mid', solution: '安装感应式壁灯，确保走廊照度≥100lux' }
    ]
  },
  {
    id: 'balcony', name: '阳台', icon: '🌿',
    headerDesc: '阳台栏杆高度、地面防滑、晾衣便利性都需要适老化调整，防止坠落和高处跌倒。',
    riskLevel: 'mid',
    hazards: [
      { title: '栏杆过低', desc: '旧式阳台栏杆可能不足1m，存在坠落风险，建议加高栏杆至≥110cm，或加装防护网。', icon: '🏗️', level: 'high', solution: '加高栏杆至≥110cm，如条件限制可加装防护网' },
      { title: '阳台地面湿滑', desc: '雨水或晾晒会导致地面湿滑，建议铺设防滑地砖（R11级），及时修补损坏的地砖。', icon: '🌧️', level: 'mid', solution: '铺设防滑地砖（R11级），修补损坏的地砖' },
      { title: '晾衣架过高', desc: '传统晾衣架对老年人体力和平衡要求高，建议更换电动升降晾衣架。', icon: '👕', level: 'mid', solution: '更换电动升降晾衣架，遥控操作，安全省力' },
      { title: '无紧急呼叫', desc: '阳台偏离室内活动区，意外时呼救困难，建议安装紧急呼叫按钮或可穿戴紧急呼叫设备。', icon: '📞', level: 'low', solution: '安装紧急呼叫按钮或配备可穿戴紧急呼叫设备' }
    ]
  }
];

/* ===== DEMO AI RESULTS (演示模式，API 不可用时使用) ===== */
const DEMO_AI_RESULTS = {
  living: {
    spaceType: '客厅',
    hazards: [
      { title: '地面地毯边缘翘起', level: 'high', description: '照片中可见客厅中央地毯边缘多处翘起，老年人踩踏时极易被绊倒，是常见的跌倒隐患。', solution: '移除地毯，或改用底部带防滑胶的低矮地毯（厚度≤5mm），边缘用双面胶固定平整。' },
      { title: '茶几尖角无防护', level: 'high', description: '长方形玻璃茶几四角为尖锐直角，且茶几位置处于沙发与电视柜的行走路径上，老年人匆忙走过时容易磕碰。', solution: '在茶几四角安装硅胶防撞护角（半圆弧形，厚度≥10mm），或更换圆角茶几。' },
      { title: '插座位置过低', level: 'mid', description: '照片中电视柜下方插座高度约20cm，老年人弯腰插拔插头时重心不稳，有跌倒风险。', solution: '加装无线移动插座（带开关）放置于桌面高度（70-80cm），或请电工将插座移至离地60cm处。' },
      { title: '沙发座高过低', level: 'mid', description: '照片中沙发座面明显偏低，座高估计约38cm，低于适老标准（45-50cm），老年人坐下和起立均费力。', solution: '更换座高45-50cm的助起沙发，或在现有沙发上加装5-8cm的硬质坐垫抬高座面。' },
      { title: '走廊照明不足', level: 'low', description: '照片中客厅通往卧室的走廊未设置辅助照明，仅依靠远处客厅主灯，照度估计不足100lux。', solution: '在走廊吊顶加装感应式LED灯带或壁灯，照度提升至150-200lux，色温3000K暖光为宜。' }
    ],
    summary: '客厅整体存在5处安全隐患，其中2处高风险需优先处理。建议优先移除地毯和加装茶几防撞护角，这两项改造成本低、效果显著。'
  },
  bedroom: {
    spaceType: '卧室',
    hazards: [
      { title: '床边无夜灯', level: 'high', description: '照片中床头区域完全没有辅助照明，夜间起夜时老年人需要在黑暗中摸索行走，跌倒风险极高。', solution: '在床底两侧安装人体感应夜灯（暖光，照度30-50lux），或在床头安装触摸式小夜灯。' },
      { title: '床边未安装护栏', level: 'high', description: '照片中床铺边缘无任何防护设施，且床宽较大（约1.8m），老年人在睡眠中翻身时存在跌落风险。', solution: '在床铺远离墙壁的一侧安装床边护栏（高度60-70cm，长度≥1.2m，承重≥100kg），护栏可折叠收起。' },
      { title: '床头无紧急呼叫按钮', level: 'high', description: '照片中床头区域未见到任何紧急呼叫设备，若老年人在夜间突发不适，无法及时呼救。', solution: '在床头柜上方30-50cm处安装一键紧急呼叫按钮，按钮面积≥5cm²，连线至家人手机或社区监控中心。' },
      { title: '衣柜最高层板过高', level: 'mid', description: '照片中衣柜顶柜高度约2m，老年人需要踮脚或借助凳子才能取到物品，极易失去平衡。', solution: '将常用衣物移至衣柜中部（高度100-160cm区间），顶部储物区改为存放换季被褥等不常用物品，或加装升降式挂衣杆。' },
      { title: '地面有拖鞋乱放', level: 'low', description: '照片中床尾地面有一双拖鞋未归位，属于典型的可移动绊倒隐患。', solution: '在床尾设置拖鞋固定存放区（如底部带挡条的拖鞋架），养成用完即归位的习惯。' }
    ],
    summary: '卧室识别出5处隐患，其中3处高风险与夜间安全直接相关，建议优先安装夜灯、床边护栏和紧急呼叫按钮，预算约800-1500元。'
  },
  bathroom: {
    spaceType: '卫生间',
    hazards: [
      { title: '淋浴区地面无防滑处理', level: 'high', description: '照片中淋浴区地面为普通瓷砖，表面光滑，遇水后将变得极滑，是老年人跌倒最高发的区域。', solution: '在淋浴区地面铺设防滑贴（R11级，粗糙表面），或请专业人员切割原地砖后铺设防滑砖，防滑等级R10以上。' },
      { title: '马桶旁无扶手', level: 'high', description: '照片中马桶左右两侧均为空墙，无任何扶手设施，老年人从坐姿站起时需要依靠腿部力量，对膝关节压力很大。', solution: '在马桶右侧（或左侧，依使用习惯）墙面安装L型扶手（高度70-75cm，长度≥60cm，承重≥150kg），如墙面无法打孔可使用 suction 式临时扶手作为过渡。' },
      { title: '无淋浴椅', level: 'high', description: '照片中淋浴区为站立式设计，老年人长时间站立洗澡容易体力不支而跌倒。', solution: '配置浴室专用淋浴椅（防滑脚垫+靠背式，承重≥130kg），同时更换手持花洒（带1.5m软管），坐着洗澡更安全。' },
      { title: '洗手台下方管路裸露', level: 'mid', description: '照片中洗手台下方下水管路裸露，热水器管路复杂，老年人入浴时若滑倒可能撞到硬物。', solution: '加装浴室管路防护套（发泡EVA材质，厚度≥20mm），或请装修师傅做下水管暗埋处理。' },
      { title: '地面无积水提醒设施', level: 'low', description: '照片中地面未见到任何积水提醒标识，老年人可能未能意识到地面湿滑程度。', solution: '在淋浴区门外地面张贴"小心地滑"警示贴（荧光材质，夜间也可识别），并放置吸水地垫（矽胶材质，厚度≥15mm）。' }
    ],
    summary: '卫生间是居家跌倒最高发区域，本次识别出5处隐患，建议优先进行防滑处理、安装马桶扶手和配置淋浴椅，改造预算约1500-3000元。'
  },
  kitchen: {
    spaceType: '厨房',
    hazards: [
      { title: '操作台面高度为85cm，偏高', level: 'mid', description: '照片中厨房操作台面高度约85cm，高于适老标准（75-80cm），老年人操作时需长时间抬臂，易疲劳且重心不稳。', solution: '如为整体橱柜可加装10cm高的垫高底座降低有效操作高度；如使用频率不高可在操作区域放置便携式矮操作台（高度70cm）。' },
      { title: '吊柜最低层板高度约1.9m', level: 'mid', description: '照片中吊柜最低一层也需伸手才能取到，老年人需要踮脚，有失去平衡的危险。', solution: '将常用碗碟、调料移至地柜抽屉（高度80-110cm区间），吊柜仅存放少用物品，或加装下拉式升降拉篮（价格约300-800元）。' },
      { title: '地面瓷砖遇油易滑', level: 'high', description: '照片中厨房地面为亮面瓷砖，表面光滑，若有油渍滴落将非常湿滑，且照片中未见到防滑地垫。', solution: '在灶台前和水槽前放置防滑地垫（底部带吸盘，表面为凹凸纹理），日常及时清理地面油渍，每月用去油剂彻底清洁地面一次。' },
      { title: '未安装燃气报警器', level: 'high', description: '照片中厨房未见燃气报警器，燃气泄漏早期难以察觉，是重大安全隐患。', solution: '在灶台上方30-50cm处安装燃气报警器（带自动切断阀联动功能），报警器需定期（每半年）按测试键检测是否正常。' },
      { title: '垃圾桶置于行走路径上', level: 'low', description: '照片中厨房垃圾桶放置在灶台与水槽之间的过道上，可能被匆忙行走的老年人踢到或绊倒。', solution: '将垃圾桶移至橱柜内嵌入式垃圾桶，或在墙角设置固定式带盖垃圾桶（底部带防滑固定件）。' }
    ],
    summary: '厨房识别出5处隐患，重点关注地面防滑和燃气安全，建议优先安装燃气报警器和铺设防滑地垫，两项合计预算约200-500元，但安全效益极高。'
  },
  entrance: {
    spaceType: '玄关/过道',
    hazards: [
      { title: '进门门槛高度约3cm', level: 'high', description: '照片中进门处有一道约3cm高的门槛，老年人进出时若未能注意，极易被绊倒，是居家跌倒的高发点。', solution: '拆除门槛，或铺设室内斜坡垫（坡度≤1:12，表面为防滑纹理），斜坡垫宽度需覆盖整个门洞（≥80cm）。' },
      { title: '玄关无换鞋凳', level: 'mid', description: '照片中玄关区域未设置坐凳，老年人需要单腿站立换鞋，平衡能力差时极易跌倒。', solution: '在进门一侧墙面安装折叠式换鞋凳（展开后座高40-45cm，承重≥120kg），不用时可折叠收起节省空间。' },
      { title: '走廊宽度约90cm，勉强够用', level: 'mid', description: '照片中连接各房间的走廊净宽约90cm，若为轮椅使用者则需≥80cm，但普通老年人双手持物时通过仍显局促。', solution: '清理走廊两侧杂物，确保净宽≥90cm；如条件允许可拆除两侧非承重墙，将走廊拓宽至≥100cm。' },
      { title: '走廊未安装连续扶手', level: 'mid', description: '照片中走廊两侧均为空墙，无扶手支撑，老年人在走廊行走时无法借助支撑，尤其夜间更危险。', solution: '沿走廊一侧墙面安装连续扶手（直径32-38mm，离墙40mm，高度80-85cm），扶手末端需有向下或向上弯曲的收尾设计防止衣物勾挂。' },
      { title: '玄关照明仅靠一盏顶灯', level: 'low', description: '照片中玄关区域照明不足，顶灯位置偏内侧，进门瞬间光线较暗，老年人适应光线需要时间。', solution: '在进门门框上方加装感应式壁灯或筒灯（色温3000K，照度≥150lux），人走近时自动点亮，延迟30秒后关闭。' }
    ],
    summary: '玄关/过道识别出5处隐患，其中进门门槛是最高优先级处理项，建议优先拆除门槛或铺设斜坡垫，同时增设换鞋凳，改造预算约300-800元。'
  },
  balcony: {
    spaceType: '阳台',
    hazards: [
      { title: '栏杆高度约95cm，不足', level: 'high', description: '照片中阳台栏杆高度目测约95cm，低于适老安全标准（≥110cm），存在攀爬跌落的重大安全隐患。', solution: '在原有栏杆基础上加高至≥110cm（可用同材质方管焊接延伸），或加装隐形防护网（钢丝间距≤5cm，承重力≥100kg）作为双重保护。' },
      { title: '阳台地面瓷砖光滑', level: 'mid', description: '照片中阳台地面铺设与普通室内相同的亮面瓷砖，遇雨水或晾晒滴水后会变得湿滑。', solution: '在阳台地面铺设防滑地砖（R11级）或防滑环氧地坪，如暂时不便更换可先铺设户外防滑地垫（矽胶材质，带排水孔）。' },
      { title: '晾衣架为固定式，高度约1.8m', level: 'mid', description: '照片中晾衣架为固定式，挂取衣物时需要举手操作，老年人肩部活动受限时非常困难，且站在凳子上操作有跌落风险。', solution: '更换为电动升降晾衣架（带遥控，最低可降至1.2m），或加装手摇式升降晾衣架（预算约200-500元）。' },
      { title: '阳台未安装紧急呼叫按钮', level: 'low', description: '照片中阳台区域未见到紧急呼叫设备，阳台相对偏僻，若发生意外时呼救困难。', solution: '在阳台墙面（高度1.2-1.5m处）安装紧急呼叫按钮（防水型，IP65等级），与卧室/客厅的呼叫系统联动。' },
      { title: '花盆摆放于栏杆顶部', level: 'low', description: '照片中阳台栏杆上摆放有花盆，若被碰落可能砸伤楼下行人，且老年人探身浇水时身体重心超出栏杆范围，有跌落风险。', solution: '将所有花盆移至阳台地面或安装栏杆挂式花盆架（重心在室内侧），严禁在栏杆顶部放置任何物品。' }
    ],
    summary: '阳台识别出5处隐患，栏杆高度不足是最需优先处理的安全问题，建议尽快加高栏杆或加装防护网，同时更换为升降晾衣架，改造预算约800-2000元。'
  }
};

/* ===== QUESTIONNAIRES ===== */
const SPACE_QUESTIONNAIRES = {
  living: {
    title: '客厅安全评估',
    questions: [
      { q: '客厅家具（茶几、电视柜等）是否有未包裹的尖角？', hint: '尖角是老年人磕碰的主要隐患之一', key: 'sharpCorner' },
      { q: '地面是否有地毯、门槛或其他高低差？', hint: '地面高差极易导致绊倒', key: 'floorDiff' },
      { q: '沙发是否过软过低，导致起身困难？', hint: '标准适老沙发座高应为45-50cm', key: 'softSofa' },
      { q: '客厅照明是否充足？（建议≥300lux）', hint: '光线不足会影响老年人视力判断', key: 'poorLight', reverse: true }
    ],
    suggestions: {
      sharpCorner: { icon: '🪑', title: '安装防撞护角', desc: '在茶几、电视柜等家具尖角处安装硅胶软包角或泡棉包角，有效防止磕碰伤害。', solution: '安装防撞护角（硅胶软包角或泡棉包角）' },
      floorDiff: { icon: '🪜', title: '消除地面高差', desc: '铺设斜坡垫消除门槛/地毯边缘高差，或移除可移动地毯，保持地面平整。', solution: '铺设斜坡垫消除高差，或移除地毯' },
      softSofa: { icon: '🛋️', title: '更换适老沙发', desc: '选择座高45-50cm的助起沙发或适老沙发，帮助老年人轻松起身。', solution: '更换助起沙发或适老沙发（座高45-50cm为宜）' },
      poorLight: { icon: '💡', title: '改善客厅照明', desc: '增设暖色LED灯，确保客厅照度不低于300lux，在角落和通道增加辅助照明。', solution: '增设暖色LED灯，照度不低于300lux' }
    }
  },
  bedroom: {
    title: '卧室安全评估',
    questions: [
      { q: '夜间起夜时，床边到厕所路线上是否有感应夜灯？', hint: '老年人夜间起夜频繁，黑暗环境极易摔倒', key: 'noNightLight', reverse: true },
      { q: '床边是否安装了护栏或抓杆？', hint: '防止睡眠中翻身跌落', key: 'noBedRail', reverse: true },
      { q: '床头是否有一键紧急呼叫按钮？', hint: '紧急情况时能否及时求助非常关键', key: 'noEmergency', reverse: true },
      { q: '床的高度是否合适？（标准45-50cm）', hint: '过高或过低都会增加起卧难度', key: 'wrongBedHeight' }
    ],
    suggestions: {
      noNightLight: { icon: '🌙', title: '安装感应夜灯', desc: '在床底、走廊、厕所安装感应夜灯，感应距离3m以上，自动亮起。', solution: '安装床底感应夜灯+走廊感应灯，感应距离3m以上' },
      noBedRail: { icon: '🛏️', title: '安装床边护栏', desc: '安装床边护栏或抓杆（高度60-70cm），防止跌落同时辅助起身。', solution: '安装床边护栏或抓杆（高度60-70cm）' },
      noEmergency: { icon: '🆘', title: '安装紧急呼叫按钮', desc: '床头安装一键紧急呼叫按钮，联动家人手机或监控中心，紧急时刻救命。', solution: '床头安装一键紧急呼叫按钮，联动家人手机或监控中心' },
      wrongBedHeight: { icon: '📐', title: '调整床铺高度', desc: '更换电动护理床（可调节高度），或在床脚加装垫片，使床高达到45-50cm。', solution: '更换电动护理床（可调节高度），或加装床脚垫片' }
    }
  },
  bathroom: {
    title: '卫生间安全评估',
    questions: [
      { q: '卫生间地面是否铺设了防滑材料？（防滑等级R10以上）', hint: '湿滑地面是卫生间跌倒的头号原因', key: 'slipperyFloor', reverse: true },
      { q: '马桶旁是否安装了扶手？', hint: '扶手能帮助老年人稳定起身', key: 'noToiletGrab', reverse: true },
      { q: '洗澡时是否有淋浴椅或助浴器？', hint: '站立洗澡消耗体力，易疲劳跌倒', key: 'noShowerChair', reverse: true },
      { q: '墙面是否安装了连续扶手？（高度75-85cm）', hint: '从马桶到淋浴区需要连续扶手支撑', key: 'noWallGrab', reverse: true }
    ],
    suggestions: {
      slipperyFloor: { icon: '💧', title: '铺设防滑地面', desc: '铺设防滑贴或更换防滑地砖（R10级以上），湿态摩擦系数应≥0.5。', solution: '铺设防滑贴或更换防滑地砖（R10级以上）' },
      noToiletGrab: { icon: '🚽', title: '安装马桶扶手', desc: '安装L型或U型马桶扶手，帮助老年人稳定起身，减少跌倒风险。', solution: '安装马桶扶手（L型或U型）或更换助起马桶' },
      noShowerChair: { icon: '🚿', title: '配置淋浴椅', desc: '配置淋浴椅或助浴器，安装手持花洒，让老年人可以坐着洗澡。', solution: '配置淋浴椅或助浴器，安装手持花洒' },
      noWallGrab: { icon: '🤲', title: '安装连续扶手', desc: '沿墙安装L型或U型扶手，高度75-85cm，承重≥150kg，全程连续无断点。', solution: '沿墙安装L型或U型扶手，高度75-85cm，承重≥150kg' }
    }
  },
  kitchen: {
    title: '厨房安全评估',
    questions: [
      { q: '操作台面高度是否在75-80cm之间？（坐轮椅者70-75cm）', hint: '台面高度不当会导致腰酸背痛和重心不稳', key: 'wrongCounterHeight' },
      { q: '常用物品是否放置在需要踮脚或爬高才能拿到的地方？', hint: '高处取物对老年人平衡能力要求极高', key: 'highStorage' },
      { q: '厨房地面是否经常有油渍或水渍？', hint: '油渍水渍会大幅降低地面防滑性', key: 'slipperyKitchen' },
      { q: '是否安装了燃气报警器和自动切断阀？', hint: '燃气泄漏是重大安全隐患', key: 'noGasAlarm', reverse: true }
    ],
    suggestions: {
      wrongCounterHeight: { icon: '📏', title: '调整操作台面高度', desc: '调低台面至75-80cm，坐轮椅者降至70-75cm，减少弯腰操作。', solution: '调低台面至75-80cm，坐轮椅者降至70-75cm' },
      highStorage: { icon: '🗄️', title: '增设中部柜/中部架', desc: '增设中部柜或中部架（高度100-130cm），将常用物品放置中间层，避免爬高。', solution: '增设中部柜/中部架（高度100-130cm），常用物品放置中间层' },
      slipperyKitchen: { icon: '🫧', title: '改善地面防滑', desc: '使用防滑贴或防滑地垫，保持地面干净，及时清理油渍水渍。', solution: '使用防滑贴/防滑地垫，保持地面干净' },
      noGasAlarm: { icon: '🔥', title: '安装燃气报警器', desc: '安装燃气报警器+自动切断阀，一旦检测到泄漏立即报警并切断气源。', solution: '安装燃气报警器+自动切断阀，联动报警' }
    }
  },
  entrance: {
    title: '玄关/过道安全评估',
    questions: [
      { q: '进门处是否有门槛或地面高差？', hint: '门槛是居家跌倒的高发点之一', key: 'hasThreshold' },
      { q: '门洞净宽是否≥80cm？（标准轮椅宽约60cm）', hint: '门宽不足会阻碍轮椅通行', key: 'narrowDoor', reverse: true },
      { q: '换鞋时是否有换鞋凳和墙面扶手辅助？', hint: '单腿站立换鞋极易跌倒', key: 'noShoeBench', reverse: true },
      { q: '走廊/过道是否有感应式照明？', hint: '昏暗的过道是夜间跌倒的高发区', key: 'darkHallway', reverse: true }
    ],
    suggestions: {
      hasThreshold: { icon: '🚧', title: '消除门槛高差', desc: '移除门槛，或铺设室内斜坡垫（坡度≤1:12），确保地面平整无高差。', solution: '移除门槛，或铺设室内斜坡垫（坡度≤1:12）' },
      narrowDoor: { icon: '🚪', title: '拓宽门洞', desc: '拓宽门洞至≥80cm，并安装折叠门或推拉门，确保轮椅顺畅通行。', solution: '拓宽门洞至≥80cm，并安装折叠门或推拉门' },
      noShoeBench: { icon: '👟', title: '设置换鞋凳', desc: '设置换鞋凳（高35-45cm）+墙面扶手辅助站立，让换鞋更安全便捷。', solution: '设置换鞋凳（高35-45cm）+墙面扶手辅助站立' },
      darkHallway: { icon: '🔦', title: '安装感应式壁灯', desc: '安装感应式壁灯，确保走廊照度≥100lux，夜间自动亮起。', solution: '安装感应式壁灯，确保走廊照度≥100lux' }
    }
  },
  balcony: {
    title: '阳台安全评估',
    questions: [
      { q: '阳台栏杆高度是否≥110cm？', hint: '旧式阳台栏杆可能不足1m，存在坠落风险', key: 'lowRailing' },
      { q: '阳台地面是否防滑？（防滑等级R11）', hint: '雨水或晾晒会导致地面湿滑', key: 'slipperyBalcony', reverse: true },
      { q: '晾衣架是否需要踮脚或举臂才能使用？', hint: '传统晾衣架对老年人体力和平衡要求高', key: 'highDrying' },
      { q: '阳台是否安装了紧急呼叫按钮？', hint: '阳台偏离室内活动区，意外时呼救困难', key: 'noBalconyEmergency', reverse: true }
    ],
    suggestions: {
      lowRailing: { icon: '🏗️', title: '加高栏杆', desc: '加高栏杆至≥110cm，如条件限制可加装防护网，防止探身坠落。', solution: '加高栏杆至≥110cm，如条件限制可加装防护网' },
      slipperyBalcony: { icon: '🌧️', title: '铺设防滑地砖', desc: '铺设防滑地砖（R11级），及时修补损坏的地砖，保持地面干燥。', solution: '铺设防滑地砖（R11级），修补损坏的地砖' },
      highDrying: { icon: '👕', title: '更换电动升降晾衣架', desc: '更换电动升降晾衣架，遥控操作，安全省力，无需踮脚或举臂。', solution: '更换电动升降晾衣架，遥控操作，安全省力' },
      noBalconyEmergency: { icon: '📞', title: '安装紧急呼叫设备', desc: '安装紧急呼叫按钮或配备可穿戴紧急呼叫设备，确保阳台安全覆盖。', solution: '安装紧急呼叫按钮或配备可穿戴紧急呼叫设备' }
    }
  }
};

/* ===== PRODUCT MAP ===== */
const PRODUCT_MAP = {
  '消除地面高差': [
    { name: '地面斜坡垫', url: 'https://100000633349.retail.n.weimob.com/saas/retail/100000633349/0/goods/detail/vwif?id=1453840460149&recommendType=-1&storeId=277962349' }
  ],
  '更换适老沙发': [
    { name: '助起沙发', url: 'https://100000633349.retail.n.weimob.com/saas/retail/100000633349/0/goods/detail/vwif?id=1454946280149&recommendType=-1&storeId=277962349' },
    { name: '单人适老沙发', url: 'https://100000633349.retail.n.weimob.com/saas/retail/100000633349/0/goods/detail/vwif?id=1453377320149&recommendType=-1&storeId=277962349' },
    { name: '双人适老沙发', url: 'https://100000633349.retail.n.weimob.com/saas/retail/100000633349/0/goods/detail/vwif?id=1453371370149&recommendType=-1&storeId=277962349' }
  ],
  '改善客厅照明': [
    { name: '感应夜灯', url: 'https://100000633349.retail.n.weimob.com/saas/retail/100000633349/0/goods/detail/vwif?id=1453271920149&recommendType=-1&storeId=277962349' }
  ],
  '安装感应夜灯': [
    { name: '感应夜灯', url: 'https://100000633349.retail.n.weimob.com/saas/retail/100000633349/0/goods/detail/vwif?id=1453271920149&recommendType=-1&storeId=277962349' }
  ],
  '安装床边护栏': [
    { name: '床边护栏', url: 'https://100000633349.retail.n.weimob.com/saas/retail/100000633349/0/goods/detail/vwif?id=1455097150149&recommendType=-1&storeId=277962349' }
  ],
  '安装紧急呼叫按钮': [
    { name: '紧急呼叫按钮A', url: 'https://100000633349.retail.n.weimob.com/saas/retail/100000633349/0/goods/detail/vwif?id=1453255110149&recommendType=-1&storeId=277962349' },
    { name: '紧急呼叫按钮B', url: 'https://100000633349.retail.n.weimob.com/saas/retail/100000633349/0/goods/detail/vwif?id=1455247790149&recommendType=-1&storeId=277962349' }
  ],
  '调整床铺高度': [
    { name: '电动护理床', url: 'https://100000633349.retail.n.weimob.com/saas/retail/100000633349/0/goods/detail/vwif?id=1455273940149&recommendType=-1&storeId=277962349' }
  ],
  '铺设防滑地面': [
    { name: '防滑贴A', url: 'https://100000633349.retail.n.weimob.com/saas/retail/100000633349/0/goods/detail/vwif?id=1453840430149&recommendType=-1&storeId=277962349' },
    { name: '防滑贴B', url: 'https://100000633349.retail.n.weimob.com/saas/retail/100000633349/0/goods/detail/vwif?id=1454942090149&recommendType=-1&storeId=277962349' }
  ],
  '安装马桶扶手': [
    { name: '马桶扶手A', url: 'https://100000633349.retail.n.weimob.com/saas/retail/100000633349/0/goods/detail/vwif?id=1454946230149&recommendType=-1&storeId=277962349' },
    { name: '马桶扶手B', url: 'https://100000633349.retail.n.weimob.com/saas/retail/100000633349/0/goods/detail/vwif?id=1455255540149&recommendType=-1&storeId=277962349' }
  ],
  '配置淋浴椅': [
    { name: '淋浴椅A', url: 'https://100000633349.retail.n.weimob.com/saas/retail/100000633349/0/goods/detail/vwif?id=1455246360149&recommendType=-1&storeId=277962349' },
    { name: '淋浴椅B', url: 'https://100000633349.retail.n.weimob.com/saas/retail/100000633349/0/goods/detail/vwif?id=1455255480149&recommendType=-1&storeId=277962349' }
  ],
  '安装连续扶手': [
    { name: '墙面扶手A', url: 'https://100000633349.retail.n.weimob.com/saas/retail/100000633349/0/goods/detail/vwif?id=1455247950149&recommendType=-1&storeId=277962349' },
    { name: '墙面扶手B', url: 'https://100000633349.retail.n.weimob.com/saas/retail/100000633349/0/goods/detail/vwif?id=1455247970149&recommendType=-1&storeId=277962349' }
  ],
  '改善地面防滑': [
    { name: '防滑地垫', url: 'https://100000633349.retail.n.weimob.com/saas/retail/100000633349/0/goods/detail/vwif?id=1453840430149&recommendType=-1&storeId=277962349' }
  ],
  '安装燃气报警器': [
    { name: '燃气报警器', url: 'https://100000633349.retail.n.weimob.com/saas/retail/100000633349/0/goods/detail/vwif?id=1453245500149&recommendType=-1&storeId=277962349' }
  ],
  '消除门槛高差': [
    { name: '室内斜坡垫', url: 'https://100000633349.retail.n.weimob.com/saas/retail/100000633349/0/goods/detail/vwif?id=1453840460149&recommendType=-1&storeId=277962349' }
  ],
  '设置换鞋凳': [
    { name: '换鞋凳', url: 'https://100000633349.retail.n.weimob.com/saas/retail/100000633349/0/goods/detail/vwif?id=1453377330149&recommendType=-1&storeId=277962349' }
  ],
  '安装感应式壁灯': [
    { name: '感应式壁灯', url: 'https://100000633349.retail.n.weimob.com/saas/retail/100000633349/0/goods/detail/vwif?id=1453271920149&recommendType=-1&storeId=277962349' }
  ]
};

/* ===== STATE ===== */
let myList = [];
let activeSpace = null;
let currentPhotoSpace = null;
let currentQuestionIdx = 0;
let currentAnswers = {};
let currentSuggestions = [];
let aiHazards = [];
let currentElderInfo = null;   // { age:'80+', gender:'male'|'female', mobility:'independent'|'cane'|'wheelchair', vision:'normal'|'impaired' }
let pendingAction = null;       // { type:'photo'|'questionnaire', spaceId:string }

/* ===== ELDER INFO FORM ===== */
function openElderInfoModal(actionType, spaceId) {
  // reset selections to default
  selectElderOption('age',    '80+', null);
  selectElderOption('gender', 'male', null);
  selectElderOption('mobility','independent', null);
  selectElderOption('vision', 'normal', null);
  // visually reset
  ['age','gender','mobility','vision'].forEach(function(k){
    var opts = document.querySelectorAll('#elder' + k.charAt(0).toUpperCase() + k.slice(1) + 'Options .elder-option');
    opts.forEach(function(o){ o.classList.remove('selected'); });
  });
  // set defaults
  var defaultAge    = document.querySelector('#elderAgeOptions .elder-option:nth-child(3)');
  var defaultGender = document.querySelector('#elderGenderOptions .elder-option:first-child');
  var defaultMob    = document.querySelector('#elderMobilityOptions .elder-option:first-child');
  var defaultVis    = document.querySelector('#elderVisionOptions .elder-option:first-child');
  if(defaultAge)    defaultAge.classList.add('selected');
  if(defaultGender) defaultGender.classList.add('selected');
  if(defaultMob)    defaultMob.classList.add('selected');
  if(defaultVis)    defaultVis.classList.add('selected');

  pendingAction = { type: actionType, spaceId: spaceId };
  document.getElementById('elderInfoModal').classList.add('open');
}

function selectElderOption(field, value, el) {
  var containerId = '#elder' + field.charAt(0).toUpperCase() + field.slice(1) + 'Options';
  document.querySelectorAll(containerId + ' .elder-option').forEach(function(o){
    o.classList.remove('selected');
  });
  if (el) el.classList.add('selected');
  // store temporarily
  if (!window._elderTemp) window._elderTemp = {};
  window._elderTemp[field] = value;
}

function confirmElderInfo() {
  var t = window._elderTemp || {};
  currentElderInfo = {
    age:       t.age       || '80+',
    gender:     t.gender     || 'male',
    mobility:   t.mobility   || 'independent',
    vision:     t.vision     || 'normal'
  };
  window._elderTemp = null;
  closeElderInfoModal();
  executePendingAction();
}

function skipElderInfo() {
  currentElderInfo = null;
  window._elderTemp = null;
  closeElderInfoModal();
  executePendingAction();
}

function closeElderInfoModal() {
  document.getElementById('elderInfoModal').classList.remove('open');
}

function executePendingAction() {
  if (!pendingAction) return;
  var a = pendingAction;
  pendingAction = null;
  if (a.type === 'photo') {
    // continue with showPhotoArea logic
    var choice = document.getElementById('choiceButtons');
    if (choice) choice.style.display = 'none';
    var area = document.getElementById('photoCaptureArea');
    if (area) area.classList.add('visible');
    currentPhotoSpace = a.spaceId;
  } else if (a.type === 'questionnaire') {
    var qData = SPACE_QUESTIONNAIRES[a.spaceId];
    if (!qData) return;
    currentPhotoSpace = a.spaceId;
    currentQuestionIdx = 0;
    currentAnswers = {};
    var choice2 = document.getElementById('choiceButtons');
    if (choice2) choice2.style.display = 'none';
    var qArea = document.getElementById('questionnaireArea');
    if (qArea) qArea.classList.add('visible');
    var titleEl = document.getElementById('questionnaireTitle');
    if (titleEl) titleEl.innerHTML = '📋 ' + qData.title + ' <span onclick="goBackToChoice()" style="font-size:.82rem;color:var(--primary);cursor:pointer;margin-left:12px;">← 返回</span>';
    renderQuestion();
  }
}

/* ===== INIT ===== */
function init() {
  importAIFromURL();
  renderSpaces();
  renderChecklist();
  updateAISettingsBtn();
  initGuidance();
}

/* ===== RENDER SPACES ===== */
function renderSpaces() {
  const grid = document.getElementById('spaceGrid');
  grid.innerHTML = SPACES.map(s => `
    <div class="space-card" id="card-${s.id}" onclick="selectSpace('${s.id}')">
      <span class="space-emoji">${s.icon}</span>
      <div class="space-name">${s.name}</div>
      <span class="risk-badge risk-${s.riskLevel}">${s.riskLevel === 'high' ? '高风险' : s.riskLevel === 'mid' ? '中风险' : '低风险'}</span>
      <div class="space-desc">${s.hazards.length} 项隐患待查</div>
    </div>
  `).join('');
}

/* ===== SELECT & ENTER SPACE ===== */
function selectSpace(id) {
  enterSpace(id);
}

function enterSpace(id) {
  const space = SPACES.find(s => s.id === id);
  if (!space) return;

  // update active card
  document.querySelectorAll('.space-card').forEach(c => c.classList.remove('active'));
  const card = document.getElementById('card-' + id);
  if (card) card.classList.add('active');
  activeSpace = id;
  updateStepIndicator(2);

  // render detail
  const panel = document.getElementById('detailPanel');
  const header = document.getElementById('detailHeader');
  const list = document.getElementById('hazardList');
  const photoDiv = document.getElementById('photoAssessment');

  // 隐藏空间描述头部和预设隐患列表，只保留两个核心按钮
  header.innerHTML = '';
  header.style.display = 'none';
  list.innerHTML = '';
  list.style.display = 'none';

  // 直接渲染两个核心选择按钮，作为空间点开后的首屏内容
  photoDiv.innerHTML = `
    <div class="photo-section">
      <div style="text-align:center;margin-bottom:20px;">
        <div style="font-size:1.1rem;font-weight:700;color:var(--gray-900);margin-bottom:4px;">${space.icon} ${space.name}</div>
        <div style="font-size:.88rem;color:var(--gray-500);">选择一种方式，开始安全自查</div>
      </div>
      <div class="choice-main-btns" id="choiceButtons">
        <button class="choice-main-btn recommended" onclick="showPhotoArea('${id}')">
          <span class="choice-main-icon">📸</span>
          <span class="choice-main-text">上传照片评估</span>
          <span class="choice-main-badge">👑 推荐</span>
        </button>
        <button class="choice-main-btn" onclick="startQuestionnaire('${id}')">
          <span class="choice-main-icon">📋</span>
          <span class="choice-main-text">自查隐患</span>
        </button>
      </div>
      <div class="photo-capture-area" id="photoCaptureArea">
        <div class="ai-config-bar" style="display:none">
          <button class="ai-settings-btn" id="aiSettingsBtn" onclick="openAISettings()">AI未配置</button>
        </div>
        <div class="photo-btns" style="display:flex;flex-direction:column;align-items:center;gap:8px;">
          <button class="photo-btn primary" onclick="uploadPhoto()">📁 上传照片</button>
          <a onclick="goBackToChoice()" style="font-size:.82rem;color:var(--primary);cursor:pointer;text-decoration:underline;">← 返回重新选择</a>
        </div>
        <input type="file" accept="image/*" class="photo-file-input" id="photoFileInput" onchange="handlePhotoUpload(event)">
        <div class="photo-preview" id="photoPreview">
          <img id="previewImg" src="" alt="预览" style="display:none">
          <div class="photo-analysis" id="photoAnalysis"></div>
          <div class="photo-actions" id="photoActions" style="display:none">
            <button class="photo-btn" onclick="retakePhoto()">🔄 重新上传</button>
            <button class="photo-btn" onclick="startQuestionnaire('${id}')">📋 改用问卷</button>
          </div>
        </div>
      </div>
      <div class="questionnaire-area" id="questionnaireArea">
        <div class="questionnaire-title" id="questionnaireTitle"></div>
        <div id="questionContainer"></div>
        <div class="questionnaire-actions">
          <button class="photo-btn" id="prevQBtn" onclick="prevQuestion()" style="display:none">← 上一题</button>
          <button class="photo-btn primary" id="nextQBtn" onclick="nextQuestion()">下一题 →</button>
          <button class="photo-btn primary" id="submitQBtn" onclick="submitQuestionnaire()" style="display:none">📊 查看评估结果</button>
        </div>
      </div>
      <div class="results-area" id="resultsArea">
        <div class="results-title" id="resultsTitle"></div>
        <div class="results-subtitle" id="resultsSubtitle"></div>
        <div id="suggestionsList"></div>
        <button class="restart-btn" onclick="restartAssessment('${id}')">🔄 重新评估</button>
      </div>
    </div>
  `;

  panel.classList.add('visible');
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  updateAISettingsBtn();
}

/* ===== PHOTO ===== */
function showPhotoArea(spaceId) {
  // 先收集老人信息，再进入拍照界面
  openElderInfoModal('photo', spaceId);
}

function uploadPhoto() {
  const input = document.getElementById('photoFileInput');
  input.value = '';
  input.click();
}

function handlePhotoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const preview = document.getElementById('photoPreview');
  const previewImg = document.getElementById('previewImg');
  const analysis = document.getElementById('photoAnalysis');
  const actions = document.getElementById('photoActions');
  if (actions) actions.style.display = 'none';

  analysis.innerHTML = `
    <div class="ai-loading">
      <div class="ai-loading-spinner"></div>
      <div class="ai-loading-text">AI 正在分析照片中的安全隐患<span class="ai-loading-dots"></span></div>
      <div class="ai-loading-sub">正在压缩图片并上传至 AI 视觉模型，通常需要 10-30 秒</div>
    </div>
  `;
  preview.classList.add('visible');

  compressImage(file, 1024, 0.8, function(compressedDataUrl) {
    previewImg.src = compressedDataUrl;
    previewImg.style.display = 'block';

    var apiKey = getApiKey();
    if (!apiKey) {
      analysis.innerHTML = `
        <div class="ai-error">
          <div class="ai-error-icon">🔑</div>
          <div class="ai-error-text">尚未配置 AI API 密钥</div>
          <div class="ai-error-hint">AI 照片分析功能需要配置 API 密钥才能使用。<br>点击下方按钮进行配置，或使用问卷评估。</div>
          <button class="photo-btn primary" onclick="openAISettings()">⚙️ 配置 API 密钥</button>
          <div style="margin-top:8px">
            <button class="photo-btn" onclick="startQuestionnaire('${currentPhotoSpace}')">📋 改用问卷评估</button>
          </div>
        </div>
      `;
      if (actions) actions.style.display = 'flex';
      return;
    }

    analyzePhotoWithAI(compressedDataUrl, currentPhotoSpace);
  });
}

/* ===== AI PHOTO ANALYSIS ===== */
async function analyzePhotoWithAI(imageDataUrl, spaceId) {
  var space = SPACES.find(function(s) { return s.id === spaceId; });
  var analysis = document.getElementById('photoAnalysis');
  var actions = document.getElementById('photoActions');

  var apiKey = getApiKey();
  var endpoint = getApiEndpoint();
  var model = getApiModel();

  var elderPart = '';
  if (currentElderInfo) {
    var ageNum = currentElderInfo.age === '80+' ? '80岁以上（高风险人群）' :
                   currentElderInfo.age === '70-79' ? '70-79岁（中高风险人群）' :
                   '60-69岁（需关注早期适老化）';
    var genderText = currentElderInfo.gender === 'male' ? '男性' : '女性';
    var mobText = { independent:'行动自如，可独立行走', cane:'需拐杖辅助行走', wheelchair:'使用轮椅，无法独立行走' }[currentElderInfo.mobility] || '行动能力未说明';
    var visText = currentElderInfo.vision === 'impaired' ? '有视力障碍，需特别考虑视觉提示和照明' : '视力基本正常';
    elderPart = '【被评估老人信息】\n' +
      '- 年龄：' + ageNum + '\n' +
      '- 性别：' + genderText + '\n' +
      '- 行动能力：' + mobText + '\n' +
      '- 视力状况：' + visText + '\n\n' +
      '【评估要求】请根据以上老人信息，有针对性地识别隐患并给出改造建议：\n' +
      '- 若老人80岁及以上，对跌倒风险的判断应更严格（即使微小高差、轻微地面不平整也标记为高风险）\n' +
      '- 若老人使用轮椅，重点关注通道宽度（需≥80cm）、扶手高度（应适配坐姿）、台面高度（需降至70-75cm）、门口宽度\n' +
      '- 若老人需拐杖辅助，重点关注地面防滑等级、连续扶手是否完整、座椅是否需要助起功能\n' +
      '- 若老人有视力障碍，重点关注照明充足度、对比色使用、尖锐边角防护\n' +
      '- solution字段要具体，包含适老化改造的精确尺寸/规格/安装要求\n\n';
  }

  var prompt = '你是一位专业的居家安全评估专家，专注于老年人适老化改造。' +
    (currentElderInfo ? elderPart : '') +
    '用户上传了一张' + (space ? space.name : '居家环境') + '的照片。' +
    '请仔细分析照片中可能对老年人构成安全隐患的问题。\n\n' +
    '请严格按照以下JSON格式返回结果，不要包含任何其他文字、不要用markdown代码块包裹：\n' +
    '{\n' +
    '  "spaceType": "识别出的空间类型",\n' +
    '  "hazards": [\n' +
    '    {\n' +
    '      "title": "隐患名称（简短）",\n' +
    '      "level": "high 或 mid 或 low",\n' +
    '      "description": "隐患的具体描述，说明为什么对这位老人有危险（结合老人年龄/行动能力分析）",\n' +
    '      "solution": "具体的改造建议，包含尺寸/规格等参数（结合老人情况给出个性化方案）"\n' +
    '    }\n' +
    '  ],\n' +
    '  "summary": "总体安全评估（1-2句话，说明针对这位老人的主要风险）"\n' +
    '}\n\n' +
    '注意：\n' +
    '- 如果照片不是居家环境，请在summary中说明，hazards返回空数组\n' +
    '- hazards数组最多包含6个隐患\n' +
    '- level含义：high=高风险（可能导致跌倒或重伤），mid=中风险（存在不便或隐患），low=低风险（建议优化）\n' +
    '- 必须结合老人信息给出个性化建议，不能给出通用建议';

  try {
    var response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: prompt },
              { type: 'image_url', image_url: { url: imageDataUrl } }
            ]
          }
        ],
        temperature: 0.3,
        max_tokens: 2000
      })
    });

    if (!response.ok) {
      var errText = await response.text();
      var errJson = null;
      try { errJson = JSON.parse(errText); } catch(e) {}
      var errStr = JSON.stringify(errJson || {}) + ' ' + errText;
      var isBalanceError = response.status === 402 ||
        /balance|余额|insufficient|quota|credit|无可用金额/i.test(errStr);
      if (isBalanceError) {
        showBalanceError(spaceId);
        return;
      }
      throw new Error('API ' + response.status + ': ' + errText.substring(0, 300));
    }

    var data = await response.json();
    var content = data.choices[0].message.content;

    var jsonStr = content;
    var jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) jsonStr = jsonMatch[0];

    var result = JSON.parse(jsonStr);
    displayAIResults(result, spaceId);

  } catch (error) {
    console.error('AI analysis error:', error);
    var errMsg = (error.message || '未知错误').substring(0, 300);
    var isBalanceError = /balance|余额|insufficient|quota|credit|无可用金额|402/i.test(errMsg);
    var isCorsError = errMsg.includes('Failed to fetch') || errMsg.includes('NetworkError');

    if (isBalanceError) {
      showBalanceError(spaceId);
      return;
    }

    analysis.innerHTML = `
      <div class="ai-error" style="border-color:#F59E0B;background:#FFFBEB">
        <div class="ai-error-icon">📷</div>
        <div class="ai-error-text" style="color:#B45309">分析失败，请确认图片是否清晰</div>
        <div class="ai-error-hint" style="color:#92400E">建议：重新拍摄一张光线充足、角度正对的照片后再试</div>
        <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:10px">
          <button class="photo-btn primary" onclick="retakePhoto()">🔄 重新上传</button>
          <button class="photo-btn" onclick="startQuestionnaire('${spaceId}')">📋 改用问卷评估</button>
        </div>
      </div>
    `;
    if (actions) actions.style.display = 'flex';
  }
}

function displayAIResults(result, spaceId) {
  var analysis = document.getElementById('photoAnalysis');
  var actions = document.getElementById('photoActions');
  var space = SPACES.find(function(s) { return s.id === spaceId; });

  var hazards = result.hazards || [];
  aiHazards = hazards.map(function(h, idx) {
    return {
      title: h.title,
      level: h.level || 'mid',
      description: h.description,
      solution: h.solution,
      spaceId: spaceId,
      spaceName: space ? space.name : (result.spaceType || '未知空间'),
      spaceIcon: space ? space.icon : '🏠'
    };
  });

  var levelText = { high: '高风险', mid: '中风险', low: '低风险' };

  var html = '<div class="ai-result">';

  // 老人信息栏（如有）
  if (currentElderInfo) {
    var ageLabel = { '60-69':'60-69岁', '70-79':'70-79岁', '80+':'80岁及以上' }[currentElderInfo.age] || '';
    var genLabel = currentElderInfo.gender === 'male' ? '男' : '女';
    var mobLabel = { independent:'行动自如', cane:'需拐杖', wheelchair:'使用轮椅' }[currentElderInfo.mobility] || '';
    var visLabel = currentElderInfo.vision === 'impaired' ? '· 视力障碍' : '';
    html += '<div class="elder-info-bar">' +
      '<span class="elder-tag">🏠 评估对象</span>' +
      '<span>' + ageLabel + ' · ' + genLabel + ' · ' + mobLabel + visLabel + '</span>' +
      '</div>';
  }

  html += '<div class="guide-tip"><span class="tip-icon">💡</span><span class="tip-text">提示：点击下方「+ 加入清单」保存改造建议，方便后续生成报告</span><span class="tip-arrow">👉</span></div>';
  html += '<div class="ai-result-header">';
  html += '<span class="ai-badge">AI 分析</span>';
  html += '<span class="ai-info">✅ 分析完成 · 识别空间：' + (result.spaceType || (space ? space.name : '')) + '</span>';
  html += '</div>';

  if (hazards.length === 0) {
    html += '<div class="ai-summary">✅ 未发现明显安全隐患，请继续保持良好的居家环境。</div>';
  } else {
    hazards.forEach(function(h, idx) {
      var alreadyAdded = myList.some(function(item) { return item.id === 'ai-' + spaceId + '-' + idx; });
      var level = h.level || 'mid';
      html += '<div class="ai-hazard ' + level + '">';
      html += '<div class="ai-hazard-top">';
      html += '<span class="ai-hazard-level ' + level + '">' + (levelText[level] || '中风险') + '</span>';
      html += '<span class="ai-hazard-title">' + (idx + 1) + '. ' + h.title + '</span>';
      html += '</div>';
      html += '<div class="ai-hazard-desc">' + h.description + '</div>';
      html += '<div class="ai-hazard-solution"><span class="label">改造建议：</span><span>' + h.solution + '</span></div>';
      html += '<button class="ai-hazard-add ' + (alreadyAdded ? 'added' : '') + '" id="aiHazard-' + idx + '" onclick="addAIHazard(' + idx + ')">' + (alreadyAdded ? '✓ 已添加' : '+ 加入清单') + '</button>';
      html += '</div>';
    });
  }

  if (result.summary) {
    html += '<div class="ai-summary">📝 ' + result.summary + '</div>';
  }

  // 服务引导卡片（AI 分析后展示）
  html += '<div class="service-card" id="serviceCard">';
  html += '  <div class="service-icon">🛒</div>';
  html += '  <div class="service-title">需要专业改造方案？</div>';
  html += '  <div class="service-desc">以上分析结果仅供参考，如需上门评估与专业改造服务，请进入慈爱嘉小程序了解更多。</div>';
  html += '  <button class="service-btn" id="miniProgramBtn" onclick="openMiniProgram()">📲 进入小程序购买服务</button>';
  html += '  <div class="service-note" id="serviceNote"></div>';
  html += '</div>';

  html += '</div>';
  html += '<div class="result-tip">' + getRandomTip() + '</div>';
  analysis.innerHTML = html;
  if (actions) actions.style.display = 'flex';
  updateStepIndicator(3);
  var spaceName = SPACES.find(function(s){ return s.id === spaceId; });
  if (spaceName) showCelebrate(spaceName.name);
}

/* ===== BALANCE ERROR & DEMO MODE ===== */
function showBalanceError(spaceId) {
  var analysis = document.getElementById('photoAnalysis');
  var actions = document.getElementById('photoActions');
  var space = SPACES.find(function(s) { return s.id === spaceId; });
  var spaceName = space ? space.name : '该';
  var isUsingBuiltin = !localStorage.getItem('ai_api_key');

  analysis.innerHTML = `
    <div class="ai-error" style="border-color:#F59E0B;background:#FFFBEB">
      <div class="ai-error-icon">💰</div>
      <div class="ai-error-text" style="color:#B45309">AI 分析${isUsingBuiltin ? '（内置密钥余额不足）' : '（API 额度不足）'}</div>
      <div class="ai-error-hint" style="color:#92400E">
        ${isUsingBuiltin
          ? '内置 API 密钥的免费额度已用完，暂时无法调用 AI 视觉分析。<br>配置您自己的 API 密钥后即可继续使用：'
          : '您配置的 API 密钥额度不足，请充值或更换密钥：'}
      </div>
      <div style="text-align:left;margin:12px auto 8px;max-width:360px;font-size:.82rem;color:#92400E;line-height:1.8">
        <div>📌 <b>解决方式</b>：配置新的 API 密钥</div>
        <div style="padding-left:18px;color:#B45309">
          1. 访问 <a href="https://cloud.siliconflow.cn" target="_blank" style="color:#2563EB">硅基流动</a> 注册并获取 API Key（新用户有免费额度）<br>
          2. 点击下方「配置 API 密钥」按钮，粘贴您的 Key<br>
          3. 保存后即可使用您自己的额度调用 AI 分析
        </div>
        <div style="margin-top:6px">📌 <b>临时方案</b>：查看演示结果（无需 API）</div>
        <div style="padding-left:18px;color:#B45309">
          点击下方「查看演示结果」，将展示${spaceName}空间的示例分析，<br>方便您了解 AI 分析功能的效果
        </div>
      </div>
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:10px">
        <button class="photo-btn primary" onclick="openAISettings()" style="background:#059669">⚙️ 配置 API 密钥</button>
        <button class="photo-btn" onclick="showDemoResults('${spaceId}')">🖥️ 查看演示结果</button>
        <button class="photo-btn" onclick="startQuestionnaire('${spaceId}')">📋 改用问卷评估</button>
      </div>
    </div>
  `;
  if (actions) actions.style.display = 'flex';
}

function showDemoResults(spaceId) {
  var demo = DEMO_AI_RESULTS[spaceId];
  if (!demo) {
    showToast('⚠️ 该空间暂无演示数据');
    return;
  }
  /* 在结果顶部加上「演示模式」标识 */
  var demoResult = JSON.parse(JSON.stringify(demo));
  demoResult.summary = (demoResult.summary || '') + '\n\n（此为演示数据，真实分析需配置有效 API 密钥）';
  displayAIResults(demoResult, spaceId);
  showToast('👁️ 正在展示演示结果，配置 API 密钥后可获得真实分析');
}

function addAIHazard(idx) {
  var h = aiHazards[idx];
  if (!h) return;

  var btn = document.getElementById('aiHazard-' + idx);
  var itemId = 'ai-' + h.spaceId + '-' + idx;

  var existingIdx = myList.findIndex(function(item) { return item.id === itemId; });
  if (existingIdx === -1) {
    myList.push({
      id: itemId,
      spaceName: h.spaceName,
      spaceIcon: h.spaceIcon,
      title: h.title,
      solution: h.solution
    });
    if (btn) { btn.textContent = '✓ 已添加'; btn.classList.add('added'); }
    showToast('✅ 已添加：' + h.title);
  } else {
    myList.splice(existingIdx, 1);
    if (btn) { btn.textContent = '+ 加入清单'; btn.classList.remove('added'); }
    showToast('🗑️ 已移除：' + h.title);
  }
  renderChecklist();
  updateFloatingProgress();
}

function retakePhoto() {
  var preview = document.getElementById('photoPreview');
  if (preview) preview.classList.remove('visible');
  var previewImg = document.getElementById('previewImg');
  if (previewImg) { previewImg.src = ''; previewImg.style.display = 'none'; }
  var input = document.getElementById('photoFileInput');
  if (input) input.value = '';
  var actions = document.getElementById('photoActions');
  if (actions) actions.style.display = 'none';
}

/* ===== AI SETTINGS ===== */
var BUILTIN_API_KEY = 'sk-gbczajuaobuhgflxtpzfkzmjxztdjajahttfmunfcgnudxjz';
var BUILTIN_API_ENDPOINT = 'https://api.siliconflow.cn/v1/chat/completions';
var BUILTIN_API_MODEL = 'Qwen/Qwen3-VL-32B-Instruct';

function getApiKey() {
  return localStorage.getItem('ai_api_key') || BUILTIN_API_KEY;
}
function getApiEndpoint() {
  return localStorage.getItem('ai_api_endpoint') || BUILTIN_API_ENDPOINT;
}
function getApiModel() {
  var m = localStorage.getItem('ai_api_model');
  if (m && m.indexOf('Qwen2.5-VL') !== -1) {
    localStorage.removeItem('ai_api_model');
    return BUILTIN_API_MODEL;
  }
  return m || BUILTIN_API_MODEL;
}

function updateAISettingsBtn() {
  var btn = document.getElementById('aiSettingsBtn');
  if (!btn) return;
  btn.textContent = '✓ AI已配置';
  btn.classList.add('configured');
}

function openAISettings() {
  document.getElementById('safetyModal').classList.remove('open');
  document.getElementById('qrModal').classList.remove('open');
  document.getElementById('aiSettingsModal').classList.add('open');
  document.getElementById('aiApiKeyInput').value = getApiKey();
  document.getElementById('aiApiEndpointInput').value = getApiEndpoint();
  document.getElementById('aiApiModelInput').value = getApiModel();
  var syncSection = document.getElementById('aiSyncSection');
  if (syncSection) syncSection.style.display = getApiKey() ? 'block' : 'none';
}

function closeAISettings() {
  document.getElementById('aiSettingsModal').classList.remove('open');
}

function saveAISettings() {
  var key = document.getElementById('aiApiKeyInput').value.trim();
  var endpoint = document.getElementById('aiApiEndpointInput').value.trim();
  var model = document.getElementById('aiApiModelInput').value.trim();

  if (!key) {
    showToast('⚠️ 请输入 API 密钥');
    return;
  }

  localStorage.setItem('ai_api_key', key);
  if (endpoint) localStorage.setItem('ai_api_endpoint', endpoint);
  if (model) localStorage.setItem('ai_api_model', model);

  closeAISettings();
  showToast('✅ AI 设置已保存');
  updateAISettingsBtn();
  var syncSection = document.getElementById('aiSyncSection');
  if (syncSection) syncSection.style.display = 'block';
}

/* ===== AI SYNC ===== */
function syncAIToPhone() {
  var key = getApiKey();
  if (!key) {
    showToast('⚠️ 请先保存 API 密钥');
    return;
  }

  var baseUrl = window.location.href.split('?')[0].split('#')[0];
  var params = new URLSearchParams();
  params.set('ai_key', key);
  params.set('ai_endpoint', getApiEndpoint());
  params.set('ai_model', getApiModel());
  var syncUrl = baseUrl + '?' + params.toString();

  var qrImg = document.getElementById('aiSyncQR');
  if (qrImg) qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=' + encodeURIComponent(syncUrl);
  var urlEl = document.getElementById('aiSyncUrl');
  if (urlEl) urlEl.textContent = syncUrl;

  document.getElementById('aiSyncModal').classList.add('open');
}

function closeAISync() {
  document.getElementById('aiSyncModal').classList.remove('open');
}

function importAIFromURL() {
  var params = new URLSearchParams(window.location.search);
  var key = params.get('ai_key');
  if (!key) return;

  localStorage.setItem('ai_api_key', key);
  var endpoint = params.get('ai_endpoint');
  if (endpoint) localStorage.setItem('ai_api_endpoint', endpoint);
  var model = params.get('ai_model');
  if (model) localStorage.setItem('ai_api_model', model);

  var cleanUrl = window.location.href.split('?')[0];
  window.history.replaceState({}, document.title, cleanUrl);

  showToast('✅ AI 配置已从链接同步');
  updateAISettingsBtn();
}

function compressImage(file, maxWidth, quality, callback) {
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      let width = img.width;
      let height = img.height;
      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      callback(canvas.toDataURL('image/jpeg', quality));
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

/* ===== QUESTIONNAIRE ===== */
function startQuestionnaire(spaceId) {
  // 先收集老人信息，再进入问卷
  openElderInfoModal('questionnaire', spaceId);
}

function renderQuestion() {
  const qData = SPACE_QUESTIONNAIRES[currentPhotoSpace];
  if (!qData) return;
  const q = qData.questions[currentQuestionIdx];

  const container = document.getElementById('questionContainer');
  container.innerHTML = `
    <div class="question">
      <div class="question-text">${currentQuestionIdx + 1}. ${q.q}</div>
      <div class="question-hint">💡 ${q.hint}</div>
      <div class="question-options">
        <div class="question-option ${currentAnswers[q.key] === true ? 'selected-yes' : ''}"
             onclick="answerQuestion('${q.key}', true, this)">是</div>
        <div class="question-option ${currentAnswers[q.key] === false ? 'selected-no' : ''}"
             onclick="answerQuestion('${q.key}', false, this)">否</div>
      </div>
    </div>
  `;

  const prevBtn = document.getElementById('prevQBtn');
  const nextBtn = document.getElementById('nextQBtn');
  const submitBtn = document.getElementById('submitQBtn');
  if (prevBtn) prevBtn.style.display = currentQuestionIdx > 0 ? 'flex' : 'none';
  if (nextBtn) nextBtn.style.display = currentQuestionIdx < qData.questions.length - 1 ? 'flex' : 'none';
  if (submitBtn) submitBtn.style.display = currentQuestionIdx === qData.questions.length - 1 ? 'flex' : 'none';
}

function answerQuestion(key, value, el) {
  currentAnswers[key] = value;
  const options = el.parentNode.querySelectorAll('.question-option');
  options.forEach(o => o.classList.remove('selected-yes', 'selected-no'));
  if (value === true) {
    el.classList.add('selected-yes');
  } else {
    el.classList.add('selected-no');
  }
}

function prevQuestion() {
  if (currentQuestionIdx > 0) {
    currentQuestionIdx--;
    renderQuestion();
  }
}

function nextQuestion() {
  const qData = SPACE_QUESTIONNAIRES[currentPhotoSpace];
  if (!qData) return;
  if (currentQuestionIdx < qData.questions.length - 1) {
    currentQuestionIdx++;
    renderQuestion();
  }
}

function submitQuestionnaire() {
  const qData = SPACE_QUESTIONNAIRES[currentPhotoSpace];
  let suggestions = [];

  qData.questions.forEach(q => {
    const answer = currentAnswers[q.key];
    const hasProblem = q.reverse ? (answer === false) : (answer === true);
    if (hasProblem && qData.suggestions[q.key]) {
      suggestions.push(Object.assign({}, qData.suggestions[q.key]));
    }
  });

  /* ===== 根据老人信息强制追加/升级建议 ===== */
  const elder = currentElderInfo || {};
  const ageGroup = elder.age || '';
  const mobility = elder.mobility || 'independent';
  const vision = elder.vision || 'normal';

  // 规则1：80岁以上，即使问卷全"否"也要加入关键建议
  if (ageGroup === '80+') {
    const mustHave = [
      { key:'noNightLight', suggestion: { icon:'🌙', title:'安装感应夜灯（80岁以上强推荐）', desc:'80岁以上老人夜间起夜跌倒风险极高，即使目前有照明也建议加装感应夜灯。', solution:'在床底、走廊加装感应夜灯（暖光，照度30-50lux），人过自动亮起' }},
      { key:'noBedRail',   suggestion: { icon:'🛏️', title:'安装床边护栏（80岁以上强推荐）', desc:'80岁以上睡眠中翻身跌落风险显著增高，强烈建议安装床边护栏。', solution:'安装床边护栏或抓杆（高度60-70cm，长度≥1.2m，承重≥100kg）' }}
    ];
    mustHave.forEach(function(item) {
      if (!suggestions.find(s => s.title.indexOf(item.suggestion.title.substring(0,4)) > -1 ||
                           s.title.indexOf('夜灯') > -1 ||
                           s.title.indexOf('护栏') > -1)) {
        suggestions.push(item.suggestion);
      }
    });
  }

  // 规则2：使用轮椅，强制加入通道/门洞/台面建议
  if (mobility === 'wheelchair') {
    // 检查是否已有关注通道宽度的建议
    if (!suggestions.find(s => s.title.indexOf('门洞') > -1 || s.title.indexOf('通道') > -1 || s.title.indexOf('门槛') > -1)) {
      suggestions.push({
        icon:'🚪',
        title:'拓宽通道/消除高差（轮椅使用者必需）',
        desc:'轮椅通行需要门洞净宽≥80cm、地面无任何高差。当前问卷未覆盖此项，根据老人使用轮椅的情况强制加入。',
        solution:'拓宽门洞至≥80cm，移除所有门槛，铺设室内斜坡垫（坡度≤1:12）。台面高度需降至70-75cm。'
      });
    }
    // 修改已有建议中的台面高度
    suggestions.forEach(function(s) {
      s.solution = s.solution.replace(/座高45-50cm/g, '座高45-50cm（轮椅使用者需选可旋转抬升款）');
      s.solution = s.solution.replace(/75-80cm/g, '70-75cm（轮椅使用者）');
    });
  }

  // 规则3：需拐杖，升级防滑相关建议
  if (mobility === 'cane') {
    suggestions.forEach(function(s) {
      if (s.title.indexOf('防滑') > -1 && s.icon !== '⚠️') {
        s.icon = '⚠️';
        s.title = s.title + '（拐杖使用者高风险）';
        s.desc = '（拐杖使用者地面防滑要求更高）' + s.desc;
      }
    });
  }

  // 规则4：视力障碍，升级照明建议
  if (vision === 'impaired') {
    if (!suggestions.find(s => s.title.indexOf('照明') > -1 || s.title.indexOf('灯光') > -1)) {
      suggestions.push({
        icon:'💡',
        title:'改善照明（视力障碍者必需）',
        desc:'视力障碍者对光线要求更高，建议全面提升空间照度，并增加对比色标识。',
        solution:'空间照度提升至500lux以上，开关面板使用对比色（黑底白字），台阶边缘贴高对比色警示条'
      });
    }
  }

  // 规则5：根据年龄调整 solution 文案
  if (ageGroup === '80+') {
    suggestions.forEach(function(s) {
      if (s.solution.indexOf('座高') > -1 && s.solution.indexOf('50cm') > -1) {
        s.solution = s.solution + '。【80岁以上建议优先选择带扶手助起款，座高取上限50cm】';
      }
    });
  }
  if (ageGroup === '70-79') {
    suggestions.forEach(function(s) {
      if (s.solution.indexOf('座高') > -1) {
        s.solution = s.solution + '。【70岁以上建议选择电动助起款】';
      }
    });
  }

  if (suggestions.length === 0) {
    suggestions.push({
      icon: '✅',
      title: '继续保持良好状态',
      desc: '根据您的回答，该空间安全风险较低，请继续保持良好的居家环境。',
      solution: '定期进行安全检查，及时维护设施设备'
    });
  }

  renderResults(suggestions);
}

function renderResults(suggestions) {
  const qArea = document.getElementById('questionnaireArea');
  if (qArea) qArea.classList.remove('visible');

  const resultsArea = document.getElementById('resultsArea');
  if (resultsArea) resultsArea.classList.add('visible');

  const problemCount = suggestions.filter(s => s.icon !== '✅').length;

  const titleEl = document.getElementById('resultsTitle');
  const subtitleEl = document.getElementById('resultsSubtitle');
  if (titleEl) titleEl.textContent = problemCount > 0 ? `⚠️ 发现 ${problemCount} 项待改进` : '✅ 安全状态良好';
  if (subtitleEl) subtitleEl.textContent = problemCount > 0 ? '以下是为您生成的个性化改造建议：' : '继续保持，定期自查';

  currentSuggestions = suggestions;

  const list = document.getElementById('suggestionsList');
  // 老人信息栏（如有）
  let elderHtml = '';
  if (currentElderInfo) {
    const ageLabel = { '60-69':'60-69岁', '70-79':'70-79岁', '80+':'80岁及以上' }[currentElderInfo.age] || '';
    const genLabel = currentElderInfo.gender === 'male' ? '男' : '女';
    const mobLabel = { independent:'行动自如', cane:'需拐杖', wheelchair:'使用轮椅' }[currentElderInfo.mobility] || '';
    const visLabel = currentElderInfo.vision === 'impaired' ? '· 视力障碍' : '';
    elderHtml = '<div class="elder-info-bar">' +
      '<span class="elder-tag">🏠 评估对象</span>' +
      '<span>' + ageLabel + ' · ' + genLabel + ' · ' + mobLabel + visLabel + '</span>' +
      '</div>';
  }
  // 加引导提示
  let guideHtml = '';
  if (suggestions.some(s => s.icon !== '✅')) {
    guideHtml = '<div class="guide-tip"><span class="tip-icon">💡</span><span class="tip-text">提示：点击下方「+ 加入清单」保存改造建议，方便后续生成报告</span><span class="tip-arrow">👉</span></div>';
  }
  list.innerHTML = elderHtml + guideHtml + suggestions.map((s, idx) => {
    const isInList = myList.some(item => item.solution === s.solution);
    return `
      <div class="suggested-item">
        <div class="suggestion-icon">${s.icon}</div>
        <div class="suggestion-text">
          <div class="suggestion-title">${s.title}</div>
          <div class="suggestion-desc">${s.desc}</div>
        </div>
        ${s.icon !== '✅' ? `
          <button class="add-suggestion-btn ${isInList ? 'added' : ''}"
                  id="addSug-${idx}"
                  onclick="addSuggestion(${idx})">
            ${isInList ? '✓ 已添加' : '+ 加入清单'}
          </button>
        ` : ''}
      </div>
    `;
  }).join('') + '<div class="result-tip">' + getRandomTip() + '</div>';

  renderProductLinks(suggestions);
  updateStepIndicator(3);
  var spaceName = SPACES.find(function(s){ return s.id === currentPhotoSpace; });
  if (spaceName) showCelebrate(spaceName.name);
}

function renderProductLinks(suggestions) {
  const seen = {};
  const allProducts = [];
  suggestions.forEach(s => {
    const products = PRODUCT_MAP[s.title] || [];
    products.forEach(p => {
      if (!seen[p.url]) {
        seen[p.url] = true;
        allProducts.push(p);
      }
    });
  });

  if (allProducts.length === 0) return;

  const resultsArea = document.getElementById('resultsArea');
  let section = document.getElementById('productLinksSection');
  if (!section) {
    section = document.createElement('div');
    section.id = 'productLinksSection';
    section.className = 'product-links-section';
    resultsArea.appendChild(section);
  }

  const links = allProducts.map(p =>
    '<a href="' + p.url + '" target="_blank" class="product-link">🛒 ' + p.name + '</a>'
  ).join('');

  section.innerHTML = '<div class="product-links-title">🛒 推荐商品</div>' +
    '<div class="product-links-list">' + links + '</div>';
}

function addSuggestion(idx) {
  const s = currentSuggestions[idx];
  if (!s) return;

  const btn = document.getElementById('addSug-' + idx);
  const itemId = `photo-${currentPhotoSpace}-${idx}`;

  const existingIdx = myList.findIndex(item => item.id === itemId);
  if (existingIdx === -1) {
    const space = SPACES.find(sp => sp.id === currentPhotoSpace);
    myList.push({
      id: itemId,
      spaceName: space.name,
      spaceIcon: space.icon,
      title: s.title,
      solution: s.solution
    });
    if (btn) { btn.textContent = '✓ 已添加'; btn.classList.add('added'); }
    showToast(`✅ 已添加：${s.title}`);
  } else {
    myList.splice(existingIdx, 1);
    if (btn) { btn.textContent = '+ 加入清单'; btn.classList.remove('added'); }
    showToast(`🗑️ 已移除：${s.title}`);
  }
  renderChecklist();
}

function restartAssessment(spaceId) {
  const resultsArea = document.getElementById('resultsArea');
  const choice = document.getElementById('choiceButtons');
  const photoArea = document.getElementById('photoCaptureArea');
  const qArea = document.getElementById('questionnaireArea');

  if (resultsArea) resultsArea.classList.remove('visible');
  if (qArea) qArea.classList.remove('visible');
  if (photoArea) photoArea.classList.remove('visible');
  if (choice) choice.style.display = 'flex';

  const previewImg = document.getElementById('previewImg');
  if (previewImg) previewImg.src = '';
  const preview = document.getElementById('photoPreview');
  if (preview) preview.classList.remove('visible');
  const input = document.getElementById('photoFileInput');
  if (input) input.value = '';
  currentAnswers = {};
  currentQuestionIdx = 0;
}

function goBackToChoice() {
  const photoArea = document.getElementById('photoCaptureArea');
  const qArea = document.getElementById('questionnaireArea');
  const resultsArea = document.getElementById('resultsArea');
  const choice = document.getElementById('choiceButtons');
  if (photoArea) photoArea.classList.remove('visible');
  if (qArea) qArea.classList.remove('visible');
  if (resultsArea) resultsArea.classList.remove('visible');
  if (choice) choice.style.display = 'flex';
}

function updateStepIndicator(step) {
  document.querySelectorAll('#stepIndicator .step-item').forEach(function(el) {
    var s = parseInt(el.dataset.step);
    el.classList.remove('active', 'done');
    if (s < step) el.classList.add('done');
    if (s === step) el.classList.add('active');
  });
}

/* ===== SAFETY SCORE & FUN ===== */
var SAFETY_TIPS = [
  '💡 小贴士：据世卫组织数据，每年约30-40%的65岁以上老人会发生跌倒，家中是最常见发生地点。',
  '💡 小贴士：卫生间是老人跌倒最高发的区域，建议在马桶旁和淋浴区都安装扶手。',
  '💡 小贴士：老人视力随年龄下降，室内照度应保持在300-500lux，是年轻人的2-3倍。',
  '💡 小贴士：适老化改造不一定是大工程，换个灯泡、加个扶手，就能大幅降低风险。',
  '💡 小贴士：老人从地面站起需要约30-40kg的腿部力量，助起沙发能大幅降低起身难度。',
  '💡 小贴士：中国有超过2.5亿老年人，适老化改造已成为每个家庭值得提前规划的事。',
  '💡 小贴士：老人夜间起夜跌倒风险是白天的2倍，安装感应夜灯是最简单有效的预防方式。',
  '💡 小贴士：轮椅使用者需要门洞净宽≥80cm，且地面无任何高差，提前规划非常重要。'
];

function getRandomTip() {
  return SAFETY_TIPS[Math.floor(Math.random() * SAFETY_TIPS.length)];
}

function animateSafetyScore(targetScore) {
  var numEl = document.getElementById('scoreNum');
  var ringEl = document.getElementById('ringFill');
  var emojiEl = document.getElementById('scoreEmoji');
  if (!numEl || !ringEl) return;
  var current = parseInt(numEl.textContent) || 0;
  if (current === targetScore) return;
  var circumference = 2 * Math.PI * 34; // ~213.6
  var offset = circumference - (targetScore / 100) * circumference;
  ringEl.style.strokeDashoffset = offset;
  // animate number
  var step = current < targetScore ? 1 : -1;
  var anim = setInterval(function() {
    current += step;
    numEl.textContent = current;
    if (current === targetScore) clearInterval(anim);
  }, 600 / Math.abs(targetScore - (parseInt(numEl.textContent) || 0));
  // emoji
  if (emojiEl) {
    emojiEl.textContent = targetScore <= 40 ? '😟' : targetScore <= 70 ? '😐' : '😊';
  }
}

function showCelebrate(spaceName) {
  var toast = document.getElementById('celebrateToast');
  var textEl = document.getElementById('celebrateText');
  if (!toast || !textEl) return;
  textEl.textContent = spaceName + ' 评估完成！';
  toast.style.display = 'flex';
  // restart animation
  toast.style.animation = 'none';
  void toast.offsetWidth;
  toast.style.animation = '';
  setTimeout(function() { toast.style.display = 'none'; }, 950);
}

function updateFloatingProgress() {
  var done = 0;
  var total = SPACES.length;
  SPACES.forEach(function(s) {
    var hasItem = myList.some(function(item) {
      return item.id.startsWith(s.id + '-');
    });
    if (hasItem) done++;
  });
  var pct = total > 0 ? Math.round(done / total * 100) : 0;
  var prog = document.getElementById('floatingProgress');
  if (prog) {
    prog.style.display = done > 0 ? 'flex' : 'none';
    animateSafetyScore(pct);
  }
}

function scrollToChecklist() {
  var el = document.getElementById('checklist');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/* ===== MINI-PROGRAM (微信环境检测) ===== */
function openMiniProgram() {
  /* 无论是否在微信内，都直接弹窗显示小程序码 */
  showMiniProgramModal();
}

function showMiniProgramModal() {
  var modal = document.getElementById('miniProgramModal');
  if (modal) modal.classList.add('open');
}

function closeMiniProgramModal() {
  var modal = document.getElementById('miniProgramModal');
  if (modal) modal.classList.remove('open');
}

function copyMiniPath() {
  var path = '#小程序://慈爱嘉/E4HPJjKzYoNnbjk';
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(path).then(function() {
      showToast('✅ 已复制，请在微信中粘贴打开');
    });
  } else {
    var ta = document.createElement('textarea');
    ta.value = path; document.body.appendChild(ta);
    ta.select(); document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('✅ 已复制，请在微信中粘贴打开');
  }
}

/* ===== INITIAL PULSE ON SPACE CARDS ===== */
function initGuidance() {
  /* 首次加载：给空间卡片加脉冲动画 */
  if (!localStorage.getItem('pulseShown')) {
    document.querySelectorAll('.space-card').forEach(function(card, i) {
      setTimeout(function() {
        card.classList.add('pulse');
        setTimeout(function() { card.classList.remove('pulse'); }, 4000);
      }, i * 300);
    });
    localStorage.setItem('pulseShown', '1');
  }
  updateFloatingProgress();
}

/* ===== CHECKLIST ===== */
function toggleItem(spaceId, hazardIdx) {
  const space = SPACES.find(s => s.id === spaceId);
  const hazard = space.hazards[hazardIdx];
  const itemId = `${spaceId}-${hazardIdx}`;

  const existingIdx = myList.findIndex(item => item.id === itemId);
  if (existingIdx === -1) {
    myList.push({
      id: itemId,
      spaceName: space.name,
      spaceIcon: space.icon,
      title: hazard.title,
      solution: hazard.solution
    });
    showToast(`✅ 已添加：${hazard.title}`);
  } else {
    myList.splice(existingIdx, 1);
    showToast(`🗑️ 已移除：${hazard.title}`);
  }
  renderChecklist();
  updateFloatingProgress();
  // update button state in detail panel
  const btn = document.getElementById(`btn-${spaceId}-${hazardIdx}`);
  if (btn) {
    const isAdded = myList.some(item => item.id === itemId);
    btn.textContent = isAdded ? '✓ 已添加' : '+ 加入清单';
    btn.classList.toggle('added', isAdded);
  }
}

function renderChecklist() {
  const countEl = document.getElementById('listCount');
  const emptyState = document.getElementById('emptyState');
  const itemsContainer = document.getElementById('checklistItems');
  const actionsEl = document.getElementById('checklistActions');
  const progressWrap = document.getElementById('progressWrap');

  if (countEl) countEl.textContent = myList.length;

  if (myList.length === 0) {
    if (emptyState) emptyState.style.display = 'block';
    if (itemsContainer) itemsContainer.innerHTML = '';
    if (actionsEl) actionsEl.style.display = 'none';
    if (progressWrap) progressWrap.style.display = 'none';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  if (actionsEl) actionsEl.style.display = 'flex';
  if (progressWrap) progressWrap.style.display = 'block';

  if (itemsContainer) {
    itemsContainer.innerHTML = myList.map((item, idx) => `
      <div class="checklist-item">
        <input type="checkbox" onchange="toggleCheck(${idx}, this)">
        <span class="item-text">${item.spaceIcon} ${item.title}</span>
        <span class="item-space">${item.spaceName}</span>
        <button class="remove-btn" onclick="removeItem(${idx})">✕</button>
      </div>
    `).join('');
  }

  updateProgress();
}

function toggleCheck(idx, el) {
  updateProgress();
}

function updateProgress() {
  const items = document.querySelectorAll('#checklistItems .checklist-item');
  let checked = 0;
  items.forEach(item => {
    const cb = item.querySelector('input[type="checkbox"]');
    if (cb && cb.checked) checked++;
  });
  const text = document.getElementById('progressText');
  const fill = document.getElementById('progressFill');
  if (text) text.textContent = `${checked} / ${myList.length} 项已完成`;
  if (fill) fill.style.width = myList.length > 0 ? ((checked / myList.length) * 100) + '%' : '0%';
}

function removeItem(idx) {
  const item = myList[idx];
  myList.splice(idx, 1);
  showToast(`🗑️ 已移除：${item.title}`);
  renderChecklist();
  // refresh detail panel button if same space is active
  if (activeSpace) {
    const space = SPACES.find(s => s.id === activeSpace);
    if (space) {
      space.hazards.forEach((h, i) => {
        const btn = document.getElementById(`btn-${activeSpace}-${i}`);
        if (btn) {
          const isAdded = myList.some(item => item.id === `${activeSpace}-${i}`);
          btn.textContent = isAdded ? '✓ 已添加' : '+ 加入清单';
          btn.classList.toggle('added', isAdded);
        }
      });
    }
  }
}

function clearAll() {
  if (!confirm('确定要清空所有改造项目吗？')) return;
  myList = [];
  renderChecklist();
  showToast('🗑️ 已清空改造清单');
  if (activeSpace) enterSpace(activeSpace);
}

/* ===== GENERATE REPORT ===== */
function generateReport() {
  if (myList.length === 0) {
    showToast('⚠️ 请先添加改造项目');
    return;
  }

  showToast('📄 正在生成报告图片...');

  /* 构建报告内容（离屏渲染） */
  const reportDiv = document.createElement('div');
  reportDiv.id = 'reportCapture';
  reportDiv.style.cssText = 'position:fixed;left:-9999px;top:0;width:480px;padding:32px;background:#fff;font-family:"PingFang SC","Microsoft YaHei",sans-serif;color:#111;line-height:1.8;';

  let html = '';
  html += '<div style="text-align:center;margin-bottom:24px;">';
  html += '<h1 style="font-size:1.5rem;color:#2563EB;margin:0 0 8px;">🏠 居家安全小助手</h1>';
  html += '<p style="font-size:.85rem;color:#6B7280;margin:0;">适老化改造报告</p>';
  html += '<p style="font-size:.78rem;color:#9CA3AF;margin:4px 0 0;">生成时间：' + new Date().toLocaleDateString('zh-CN') + '</p>';
  html += '<div style="border-top:2px solid #2563EB;margin:16px auto 0;width:60px;"></div>';
  html += '</div>';

  html += '<div style="margin-bottom:20px;">';
  html += '<h2 style="font-size:1.1rem;color:#1D4ED8;margin:0 0 12px;border-left:4px solid #2563EB;padding-left:8px;">📋 改造项目清单</h2>';
  myList.forEach((item, idx) => {
    html += '<div style="background:#F9FAFB;border-radius:8px;padding:14px 16px;margin-bottom:10px;border-left:4px solid #2563EB;">';
    html += '<div style="font-weight:700;font-size:.95rem;color:#111;">' + (idx + 1) + '. ' + item.spaceIcon + ' ' + item.spaceName + ' — ' + item.title + '</div>';
    html += '<div style="font-size:.85rem;color:#374151;margin-top:6px;">改造方案：' + item.solution + '</div>';
    html += '</div>';
  });
  html += '</div>';

  html += '<div style="border-top:1px solid #E5E7EB;margin:20px 0;"></div>';
  html += '<div style="font-size:.78rem;color:#9CA3AF;text-align:center;">本报告由「居家安全小助手」生成，仅供参考。</div>';

  reportDiv.innerHTML = html;
  document.body.appendChild(reportDiv);

  if (typeof html2canvas !== 'function') {
    showToast('⚠️ 图片生成库加载中，请刷新后重试');
    document.body.removeChild(reportDiv);
    return;
  }

  html2canvas(reportDiv, {
    scale: 2,
    backgroundColor: '#fff',
    useCORS: true
  }).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    document.getElementById('reportImage').src = imgData;
    document.getElementById('reportImageModal').classList.add('open');
    showToast('✅ 报告已生成，长按图片可保存');
    document.body.removeChild(reportDiv);
  }).catch(err => {
    console.error('Report image generation failed:', err);
    showToast('⚠️ 报告生成失败，请重试');
    if (reportDiv.parentNode) document.body.removeChild(reportDiv);
  });
}

function closeReportImageModal() {
  document.getElementById('reportImageModal').classList.remove('open');
}

function downloadReportImage() {
  const img = document.getElementById('reportImage');
  if (!img || !img.src || img.src.startsWith('data:') === false) {
    showToast('⚠️ 暂无可保存的图片');
    return;
  }
  const link = document.createElement('a');
  link.download = '居家安全小助手_改造报告_' + new Date().toISOString().slice(0, 10) + '.png';
  link.href = img.src;
  link.click();
  showToast('✅ 图片已保存');
}

function printChecklist() {
  generateReport();
}

/* ===== MODALS ===== */
function openSafetyModal() {
  document.getElementById('safetyModal').classList.add('open');
}
function closeSafetyModal() {
  document.getElementById('safetyModal').classList.remove('open');
}

function openQRModal() {
  const url = window.location.href;
  const qrEl = document.getElementById('qrImage');
  if (qrEl) qrEl.src = 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=' + encodeURIComponent(url);
  const qrUrlEl = document.getElementById('qrUrl');
  if (qrUrlEl) qrUrlEl.textContent = url;
  document.getElementById('qrModal').classList.add('open');
}
function closeQRModal() {
  var modal = document.getElementById('qrModal');
  if (!modal) return;
  modal.classList.remove('open');
  /* 恢复 qrModal 默认内容的显示 */
  var modalInner = modal.querySelector('.qr-modal');
  if (modalInner) {
    var children = modalInner.children;
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      if (child.id !== 'qrBody') {
        child.style.display = '';
      }
    }
  }
  /* 隐藏 qrBody */
  var qrBody = document.getElementById('qrBody');
  if (qrBody) qrBody.style.display = 'none';
}

/* ===== TOAST ===== */
let toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2500);
}

/* ===== NAV ACTIVE ===== */
const sections = ['survey','checklist','policy','generate'];
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top < 120) current = id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

init();
