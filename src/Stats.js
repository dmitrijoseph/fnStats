import React from 'react'
import StatsCard from './StatsCard'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'

axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://api.fortnitetracker.com/v1/'
axios.defaults.headers.common['TRN-Api-Key'] = 'b617c55a-2d92-4221-b53b-bdc0721aac27'

class Stats extends React.Component {

    state = {
        name: "Ninja",
        platform: "pc",
        stats:{
            solos: {wins:'', matches:'', kd:'', winRatio:''},
            duos: {wins:'', matches:'', kd:'', winRatio:''},
            squads: {wins:'', matches:'', kd:'', winRatio:''}
        },
    }

    componentDidMount () {
        let query = ''
        if(this.props.match.url === '/'){
          query = 'Ninja'
        }
        else{
          query = this.props.match.params.id
        }
        axios.get('profile/'+this.state.platform+'/'+query)
        .then( res =>{
          //console.log(JSON.stringify(res.data.stats.p2));
          //console.log({data: {error: "Player Not Found"}})
          if(JSON.stringify({error: "Player Not Found"}) ===JSON.stringify(res.data))
          {
            console.log("caught")
            this.setState({name:"Player not found",searched:!this.state.searched})
          }
          else
          {
            this.setState({
              name: res.data.epicUserHandle,
              stats: {
              solos: {
                wins: res.data.stats.p2.top1.valueInt,
                kills: res.data.stats.p2.kills.valueInt,  
                matches: res.data.stats.p2.matches.valueInt, 
                kd: res.data.stats.p2.kd.value, 
                winRatio:res.data.stats.p2.winRatio.value
              },
              duos:{
                wins: res.data.stats.p10.top1.valueInt,
                kills: res.data.stats.p10.kills.valueInt, 
                matches: res.data.stats.p10.matches.valueInt, 
                kd: res.data.stats.p10.kd.value, 
                winRatio:res.data.stats.p10.winRatio.value
              },
              squads:{
                wins: res.data.stats.p9.top1.valueInt,
                kills: res.data.stats.p9.kills.valueInt,  
                matches: res.data.stats.p9.matches.valueInt, 
                kd: res.data.stats.p9.kd.value, 
                winRatio:res.data.stats.p9.winRatio.value
              },
            }
          })
          }
        })
        .catch(err => {
            console.log(err)
        })
      }
      
      componentDidUpdate (prevProps, prevState){
        let query = ''
        if(this.props.match.url === '/'){
          query = 'Ninja'
        }
        else{
          query = this.props.match.params.id
        }
        console.log("checking")
        console.log("this.state.name " + this.state.name)
        console.log("prevState.name ", + prevState.name)
        if(query !== prevState.name ){ 
          console.log("different state")
          console.log(this.state.name)
          console.log(prevState.name) 
          axios.get('profile/'+this.state.platform+'/'+query)
        .then( res =>{
          //console.log(JSON.stringify(res.data.stats.p2));
          //console.log({data: {error: "Player Not Found"}})
          if(JSON.stringify({error: "Player Not Found"}) ===JSON.stringify(res.data))
          {
            console.log("caught")
            this.setState({name:"Player not found",searched:!this.state.searched})
          }
          else
          {
            this.setState({
              name: res.data.epicUserHandle,
              stats: {
              solos: {
                wins: res.data.stats.p2.top1.valueInt,
                kills: res.data.stats.p2.kills.valueInt,  
                matches: res.data.stats.p2.matches.valueInt, 
                kd: res.data.stats.p2.kd.value, 
                winRatio:res.data.stats.p2.winRatio.value
              },
              duos:{
                wins: res.data.stats.p10.top1.valueInt,
                kills: res.data.stats.p10.kills.valueInt, 
                matches: res.data.stats.p10.matches.valueInt, 
                kd: res.data.stats.p10.kd.value, 
                winRatio:res.data.stats.p10.winRatio.value
              },
              squads:{
                wins: res.data.stats.p9.top1.valueInt,
                kills: res.data.stats.p9.kills.valueInt,  
                matches: res.data.stats.p9.matches.valueInt, 
                kd: res.data.stats.p9.kd.value, 
                winRatio:res.data.stats.p9.winRatio.value
              },
            }
          })
            console.log(res)
          }
          
        })
        .catch(err => {
            console.log(err)
        })
      }
    }
      

      render(){
          return(
        <div>
            <p>{this.state.name}</p>   
            <Grid container spacing={40} direction='row' alignItems='center' >
                <Grid item xs>
                  <StatsCard 
                  label={'Solos'}
                  wins={this.state.stats.solos.wins}
                  kills={this.state.stats.solos.kills}
                  kd={this.state.stats.solos.kd}
                  matches={this.state.stats.solos.matches}
                  winRatio={this.state.stats.solos.winRatio}
                  /> 
                </Grid>
                <Grid item xs>
                  <StatsCard 
                  label={'Duos'}
                  wins={this.state.stats.duos.wins}
                  kills={this.state.stats.duos.kills}
                  kd={this.state.stats.duos.kd}
                  matches={this.state.stats.duos.matches}
                  winRatio={this.state.stats.duos.winRatio}
                  />
                </Grid>
                <Grid item xs>
                  <StatsCard 
                  label={'Squads'} 
                  wins={this.state.stats.squads.wins}
                  kills={this.state.stats.squads.kills}
                  kd={this.state.stats.squads.kd}
                  matches={this.state.stats.squads.matches}
                  winRatio={this.state.stats.squads.winRatio}
                  />
                </Grid>
              </Grid>
        </div>
          )
      }

}
export default Stats