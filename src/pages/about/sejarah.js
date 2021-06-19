import React from 'react'
import AboutLayout from '../../components/page_template/AboutLayout'
import Content from '../../components/text_helper/Content'
import Banner from "../../images/banner2.jpg"

export default function HistoryPage() {
    const title = "Sejarah, Visi, dan Misi SMAKONE"
    const content = (
        <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor nulla vel accumsan blandit. Mauris luctus sem non quam vestibulum, non placerat ipsum venenatis. Nam vitae felis et lectus porttitor sagittis. Nunc sit amet metus ornare, auctor lorem at, congue orci. Aliquam tempus tellus diam, quis viverra felis laoreet ac. Vestibulum at dolor ut arcu dictum tincidunt. Pellentesque et justo nec nibh tincidunt bibendum nec quis elit. Nullam porttitor magna semper, cursus odio quis, tincidunt purus. Aenean mattis magna in sapien rhoncus finibus. Quisque eleifend lacus sit amet mollis posuere. Maecenas efficitur eros viverra dui lacinia, viverra tristique eros semper.

Aliquam sollicitudin elementum dui, vitae dapibus neque efficitur ut. Fusce mattis libero dolor, sit amet mollis purus auctor eget. Cras justo purus, venenatis nec eros semper, pulvinar consectetur velit. Vivamus dignissim sodales lorem a eleifend. Nullam aliquet nulla vel neque auctor rutrum. Mauris ut quam condimentum, efficitur mauris sed, porta magna. Proin vitae ante quis justo porta volutpat id vitae tortor. Curabitur mattis mi in est blandit, ac ultrices turpis dictum. Suspendisse vel felis nisi. Vivamus id turpis mollis, consequat ipsum in, consequat turpis. Nullam tempor elementum nunc non facilisis. Praesent sed massa ac libero rhoncus elementum et et purus. Donec molestie, ex eu pellentesque rhoncus, erat lectus finibus risus, ut gravida odio velit blandit nunc.

Sed molestie tortor in eros pulvinar laoreet. Nulla porttitor ligula sed mollis lacinia. Nam lorem mi, pellentesque eu placerat nec, ultricies vel velit. Suspendisse pretium magna viverra velit sodales blandit. Vivamus eu justo diam. Donec eleifend efficitur diam. Maecenas id ipsum urna. Praesent at lorem rhoncus mauris faucibus iaculis nec a nulla. Pellentesque eu orci id neque efficitur sagittis. Duis ut malesuada tortor, ut tempus libero. Mauris iaculis ut ante sed volutpat. Nulla posuere pharetra lorem, id dignissim ante laoreet eu. In hac habitasse platea dictumst. Aenean non metus mollis, consectetur lorem eget, pharetra felis. Suspendisse in ullamcorper elit.

In hac habitasse platea dictumst. Nullam ut elit tincidunt, pretium lacus et, fringilla odio. Sed commodo purus sed dolor hendrerit, ac dignissim ipsum accumsan. In in posuere metus. Maecenas quis turpis velit. Duis bibendum sem sed orci porttitor, eu sodales ipsum consequat. Vestibulum aliquet semper mattis. Donec metus neque, tristique sit amet lacus non, ornare laoreet orci. Morbi molestie euismod est, ut lacinia lacus varius sed. Vestibulum dolor sapien, vestibulum sed elementum in, pulvinar eget lacus. Aliquam nec ipsum ut tellus varius pharetra vel in. (400 Word)
            </Content>
    )
    return (
        <AboutLayout 
            hero = {Banner}
            title= {title}
            content={content}/>
    )
}
