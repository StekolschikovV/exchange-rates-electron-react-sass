class Line extends React.Component {
    render() {
        return (
            <div className='line'>
                <span className="title">{this.props.dataTitle}</span>
                <div className="buy">{this.props.dataBuy}</div>
                <div className="sale">{this.props.dataSale}</div>
            </div>
        )
    }
}



class Root extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            USDBuy: 0,
            USDSale: 0,
            EURBuy: 0,
            EURSale: 0,
            RURBuy: 0,
            RURSale: 0
        }
    }

    componentDidMount() {

        var xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3', false)
        xhr.send()

        console.log(JSON.parse(xhr.responseText))
        console.log(JSON.parse(xhr.responseText)[2].buy)
        
        this.setState({
            USDBuy: JSON.parse(xhr.responseText)[2].buy,
            USDSale: JSON.parse(xhr.responseText)[2].sale,
            EURBuy: JSON.parse(xhr.responseText)[0].buy,
            EURSale: JSON.parse(xhr.responseText)[0].sale,
            RURBuy: JSON.parse(xhr.responseText)[1].buy,
            RURSale: JSON.parse(xhr.responseText)[1].sale
        })

    }

    render() {
        return (
            <div className="root-container">
                <Line dataTitle={'USD'} dataBuy={this.state.USDBuy} dataSale={this.state.USDSale} />
                <Line dataTitle={'EUR'} dataBuy={this.state.EURBuy} dataSale={this.state.EURSale} />
                <Line dataTitle={'RUR'} dataBuy={this.state.RURBuy} dataSale={this.state.RURSale} />
            </div>
        );
    }
}
ReactDOM.render(<Root />, document.getElementById('root'));