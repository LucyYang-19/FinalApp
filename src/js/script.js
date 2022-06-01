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
        bodyEl.style.background = '#af96af';
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
                <h1>W3LC0ME! </h1>
                <p>The g0al of this app is ̶n̶o̶t̶  to help dyslexic kids nyeem 
                    better despite that being le nom of this app. 
                    Your discretion is advised, nous sommes simply following
                    a given prompt, ua tsaug pour your understanding.</p>
            </div>
            );
        }
        }
        ReactDOM.render(
        <Card/>,
        document.getElementById('curd')
        );

        // loading
        const Loading =()=>
  <div className="loading">
    <div></div>
    <div></div>
  </div>  



class Page extends React.Component {
  state = {
    loading: true,
  };
  
  componentDidMount(){
    this.isLoading = setTimeout(()=>{this.setState({loading: false})}, 2300);
  }
  componentWillUnmount() {
     clearTimeout(this.isLoading);
  }
  
  timer = () => setTimeout(()=>{
    this.setState({loading: false})
  }, 2300);

  render() {
    const {loading} = this.state;
    return (
      loading ? (<Loading/>)
      :(<div className="content">
          <h1 class="done">CONGRATS! You've Succesfulyl Learned How to Nyeem!</h1>
      </div>)
    )
  }
}

ReactDOM.render(
  <Page/>,
  document.getElementById('root')
)
