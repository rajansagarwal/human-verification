function cosineSimilarity(vec1, vec2) {
    const dotProduct = vec1.map((val, i) => val * vec2[i]).reduce((accum, curr) => accum + curr, 0);
    const vec1Size = calcVectorSize(vec1);
    const vec2Size = calcVectorSize(vec2);
  
    return dotProduct / (vec1Size * vec2Size);
  };
  
  function tf(word, doc) {
    const wordOccurences = doc.filter(w => w === word).length;
    return wordOccurences / doc.length;
  };
  
  function idf(word, doc, otherDocs) {
    const docsContainingWord = [doc].concat(otherDocs).filter(doc => {
      return !!doc.find(w => w === word);
    });
  
    return (1 + otherDocs.length) / docsContainingWord.length;
  };

  function omitPunctuations(word) {
    return word.replace(/[\!\.\,\?\-\?]/gi, '');
  };
  
  function toLowercase(word) {
    return word.toLowerCase();
  };
  
  function calcVectorSize(vec) {
    return Math.sqrt(vec.reduce((accum, curr) => accum + Math.pow(curr, 2), 0));
  };


const stringSimilarity = require('string-similarity');
const regression = require('regression')
const { compare } = require('string-compare');

var sample = [
    '@jc_bourque  @romeis15  @dermotmcg  @AndreiGuta2017  @RayvkAus  @BrandonCreel3  @0xRuijerd  @Promoter_NFT9  @DenisHacquin  @emilevictorp  @AndreiSPana  @AndreiPatrunsu  @Fily_13  @kexzzzy  @Vitaliy04358373  @kuilef  @AlphariusLegion  @meowttt7  @lindyholicpart2  @RySz_14  @splayalistick', 
    '@StefanoChiri_10  @Simsc888  @KadiriTohir  @Katheri07560982  @Cop1_May0  @codyboston19  @ethplayer_else  @INT_President  @Molly36473762  @reetudes  @JDeLuccia  @g3rgg16  @Cryptokid888  @Ianhomew  @gust_gust3  @ayuen_deng413  @cardrare1', 
    'Metacrocodile presale will be on Unicrypt⏰  ✅KYC and audit by SOLIDPROOF ✅Huge marketing plans  ✅DEX trending ✅Liquidity will be lock at least 1 Years   ✅Listing on CMC&CG after launch ✅Ownership renounced Join us 💬 Telegram:+', 
    'the best dev! @Pershuk4  @truedrju  @FilterSolve  @ThorChainGod  @ham2hamChinoxs  @xiaoer2021  @diawidorif08  @realvicandy  @DanknNft  @BRE4KTHELAW  @hkg_wendy  @ManDeepest  @Vso21703  @01fale10  @carmencheung01', 
    '@ShillBoard_xyz  @joyce007wy  @CangwuSAMA  @sonecajoinvill  @lukyjonny2021  @arvin_radar  @esdrasjhonny  @Nftsearxh  @KiaSound  @orest9406  @eduardocury14  @minwu666  @cenjiahao6  @mrhandshakes1  @jieke86  @michaelchanyf  @APEHARDER  @lloyd12122003  @soulmate2430  @DefiNeomi', 
    '@_iamj0shua_  @cyberbob__  @FranSuccessTeam  @cryptoQueen202  @Alguhum20  @gongsoi1  @kiaunyte11  @RSilva_Celsius  @HDonskov  @Cryptobar360  @Msn_rz  @The_MetroGnomes  @Dhandy2612  @IghsaanJoshua  @peterboxeo  @_supergworld  @SamirZ22', 
    'Great amount was droped! @YayYayDoe  @3stylemakz  @LeFunBucket  @alkeni_kevin3  @alyssia11875741  @jimmyjpan  @EnKoVortex  @GudangG10564769  @iDannyAzm  @julien_abbou  @ApePunkz  @deadboiirunin  @tantjonghiem  @1almightyeddie  @BayratThai', 
    '@ringer9009  @muckintoire  @haleyrsum  @0xRelix  @abbeyjazzy  @YEChebbie  @Gandythagrey  @mengenjin9  @y_mumuni  @compassdao  @Bwanarob1  @leego79821968  @Tokens_All_In_1  @ducthang190593  @arun01722  @Daddy_Yeetsquad  @learnactrepeat  @Me05221009Me  @MulhollandEuan  @greg16676935420  @0xMagz', 
    '@161ricky  @NFT_Neo27  @Kalcrypto1  @ADAMbRK86  @PlayboiGino  @adnansanwhan  @TendulkarSosin  @LAB3465  @nop99_de  @BalloonConan  @naintucket  @SonfireLeah  @nicoteodoro  @Loki04549833  @yibielizaiyuan1  @jaydeeeez4  @andyhusary', 
    'Received airdrop, 5730$ worth! @_rodrigoosm  @sabrina_k902  @djhitchcock24  @Simon__Proulx  @doubletapagency  @hinata12232  @JosieSydow  @EddieMerrifiel1  @MagicBlxnt  @TheRapt50326924  @Goldstar209  @boxy613YT  @DavyLim95144990  @JorgeInf_90  @NilaiJil', 
    '@mattfx  @calapenzo  @0xMasonH  @SpaceRacers_NFT  @frankHoDL  @MitchellsSmith  @risbal  @Phare_a_on  @cryptodrunkerd  @CryptoShaq  @Dylan96220934  @MattSlo45800139  @billdillson  @hunter_braves  @zain03505153  @cryptoruush  @Anon79092121  @cribz_crypto  @ImSy_TeMaRi  @CryptoWarLord4k  @NoCap1000', 
    '@orc346  @YShimonovitch1  @KryptoKitten  @distart3  @MelodyMaiPhoto  @Dabblez  @BinaryRage  @TribeMetaLisa  @jam_mehrad  @VeggieZonEarth  @BeboOrtiz1992  @_Squip  @Mrrr_Fahrenheit  @robertofierroa  @crebzerz  @DONTTELLMAMUSIC  @ChrisVincii', 
    '@tatemeta111  @Rec709WaveClub  @tameemmohsen1  @Failed_Projects  @santelob  @DataverseArt  @blackmagicmcx  @Cj80060230  @meta_totems  @Aenimarts_nft  @dimkin170298  @haydclay  @KindredHeartsIO  @beccaheartness  @MudssrBodla  @TheNFTProfesso  @jcchrs1  @EmilyDevery1  @Hustlehard1900', 
    'EtherBear #etherbears #ethereum #tothemoon #bullish #cryptoSpace #cryptobears #2022 #buyone #buynow', 
    'HADES wins the poll 🔥 LETSGOOOO💪🤩 #UnoRe #Reinsurance #Crypto #Cryptocurrency $UNO #staking #alt...', 
    'Everyone loved what @MXStoken did today? 🚨 Buy 25billion of @MCUtoken & you gain 6% #Ethereum ...', 
    '0.001 Litecoin(LTC) Crypto Mining-Contract (0.001 LTC) #crypto #cryptocurrency #bitcoin #dogecoin', 
    '@asdlf @asdkfj2 @bcaoe @adoif', '@aisodfna @abouceafh @asbdcouac @aoseucha', 
    'AWESOME AIRDROP @asdfj @canio @aogabv @baosudf', 
    '@abaoueocu @alsefhb @pasig', 
    '@pbveau @pavrpiav nice airdrop', 
    'I just minted "The Aloes" collectible! https://t.co/iN9RFvbvDV #rarible #ethereum #flow #nonfungi...', 
    '@ilikebhop  @RussellIglooge  @ConradGibbon  @GoldstarAdi  @Emirhan0492  @MariaWa95115371  @Uzairchanna33  @FrancescoITANFT  @Soulndy  @Kershin12  @EllaWeather  @shah38198011  @sayitout_laud  @qvYvhoSp7rJlUVf  @koinos_nous  @Carlos_cannot  @MeesMuijser', 
    'Best project ever! @gekyyyy  @honkmia12  @SolSantaPapi  @jdgilbert11  @GimmeThaLight  @YahayaBasit2  @teodora_frunza  @cryptocoinlogic  @YattMaster  @CEOSHIR  @rachidaitali  @gokhanozlu  @newera_eth  @PlastiqueBert  @Crypto_Linz', 
]

var input = ['@bniubhnjiuvbh @baovuapfi @ziruobf great airdrop!',
             'random tweet with random people :)))',
             'i just minted EXCLUSIVE DROP',
             '0.001 Litecoin(LTC) Crypto Mining-Contract (0.001 LTC)',
             'Follow this number for follow back on twitter #retweet',
            ];

var bios = ['@bniubhnjiuvbh @baovuapfi @ziruobf great airdrop!',
            'random tweet with random people :)))',
            'i just minted EXCLUSIVE DROP',
            '0.001 Litecoin(LTC) Crypto Mining-Contract (0.001 LTC)',
            'Follow this number for follow back on twitter #retweet',
           ];

const array = []
const final = []
const bio = []

console.log('comparing...')

/*for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < sample.length; j++) {
        const model1 = stringSimilarity.compareTwoStrings(input[i], sample[j])
        const model2 = compare(input[i], sample[j]);
        const modelavg = (model1 + model2)/2;
        const userbio1 = stringSimilarity.compareTwoStrings(bios[i], sample[j])
        const userbio2 = stringSimilarity.compareTwoStrings(bios[i], sample[j])
        const useravg = (userbio1 + userbio2)/2
        if (modelavg > 0.1 && useravg > 0.1) {
            array.push(input[i])
            console.log('POST' + ', ' + j + ', ' + (1 - (model2 + model1)/2))
            final.push([1 - modelavg, 1 - useravg])
        }
    } 
}
*/
console.log('')

function userInfo(post, bio) {
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < sample.length; j++) {
            const model1 = stringSimilarity.compareTwoStrings(post, sample[j])
            const model2 = compare(post, sample[j]);
            const modelavg = (model1 + model2)/2;
            const userbio1 = stringSimilarity.compareTwoStrings(bio, sample[j])
            const userbio2 = stringSimilarity.compareTwoStrings(bio, sample[j])
            const useravg = (userbio1 + userbio2)/2
            const avg = (modelavg + useravg)/2
            if (avg > 0.05) {
                // console.log(j + ', ' + (1 - (model2 + model1)/2))
                final.push([1 - modelavg, 1 - useravg])
            } 
        }  
    }

    if (final.length > 4) {
        console.log(post.slice(0, 5) + '... is a bot')
    } else if (final.length > 2) {
        console.log(post.slice(0, 5) + '... probably a bot')
    } 
    else if (final.length > 0) {
        console.log('Unsure about ' + post.slice(0, 5) + '...')
    } else {
        console.log(post.slice(0, 5) + '... is a human')
    }
}

userInfo('wow', 'bruh');
userInfo('@bniubhnjiuvbh @baovuapfi @ziruobf great airdrop!', '0.001 Litecoin(LTC) Crypto Mining-Contract (0.001 LTC) #crypto #cryptocurrency #bitcoin #dogecoin')

if (final.length > 0) {
    console.log(final.slice(0, 2))
}

const result = regression.linear(final);
const gradient = result.equation[0];
const yIntercept = result.equation[1];
