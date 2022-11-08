import React from 'react'
import Post from './Post'
import ThemeButton from './ThemeButton'

const MainContent = () => {
  return (
    <main>
      <div className="menu">
        <h3>Home</h3>
        <ThemeButton />
      </div>

      <Post
        profilePhoto={'https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg'}
        name={'Github'}
        username={'github'}
        date={'10h'}
        like={'100K'}
        comments={'20K'}
        rt={'11K'}
      >
        <span>More features coming soon at Github Universe 2022</span>
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" />
      </Post>

      <Post
        profilePhoto={'https://img.utdstc.com/icon/fe0/ab6/fe0ab67fa0de2b2681602db5708a076f50dd21106e0c2d38b9661875a37e235e:200'}
        name={'Facebook'}
        username={'facebook'}
        date={'10h'}
        like={'100K'}
        comments={'20K'}
        rt={'11K'}
      >
        <img src="http://www.fastweb.it/var/storage_feeds/CMS/articoli/4a7/4a72abcbdf1a17bcb4776000c8ffdf55/640x360.jpg" />
      </Post>

      <Post
        profilePhoto={'https://www.jovenesprogramadores.cl/wp-content/uploads/2020/07/php.png'}
        name={'PHP Community'}
        username={'php'}
        date={'1 day ago'}
        like={'100K'}
        comments={'20K'}
        rt={'11K'}
      >
        <img src="https://qph.cf2.quoracdn.net/main-qimg-a9c56372273886c15ea594e86454ece7-pjlq" />
      </Post>

      <Post
        profilePhoto={'https://www.jovenesprogramadores.cl/wp-content/uploads/2020/07/php.png'}
        name={'python'}
        username={'php'}
        date={'1 day ago'}
        like={'100K'}
        comments={'20K'}
        rt={'11K'}
      >
        <span>Hey everyone!</span>
        <img src="https://images.unsplash.com/photo-1578434133662-4042ddd6a523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&w=1000&q=80" />
      </Post>

      <Post
        profilePhoto={'https://miro.medium.com/max/400/1*onZhQJU7A3ab6V1sHfMRkQ.jpeg'}
        name={'Bootstrap'}
        username={'bootstrap'}
        date={'1h'}
        like={'100K'}
        comments={'20K'}
        rt={'11K'}
      >
        <span>Bootstrap v7 is here!</span>
        <img src="https://blog.getbootstrap.com/assets/img/2020/06/v5-new-logo.png" />
      </Post>

      <Post
        profilePhoto={'https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png'}
        name={'TikTok'}
        username={'tiktok'}
        date={'1h'}
        like={'100K'}
        comments={'20K'}
        rt={'11K'}
      >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFb-ToUasDLCFFbuY2-4ou_BJyCcSMdPWDSg&usqp=CAU" />
      </Post>

      <Post
        profilePhoto={'https://graffica.info/wp-content/uploads/2021/10/Captura-de-pantalla-2021-10-29-a-las-11.18.26-min.jpg'}
        name={'Meta'}
        username={'meta'}
        date={'1h'}
        like={'100K'}
        comments={'20K'}
        rt={'11K'}
      >
        <span>New offices!</span>
        <img src="https://www.cronista.com/files/image/407/407747/619cef29dbd63.jpg" />
      </Post>

      <Post
        profilePhoto={'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/10/26/16668084098290.jpg'}
        name={'Elon Musk'}
        username={'elonmusk'}
        date={'1h'}
        like={'100K'}
        comments={'20K'}
        rt={'11K'}
      >
        <span>she was suspended for impersonating a comedian!</span>
        <img src="https://static.foxnews.com/foxnews.com/content/uploads/2022/07/elon_musk_twitter.png" />
      </Post>
    </main>
  )
}

export default MainContent