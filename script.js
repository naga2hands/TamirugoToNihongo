// ============================================================================
// 1. DOM ELEMENTS — Get references to all HTML elements
// ============================================================================
const tamilGrid = document.getElementById('tamilGrid');
const stageSlider = document.getElementById('stageSlider');
const sliderValue = document.getElementById('sliderValue');
const sliderLabel = document.getElementById('sliderLabel');
const explanation = document.getElementById('explanation');
const stageSummary = document.getElementById('stageSummary');
const stageMilestones = document.getElementById('stageMilestones');

// ============================================================================
// 2. STAGES ARRAY — 17 stages total, ordered chronologically from Stage 1 to Stage 17
// Each stage represents one slider position range
// ============================================================================
const stages = [
  {
    label: 'தமிழ் எழுத்துகள்/ஒலிகள் ஒரு பார்வை',
    note: `தமிழ் இலக்கண நூல்களில் எழுத்து என்னும் சொல், மொழியில் வழங்கும் ஒலிகளைக் குறிக்கவும், அவ்வொலிகளுக்குறிய வரி வடிவத்தைக் குறிக்கவும் பயன்படுத்தப்பட்டுள்ளது. அவ்வகையில் 'அ' என்னும் எழுத்து ஒலிவடிவம், வரிவடிவம் இரண்டையும் குறித்து நிற்கின்றது.\n
    இத்தளத்தில் யப்பானிய மொழியில் இன்றைக்கு புழக்கத்தில் இருக்கும் ஒலிகளை தமிழ் எழுத்துக்களின் வழி கற்போம், பின்னர் இன்னொரு நாளில் வரிவடிவத்தை கற்போம்.\n
    தமிழ் எழுத்துக்களை தொல்காப்பியர் பகுத்து ஆய்ந்து விளக்கியிருப்பார், இந்திய நிலப்பரப்பில் மொழியியல் சிந்தனையின் நீட்சி இது, தொல்காப்பியரை ஒரு சிறந்த மொழியியலாளர் எனலாம். அவர் வழியில் உங்கள் கை பிடித்து தமிழின் வழி யப்பானிய மொழிக்கு கூட்டிச்செல்வதே இந்த தளத்தின் நோக்கம்.\n
    தமிழின் உயிர் 12, மெய் 18 சேர்ந்த 30 எழுத்துக்களை முதல் எழுத்து என்கிறோம், உயிரும் மெய்யும் இணைந்து பிறக்கும் 216 எழுத்துக்களை உயிர் மெய் என்கிறோம், 'ஃ' எனும் ஆய்தம் சேர்த்து சார்பெழுத்துகள் என்றும் அழைக்கிறோம் (12+18+216+1=247).\n\n
    எழுத்து எனப்படுப
    அகரம் முதல்
    னகர இறுவாய் முப்பஃது என்ப (தொல், எழுத்து-1-3)`,
    summary: 'நிலை-1: தமிழின் மொத்த எழுத்துக்கள்.',
  },

  {
    label: 'நெடில் ஒலிகள்',
    note: `<b>அ இ உ ஏ ஒ </b>\n
    மேல் உள்ள 5 உயிர் எழுத்துக்களும் குறில் எனப்படும். இவற்றை உச்சரிக்கும் கால அளவு ஒரு மாத்திரையாகும் . மாத்திரை என்பது கை நொடிப்பொழுது அல்லது கண் இமைப்பொழுது எனத் தோராயமாக கூறலாம். யப்பானிய மொழியில் மாத்திரையை மொரா என்பர்.\n
    <b>ஆ ஈ ஊ ஏ ஐ ஓ ஔ</b>\n
    மேல் உள்ள 7  எழுத்துக்களும் நெடில் எனப்படும். இவற்றை உச்சரிக்க இரண்டு மாத்திரை அளவு ஆகும்.\n
    இந்த நெடில்களில்  ஐ, ஔ ஆகிய இரண்டு உயிர் எழுத்துக்களும் கூட்டுயிர் அல்லது சந்தியக்கரம் எனப்படும். இவை அய், அவ் என்றும் எழுதப்படும். பண்டைய காலத்தில் அஇ, அஉ என்றும் இவை எழுதப்பட்டன, மொழியியலில் இவற்றை dipthong என்பர் .\n
    இந்த 7 நெடிலுக்கும் யப்பானிய மொழியில் தனி வரிவடிவம் இல்லை, எனினும் இருக்கும் குறில்களைக் கொண்டே நெடிலை வரவழைக்கும் நெடுங்கணக்கு போல் ஒரு மிக எளிமையான முறையை கையாளுகின்றனர், அவற்றை பின்னர் பார்க்கலாம்.\n
    தமிழிலும், 'காகம்' என்பதை 'கஅகம்' என எழுதி, 'கஅ' என்பதை 'கா' என்று படிக்கலாம், போலவே 'கை' என்பதை 'கய்' என்றும் எழுதி படிக்கலாம் ஆனால் கால மாற்றத்தில் நாம் வேறு வழியை பின்பற்றியிருக்கிறோம். ஆக மொத்தத்தில் இந்த நெடில்களுக்கு யப்பானிய வரிவடிவம் தேவையில்லை ஆகிய நாமும் அவற்றை இங்கிருந்து அகற்றிவிடலாம்.`,
    summary: 'நிலை-2: நெடில்கள் தேவையா?',
  },

  {
    label: 'நெடில் ஒலிகள் நீக்கம்',
    note: `இப்போது, இந்த அட்டவணையிலிருந்து நெடில்களை முற்றிலும் நீக்கியிருக்கிறோம்.\n
    கவனத்தில் கொள்ளுங்கள் நாம் நெடில்களின் வரிவடிவத்தைதான் இங்கிருந்து நீக்கியிருக்கிறோம். தமிழ் மொழி போலவே யப்பானிய மொழியிலும் நெடில்கள் இருக்கின்றன அவை மறைந்து இருக்கின்றன எனலாம். இது குறித்து பின்னர் விரிவாக பார்க்கலாம்.\n
    இப்போது, நீங்கள் "அ இ உ எ ஒ" என்பதை மட்டும் ஒரு பாட்டு போல படித்துபாருங்கள், க-வரிசை எல்லாம் தன்னியல்பாக உச்சரிப்பில் வரும். யப்பானிய குழந்தைகள் இப்படிதான் ஆரம்பிக்கின்றனர்.\n
    நிற்க, இவ்விடத்தில் "அ இ உ எ ஒ" எனும் உயிர் குறிலை மட்டும் பாடிப்பாருங்கள், மெய் குறில்களை அடுத்தடுத்த நிலைகளில் செய்யலாம்.`,
    summary: 'நிலை-3: நெடில்கள் நீக்கம்.',
  },

  {
    label: 'இல்லா மெய்கள்',
    note: `தமிழின் சில மெய்யெழுத்துகள் யப்பானியத்தில் மறைந்து இருக்கும், சில இருக்கவே இருக்காது. மெய்யெழுத்து என்றால் மொத்த உயிர்மெய் வரிசையையுமே கொள்க. அவற்றைப் பறறி சுருக்காமாக கீழே:\n
    <b>ங், ஞ்: </b>
    இந்த 'ங்' மற்றும் 'ஞ்' வரிசையிலுள்ள எழுத்துகளை முதலாகக்கொண்டு எந்தவொரு சொல்லும் யப்பானிய மொழியில் இல்லை, சொல்லின் இடையில் மட்டுமே 'ங்', 'ஞ்' என்று வரும், அப்படி வருகையில் இவற்றை 'ன்' என்ற எழுத்து கொண்டே யப்பானியர்கள் எழுதுவர்.  தமிழிலும் கூட 'தங்கம்' என்பதை 'தன்கம்' என்றும், 'மஞ்சள்' என்பதை 'மன்சள்' என்றும் எழுதிப்படிக்க முடியும்.\n
    <b>ட், ண்: </b>
    இந்த 'ட்' மற்றும் 'ண்' வரிசையிலுள்ள எந்த எழுத்துகளைக்கொண்டும் யப்பானிய மொழியில் சொற்கள் இல்லை. ஆக இந்த இரண்டுவரிசைகளும் யப்பானிய மொழிக்கு தேவையில்லை\n
    <b>ல்: </b>
    யப்பானிய மொழியில் 'ல்' வரிசையின் ஒலியே இல்லை என்று சிலர் கூறுவர், ஆனால் அப்படி இல்லை, 'ல' என்பதும் 'ர' என்பதும் யப்பானிய மொழியில் இணைந்து இன்றைய 'ர' போன்ற ஒலியைக் கொண்டுள்ளது, 'ல' எனும் வரி தனியே இல்லை எனலாம்.  "ராமென்" என்று யப்பானியர் உச்சரிக்கையில் உங்களுக்கு "லாமென்" என்று கேட்கும் காரணம் இதுவே.\n
    <b>ழ், ள், ற்: </b>
    ஏற்கனவே 'ல' வரிசையும் 'ர' வரிசையும் இணைந்து 'ர' வரிசையாக இருப்பதால் இந்த 'ழ', 'ள' மற்றும் 'ற' வரிசைகள் யப்பானிய மொழியில் தேவையற்று போகிறது. யப்பானிய ஒலி அமைப்பு என்பது எளிமையானது.\n`,
    summary: 'நிலை-4: எல்லா மெய்களும் தேவையா?.',
  },

  {
    label: 'அடிப்படை வரிசைகள்',
    note: `தேவையற்ற உயிர் நெடில்கள் மற்றும் மெய் வரிசை நீக்கி நீங்கள் இப்போது பார்ப்பது யப்பானிய மொழியின் அடிப்படை அட்டவணை\n
    ஆனால் இவை இறுதியான ஒலி அட்டவணை என்று அர்த்தமாகாது, இன்னும் சில மாற்றங்கள் இருக்கின்றன. மேலும் தமிழ் மொழி போலவே யப்பானிய மொழியும் சில உச்சரிப்பு மாற்றங்களை அடைந்திருக்கிறது அவற்றை அடுத்துவரும் நிலைகளில் சுருக்கமாக காணலாம்.\n
    இப்போது, நீங்கள் "க ச த ந ப ம ய ர வ ன" என்ற வரிசையை கவனித்து பாருங்கள் ஆனால் முன்னர் "அ இ உ எ ஒ" என்பதை ஒரு பாட்டு போல படித்து பார்த்தது போல பாட வேண்டாம், கவனித்து பார்த்தால் போதும்.`,
    summary: 'நிலை-5: அடிப்படை அட்டவணை தயார்.',
  },

  {
    label: 'ஒற்றுகள் தேவையா?',
    note: `தமிழில் மெய் ஒலிகளுக்கு "க் ங் ச் ஞ் ட் ண் த் ந் ப் ம் ய் ர் ல் வ் ழ் ள் ற் ன்" என்று தனியே வரிவடிவங்கள் இருக்கின்றன ஆனால் எல்லா மொழிகளுக்கும் அப்படி இருக்கவேண்டிய அவசியம் இல்லை, உதரானத்திற்கு மலையாளம், கன்னடம்  மற்றும் தெலுங்கு ஆகிய அண்டை மொழிகளேகூட மெய் ஒலிகளை வித்தியாசமாய் கையாளக்கின்றன.  அப்படியிருக்க யப்பானிய மொழியும் மெய் ஒலிகளை எழுத வித்தியாசமான முறையை கையாளக்கிறது, சில மெய் ஒலிகள் யப்பானிய மொழியில் இல்லாமலும்கூட இருக்கிறது அவற்றை சுருக்கமாக காணலாம்:\n
    <b>க், ச், த், ப்:</b>
    இம்மெய் ஒலிகள் யப்பானிய மொழியிலும் இருக்கின்றன, ஆனால் இவற்றை எழுத வித்தியாசமான ஒரு முறையை கையாள்கிறது அது குறித்து பின்னர் பார்க்கலாம். இப்பொழுது தேவையில்லை.\n
    <b>ந், ம்: </b>
    இம்மெய் ஒலிகள் யப்பானிய மொழியில் முன்னர் பார்த்த 'ங்', 'ஞ்' போலவே 'ன்' என்ற எழுத்தையே ஏற்றுக் கொள்கின்றன, தமிழிலும் கூட 'தந்தம்' என்பதை 'தன்தம்' என்றும், 'அம்மா' என்பதை 'அன்மா' என்றும் எழுதிப்படிக்க முடியும். தமிழில் 'ம்' ஆனது சொல்லின் இறுதியில் வரும் ஆனால் யப்பானிய மொழியில் அப்படி கிடையாது. ஆக இவ்விரு ஒலிகளுக்கு தனியே எழுத்து தேவையில்லை.\n
    <b>ய், ர், வ்: </b>
    இம்மெய் ஒலிகளைக் கொண்ட யப்பானியச் சொற்களே கிடையாது, ஆக இவ்வெழுத்துகள் அங்கே இல்லை`,
    summary: 'நிலை-6: மெய்யெழுத்துக்கள் எங்கே?',
  },

  {
    label: 'ன் எனுஞ்சிறப்பு ஓசை',
    note: `சென்ற நிலையில் 'ந்' ஒலியை 'ன்' கொண்டே எழுதுகிறார்கள் என்று பார்த்தோம், மாற்றாக 'ன்' வரிசையிலுள்ள "ன னி னு னெ னொ" விற்கு பதில் யப்பானிய மொழியில் ஏற்கனவே உள்ள "ந நி நு நெ நொ" என்ற ஒலிகளை பயன்படுத்துகிறார்கள்.\n
    ஆக கடைசி வரிசையான 'ன' வரிசை முற்றிலுமாக நீக்கப்பட்டு அவ்விடத்தை 'ன்' மட்டும் எடுத்துக்கொள்கிறது. இந்த ஒலிக்கு யப்பானிய மொழியில் "ஹட்சுஓன்" என்று பெயர், அப்படியென்றால் "மூக்கொலி", மூக்கிலிருந்து பிறக்கும் ஒலி எனப்பொருள் கொள்ளலாம்.\n
    இன்னும் சொல்லப்போனால் இதனை, "தனிஒலி" அல்லது "சிறப்புஒலி" என்றும் வழங்குவர் ஏனெனில் இது பல ஒலிகளை தன்னகத்தேக் கொண்டது.\n
    தமிழின் மொத்த மெல்லின ஒலிகலாகிய "ங் ஞ் ண் ந் ம் ன்" எல்லாவற்றிக்கும் யப்பானிய மொழியின் இந்த ஒரே எழுத்து பயன்படுகிறது என்றால் இது சிறப்பான எழுத்து தானே.`,
    summary: 'நிலை-7 "ன்" எனும் சிறப்பெழுத்து',
  },

  {
    label: 'சி அது ஷி ஆதல்',
    note: `'சி' ஆனது 'ஷி' என மாற்றமடைந்து இருப்பதை இங்கே நீங்கள் பார்க்கலாம்.\n
    வரிவடிவம் காலத்தால் மாற்றம் அடைவதை நாம் கண்கூடாக பார்ப்பது உண்டு, அதனைப் போலவே ஒலிவடிவமும் காலத்தால் மாற்றம் அடைவது உண்டு. ஒருவர் உச்சரிக்கும் ஒலிக்கும் இன்னோருவர் உச்சரிக்கும் ஒளிக்குமே வித்தியாசம் இருக்கும் பொழுது பலநூறு ஆண்டுகளில் மக்கள் இடப்பெயர்வு, கலாச்சார பரிமாற்றம், மொழிகளினிடையேயான ஊடாட்டம் என பல்வேறு புறக்காரணிக்கலாலும், வட்டார வழக்கு போன்ற அகக்காரணிக்கலாலும் மொழியின் ஒளியின் உச்சரிப்பில் பல்வேறு மாற்றங்கள் நிகழ்வது உண்டு.\n
    தமிழிலே கூட, இந்த 'ச' வரிசையானது 'ச்ச', 'ச்சி'.. என்றே பழந்தமிழில் புழக்கத்தில் இருந்திருக்கிறது, கால மாற்றத்தில் 'ச', 'சி'.. என்று மாறியிருக்கிறது. "சோழன்" என்பது தவறு "ச்சோழன் " என்பதே சரி.\n
    இதன்படி யப்பானிய மொழியில் 'சி' ஆனது 'ஷி' என்றாகிருக்கிறது, இதன் காரண காரணிகளுக்குள்ளே போகவேண்டாம், அதை அதன்படியே எடுத்துக்கொள்வது நன்று.`,
    summary: 'நிலை-8: உச்சரிப்பு மாற்றம் (சி -> ஷி)',
  },

  {
    label: 'தி அது ச்சி ஆதல்',
    note: `விளையாட்டாக ஒன்று நான் நினைப்பது உண்டு, தமிழின் இன்றைய "சி" யானது ஒரு காலத்தில் "ச்சி" என்றே இருந்தது என்று சென்ற நிலையில் பார்த்தவமல்லவா, போலவே யப்பானிய மொழியிலும் "ச்சி" என்றிருந்தது "சி" என்று  மாறி பின் "ஷி" என்று மாறியிருக்குமேயாயின், "ச்சி" என்ற ஒலியின் தேவை அதிகமாகவும், "தி" எனும் ஒலியின் தேவை குறைவாகமும் இருந்து 'த' வரிசையின் "தி" யானது "ச்சி" என்று மாற்றமடைந்திருக்குமோ என்று.\n
    எப்படியோ யப்பானிய மொழியில் 'தி' ஆனது 'ச்சி' என்றாகிருக்கிறது, மேலே விளையாட்டாக நான் சொன்னதை மறந்துவிடுங்கள் மறுபடியும் சொல்கிறேன் இதன் காரண காரணிகளுக்குள்ளே போகவேண்டாம், அதை அதன்படியே எடுத்துக்கொள்வது நன்று.`,
    summary: 'நிலை-9: உச்சரிப்பு மாற்றம் (தி -> ச்சி)',
  },

  {
    label: 'து அது ட்சு ஆதல்',
    note: `யப்பானிய மொழியின் பழைய காலத்தில் 'து' என்னும் ஒலி தற்கால யப்பானியத்தில் 'ட்சு' என்ற ஒலியாக மாறிவிட்டது.\n
    நா அடிப்படையில் தொண்டைக்கு மேல் தொடும் ஒலி 'த்' ஆனது  இயல்பான ஒலி மாற்றம் பெற்று ஈரிடஒலியாகி (முதலில் 'த்', பின் 'ஸ்' வெளியாகும்) 'ட்சு' என்றாக மாற்றமடைந்துள்ளதாக மொழியியலாளர்கள் கருதுகின்றனர். எனினும் மறுபடியும் சொல்கிறேன் இதன் காரண காரணிகளுக்குள்ளே போகவேண்டாம், அதை அதன்படியே எடுத்துக்கொள்வது நன்று`,
    summary: 'நிலை-10: உச்சரிப்பு மாற்றம் (து -> ட்சு)',
  },

  {
    label: 'ப-வரிசை அது ஹ-வரிசை ஆதல்',
    note: `மொழியியலாளர்களைப் பொறுத்தவரை 'ப' எனும் ஒலி காலப்போக்கில்  'ஹ' என்று மாற்றம் அடைவதை பல்வேறு மொழிகளில் ஆய்வு செய்து நிரூபித்திருக்கிறார்கள், யப்பானிய மொழியிலும் அவ்வாறே நிகழ்ந்திருக்கிறது.\n
    இதற்கு இன்னொரு உதாரணமாக திராவிட மொழிகளாகிய தமிழையும் கன்னடத்தையும் எடுத்துக்கொள்ளலாம், தமிழில் 'ப' என்று இருக்கும் ஒலி கன்னடத்தில் 'ஹ' என்றும் வழங்கப்படுகிறது. நினைவில் கொள்க 'ப' ஒலி கன்னடத்தில் முழுவதுமாக மறையவில்லை மாறாக வேற்று மொழிகளின் ஆதிக்கத்தாலும், கால மாற்றத்தாலும் பல சொர்க்களில் 'ப' ஒலியானது 'ஹ' என்று மாறியிருக்கிறது, உதாரணமாக:\n
    தமிழின் "பால்", கன்னடத்தில் "ஹாலு". 
    தமிழின் "பள்ளி", கன்னடத்தில் "ஹள்ளி". 
    தமிழின் "பெயர்", கன்னடத்தில் "ஹெசரு". 
    தமிழின் "போராட்டம்", கன்னடத்தில் "ஹோராட்ட".\n
    இதன்படி யப்பானிய மொழியில் 'ப, பி, பு, பெ, பொ' ஆனது 'ஹ, ஹி, ஹு, ஹெ, ஹொ' என்றாகிருக்கிறது.`,
    summary: 'நிலை-11: உச்சரிப்பு மாற்றம் (ப வரிசை -> ஹ வரிசை)',
  },

  {
    label: 'ஹு அது ஃபு ஆதல்',
    note: 'Gray out the listed base consonant rows to show they are being deprecated.',
    summary: 'நிலை-12: உச்சரிப்பு மாற்றம் (ஃபு)',
  },

  {
    label: 'யியும் யெயும், இயும் எயுமாய் இருத்தல்',
    note: 'Gray out the specific யி and யெ cells while keeping their table structure intact.',
    summary: 'Stage 13: Dim the யி and யெ cells.',
  },

  {
    label: 'இரு ஒலி குறைந்த அட்டவணை',
    note: 'Keep the யி and யெ table cells visible but remove their displayed values.',
    summary: 'Stage 14: Remove only the values from யி and யெ cells.',
  },

  {
    label: 'வியும் வுவும் வெவும், இயும் உவும் எயுமாய் இருத்தல்',
    note: 'Gray out the specific வி, வு, வெ cells while keeping their table structure intact.',
    summary: 'Stage 15: Dim the வி, வு, வெ cells.',
  },

  {
    label: 'மூ ஒலி குறைந்த அட்டவணை',
    note: 'Keep the வி, வு, வெ table cells visible but remove their displayed values.',
    summary: 'Stage 16: Remove only the values from வி, வு, வெ cells.',
  },

  {
    label: 'இறுதி நிலை',
    note: 'இது இறுதி நிலை. தமிழ்-யப்பானிய ஒலி ஒப்பீடு முற்றுப்பெற்றது.',
    summary: 'Stage 17: Final stage complete.',
  },

  {
    label: 'இறுதி நிலை',
    note: 'இது இறுதி நிலை. தமிழ்-யப்பானிய ஒலி ஒப்பீடு முற்றுப்பெற்றது.',
    summary: 'Stage 18: Final stage complete.',
  },
  
];

// ============================================================================
// 3. VOWEL DATA — 12 Tamil vowels with their IPA-like names and Japanese equivalents
// ============================================================================
const tamilVowels = [
  { label: 'அ', name: 'a', japanese: 'a' },    // Short 'a' — inherent vowel
  { label: 'ஆ', name: 'ā', japanese: 'a' },    // Long 'ā' — same Japanese mora
  { label: 'இ', name: 'i', japanese: 'i' },    // Short 'i'
  { label: 'ஈ', name: 'ī', japanese: 'i' },    // Long 'ī' — same Japanese mora
  { label: 'உ', name: 'u', japanese: 'u' },    // Short 'u'
  { label: 'ஊ', name: 'ū', japanese: 'u' },   // Long 'ū' — same Japanese mora
  { label: 'எ', name: 'e', japanese: 'e' },    // Short 'e'
  { label: 'ஏ', name: 'ē', japanese: 'e' },    // Long 'ē' — same Japanese mora
  { label: 'ஐ', name: 'ai', japanese: 'ai' },  // Diphthong 'ai'
  { label: 'ஒ', name: 'o', japanese: 'o' },    // Short 'o'
  { label: 'ஓ', name: 'ō', japanese: 'o' },    // Long 'ō' — same Japanese mora
  { label: 'ஔ', name: 'au', japanese: 'au' },  // Diphthong 'au'
];

// ============================================================================
// 4. CONSONANT DATA — 18 Tamil consonants with virama forms
// ============================================================================
const tamilConsonants = [
  { base: 'க', display: 'க்', name: 'ka', japanese: '' },    // velar stop
  { base: 'ங', display: 'ங்', name: 'ca', japanese: '' },    // velar nasal (never word-initial in Japanese)
  { base: 'ச', display: 'ச்', name: 'ṭa', japanese: '' },    // palatal stop → becomes shi
  { base: 'ஞ', display: 'ஞ்', name: 'ta', japanese: '' },    // palatal nasal (never word-initial in Japanese)
  { base: 'ட', display: 'ட்', name: 'pa', japanese: '' },    // retroflex stop (never in Japanese)
  { base: 'ண', display: 'ண்', name: 'ṅa', japanese: '' },    // retroflex nasal (never in Japanese)
  { base: 'த', display: 'த்', name: 'ña', japanese: '' },    // dental stop → becomes chi/tsu
  { base: 'ந', display: 'ந்', name: 'ṇa', japanese: '' },    // dental nasal
  { base: 'ப', display: 'ப்', name: 'na', japanese: '' },    // bilabial stop → becomes ha-series
  { base: 'ம', display: 'ம்', name: 'ma', japanese: '' },    // bilabial nasal
  { base: 'ய', display: 'ய்', name: 'ya', japanese: '' },    // palatal approximant
  { base: 'ர', display: 'ர்', name: 'ra', japanese: '' },    // alveolar trill
  { base: 'ல', display: 'ல்', name: 'la', japanese: '' },    // alveolar lateral (merges with ra in Japanese)
  { base: 'வ', display: 'வ்', name: 'va', japanese: '' },    // labio-dental approximant
  { base: 'ழ', display: 'ழ்', name: 'ḻa', japanese: '' },    // retroflex lateral (never in Japanese)
  { base: 'ள', display: 'ள்', name: 'ḷa', japanese: '' },    // retroflex lateral (never in Japanese)
  { base: 'ற', display: 'ற்', name: 'ṟa', japanese: '' },    // retroflex trill (never in Japanese)
  { base: 'ன', display: 'ன்', name: 'ṉa', japanese: '' },    // dental nasal → becomes special row
];

// ============================================================================
// 5. VOWEL SIGN DATA — 12 Tamil vowel markers (vowel signs attached to consonants)
// ============================================================================
const vowelSigns = [
  { marker: '', label: 'a', detail: 'inherent' },  // No marker — inherent 'a' sound
  { marker: 'ா', label: 'ā' },                      // Long ā marker
  { marker: 'ி', label: 'i' },                      // Short i marker
  { marker: 'ீ', label: 'ī' },                      // Long ī marker
  { marker: 'ு', label: 'u' },                      // Short u marker
  { marker: 'ூ', label: 'ū' },                      // Long ū marker
  { marker: 'ெ', label: 'e' },                      // Short e marker
  { marker: 'ே', label: 'ē' },                      // Long ē marker
  { marker: 'ை', label: 'ai' },                    // Diphthong ai marker
  { marker: 'ொ', label: 'o' },                      // Short o marker
  { marker: 'ோ', label: 'ō' },                      // Long ō marker
  { marker: 'ௌ', label: 'au' },                     // Diphthong au marker
];

// ============================================================================
// 6. JAPANESE VOWEL MAPPING — Map long Tamil vowels to their Japanese mora base
// ============================================================================
const japaneseVowelMap = {
  a: 'a', ā: 'a',     // Both 'a' and 'ā' → Japanese 'a' mora
  i: 'i', ī: 'i',     // Both 'i' and 'ī' → Japanese 'i' mora
  u: 'u', ū: 'u',     // Both 'u' and 'ū' → Japanese 'u' mora
  e: 'e', ē: 'e',     // Both 'e' and 'ē' → Japanese 'e' mora
  ai: 'ai',           // Diphthong stays as 'ai'
  o: 'o', ō: 'o',     // Both 'o' and 'ō' → Japanese 'o' mora
  au: 'au',           // Diphthong stays as 'au'
};

// ============================================================================
// 7. STAGE-SPECIFIC CONFIGURATION ARRAYS
// ============================================================================
const longVowelLabels = ['ā', 'ī', 'ū', 'ē', 'ai', 'ō', 'au'];  // All long vowels removed at Stage 3

const grayedConsonantsStage3 = ['ங', 'ஞ', 'ட', 'ண', 'ல', 'ழ', 'ள', 'ற'];  // Consonants dimmed at Stage 4, removed at Stage 5

const deprecatedConsonantsStage12 = ['க', 'ங', 'ச', 'ஞ', 'ட', 'ண', 'த', 'ந', 'ப', 'ம', 'ய', 'ர', 'ல', 'வ', 'ழ', 'ள', 'ற', 'ன'];  // All consonants dimmed at Stage 12

// ============================================================================
// 8. BUILD FORMS FUNCTION — Create all syllable objects with visibility levels
// Visibility: 3 = always show, 2 = show from Stage 3+, 1 = show from Stage 4+
// ============================================================================
function buildForms() {
  const forms = [];

  // Add all 12 vowels to the forms array
  tamilVowels.forEach(vowel => {
    forms.push({
      id: `vowel-${vowel.name}`,
      label: vowel.label,
      type: 'vowel',
      name: vowel.name,
      japanese: vowel.japanese,
      visibility: 3,                                          // Always visible
      mapping: vowel.japanese,
    });
  });

  // Add all 216 consonant+vowel combinations (18 consonants × 12 vowel signs)
  tamilConsonants.forEach(consonant => {
    vowelSigns.forEach((vowelSign, index) => {
      const label = consonant.base + vowelSign.marker;        // e.g., 'க' + 'ி' = 'கி'
      const soundName = `${consonant.name}${vowelSign.label}`; // e.g., 'ka' + 'i' = 'kai'
      const japanese = `${consonant.japanese} (${japaneseVowelMap[vowelSign.label] || vowelSign.label})`;
      const visibility = index <= 1 ? 3 : index <= 4 ? 2 : 1; // First 5 vowels always visible, others conditional
      forms.push({
        id: `syllable-${soundName}`,
        label,
        type: 'syllable',
        base: consonant.base,
        name: soundName,
        japanese,
        visibility,
        mapping: consonant.japanese,
      });
    });
  });

  // Add special aytham (ஃ) — not a regular syllable
  const aytham = {
    id: 'special-aytham',
    label: 'ஃ',
    type: 'special',
    name: 'aytham',
    japanese: 'no direct kana equivalent',
    visibility: 1,
    mapping: 'none',
  };
  forms.push(aytham);
  return forms;
}

const tamilForms = buildForms();  // Generate all 217 forms (216 syllables + 1 aytham)

// ============================================================================
// 9. GET CURRENT STAGE FUNCTION — Map slider percentage (0–180) to stage index (0–18)
// Each stage covers a 10% range of the slider
// ============================================================================
function getCurrentStage(value) {
  if (value < 10) return 0;    // Stage 1: 0–9%
  if (value < 20) return 1;    // Stage 2: 10–19%
  if (value < 30) return 2;    // Stage 3: 20–29%
  if (value < 40) return 3;    // Stage 4: 30–39%
  if (value < 50) return 4;    // Stage 5: 40–49%
  if (value < 60) return 5;    // Stage 6: 50–59% (shi)
  if (value < 70) return 6;    // Stage 7: 60–69% (chi)
  if (value < 80) return 7;    // Stage 8: 70–79% (tsu)
  if (value < 90) return 8;    // Stage 9: 80–89% (ha-series)
  if (value < 100) return 9;   // Stage 10: 90–99% (fu)
  if (value < 110) return 10;   // Stage 11: 100–109% (special n-row)
  if (value < 120) return 11;   // Stage 12: 110–119% (dim all)
  if (value < 130) return 12;   // Stage 13: 120–129% (dim ya/ye)
  if (value < 140) return 13;   // Stage 14: 130–139% (blank ya/ye)
  if (value < 150) return 14;   // Stage 15: 140–149% (dim va/vu/ve)
  if (value < 160) return 15;   // Stage 16: 150–159% (blank va/vu/ve)
  if (value < 170) return 16;   // Stage 17: 160–169%
  if (value < 180) return 17;   // Stage 18: 170–179% (reserved)
  return 18;                     // Stage 19+: 180%+ (reserved)
}

// ============================================================================
// 10. GET VISIBLE FORMS FUNCTION — Filter forms based on stage index
// Only controls visibility for Stages 1–5; Stages 6+ always show all forms
// ============================================================================
function getVisibleForms(stageIndex) {
  // Stage 1–2: Show all forms (no filtering)
  if (stageIndex === 0 || stageIndex === 1) {
    return tamilForms;
  }
  // Stage 3: Show forms with visibility >= 1 (include all)
  if (stageIndex === 2) {
    return tamilForms.filter(item => item.visibility >= 1);
  }
  // Stage 4: Show forms with visibility >= 2 (exclude most hidden)
  if (stageIndex === 3) {
    return tamilForms.filter(item => item.visibility >= 2);
  }
  // Stage 5+: Show only forms with visibility === 3 (always visible)
  if (stageIndex === 4) {
    return tamilForms.filter(item => item.visibility === 3);
  }
  // Default: Show only always-visible forms
  return tamilForms.filter(item => item.visibility === 3);
}

// ============================================================================
// 11. RENDER TAMIL GRID FUNCTION — Main table rendering function
// Executes in 7 sequential steps for each stage
// ============================================================================
function renderTamilGrid(stageIndex) {
  // Get forms that should be visible at this stage
  const visibleForms = getVisibleForms(stageIndex);
  // Clear existing table content
  tamilGrid.innerHTML = '';

  // Create new table element
  const table = document.createElement('table');
  table.className = 'tamil-table';

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // STEP 1: BUILD HEADER ROW (corner + vowel column headers)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const thead = document.createElement('thead');
  const headRow = document.createElement('tr');

  // Create corner cell (top-left) — shows 'ஃ' (aytham symbol)
  const corner = document.createElement('th');
  corner.className = 'corner-cell';
  corner.textContent = 'ஃ';

  if (stageIndex >= 11) {
  corner.classList.add('cell-dim');
}

  headRow.appendChild(corner);

  // Decide which vowel columns to show at this stage
  // Stage 3+ removes long vowel columns (ā, ī, ū, ē, ai, ō, au) completely
  const visibleVowelSigns = stageIndex >= 2
    ? vowelSigns.filter(vs => !longVowelLabels.includes(vs.label))  // Remove long vowels
    : vowelSigns;                                                   // Keep all vowels

  // Create vowel header cells (column titles)
  visibleVowelSigns.forEach((vs) => {
    const th = document.createElement('th');
    // Find Tamil vowel glyph matching the label
    const match = tamilVowels.find(tv => tv.name === vs.label);
    const vowelGlyph = match ? match.label : vs.label;  // Show 'அ' instead of 'a'
    th.textContent = vowelGlyph;
    th.className = 'vowel-header';
    headRow.appendChild(th);
  });

  thead.appendChild(headRow);
  table.appendChild(thead);

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // STEP 2: BUILD TABLE BODY
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const tbody = document.createElement('tbody');

  // Decide which consonant rows to show at this stage
  // Stage 5+ removes unnecessary consonant rows completely (ங், ஞ், ட், ண், ல், ழ், ள், ற்)
  const visibleConsonants = stageIndex >= 4
    ? tamilConsonants.filter(consonant => !grayedConsonantsStage3.includes(consonant.base))
    : tamilConsonants;  // Keep all consonants

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // STEP 3: CREATE ROW FOR EACH CONSONANT
  // _________________________________________________________________
  visibleConsonants.forEach(consonant => {
    const tr = document.createElement('tr');

    // Create row label cell (leftmost column) — shows virama form like 'க்', 'ச்'
    const baseCell = document.createElement('td');
    baseCell.className = 'row-label base-cell';
    baseCell.textContent = consonant.display || consonant.base;
    tr.appendChild(baseCell);

    // Check if row should be dimmed at this stage
    const isStage3GrayedRow = stageIndex === 3 && grayedConsonantsStage3.includes(consonant.base);
    const isStage12DimmedRow = stageIndex >= 5 && deprecatedConsonantsStage12.includes(consonant.base);

    // Apply dim class to grayed row
    if (isStage12DimmedRow) {
      baseCell.classList.add('cell-dim');
    }

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // STEP 4: SPECIAL HANDLING FOR ன (n-row) at Stage 11+
    // Merge entire row into single cell showing only 'ன்' (virama form)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    if (stageIndex >= 6 && consonant.base === 'ன') {
      const td = document.createElement('td');
      td.className = 'syllable-cell cell-highlight';
      td.colSpan = visibleVowelSigns.length;  // Span all vowel columns
      td.innerHTML = `<div class="cell-main">${consonant.display}</div>`;
      tr.appendChild(td);
      tbody.appendChild(tr);
      return;  // Skip normal cell creation for this row
    }

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // STEP 5: CREATE CELLS FOR EACH VOWEL-COMBINATION
    // _________________________________________________________________
    visibleVowelSigns.forEach((vs, idx) => {
      const td = document.createElement('td');
      td.className = 'syllable-cell';

      // Build syllable label: consonant + vowel marker
      const label = consonant.base + vs.marker;  // e.g., 'க' + 'ி' = 'கி'
      const soundName = `${consonant.name}${vs.label}`;  // e.g., 'ka' + 'i' = 'kai'
      const formId = `syllable-${soundName}`;

      // Find form object to get visibility and Japanese mapping
      const form = tamilForms.find(f => f.id === formId) || { label, japanese: consonant.japanese, type: 'syllable' };
      let displayLabel = form.label;

      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      // STEP 6: STAGE-SPECIFIC CELL REPLACEMENTS (sound transformations)
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

      // STAGE 6: சி → ஷி (shi transformation)
      if (stageIndex >= 7 && consonant.base === 'ச' && vs.label === 'i') {
        displayLabel = 'ஷி';
        td.classList.add('cell-highlight');  // Highlight changed cell
      }

      // STAGE 7: தி → ச்சி (chi transformation)
      if (stageIndex >= 8 && consonant.base === 'த' && vs.label === 'i') {
        displayLabel = 'ச்சி';
        td.classList.add('cell-highlight');
      }

      // STAGE 8: து → ட்சு (tsu transformation)
      if (stageIndex >= 9 && consonant.base === 'த' && vs.label === 'u') {
        displayLabel = 'ட்சு';
        td.classList.add('cell-highlight');
      }

      // STAGE 9–10: ப-series → ஹ-series (pa→ha, pi→hi, pu→fu, pe→he, po→ho)
      if (stageIndex >= 10 && consonant.base === 'ப') {
        const replacementMap = {
          a: 'ஹ',                              // pa → ha
          i: 'ஹி',                             // pi → hi
          u: stageIndex >= 11 ? 'ஃபு' : 'ஹு',  // pu → hu (Stage 9) → fu (Stage 10)
          e: 'ஹெ',                             // pe → he
          o: 'ஹொ',                             // po → ho
        };
        if (replacementMap[vs.label]) {
          displayLabel = replacementMap[vs.label];
          td.classList.add('cell-highlight');
        }
        
      }

      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      // STEP 7: DIM / BLANK RULES FOR LATER STAGES
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

      // STAGE 13: Dim யி and யெ cells
      const isStage13YDim = stageIndex >= 12 && consonant.base === 'ய' && (vs.label === 'i' || vs.label === 'e');
      // STAGE 14: Blank யி and யெ cells (remove text)
      const isStage14YBlank = stageIndex >= 13 && consonant.base === 'ய' && (vs.label === 'i' || vs.label === 'e');

      // STAGE 15: Dim வி, வு, வெ cells
      const isStage15VDim = stageIndex >= 14 && consonant.base === 'வ' && (vs.label === 'i' || vs.label === 'u' || vs.label === 'e');
      // STAGE 16: Blank வி, வு, வெ cells (remove text)
      const isStage16VBlank = stageIndex >= 15 && consonant.base === 'வ' && (vs.label === 'i' || vs.label === 'u' || vs.label === 'e');

      // Apply dim class to gray cells
      if (isStage13YDim) {
        td.classList.add('cell-dim');
      }
      if (isStage15VDim) {
        td.classList.add('cell-dim');
      }

      // Apply blank (remove text content)
      if (isStage14YBlank) {
        displayLabel = '';
      }
      if (isStage16VBlank) {
        displayLabel = '';
      }

      // Render cell content
      td.innerHTML = `<div class="cell-main">${displayLabel}</div>`;

      // STAGE 2: Hide long-vowel columns (dim, not remove)
      if (stageIndex === 1 && longVowelLabels.includes(vs.label)) {
        td.classList.add('hidden');
      }

      // STAGE 3: Hide grayed rows completely
      if (isStage3GrayedRow) {
        td.classList.add('hidden');
      }

      // STAGE 2: Hide low-visibility cells (conditional filtering)
      if (!visibleForms.includes(form) && stageIndex === 1) td.classList.add('hidden');

      // Add cell to row
      tr.appendChild(td);
    });

    // Add completed row to table body
    tbody.appendChild(tr);
  });

  // Append body to table, table to grid container
  table.appendChild(tbody);
  tamilGrid.appendChild(table);
}

// ============================================================================
// 12. RENDER STAGE MILESTONES FUNCTION — Show stage dots at bottom
// Highlights active stage with different styling
// ============================================================================
function renderStageMilestones(activeIndex) {
  // Exit if milestone container doesn't exist
  if (!stageMilestones) return;
  // Clear existing milestones
  stageMilestones.innerHTML = '';

  // Create milestone dot for each stage
  stages.forEach((stage, index) => {
    const milestone = document.createElement('span');
    milestone.className = 'stage-milestone';

    // Add active class to current stage dot
    if (index === activeIndex) milestone.classList.add('active');

    // Set milestone number (1–17)
    milestone.textContent = index + 1;

    // Tooltip shows stage name on hover
    milestone.title = stage.label;

    // Add milestone to container
    stageMilestones.appendChild(milestone);
  });
}

// ============================================================================
// 13. UPDATE EXPLANATION FUNCTION — Main entry point for stage change
// Called when slider moves — updates all UI elements
// ============================================================================
function updateExplanation(value) {
  // Step 1: Get current stage index from slider value
  const stageIndex = getCurrentStage(value);

  // Step 2: Get stage data object
  const stage = stages[stageIndex];

  // Step 3: Update slider percentage display
  sliderValue.textContent = `${value}%`;

  // Step 4: Update stage label display (e.g., "தமிழ் எழுத்துகள்/ஒலிகள் ஒரு பார்வை")
  sliderLabel.textContent = stage.label;

  // Step 5: Update stage summary text
  stageSummary.textContent = stage.summary;

  // Step 6: Update explanation text (long description with line breaks)
  explanation.innerHTML = stage.note;

  // Step 7: Re-render stage milestone dots
  renderStageMilestones(stageIndex);

  // Step 8: Re-render Tamil grid table
  renderTamilGrid(stageIndex);
}

// ============================================================================
// 14. EVENT LISTENERS AND INITIALIZATION
// ============================================================================

// Add input event listener to slider — triggers on every slider movement
stageSlider.addEventListener('input', event => {
  // Get slider value as number and call updateExplanation
  updateExplanation(Number(event.target.value));
});

// Initialize on page load — call with current slider value
updateExplanation(Number(stageSlider.value));