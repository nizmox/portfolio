class PostsController < ApplicationController

  def index
    posts = Post.all

    render :json => posts
  end

  def show
    posts = Post.find(params[:id])

    render :json => posts
  end

end