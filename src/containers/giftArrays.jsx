import React from 'react';
import {connect} from 'react-redux';
const MainFunctions = require ('../actions/main-functions.js');
import cookie from 'react-cookie';

let masterPremiumCodes = {
        NONE: {
            name: 'No Thank-You Gift Needed',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/NOpremiumchoice.jpg?v=1469632625000',
            copy: 'I would like the full amount of my gift to help the children at St.Labre.',
            code: 'NONE'
        },
        SCREEN: {
            name: 'Car Sun Shade',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/car-shade.jpg?v=1464969469000',
            copy: 'Keep the inside of your car cool this summer with this 52" x 24" sunshade designed to fit most vehicles.',
            code: 'SCREEN'
        },
        WHTBLK: {
            name: 'White Fleece Blanket',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/gift-white-fleece.jpg?v=1462901045000',
            copy: 'This 39" x 59" blanket will keep you warm!',
            code: 'WHTBLK'
        },
        WINSOK: {
            name: 'Windsock',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/gift-windsock.jpg?v=1462901047000',
            copy: 'Our colorful windsock is 4 feet 9 inches long and made of durable material.',
            code: 'WINSOK'
        },
        FREEGIFT: {
            name: 'A Special Thank You Gift',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/placeholder.jpg?v=1466097962000',
            copy: 'Select this option to receive a free thank-you gift.',
            code: 'FREEGIFT'
        },
        CYBMALL5: {
            name: 'All 5 items',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/all5items.jpg?v=1466518196000',
            copy: 'All 5 items as a thank you for your generous donation!',
            code: 'CYBMALL5'
        },
        CYMBBSNS: {
            name: 'All 5 Items',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/CYMBBSNS-1116.jpg?v=1478015603000',
            copy: 'All 5 items as a thank you for your generous donation!',
            code: 'CYMBBSNS'
        },
        WBCOOLER: {
            name: 'Bear Cooler Bag',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/BearCoolerGWEB.png?v=1466518201000',
            copy: 'Bear Cooler Bag',
            code: 'WBCOOLER'
        },
        BERBK: {
            name: 'Bear Paw Blanket',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/BearPawBlanket.jpg?v=1465234649000',
            copy: 'Fleece',
            code: 'BERBK'
        },
        XMBLKW: {
            name: 'Beautiful Fleece Blanket',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/placeholder.jpg?v=1466097962000',
            copy: 'Our exclusive polar fleece blanket measures 41" x 61", finished with a decorative hem stitch on all sides and machine washable.',
            code: 'XMBLKW'
        },
        RXMBLK: {
            name: 'Beautiful Red Christmas Blanket',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/RXMBLK-1116.jpg?v=1478015231000',
            copy: 'Fleece',
            code: 'RXMBLK'
        },
        WHBKBW: {
            name: 'Beautiful White Fleece Blanket',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/WhiteFleeceBlanket.jpg?v=1465234662000',
            copy: 'Fleece',
            code: 'WHBKBW'
        },
        KEYHLDW: {
            name: 'Buffalo Key Holder',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/key-holder.png?v=1466518213000',
            copy: 'Smooth black powder coat finish, compact size and mounts on your wall. This key holder is sure to go with any decor.  Dimensions: 6"(w) X 5"(h).',
            code: 'KEYHLDW'
        },
        XMBLK: {
            name: 'Christmas Blanket',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/RedChristmasBlanket.jpg?v=1466518224000',
            copy: 'Fleece',
            code: 'XMBLK'
        },
        RXMBLKW: {
            name: 'Christmas Blanket',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/BeautifulRedChristmas+Blanket.jpg?v=1465234651000',
            copy: 'Christmas Fleece Blanket (39"x59")',
            code: 'RXMBLKW'
        },
        TBRN: {
            name: 'Colorful Table Runner',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/tablrerunner.jpg?v=1466518230000',
            copy: 'The colorful design and traditional pattern of our exclusive holiday table runner will add warmth to your table.',
            code: 'TBRN'
        },
        FBLK: {
            name: 'Feather Blanket',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/FeatherBlanket.jpg?v=1465234656000',
            copy: 'Fleece',
            code: 'FBLK'
        },
        XSTOK: {
            name: 'Fleece Christmas Stocking',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/xstok-1116.jpg?v=1478015237000',
            copy: 'This one-of-a-kind fleece stocking is just over 18" long from the bottom to the top of its snuggle-soft shearling cuff.',
            code: 'XSTOK'
        },
        SHAWL: {
            name: 'Gorgeous Shawl',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/SHAWL-1116.jpg?v=1478015235000',
            copy: 'Our silky-soft teal shawl measures 28" x 68".',
            code: 'SHAWL'
        },
        BCOOLER: {
            name: 'Insulated Cooler Bag',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/BearCoolerGWEB.png?v=1466518201000',
            copy: 'Bear Cooler Bag',
            code: 'BCOOLER'
        },
        NAVSET: {
            name: 'Nativity Set',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/NAVSET-1116.jpg?v=1478015228000',
            copy: 'Our limited edition, three-piece Nativity Set would make the perfect holiday gift. Featuring the Holy Family and a teepee, each piece is carefully painted with a traditional Native American pattern.',
            code: 'NAVSET'
        },
        BUFFALO: {
            name: 'Plush Stuffed Buffalo',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/buffalo.1.jpg?v=1466518205000',
            copy: 'Our huggable stuffed buffalo stands 10" tall.',
            code: 'BUFFALO'
        },
        LGBK: {
            name: 'Red Star Blanket',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/RedStarBlanket.jpg?v=1465234658000',
            copy: 'Fleece',
            code: 'LGBK'
        },
        SCRFGLVW: {
            name: 'Scarf and Glove Set',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/scarfglove.jpg?v=1466518226000',
            copy: 'Soft and warm, fleece scarf and glove set - one size fits most.',
            code: 'SCRFGLVW'
        },
        GSHAWL: {
            name: 'Silky Green Shawl',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/gift-shawl.jpg?v=1462901043000',
            copy: 'Our silky-soft green shawl measures 26" x 72".',
            code: 'GSHAWL'
        },
        APRON: {
            name: 'St. Labre Apron',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/apron.jpg?v=1466518198000',
            copy: 'Apron',
            code: 'APRON'
        },
        MPAD: {
            name: 'St. Labre Mouse Pad',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/mouse-pad.png?v=1466518215000',
            copy: '(7" x 8")',
            code: 'MPAD'
        },
        THERMW: {
            name: 'St. Labre Thermometer',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/ThermEComm.jpg?v=1466518234000',
            copy: 'Perfect for indoor or outdoor use.  Dimensions: 8 "diameter',
            code: 'THERMW'
        },
        PBLK: {
            name: 'Tan Blanket',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/TanBlanket.jpg?v=1465234660000',
            copy: 'Fleece',
            code: 'PBLK'
        },
        BIRDHW: {
            name: 'Teepee Birdhouse',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/BHOUSE_010.jpg?v=1466518203000',
            copy: 'Constructed for indoor or outdoor use, our birdhouse measures 8" tall and comes ready to hang.',
            code: 'BIRDHW'
        },
        TPCLOCKW: {
            name: 'Teepee Clock',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/Teepee_Clock.jpg?v=1466518231000',
            copy: 'Dimensions: 8-1/4"h x 6"w x 1-1/8"d',
            code: 'TPCLOCKW'
        },
        WALLET: {
            name: 'Travel Wallet',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/travel-wallet.jpg?v=1478014942000',
            copy: 'Measures 9.25" tall and 5.25" wide when closed, with 5 interior pockets and even includes a place for you to keep a pen.  Perfect for storing your passport, insurance papers, or any important travel documents.',
            code: 'WALLET'
        },
        ESTR16W: {
            name: 'Two Packs of Greeting Cards',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/Greeting-Card.jpg?v=1466518211000',
            copy: 'Beautifully designed greeting card sets you can use to brighten the lives of those dear to you.',
            code: 'ESTR16W'
        },
        GRDNGLVS: {
            name: 'Two Pairs of Gardening Gloves',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/gloves.jpg?v=1466518210000',
            copy: 'One pair purple and one pair teal, these durable cotton gardening gloves have elasticized wrists for a better fit and vinyl pads for a strong grip - one size fits most (machine washable).',
            code: 'GRDNGLVS'
        },
        TOTE: {
            name: 'TWO St. Labre Bear Totes',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/2_totes_for_web.4.jpg?v=1466518194000',
            copy: 'Grocery Tote',
            code: 'TOTE'
        },
        WBUFFALO: {
            name: 'White Stuffed Buffalo',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/whitebuffalo.jpg?v=1466518238000',
            copy: 'This adorable, limited-edition plush White Buffalo is yours with a donation to the children of St. Labre.',
            code: 'WBUFFALO'
        },
        WNTBK14: {
            name: 'Winter Blanket',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/WinterBlanket.jpg?v=1465234664000',
            copy: 'Fleece',
            code: 'WNTBK14'
        },
        WINTGLVS: {
            name: 'Winter Gloves With Native Design',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/native-gloves.png?v=1466518218000',
            copy: 'One Size Fits Most.',
            code: 'WINTGLVS'
        },
        FAIDKIT: {
            name: 'First Aid Kit',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/FAIDKIT-FirstAidKit.jpg?v=1469111549000',
            copy: 'This compact First Aid Kit is the perfect size to carry in your car or keep in a drawer at home. Sturdy outer case is made of waterproof nylon and measures 8” x 5” with velcro closures for easy handling. Kit includes scissors, tweezers, first aid tape, gauze dressing pads, alcohol wipes, and 22 adhesive bandages in 3 assorted sizes.',
            code: 'FAIDKIT'
        },
        XBLK16: {
            name: 'Christmas Fleece Blanket',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/Christmas_Blanket_Updates-0830.jpg?v=1472571176000',
            copy: 'This machine washable, polar fleece blanket measures 39" x 59" and is finished with a decorative hem stitch on all four sides. The stunning Native American pattern makes this blanket perfect for sharing as a gift or for you to keep and enjoy!',
            code: 'XBLK16'
        },
        TBRN1: {
            name: 'One Table Runner',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/OneTableRunner.jpg?v=1475082552000',
            copy: 'The colorful design and traditional pattern of our exclusive holiday table runner will add warmth to your table.',
            code: 'TBRN1'
        },
        TBRN2: {
            name: 'Two Table Runners',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/TwoTableRunners.jpg?v=1475082544000',
            copy: 'Receive two colorful and traditional holiday table runners to add warmth to your table.',
            code: 'TBRN2'
        },
        HGCW: {
            name: 'Holiday Greeting Cards',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/holiday-greeting.jpg?v=1476298832000',
            copy: 'Beautifully designed holiday greeting cards you can use to brighten the lives of those dear to you.',
            code: 'HGCW'
        },
        BUFFSET: {
            name: 'BUFFSET',
            image: 'https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/BUFFSET.jpg?v=1478015711000',
            copy: 'Enjoy two huggable stuffed buffalos that stand 10" tall.',
            code: 'BUFFSET'
        }
};

class GiftArray extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        
        if(!MainFunctions.urlParam('COOKIES')){    
            if(MainFunctions.urlParam('PC')){
                let pcFound = MainFunctions.socialFix(MainFunctions.urlParam('PC'));
                this.props.giftArrayUpdate(pcFound);
                cookie.save('giftArray', pcFound, { path: '/' , maxAge: 3600 * 4  });
            } else if(cookie.load('giftArray')){
                this.props.giftArrayUpdate(cookie.load('giftArray'));
            }
            
            if(cookie.load('premiumChoice')){
                
                setTimeout(function(){
                   document.getElementById(cookie.load('premiumChoice')).click();
               }, 300);
            
            }
            
        } 
        
    }
    
    _onChange(event){
        let selectPremium = event.currentTarget.getAttribute('id');
        this.props.premiumUpdate(selectPremium);
        cookie.save('premiumChoice', selectPremium, { path: '/' , maxAge: 3600 * 4  });
    }
    
    render() {
        
        let premiumNodes = this.props.giftArray.map((gift) => {
            
            let premiumFound = masterPremiumCodes[gift];
            
            return ( 
                <div className="row gift-type no-padding" key={gift}>
                    <div> 
                        <input type="radio" name="giftType" 
                          value={premiumFound.code} 
                         id={premiumFound.code}
                          onChange={this._onChange.bind(this)}/>
                    </div>
                    <div>
                        <label htmlFor={premiumFound.code}><img src={premiumFound.image} />
                        </label>
                    </div>
                    <div>
                    <label htmlFor={premiumFound.code}><h5>{premiumFound.name}</h5>
                     <p>{premiumFound.copy}</p>
                    </label>
                    </div>
                </div>
            );
        });

        return (
            <div id="premiumsChange" style={this.props.premiumShow}>
                {premiumNodes}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        giftArray : state.giftArray,
        premiumShow : state.premiumHidden,
        premium: state.premium
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        giftArrayUpdate : (newArray) => {
            dispatch(
                {
                    type: "GIFTS",
                    payload : newArray
                }
            );
        },
        premiumUpdate : (newPremium) => {
            dispatch(
                {
                    type: "CHOSEN",
                    payload : newPremium
                }
            );
        }
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GiftArray);