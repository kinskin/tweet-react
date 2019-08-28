var monkey = "hello";
var tweet = tweets[0].id
var name = tweets[1].user.name


class Text extends React.Component{
    render(){
        let userTweets = this.props.map((tweets)=>{
            return(
                <p>{tweets.text}</p>
                )
        })
        return(
            <div>
                {userTweets}
            </div>
            )
    }
}


class List extends React.Component{
    render(){
        console.log(this.props.tweets)

        let profileImage = {
            height:'120px',
            width:'120px',
            borderRadius: '100%',
            margin: '10px auto'
        }

        let userElements = this.props.tweets.map((tweet)=>{
            var userUrl = `https://twitter.com/`+tweet.user.screen_name;
            console.log(userUrl)
            return(
                <div class="card mb-3">
                    <div class="row no-gutters ">
                        <div class="col-md-3 text-center">
                            <div class = "card-body">
                                <img style={profileImage} src={tweet.user.profile_image_url} />
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="card-body">
                                <div class="card-title d-flex">
                                    <h5>{tweet.user.name}</h5>
                                    <img src="https://banner2.kisspng.com/20180803/vua/kisspng-verified-badge-symbol-computer-icons-twitter-verified-logo-twitter-sticker-by-kalfin-setiawan-5b6449b0738359.5764164215332991204732.jpg" height='20' widht='20'/>
                                    <a href={userUrl}>@{tweet.user["screen_name"]}</a>
                                </div>
                                <p class="card-text">{tweet.text}</p>
                                <p class="card-text"><small class="text-muted">{tweet.created_at}</small></p>
                            </div>
                            <div class = "d-flex">
                                <div class = 'col-4 d-flex'>
                                    <img src="https://img.icons8.com/ios-filled/20/000000/retweet.png" width='20'height='20'/>
                                    <p>{tweet.retweet_count}</p>
                                </div>
                                <div class = 'col-4 d-flex'>
                                    <img src="https://img.icons8.com/ios/20/000000/like.png" width='20'height='20'/>
                                    <p>{tweet.favorite_count}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return(
            <div class='card col-8 offset-2'>
                <div class ='card-header'>
                    <h1>{name}</h1>
                </div>
                {userElements}
            </div>
            )
    }
}

class App extends React.Component{
    render(){
        return(
            <div class = "container">

                <List tweets={tweets} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);