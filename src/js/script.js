 // buttons
 class App extends React.Component {
    state = {
        clicked:false
    }  

    toggleBtnHandler = () => {
        return this.setState({
        clicked:!this.state.clicked
        })
        
    }
    render() {
        const styles = ['button'];
        let text = 'BeG1n!';
        let bodyEl = document.body;
        bodyEl.style.background = '#aa97aa';
        
        if (this.state.clicked) {
        styles.push('clicked');
        text = 'sTaRt3d!';
        bodyEl.style.background = '#a590a5';
        } 
        return (
        <div className={app}>
        <button className={styles.join(' ')} onClick={this.toggleBtnHandler}>{text}</button>
        </div>
        )
    }
    }

    ReactDOM.render(<App />, document.getElementById('app'));

    // creating the cards
    
    class Card extends React.Component{
        render(){
            return(
            <div className="card">
                <h1>WELCOME! </h1>
                <p>The goal of this app is not to help dyslexic kids read 
                    better despite that being the name of this app. 
                    Your discretion is advised, we are simply following
                    a given prompt, thank you for your understanding.</p>
            </div>
            );
        }
        }
        ReactDOM.render(
        <Card/>,
        document.getElementById('curd')
        );