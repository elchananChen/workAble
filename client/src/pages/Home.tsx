import BusinessCard from "@/components/BusinessCard";
import { Outlet } from "react-router-dom";

function Home() {
  const data = {
    businessName: "build For You",
    bussinesEmail: "baba@baba.com",
    businessLocation: "meron rabi shemon 12",
    whyUsArray: [
      {
        title: "Service",
        description: "High-quality construction with precision and care.",
      },
      {
        title: "Reliability",
        description: "On-time project delivery with no compromises.",
      },
      {
        title: "Customer Satisfaction",
        description: "Tailored solutions to meet your unique needs.",
      },
    ],

    scrollImages: [
      {
        description: "Ornella Binni",
        url: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
      },
      {
        description: "Tom Byrom",
        url: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
      },
      {
        description: "Vladimir Malyavko",
        url: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
      },
      {
        description: "working with wood!",
        url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhMVFRUXGBcXGBgXFxkYHRgXHxUXFxcWFxoYHSggGh0lHRcXITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGyslHSUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xABEEAABAwICBggEAwUHAwUAAAABAAIRAyEEMQUSQVFhcQYTIoGRobHBMkLR8CNS4RQVYnKSM4KissLS8QdDUxZjg6Pi/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIxEAAgICAgICAwEAAAAAAAAAAAECEQMSITETQVFhBCJxMv/aAAwDAQACEQMRAD8AAqYAsuy4/L9D42PknU2hw3EZ7weKtKYkJlbCtfBydlIz/XkV47PTTK+C3kiabpURJpyKgt+YfCef5V3q9oUlnalGUKJYZ2bfqjaRi3knVaUhCdB2WXRfpC2jVAnsmx2C/wBfovVqVUPaHNMg3C8Gw9BodBHL6L0foVprKi82+U8fu3hxXb+Plp0+jlz4vaNqnJAJLuOISSSSAEupJIAS6kkgBLi6uIAS4upBACCRXVxIZwhJdXEANKFpWqvG8Nd6tP8AlCLKErWqMO8Ob32cP8rvFSxoIXF1NQI4Uwpzk0pDGlNKeU0pDIymFSFMKQyIhJPK4gDy7DuuptT1UTWwVOV5Z6AqjQ5t9sj2QGHw7i3Wb/T9DsKstaAbfcIbBOseZH34IGgaxO520HNSsOwooUBUEkXGRGYQ9Sm5lnXb+b67lNFWA4qlMp2DxlRrhAEjaiqlPdkhns2jMKoyoGrPW+jOlxiKQn425j3+/dXC8d0D0gNCqCAc4dy5BeuYPEtqsa9uRHhvC9LBl2VPs8/Nj1d+iZJILq6DA4ursJJAKEoXUkDOJFdSQA0pQupIASaulNSA6U1dK4gDiGxtg135Xt8zqnycUShNK0tejUbJB1TBBIMgSLjkpfQ0TlJMpmWtIM2Bk8tqcCgDhTSU4qN7Z74+/VJjESmkppad+3yCqdOacZhg3Xu5xsBu2SchsSsZY0cSx86jg7VMGDMHcUFjdL0aTS572gAwZO3htPJeXaU0m+oHyH06TnuqOaCdVxJ26tyNwkDmgBVZGsyHnZJgTGwZnyWcp8cFqHzwbqr07ZJ1adVw2ENaJ7nOnxSWFFPFOuGmD/KPIrqz3ka6RL2qY7l1tQHOyke0FR9V4kriOlE8TIhQYIapeNoP6+6LoC3ihgIqO4gH78EwJsPIcfTvUjzCTmjWJScYQAMKMk6kCwMbP0yUNSlNog7kbTjXHFvof1RT6LXWPd6JUVZnrtM+K2PQrpC1r+pc7suy4H7+7KixGFgwb2kEZxxQlNrqTgWiQTs37CrxzcWTOCkj2mEgqLotpY1aYY8Q9o8RvV8vVjJSVo8yUdXTEkuKPEvIY4jMNJHMCQqESyhMRpOkzN19wv6LIYzT7xTGs89qe/hwVNpHpEC0NaAOO080hG1q9KGDKm53eB6qTR/SfD1XCnrGm85NqDVn+UyWu5AryLEaUJ2yo36Tkdrts2tNyOLTmpcikj3qUpWF6A9JzUIwtV5cY1qLzm9ozY47XN8xyW4lNOwao7KauriBCXF0psoASa69l0lNJSGDaNP4TOA1f6ez7KZ1lVtxop69MEa+tVcAQT2ZDif/ALAg2dJaYJa9zS7KAI8SdqjZIqmaBQYvFMptL6jmsaNrjCo9KdIHMpOcxoBEdpwcQASL7JzWJrVq2Id1hl3/ALlSzWj+BuQ7lEsiXRpDE3yzS6X6Z2Iw7QB/5Kggf3WZnvjksTj8e+o/W7VZ5+Z14ysALCLbuSNGjmfFUJqHfk3fbh4qZwgQAGjcAANu0jhsCxcm+zZJR6KJ2ArPEvMe3hYeKOw3UMdqtpyQOyS7WE3kkxA58YU9Vs3jfsniLuQjWkVARv2XzHhnCaFLkNdWd/F3BoHdIlJO1G7dWeJJSSENa/YpBUhM6sgynObuXIdQSKwiFBUd+KP5fr9U1lO9hdKuCHscd8eh9kBQRWEkO7inUoInwSxExG/6KKmYkbbQgB5f22d48p/0o0P9/qq7EmNQ7nt85b7o8UxJQBJUPbbycPQj0Sr4YRrC20jYfomPf2mGfmA8iEa9t+Bt4hMXRtsDo+jT7VNgBIzkkweZRkoTRdTWo0nb2MPfqiUUvWjVcHmSu+TsqPEV2saXuMNAkngnrEf9T9NdXhzQpu/EdBPAAh0czAtu5olKkOMXJ0jJ9KGmm97R8IJc3+U3EencsbitJ7lyp0pcR1dU5b9gyIB2cjZAY0MHaabOy3AcTvWcXKqkXKKXKJm44lSsxaqNdT0ihiRf6H0i6k9tRpvTc2q3uPabyIt3r6Ka6QCMiJXzv0b0acRWbSb88t5D5j3CSvoNrwBAFhZEGEkTSuSgcVjS3YPFDnSLuHgU3kSEoNlqSmkqndpB35kNWx53nxU+VFLGy9dUjOyDxOlqTAZdMbr+eSyuJ0s50hkOjbrHVnwgqra0vfNQyYnVbkc+608TdS8paxfJYU8W1+LL2wGv1xPOmZJPNgVD+73Q7XdqDYSQZPjvVk9xBhsNEbBc95v4QontHft39/8Aws/Iy1BEo0mXDqdUOAaLnaRGYI3woa7ifi3GP02Zbh3qKk2Kg4g+x9kRUH3/AMe5SsdUDsyB3gevjsTdXLZlw3bTJ2p9P4RyHod31UdKrFiQHbgQN3M7EhjDTytu2TsIzchHtsTu6qbzA1rzHLLmjqg4eR/MdrlE0nVqCNaWjaMxrRlln5JrsT6HFh/j7g0eRSSLAb2P91x89qSYhESuMJ28FxlvJKYN8iuM6RwBBmUzHPJaODh6Ee6kedqHxx7Pgf8AFKBhwEi2ajp0e1s3rtB1h3el1IM5QMgxjew47rjuOt7Ixr+0oMRTlj2/mDh5LmClzWO3tB8kATuPYPAg+YR9asGt1nEAC5JsAhMNhX1ZY0X8hzKtcN0cpB4qYh3XvHwtcPwqd7FtPJzsu06TuhaY4bfwznKh2jumdJtFjabH1A0Rrhp6uJMQ+INo2qzw/SF1Ruv2WNib3kbxJFlK+pKynSPR0gupHUN3EfK422ZA3z8V1+SuDm0vkttK9L3UmyXUoIMOAPiDMeS88xrnYh/W1HSM+ab+3Ag0XjPIm5Y/IEHYDkQFnG41zSacmB9x4ypyWzo/Hq6D8VgadUxqBz7wdbUgASSXAieRMWWZqU3UCWlutSJvAuOMD7Kt6Vc3EqQrOM5Rf0b5MMZlWKYcNZpDmnIjYpcNQLssk39gfTeXUwSw/E0NJg77ZK60TTLaoDhtFiPULZyTXBwPG4upGl6HYgYMmp1Yc4tgEn4ZztvNgtJU6Z1jkxg/un/d7KnwT2vBJGT3NsNWYO4jzCKdTZsZ5lZOUlwaKMfaFiOk+IdtA/us/wBqtNHadp1G/iEU3DMHI8W/RUdVojIZ+6EqUkrfseq9GqGk2PB6s60GJP0zPkgKjiXdpxdMwIAaDnIbtPOVW6EdBcOE+B/VWRFxzCLCjuxRNEPHEEe/siWtt5KJ4ALTxHnb3QuwfR1/xdx9QmuZ9/cqWo247/vyRWFoMd8WtO4W8yCnVsV0U7/7RvMj/CURVjb9+M+isKrKLTPVgkXl73HyBAVfW6V02GGatvyUx6kX7iqUWS5DKGFc9sBjnZ5NJ4clMdD1tlMtHEtZv5LjdOGqLVHHeJIjuRJNpKNULZlXicM5syBbdB275UAq6rartaIpVYBI+I2bYbZPmrLHXYRwVHiri/H8u5HTGuUFMdIBnMA/GRsSUeCP4bM/hG7dCSLEdYDfkuuG3YlRScSLLkOolDZCFxYkO2WPopGVCLKN75kQO9IZLhXywFTCyE0eZYB3eFvZFzI5JDOkyZ+8oT+j+Fe9rWiwb2S7YNVxHjwUuCwLqh3NGZ+nFXHWtYwNYA1tzA4m55nNaQhfZEpV0ENxTKUtZYAXO87yoW4yQXcVm8biDrPExlfuj2TsHUa8az39hshjMtaM3O79i2sjU0P7YAM0Pja4Iic1R18dMxkhnY0kxu+/qocilEzPSgGnXkfMJB3nb7eKpdO4ltOq5zgRfxkB3v5q96VVJaw7Q77Co6eCbigXVp1W2BmLBv0haxacU2Typ0uysOmAdVzGmS6L7crCOa0+G0eajg0nV1tu4ZSIWUw9FtTENDBqUmG05Wyk8TdarRdZzT2jrXsRlHA7f0RlikuCseSTbTNvhsO2m0MYIAAHPiTtPFUelOrDxH9oNvfI5xKt9F1+spN/Nt47R338lntOWqTx8iPRRFi155JNH6SfS+I60m4OU8Ny0dGsHDWCxLnyRH3xWt0Yfwmzx9SgJLiyWuc0O5S4pwAJ4Krfj2fnHdJ9E6bITosNGPisOMjyV3WCzOHqulr2tc4SMmmc9y09YIodjwc/HyUOIFvAp1M2Hh4H6FPpUdc6uzM7LbUexejtYXA3H2IHopcK4awy2j5doPeqwYkvqk/LFh/8hjyKsqNjtzG/f371S7E+im6WVtWGzAfny2j0WaZqAyJLY2rV9LsGXhpb8TTMbxtH3uWPrO1Q2LECDO/PJbxowkE4OsRWkCAYEcIWxLHESHwIFoB8yszo2k+o4VHNDQPM8lp6B7IUyfI0Me3swTNszF/ZUTj7fl5K/KoaliRz/LvlZs0iOwThqDv2DeUlU16pa4gb+HNJPUm2XFOonkWg/e5DMibJ+tK4zsOvdGaRvcLjhrZ7l1lgkM7oyDrDc53rPui6PaJsQG3dbZw3ncq7C1AKj5IHwm/ER/pVxUrwHU27HQTlrEAH3WkIbEylRM7pHRDNRgIgRBzniqbGaVJEsMgC42ju2hB6UwhqHWGe7IjwVJWqEfFNtuRWpKSCsVj3uIjMwPPJHY6rqRRbsgH1gxxM96psFUJqsOYadc8m3vzsO9GUnFzi91ySSpl0Ug1z9UABD9d5+s2TK1QlC13HUncR6rMsrdP4wPcGT8I1nHcTs8vNGUdGxhwap6ulGs+PidtDGDfkJVpoPofNQ1qxDg95cxm8z2ZJsYABgZRda1+jaNM69Yl7xOq0T2bR2QLn+Yx3Cy1c4pJIwptt+zzjB6FdVdrvp9VTMajBnHyzuG0k3JO5XVLowGtllR2WRFp9lsmUWGCKDjlmD3Z81b0MO2k0uexrXflEdnnGbuHjwl5dv4NR1PNqBdSOrcEI8YunUMPA1ojW29+w5LRaW0a/ECXFjXD4SJJjcTFwsZjcG+k8h4g+R4grK/Z0RakqZZYjR9RtMPbSBY5wYXt1Yk2GtF2id44LQUNDkAAvaBHP6Ks6K6bNF2q4yx1nDMeG0LZ4rRTHDraQbq5kEns8RvC0ttcGE1q6fRSfuyjMPqSDyjvurLDaGogS098Af5V0YRgiXsng0+sKJ7qWxzyRkQAB/mk+SFJ1yS0vQY6k5vwtDo3EeHbgpYqk1t3U7b9W3ihRjzHZk87+n1RWDxD3EarHg7CMu5OMkxOLRFhaVF86rLA8ReM80qlWhS+IsZr2u434CSjKeI1p+F2+Wg+MiUypqHNrhs7Lj6OlXZJWUtE4fWBY4ktmwqA5wbgg7gihgWGfi3Zj6IrDMY0Q1wufnZ7tPsg34Str/hU2vBMucKjTAtMNscgqiiZSofi8C1+ZcO4H3QT9CMN5BO9zY9JU2kqrqY+Isdxa7PvbCrG6WqtHxteeNOB5P9knKn2NRsK/dzhl1f8Ai92pzMDUj5f6m+5VM3pafnocJa72I91b4PSlOo3WAc3nHsU2pIXDGHBVp+ERwufIqoxWj6wcfw6kSflMXG+FouvYfm8ZTRUbse3xCTbGkY2rgnkyWOm2zhySW2D3/mXUrGYemP1T6hQvXHYE9tfWMASeF/Rc9HSEsfv2JlauGguOQHjwHNSvwbixurZx1i4OtFyAIF4iDPHgqrpBQNPDvLtYGLwARqxJIgzxm2RVxhbSIlOk2UGksa3F0yGl1LW1S2Y7UEmHAGI3X4rQ6M09UfS1BTh7QABVae0AImWbbZiyzlKgwUmg7BIjYTex8u5VtV7wey4+n6L0dYtUjiU2nbN11lcA6zA0naHD/VCrMS2ptlw4j3EhZY6fxbLdc7+RwDwedvRSYfpA50ioxoIvIJE8gQRPCQspYmuUbRzRfDLpmLZT1gQQXADfaZI8h4I6jVBbb75rIaVxvWM7BIIBdHaBGwg2jK+ZyVvo2oTRpmSDqNB5gQfRY5I0rN8UlJtItw5WmgsI51QkENgTrEAwdhDTYnbeyzbcQ8Z3HEKywmkKjfh1e8HvyP3Cwlfo2cTaYPRjKOvUFZxqvzqVXGpUIzDdYABjb5NsjcO5z4Y06zzuBN9mZCwzNIVy4E1AADcBgv3mVuMB0hwtNmrSLmucO29zbn+EaswEU27Zi4tKkifHaYw+BLWVagdWOZa09gcBJjn4KKjpYPdLW9Y2OyIm35oleaf9RccwVxUpCodb43G7DDQBqA3B2Zx4oLR/ShlINNMuDhmI8j2vO638TlFNGO6jJqR7G/FVQLMDByaPVVtfD9bOuGwc5ESd9gDKoOjXT9tfWplrQ5kapdDi4GdptYg7Ny0Y0rXNmawP8LY/yhYTTi6dm8Gu6M3jdA1mvd1LHuAGsIaTI2xAvCr9H9Na1GsxtF0iNV7XS5kXtExNvNa+szEuBL+sI2yT6ErE9MOj2JcRVwtB76pMPDQTrCIBttEBXiaUyczcoGv6G9KKGNfUY+kKbmXs5xaRMEgG4gxa+a0bNJ4QAFuq4G4LWAzbeYWD/wClvRCp+PV0i2vQe6AyS2nLczaNYGY8FqNHdG6NFnVuxXWAEwcyBNm2nIQLq8i1b1oxg7/1YXi+kNKC0Me4G3xBvoCgf/ULg3VYxoA3lzjvmQRfuR/7uwYiQX/1fUKdjsO34KPiGj2Kyt/Jr+vwZ12mqt9QgTnqtHrEpuGqYwdprahZnLmkg959ir1teHktptAI2lxv3EBSU8W5oIYGtBzAaI45qbXyP+IH0fUq1LOpxxB9kWMG/cfAx4qI4qp+Yjlb0UTiTmSU/ITRYMq1W2LwBuL2keBJUdVuHd/asou4sa5p8WgKve2yUCJR5GGqK/HaDwjnQx9ZoknV7LueqXXGfFGUMPRpiGtebfM//a0KP9oYJl7WgHaQJEbL71FU0nQH/cB5X9Ah5ZgoINNZoyps79Y+pTBi3fLDf5WtHoFWVNN0dge7k2PWFA/Tg+WkTzMekqXOXyVp9F2cXU/O/wDqKSz/AO+av/jb4lJKw0Y2hopgN+2c79o/05eSPDGtEWHD9G/oh9a3adA3CGhCYjS9KmLX45DvcU7GWVIyZAdaYJ7IOzIXjvXcSGw4OAILSCBA7JsQskelrqtQU6LX1TPw0WF88C4W7wVe4LXPx0xTMy4SXXGxzpMnkY5rVRl74Icl6MPjNF1Kby2me45ZEj0HiqrEF7DD6ThxAmVtDiZbWqwNXrPiP5A5jLJtd1Mu1JEm4433ro8rXZh47MDXPxOuLi2R392zwQ+Gw73GGsc6Tu9ytu+gHOLRT1oIkmABtzzRzaGrkLIef6GsH2Ys6JqggEHMEkO+UHLmidG4lzRqvaRcwZBBkknI7L9yt8XTJc4knLVAGUEAn2Q9TB6rS4iTEAbhu77KXLZcmkf0dxHNxLTaQeEhEMjiEzBaMDWw4BxN3WzP34Ih+AcW9hx7Pwt2cQPWN/NZNL0dCyv2jrDsElG0sI/PWpt5vB8myUBhWkqxp0TCxbovdso+lWJDAKTwajXCz6YMA7u3Bnu2rN1tA1njXZReRxLZ5xK9EZhdpPkiWMaM3Ad4WsPyHBUkYZMSm+TF9HOidSOtqdh1wGndvMFatul8ZhBLSS3aHAPEcDmEc2vSGbp5SVNTxzPla490eql/kSbtgsCSpEuj+mPWQHvLD5eKumYpzxOuXD+aQslj8NTqTFLVcfmDgPEQQVWMpYrDnWpOkWkN9S059yS0n06E1KPas9DYF2gGyQBEG4jz4rH4PpFUqDtONM8GgjYNoJBkq7xtaoW0mOcRqtdJBIkzNyOZKHhaTb9CU02ki7IjMx5KCtpCiz4qrBH8QVGMM053539UPjqA1XDgsU+TbQvP31QNw4u5NcfOFG7TzPlpvPgPdU+Aow0BH/sTyLMce4p+wpEjtNVD8NIDm4n0ChqaRxJyLG8mk+pRmH0RWNyyOZHsZRbNBOOb2jlJQozYXBFE+pWPxVT3Bo9Aojhy7NzjzJK1I6Ps+Z5PIAesoLSGAZTeA2YLZvvkz7KtJJWxeReiiGDaNi4zCmcgRwWr0PRpw7WaCQcyAdnHkrIkDIDu/RVHHaIeSjFNwLyYFN0co9UVT0RUPygc3D6rTEkXAPgl19riFfiRLyMoBoCpvZ4n6JK+DhwST8USfJIwtZ4OVNs73azrbYDiR5KYVdzaY5Mb9EGK7eJTv2kDYseTYNOKdILqhAFs4Hh3KOtVaGPLXNuDLg6Ym1m81W4yvrDIdkz5x4XHgu6Swob2wBGqDPP4mm9xt5rbHNR7RjONg2i6zW0+pEm15EWBmSOJPkrKphmEEajYziAqynjGvqtYA0Q2BAjbce6uE2/Y0CBgaIaABuFktXalWZtXGRtUFWDVKA1tbYfsKBjC+pEdloBJ3u2Duz7xuReMADZnVAIJJy5FMwpkWyzJIzO/kqQUSinsChxbwyGBpc52wWtvlH0mjYELUol1YGIDRnvJm3mgCqxnWBwd2mh2YhvxAwb8bHvTgXEfG7xPstBiMIKjNQ22g7j9FLhui1pdV8G/UrORpGSrkpMPSHE80U1nBaSh0apCLvPeB6BWdDQdFvyTzJPup0bH5EjHUWjgp20+Z5LbU8BSZdtNg/uifHNNbGtu5I8QvKZWngKrsqbvA+6kraLqsaXvbAGdxvjIFbDrEFpN+tSqCDkbxa1/ZV40ifI2YvEaMbUbrjsuDmN1hmCZIJG0dnzReC6x7R1pEiQeJDi088lJRnUqAbA13g8D/Ui+phsDx45ynu1BoTjcky0wGjKRY0kEyBN49EezBUR/2294n1QOjasNA+80b1g3hOKVCk3ZOxgGWq1u4CPRPJQra0z9+K71lrK7IokIIuD3LprNAUHW8ULXqjPaiwoMp45rhY9xsVWaWqAlpGyZQONwz5DqeczEx4E5enJFdbiTYag4mPaVpSkiG9WS6OrQXCCZjK+/6qwk5jwKzGmMXXptkVNYyBDRqgcZhVlLSNTOo2qHAnOT4Xy48U1i4JeQ3P7W3aYKXWtPFZSlpIPFjzg3HugajA+pDnlpOUkju1gZRo12G6fRuRVbs9klmaGDDWhus624v+qSi0XTM416RrNGZHiqno7XJLwSTYG/eosRWBqOpt/tATbYRO0iwPPNZac0dGxeUqzCTYEapBzuDslO0y1zwzV7IAyz3QCq7QOkaf7Q7CVhqwewT87tx9QFqdIYeYEZLbTVGDmpMzuHwzWEve6JyG7krdptPuoXYBgkxciDfYoahczVa2CBMzu2QofJSJarlGwSeChDztMneisGwuMffFSUZbpTpLWcKLZ7JBIiQ69xPBW2AruLQQ5psOMcEXpvo8KjhWYQHgQRsePYqqZgxOWqeFitLTiQ+zQ4dzyPl8FIZm8eH6qm0W2sNaXkgOOqLfDaNnNWLazpu5vI2+/BQ0MPpn7yVvo6tI1TsVBSr8vEe6Ow9aCCFIzUUnclJr8ZQFJxIn7hJ7nDcnYUG1KqG6ztSUPrk5kwuOEEbrJNjSC3YzVc2DtiOaMxOs5pbYAgi/FV1bCNcI7xHDiq/E6MfIioDxcCfIH3VptENWcraOaxj/xWklpEDbtjyTqTCBcztU9HRIa0l7y4wYgaomN0k58VDSdYcgssiNIsKwTJbO4lFUqHFC4B9nDbM+SY/EPaSQLDfZOPSB9lkMMw7V1uHaDmVXse+LQ3i7tHjAkeZ7lFVqVZgVDzMR4C60SIbLJ4bMe6BfpOk12rIBQ7q7x/FGTGNknxNgq3SOgamJcHOoNZuIABy+aCCfZXHhkS5RfHGU3WkTzum9cBZUWD6Kup2NWtG5sepPqrWnohkX13H+PX84MLRyI1FisUxt3OaO+6qcQHuf1mHZruggl0tDmmMibEiNm9XP7Ixjh+EydhENPdtRL7i+uO6fql5LH4zJ9XVLxrUTI2B4A7tYgnklpXRtZ4tQfOYhzM/wCpX9TWAPba+fzQ0xuI2+qa11Rg7IBaYtu3kE37rI3YtER4Wo4MaKjamvA1oZt8UkY2s47B996Sgs8h0PjQw68GIIttM2CvsDh9Zxe4Aaxkgbo2nakklJUy7/Wwn93NrA12ua257Zptc4RbsyLEb05uLeYh2s2IDnfE4CxJj/lJJU2ZIeXO3d8/oh3P1ikksmaoIpMCOw9hrH7CSSkogbpEF0NaTsuYUWLpOffVaCNxz4FcSWl+iH8kVCsRYjJTvM3SSUj9ElJ0bFOKiSSTEWuGx7tSzZi30J4IltQuvmLwDlMG5i/ckkhDFRxFMzHxZOtcZgePNOe4w2eW3dne6SSGMIoVCQLyuVHgWd758xkkkmhDXY0GNWCL7xP37IKnkO/1SSU5FwhxfNBGGpPcfw3tbkTrN1pG4DZzU2K0W5xJNQQDIAaOe1JJOH+RS7HYXR7RILnunO4E+A90eAymMoHBJJWmS0M/eFL83kUTTeHCySSYh7gNqi5JJIAHxZbHaEjlKrHYikLtcQOGsPIJJIGjnXNfk6oeEx5lda5jRApnnb6ykkixEOu0/I7+r/8ASSSSVgf/2Q==",
      },
    ],
    caption: `Jokester began sneaking into the castle in the middle of the night
              and leaving jokes all over the place: under the king's pillow, in
              his soup, even in the royal toilet. The king was furious, but he
              couldn't seem to stop Jokester. And then, one day, the people of
              the kingdom discovered that the jokes left by Jokester were so
              funny that they couldn't help but laugh. And once they started
              laughing, they couldn't stop.`,
    description: "build your dream house !",
    ownerName: "yosi babun",
    businessEmail: "businessEmail@gmail.com",
    ownerImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZYvfhsbCzDwrup31dzVHchVmOYY1phFJH3A&s",
    subscribersCount: 90,
    services: [
      {
        title: "Construction",
        description:
          "We provide full-scale construction services for residential and commercial projects.",
      },
      {
        title: "Design & Planning",
        description:
          "We offer expert design and planning to bring your ideas to life with precision.",
      },
      {
        title: "Renovations",
        description:
          "Transform your space with our professional renovation services, from minor updates to full makeovers.",
      },
      {
        title: "Project Management",
        description:
          "Our team manages all aspects of construction projects, ensuring timely delivery and within budget.",
      },
      {
        title: "Structural Repairs",
        description:
          "We specialize in repairing and reinforcing structural elements to ensure safety and stability.",
      },
    ],
    aboutOwner:
      "run the compeny for 10 years. bla bla bla i love to talk on my self a lot of bulshitt",
    ownerId: "12341234",
    businessHours: [
      { day: "Sunday", hours: ["09:00 - 13:00", "Closed"] },
      { day: "Monday", hours: ["09:00 - 13:00", "15:00 - 18:00"] },
      { day: "Tuesday", hours: ["09:00 - 13:00", "15:00 - 18:00"] },
      { day: "Wednesday", hours: ["09:00 - 13:00", "15:00 - 18:00"] },
      { day: "Thursday", hours: ["09:00 - 13:00", "15:00 - 18:00"] },
      { day: "Friday", hours: ["09:00 - 13:00", "Closed"] },
    ],
  };
  return (
    <div className="min-h-full min-w-full flex justify-center md:p-20">
      <Outlet></Outlet>
      <BusinessCard
        scrollImages={data.scrollImages}
        whyUsArray={data.whyUsArray}
        businessName={data.businessName}
        description={data.description}
        ownerName={data.ownerName}
        subscribersCount={data.subscribersCount}
        caption={data.caption}
        services={data.services}
        ownerImage={data.ownerImage}
        businessEmail={data.businessEmail}
        aboutOwner={data.aboutOwner}
        ownerId={data.ownerId}
        businessLocation={data.businessLocation}
        businessHours={data.businessHours}
      />
    </div>
  );
}

export default Home;
