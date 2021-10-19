module ApplicationHelper

  def current_user
    @current_user ||= User.find(session[:user_id])
  end

  def default_meta_tags
    {
      site: 'マッチングアプリマスター',
      title: 'マッチングアプリマスター',
      reverse: true,
      separator: '|',
      description: 'マッチングアプリ完全攻略サービス',
      keywords: 'マッチングアプリマスター',
      canonical: request.original_url,
      noindex: ! Rails.env.production?,
      icon: [
        { href: image_url('マッチングアプリマスター.jpg') }
      ],
      og: {
        site_name: 'マッチングアプリマスター',
        title: 'マッチングアプリマスター',
        description: 'マッチングアプリ完全攻略サービス', 
        type: 'website',
        url: request.original_url,
        image: image_url('マッチングアプリマスター.jpg'),
        locale: 'ja_JP',
      }
    }
  end
end
