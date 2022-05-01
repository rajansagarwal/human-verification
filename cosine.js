// basic for now, working on fixing it soon lol

const { similarity }  = require('string-cosine-similarity');
const stringSimilarity = require('string-similarity');
const { compare } = require('string-compare');

var base = [
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
             '@bniubhnjiuvbh @baovuapfi @ziruobf great airdrop!',
             '@bniubhnjiuvbh @baovuapfi @ziruobf great airdrop!',
             '@bniubhnjiuvbh @baovuapfi @ziruobf great airdrop!',
             '@bniubhnjiuvbh @baovuapfi @ziruobf great airdrop!',
];

const array = [];

console.log('')

for (let j = 0; j < input.length; j++) {
    for (let i = 0; i < base.length; i++) {
        const model1 = stringSimilarity.compareTwoStrings(input[j], base[i])
        const model2 = compare(input[j], base[i]);
        if (model1 > 0.15) {
            if (model2 > 0.2) {
                array.push(base[i])
                console.log('high confidence' + ', ' + i + ', ' + (model2 + model1)/2)
            }
        }
    } 
}
console.log('')

if (array.length > 4) {
    console.log('BOTBOTBOT')
} else if (array.length > 0) {
    console.log('Probably')
} else {
    console.log('Human!')
}
// console.log(array)
