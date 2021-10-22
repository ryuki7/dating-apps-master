module ApplicationHelper

  def current_user
    @current_user ||= User.find(session[:user_id])
  end

  def default_meta_tags
    {
      title: 'マッチングアプリマスター | 〜モテ男への道〜',
      reverse: true,
      description: 'マッチングアプリ完全攻略サービス',
      keywords: 'マッチングアプリ, おすすめ, コツ, 攻略, プロフィール, 付き合う, デート, ホテル',
      icon: [
        { href: image_url('マッチングアプリマスター.jpg') }
      ],
      og: {
        title: 'マッチングアプリマスター | 〜モテ男への道〜',
        description: 'マッチングアプリ完全攻略サービス', 
        type: 'website',
        image: image_url('マッチングアプリマスター.jpg'),
        locale: 'ja_JP',
      }
    }
  end
end
