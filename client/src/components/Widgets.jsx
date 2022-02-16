import React from 'react'

const Widgets = () => {
  return (
    <div className="widgets">
      <iframe 
        src="https://www.facebook.com/anhminh.nguyenle.291/?viewas=100000686899395&show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_transition=0&show_community_review_changes=0" 
        width="340"
        height="100%"
        frameBorder="0"
        scrolling='no'
        style={{
          border: "none",
          overflow: "hidden"
        }}
        allowtransparency='true'
        allow='encrypted-media'
      >
      </iframe>
    </div>
  )
}

export default Widgets