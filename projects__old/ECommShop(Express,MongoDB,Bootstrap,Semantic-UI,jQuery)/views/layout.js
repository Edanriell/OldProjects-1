module.exports = ({ content }) => {
  return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Shop</title>
        <link href="/css/main.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" integrity="sha512-c42qTSw/wPZ3/5LBzD+Bw5f7bSF2oxou6wEb+I/lqeaKV5FDIfMvvRp772y4jcJLKuGUOpbJMdg/BTl50fJYAw==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/accordion.min.css" integrity="sha512-BIyIsOFJCQKKhxrCMtXBi1RJTXmV1vuMEWCRbU/UFieuYyvGAbl03GktViTWKM39yu9Jywbec1V0cRbQ6KgMVQ==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/ad.min.css" integrity="sha512-J10yVooc7Pgm5Rjre7pm69wAwxe2Jm/h+2eAC6XCbGzozDRoOWmyx7P55uKMrmyWN5ku1YHKEeXEnJBQE6qzuQ==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/breadcrumb.min.css" integrity="sha512-mJAIm8yYYnMEUdZ3S91J+NBcSPbEEefehsfKhWpsrJFJm2mglCkhxvOspZXp0KzosZgYgAiHZ0nZRZrOvbSLdQ==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/button.min.css" integrity="sha512-OD0ScwZAE5PCg4nATXnm8pdWi0Uk0Pp2XFsFz1xbZ7xcXvapzjvcxxHPeTZKfMjvlwwl4sGOvgJghWF2GRZZDw==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/card.min.css" integrity="sha512-u5E5vOHVsB0blcZniDNfaRkTfqdgjxIgLX17YlG0vjQyos7Z7b1BXLuhHZbF2JOVRrfNNd8P6v7fw87JaFw/Rg==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/checkbox.min.css" integrity="sha512-binQUn0abXktVdo5lUPzJyj9ZRouAxqFlchlD22+y2IAivfojjNLPuC6HCZiHT5bx+cM7ZzJstL+jHhwOUtcyg==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/comment.min.css" integrity="sha512-TgSrvbVY7zMUKRWTicqLUsBAWSULRR7MlecRLKLALXsLVxF5F1p5fp4uQWJnqQ9tLqNk757j8O7xphaAU6dlsA==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/container.min.css" integrity="sha512-SXxjjKOeD8WYj3u56VSyXYd+lQOG1rBN9pf1n7uamIvyq8klAjvH6wFdDD+nX9LA9/FPsgBvSIEFNvtFE3LKoA==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/dimmer.min.css" integrity="sha512-H85EGEZQQ3VchqqRRY5U/ZYCYaCTG//aVoUvH0CMYoDUCN8+l5FN105Td0DheDCdYrtyoYcosPwO3nQ3cjDAhQ==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/divider.min.css" integrity="sha512-UfIon3gqrWjI1KDj6T2BmFN2vdmsr4dyUBFUxTVLPYHEeWIoNvH0JzZ4EHBa4CWoNhdcyYIpR2Kri7Ys835rrQ==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/dropdown.min.css" integrity="sha512-YYS7fyqDxVE/yJ1280i8KjA+nC7wAtv2u/qkulKbdMpmp8DBWX0Wj+HtILsFyvq+fouCwCyr0hasPAz1eBlvwA==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/embed.min.css" integrity="sha512-ODrbFnz6Xc6jXrsIkuqKH1U4+aL5n2VgU3IZ08jC8crSRAIhmVbIRQFYAB7CNoOcOU4j/gKM8MldSzyNkGL+ow==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/feed.min.css" integrity="sha512-+lLfAV/THEeuUuFU6/mDKBpASZ+X9w1tK8zq//YMn/L8M4TGXyWjZwQligBkvnpsaGtKXjS/p8JZc6UgrtvWww==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/flag.min.css" integrity="sha512-CIK221b8gLR7nRSPV9/ZXbBh1zVkzoopwv4GzcGLntQqIwxmSNvrxNO0Rvu1qg1OIDJMRP6dh3npdVNVYmFKPg==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/form.min.css" integrity="sha512-GqdyivmcmveCy9pRf2yTD/TPYXVmbPFDojvy15i3xuLLy9nkgNhDRMk6+Dt/uYDdnItFUFF7WqW7GoGv+gPX+A==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/grid.min.css" integrity="sha512-RtktBL0Hhw9K2e2rGLZGadK8cF6Q0wKxRUkfh4pJszwnarmh3GbqHCiLm3UZFA1dRiFqtPkVrcby0hXWsqoDNA==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/grid.min.css" integrity="sha512-RtktBL0Hhw9K2e2rGLZGadK8cF6Q0wKxRUkfh4pJszwnarmh3GbqHCiLm3UZFA1dRiFqtPkVrcby0hXWsqoDNA==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/header.min.css" integrity="sha512-W7HgFS8NHLM8mfDtKDT7OBPvZORscUOJ6O9N0ejss8UdzlJttcZHCs9KZFjlUG6s+eIAnwApsSmrBSqo7aAwag==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/icon.min.css" integrity="sha512-8Tb+T7SKUFQWOPIQCaLDWWe1K/SY8hvHl7brOH8Nz5z1VT8fnf8B+9neoUzmFY3OzkWMMs3OjrwZALgB1oXFBg==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/image.min.css" integrity="sha512-VAAe94jjgwCEfNCbNa86pOgmSTnRQ1+jcZBtaIlqeD+xFxvphIGL0eKYCOKMODWOiEa1rNW7vSS4JkEeizVsgA==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/input.min.css" integrity="sha512-5i24U/IyvjscOlHec06pTtT16Oq70uKtnjhrZ2oez7k/qBVOdpNHPK2+SVkuxni95v1x5VGOfXYQZxm4oZcHdQ==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/item.min.css" integrity="sha512-FegoQ4GicaEtaxCERXNNFN0eloN0wsebNJ8E0kwIJSKBGgfNWFhO0oQhzVPywJt19SwiF4eN/CvDvIKhgIyuhw==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/label.min.css" integrity="sha512-bLGTFSFKewLG/ltHL52mMtuviUCuHlohn0410iUawDPbjvAONDt0yZ6vLkXfiFOIS9LxPqknEp2K76gBaMq9Bg==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/list.min.css" integrity="sha512-EdCYZ3yRjGGv6xsLGcgq3q3+ednD4FKKsS8b2R7680HmDJGU7UmzPUZANqwGn/ATw1nUF/vWutR4JqEUTfbadg==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/loader.min.css" integrity="sha512-+6VqtNJxRmuo2S1AnpgaP6T2CtH5a9aCX2mBIl58uE5DMtxxT9O6JNt2MQvIJAD1CGgJ98ERIKhGJkcX1OArVg==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/menu.min.css" integrity="sha512-ox96Q1iqhM5TvdY4gVbz6FXoDwsR/Q8jq15kWReQNefC+uUGCv+pkMbLOtr176K3+bfrQQv6gTDAvhL1PUw2YQ==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/message.min.css" integrity="sha512-y8REcSkaqTny0hsg2cT9v0/GG14v0XGNWEbEYeFtxeimWgcQXs6sJ6CJc55MM2MAbdri1f0DiDmVkFJvcAtVnQ==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/modal.min.css" integrity="sha512-CPLGe+O/BzgzHJKpdBXUuewmlxhlEfQ00zuYg1vcGCjOo88mqMeO1qa8q397ifxm18D12Go8OF7A42CjOKEl/g==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/nag.min.css" integrity="sha512-ONC2fyscW/J1lsuNDY4HCPiFdPBPHEYXhPKl5eN1kKhfSkvCGtHsTSL53j34R/e3g1L3YW9FgHAkPk8YcJj8zw==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/placeholder.min.css" integrity="sha512-NJ9YPRrGGZFoIO+SJ+aJ9TOXgEN2de5NFhlG1rAcIL/pc5Py5qE4HZUIlGUt5nP59KFTIh5Cxy6OhaYESeIWFw==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/popup.min.css" integrity="sha512-m4tALNp+ACgr9cb6by14CjJgmVGQezVx5pefE9SELVrHhfLDSjo/1kFMTLwv9n2Oh152k6xnWIxDae+btSTv6w==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/progress.min.css" integrity="sha512-6I1aA3gZvj26Zhs+6AodMBFBQlQzixuqGIt3FS+LrV/+E5mepzifvf1w7skWCYoJm1uuK0lpZwH/8tp6FpflTw==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/rail.min.css" integrity="sha512-jvY76AdOzvetjkVAlaCIEWxBPg6T1SFHE1Qso9XZ2aBbsdUDDcRcIDWkYbE9uvZf1vRzZadDywnTF52XqcSoJw==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/rating.min.css" integrity="sha512-RFEUlwT70pTUPWqm2Uv8cpqeLisUAM7YWG/LIrXcZo7F0zgvp3TbViqX6xQz0Oou++N9AcwpogmEf8sDuN/OoQ==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/reset.min.css" integrity="sha512-Hku6E1/1Cuu0fOfOzEVBgXmElwbpIvTkO8sxWBcx9rGR4rmhb9o6VX+1kDWsBimhphTFzDnloLQEc4Ijpr7dNA==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/reveal.min.css" integrity="sha512-J7HUp0aRSNO7X9LXJonX3buuWMpCrytLGslkoFxdpZGiX3Vd2bm6ZZz2LZQwg4D1E+xD1w5WDFBbIFazYi8uaA==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/search.min.css" integrity="sha512-tHoIJz9M5ePPB6uuGC4AKP1U6KgjF1V2UK9jR/DKH2eEKVhIV0N6KpsAMOIMLZVvOWuby25zd339CQLcVRev2g==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/segment.min.css" integrity="sha512-heuTVGo9s2Q6N9wruuzr4S3GCZWhVQuKpSM5hMNUFMAyxTvUDU3gme8NaVtgfET6rtnh8Eaet16nj7ihVSlI5g==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/shape.min.css" integrity="sha512-4kCOQrMTOE2lTdB+NeMEbfOr+KvqrZ1P0S8h1XDWdQT2JvKiu9jppj09pwccvOJgf+N12sszWd9ixWcsiSpssQ==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/sidebar.min.css" integrity="sha512-l74DvoQfunHVU2XU78fkSoyYJ6k6FzujNwWB5c3/U5AplWV6HnuyCfj4uNSEqFvd7i1nBvhUQ2Pr3e6JfkCPOA==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/site.min.css" integrity="sha512-5yxpdenKx5qAR4FJvFjFgtGmpNriZ0Nak38uA3KPSuUFfy8iYi8GkjgXxxfnowH8w81BkIcfBG+4QYngf2FPRw==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/statistic.min.css" integrity="sha512-7IFX/ZtMoeSQGjq0O3+9Ku9p3FgOZhHHf1NpbCO9O3hOlNxEb3Wjj8CoqHoDqq/X2pvGryE7aGVvI9+pb2cg7g==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/step.min.css" integrity="sha512-plpnHd+nWS23evZzGagVuED0DhyHYmtC3AOQt/NT5GzAne2RkTgT+8qFDJpRP7g3cKVs+8ud7kp7VmY8ARZj7A==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/sticky.min.css" integrity="sha512-zF2HEUhQSw0Cb7RtcIc9qx8SKuAvNl8wzA542h55r+COkQ/xBkkcMvqdzQ9NApKQxiluCRmmjFAs5oDlTPsOOw==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/tab.min.css" integrity="sha512-NxWghIwNoV7V1IAHt4HwVnmsG/FuuViHaXFP0tsZS0D9snWm4SLGSdfB5XogpAWYXabp2t+XY9L184PQg2IuEA==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/table.min.css" integrity="sha512-NtvxKmBWfr6sEZ3y/qV4DTXPEXpP/VZZV5BEaCFxUukf7/cyktgYpfsxs2ERvisbDXfnLJfswd2DYEj0h+qAFA==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/transition.min.css" integrity="sha512-5StPzJo8hFyTvXfJ31FMB37EXRMVeUg+J3yvUNOJcL83MEMr7VrhZSNsoL3GDmUDBGBBhoTjnJx0Ql7cH9LY7g==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/video.min.css" integrity="sha512-kVJeoeJ0q5TVbGgwyIzTb0KKqGbzGZ8JIBGhqW7YjJx1aZSF6KzK4jzWfz4MK4MtZKAZa31L8H0oY+HrnB5usQ==" crossorigin="anonymous" />
      </head>
      <body>
        <header>
          <nav class="navbar navbar-top">
            <div class="ui fixed inverted menu">
              <div class="ui container">
                <a href="/" class="header item">
                <i class="fas fa-shopping-bag"></i>
                &nbsp EComm Shop
                </a>
                <a href="#" class="item"><i class="fa fa-phone"></i>&nbsp +1 555 987 6543</a>
                <a href="#" class="item"><i class="fa fa-envelope"></i>&nbsp shop@myshop.com</a>
                <div class="right menu">
                  <a href="/" class="item"><i class="fa fa-star"></i>&nbsp Products</a>
                  <a href="/cart" class="item"><i class="fa fa-shopping-cart"></i>&nbsp Cart</a>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div class="ui container">
          ${content}
        </div>
        <footer>
          <div class="ui inverted vertical footer segment">
            <div class="ui container">
              <div class="ui stackable inverted divided equal height stackable grid">
                <div class="three wide column">
                  <div class="ui inverted link list">
                    <a href="/" class="item">Home</a>
                    <a href="/admin/products" class="item">Admin Panel</a>
                    <a href="/admin/products/new" class="item">Add New Product</a>
                  </div>
                </div>
                <div class="three wide column">
                  <h4 class="ui inverted header">Follow us!</h4>
                  <div class="ui inverted link list">
                    <a href="#" class="item"><i class="fab fa-facebook">&nbsp Facebook</i></a>
                    <a href="#" class="item"><i class="fab fa-twitter">&nbsp Twitter</i></a>
                    <a href="#" class="item"><i class="fab fa-linkedin">&nbsp LinkedIn</i></a>
                    <a href="#" class="item"><i class="fab fa-dribbble">&nbsp Dribbble</i></a>
                    <a href="#" class="item"><i class="fab fa-google-plus">&nbsp Google+</i></a>
                  </div>
                </div>
                <div class="seven wide column">
                  <h4 class="ui inverted header">EComm Shop</h4>
                  <p>*Free of charge from all network providers. Charges may apply when calling from abroad.</p>
                  <p>**All prices incl. VAT.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js" integrity="sha512-dqw6X88iGgZlTsONxZK9ePmJEFrmHwpuMrsUChjAw1mRUhUITE5QU9pkcSox+ynfLhL15Sv2al5A0LVyDCmtUw==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/accordion.min.js" integrity="sha512-zy/iMxvOAQO5VsB1/enNUXKWxoSBFAyjXwwwIU+sMYf2+iOnqoW2EokpAnnTwue6/Kcv3w7qyALGbppj3mOVgA==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/api.min.js" integrity="sha512-Xx3WEY47isjKM7q4XwPXnJ/YGuMbA4Iua+rO3+/cU8/p69YqJNb1NORkJtbQWJyE9ek1i6jrxn/e6RpB6GXf7w==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/checkbox.min.js" integrity="sha512-xHPfIQ31nhgadqKFR79QIE1P+8QkEJRKYhbO+tNThUtBU1sOC55A29sLgjFxyekM7DUVJqapmIOx0J+G2VH8RQ==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/dimmer.min.js" integrity="sha512-ithjIigXZtEw3GWaeoFNMxdmkK0xKFLnew6JsvUkRVcjHkRNODGMaZPJwx6p0bzCLDYXBShgf3K3AqZdsX7sow==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/dropdown.min.js" integrity="sha512-8F/2JIwyPohlMVdqCmXt6A6YQ9X7MK1jHlwBJv2YeZndPs021083S2Z/mu7WZ5g0iTlGDYqelA9gQXGh1F0tUw==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/embed.min.js" integrity="sha512-GsIS09bawLk+14iMqK6XSmESD/fZPWFOSlJGptbhVkIAijj9yRWlejlMD4875mGbkutGfy5RNq2n6wAuDdh5RQ==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/form.min.js" integrity="sha512-VM6WNFlVLFwKXphssthAXJpG3cKWUK3G4edfsydLITA4iSeZmvJ+2gKBrR6qYkt/3A/I8hDHnAuIBz7xtfVtOg==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/modal.min.js" integrity="sha512-aAW/TaSuYfyjTcMsaYP67Dwe0vI5d7ej9X7NJBPkhafB+D5kx57flRNo8+tOXWA0Gcq0MBmhPatrvn1YwvH9gQ==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/nag.min.js" integrity="sha512-8i/wB39NzDgizgNfh2ED0ZW3P1rmThlhvZE87jlCqZPHbMr379B2iQ8tRu9pOezf+sP1dN/BjCXmO8/5sQjXHQ==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/popup.min.js" integrity="sha512-784FtIkKrm/QsfPOTifpdvdvzE0y3/c4OSZhu91VxdGMuW7/y7gr8TiYFjuebfK9qE8HgYxFVhMR3nUu+LFbjg==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/progress.min.js" integrity="sha512-GBfu+i9kUg9WB2SXX3iYlIERWQCV5CfIy7C4SLyhGmd8Jn4KvuNy9gYECtpinpGRZhm86dmGTx84jZ5pjS2pHg==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/rating.min.js" integrity="sha512-GKPaQJKsw7I5CTRr27RvbXXpv/kulDkVilCQmqQen2doK07UxhEQLnSe2ozB/8yTJ8x6ofF63FXfIpYnETz9Jw==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/search.min.js" integrity="sha512-cYY5gAyJxIK4sLwDYueWWJH9rEdgBNvRaEIGJ6+dQ5vzfoTqHAtUDYrG2rdZTGqACvPS9QRrnzqqRGfrgxO7ug==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/shape.min.js" integrity="sha512-5VWsnaFM3raOn+S5nDHgsQHZaK4soyGRwKIe5LIPP3S/WJ510JmUldSTJ57QW0cRDAhvNyKs0trYnWGgqIYxiQ==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/sidebar.min.js" integrity="sha512-1tmZBYaLOUohS48wc5egam1rTAIi71yvIpxj0FXHo6FskhgMF3LyCAdLvCFYi4e/L0GfH6BFtDBFD2wVa645Dg==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/site.min.js" integrity="sha512-QopOpigIapIapWckrGgzB0tNEIGBVSKWhN9Bh4vNl8JRDHvVHvbJoFlg/bSGAyF/vdcLT0RcL6w8e8l5M8nvRg==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/sticky.min.js" integrity="sha512-sWpXObBFGM42aj1IMnpgU4aUY5K3MYAmvR2QeVAo4zorR/IrNxIW1E9sAp95AKZ9TUGuxItlzCxZdLchz/rkoA==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/tab.min.js" integrity="sha512-XKGavlXNr1OAZcYLtNBQA4oyuagTLY6t+bhOtR9PZNxSdFwGN+UX44izGw9+eDOnBHbf9sZJKEZ1OdVxNeXvaA==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/transition.min.js" integrity="sha512-MCuLP92THkMwq8xkT2cQg5YpF30l3qzJuBRf/KsbQP1czFkRYkr2dSkCHmdJETqVmvIq5Y4AOVE//Su+cH+8QA==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/video.min.js" integrity="sha512-ebgtEARHrY0ZrnNu7UG+/AyZo7Zl4RZOE/TIi4AqnPXwk/5MLKhHiSemsrheRV7ZbeLW1m2TqBzdSyEpjJcSLA==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/visibility.min.js" integrity="sha512-pcX/bEmbHWxW0fvRU70A6UqVXm0Z1tBJTwSLHE3hE8AAhG4hDL8R19Oho4DmdCNNYrgDSyHhH+ALNg5d5SFxxw==" crossorigin="anonymous"></script>
        <script src="./script.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js" integrity="sha512-lOtDAY9KMT1WH9Fx6JSuZLHxjC8wmIBxsNFL6gJPaG7sLIVoSO9yCraWOwqLLX+txsOw0h2cHvcUJlJPvMlotw==" crossorigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/e9ca4c3f97.js" crossorigin="anonymous"></script>
      </body>
    </html>
  `;
};
