import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux/actions/blogActions'
import { NavLink } from 'react-router-dom'

class BlogContainer extends Component {

  componentDidMount(){
    this.props.fetchPosts()
  }

  render(){
    return(
      <div className='blog'>
        <div className='row'>
          <div className='col-sm-2' />
          <div className='col-xs-12 col-sm-8 blog-intro'>
            <p>Part of the curriculum at <a rel='noopener noreferrer' href="https://flatironschool.com" target="_blank">Flatiron School</a> requires students to write a miniumum of seven blog posts over the duration of the course. I can't say the practice has grown on me but I have come to see some importance to it. This is my attempt to improve at blogging and reinforce a good habit. Feel free to leave a comment with your thoughts and <a href="mailto: kyle@someotherkyle.com">email</a> me about any typos!</p>
          </div>
          <div className='col-sm-2' />
        </div>
        <div className='row'>
          <div className='col-sm-2' />
          <div className='col-xs-12 col-sm-4 blog-titles'>
              <ul>
                <h2>Posts:</h2>
                {this.props.blog.posts.map(post => {
                  return (
                    <div className='blog-link' key={post.id}>
                      <li>{post.created_at.slice(0,10)}:<br /></li>
                      <NavLink to={`/blog/${post.id}`}>{post.title}</NavLink>
                    </div>
                  )
                })}
              </ul>
          </div>
          <div className='col-xs-12 col-sm-4 todo'>
              <ul>
                <h2>Currently Working On:</h2>
                <li>Remove Redux where unnecessary and no longer required (this started out as a project, remember?)</li>
                <li>Animate 2048 - I think this will make the mobile controls more enjoyable as well.</li>
                <li>Expand 2048</li>
                <li>Find new project...</li>
              </ul>
              <ul className='done'>
                <h2>Completed:</h2>
                <li>Add mobile support for 2048, could add directional buttons but I'd like to learn how to respond to swipes. 2019-08-27</li>
                <li>Issue with blog refresh I need to track down. 2019-08-20</li>
                <li>Write hosting blog... 2019-08-19</li>
                <li>Move Blog over to here 2019-08-17</li>
                <li>Get the database sorted out 2019-08-16</li>
                <li>Responsive Design 2019-08-16</li>
              </ul>
            </div>
            <div className='col-sm-2' />
          </div>
            
        </div>
      )
    }
  }

  const mapStateToProps = state => {
  return ({
    blog: state.blog
  })
}

export default connect(mapStateToProps, { fetchPosts })(BlogContainer)