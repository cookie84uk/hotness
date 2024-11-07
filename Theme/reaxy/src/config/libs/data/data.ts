import { ILang } from "./model";

export const langList: ILang[] = [
  {
    name: "English",
    shortName: "en",
    displayOrder: 2,
    isDeleted: false,
    idHash: "3LlDuXpKEl0=",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAACxAAAAsQHGLUmNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA+tJREFUSIm1lWtM21UYxp9zWgKMyyCwQAPSFpyaaSpkacdlINPgbci2aoWZBZnR2nKVBAmKUzYkIkPZ6NICRhH3YZmMYgySodNlWzu6FhJa1LilFOowjIJsq0wgG//jB4S4QaFT93x8T97n996SA6ymWGUMxOoiQ5/dZc1ScmaBjJkFMmbNUnKGPrsLYlUh4vLvW82CrhiNVkVRsbqZMJ6DAI0pm+M2ULebcDOz4GZmQd1ukrI5bgMB0RCOjVCx+kuIVCLvACL1TuJDfmGAEgBv1Q7/9mCAghBig1idtTpAlF9CCDoABHphfKeCCNAJkap4RcChz76vlsXHfLwMeneisnhRg1bbXXMboLGuPXWvIrmyt6OcNtW8hLDQgLt2DgsNQHOVAh1bgqm04eDbrSVHMpYACedOfXPltXJy89ffoNy9FZd+2I+SvdvA463dDCEEufIt6HsrA9KGekwe78L9mipEK544AgA0QlYm5he+GshbHwRbkhyjtTqs9+WhYZ8C5zvehFQi9GgulQhhankF+6YvwVX0DsKzMyHp1SPkqTQErPPdKEiuFNJx1/RzKepWUh34ACJaPsSUvge2JDmu9ZxdMOgs9wjofDIKyC3ArWtuSHr1iK5Q4/rcPEqr25H24kdkbGwqE8b+IRfzQoPpOcwUImGmEAkbTM/xJoUZ+4fGiXWHkqPX3WStWc9cdICbmQUAUH8/+D8Yu+Z+5oODGDELZGwx8f8W9ff7Tze/tggB31cWz+7liGDos9+zJZ8z28fpVkX9AV5cAfLK2jAxNQ0AmBsZxcWcIlgEMlz+QOu5wnkOAHD15BkMJGzHQMJ2jOq/Q2l1O3w2FiI1p76KRkaEdBlPlLHP619G2DofjNbqYEuULzi0avDChT88ApKfPwiLzYnQpx+DpFeP8OxMjOVXQvXTWRgO72GCyLBuesVUOzJ9Y85+9eQZ2JLkmDzeBYG2Bk0PpyG56CgsNqdHgMXmROKuOuSVteH3P28iukINiUm/0F1zm3vsfI2TAsDlE6eKHMVVCM/OhKW0DAk13+Jw6+mlEawmxhi+0F/Apoz9aDlmgE9MFCI/qWODqY8/AwBL19Os6z7waY+t0mJ1LjtdzqHFj9t248bAzwCAgPhNeOT0MdDY/GVA6aNCbs/OxPeL89LfAwD+4sPr6mffhUg1SQhpwL//Eziz1fmG+asKzWLgdqORpkYG7ALgebOe5WaE7cCwTvPP4PJKh3VfMx4/joA0ArjlTdUEOMq4+YfgaOq683HlUdg1E9ywtoTx+GIGFBr7hya44GBG/f1A/f3ABQUxY/+QixFSwHh8ITesy4WzZWwlq78AmOYZluV6OvoAAAAASUVORK5CYII=",
  },
  {
    name: "Русский",
    shortName: "ru",
    displayOrder: 3,
    isDeleted: false,
    idHash: "a1LJadsYP0o=",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAACxAAAAsQHGLUmNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAmFJREFUSIm1lVtIVFEUhv+19z7OaMfqOE0x3jEo6SKEYZQWPQWRVBYakm9Bj/YQCCFFF0lEogh6i16iC16KLhT0FvoSkQQKUZqNl5Rq5oyTPqj7zNk9OA3TqOOlOd/LhrVY/7/2gr0XIQmmaeZzzo8ppY4AKASQG02NAvAT0UvLsp55PJ6RxTRooWAgEMgRQlwCcAYAT9YEABtAp1KqwTAM/5IGoVDoOBHdB6AvIZzIpFKqzjCM5/FBliB+jog6VyEOAJlE9DQcDtfHB2M3iHbemWi6CmylVNXfmxAABIPBXM75J6yu84WYlFIWe73eMQYAnPOrKRQHgExN064AAN171b+tKDu9F/8/mkTsbz/kdvG6L9TUfvdzqsUBgFXv9V5jQ4HpCgfEAQDDv2YOsDFzdr1TBt/NGYOZU1I4ZWBOWcKJ2ccgIrAsXVhOGXh0IVl2lmvCKQOfkTbB8j3uLqcM8ja43tKLprayvEcP3kVmLciIgmUrSCt6RmxYEQUroqDUv8VEgOAEwQkaZxCMoAmaOzlBuIQaqqndQwDwtaJ2QHb3bE5l92n7S78UdT3cOvcX7d5Rw9bpaqmi5UKZa5S7ZEstEP1/Cm819rgOlbeAFlxwK4MxuCsPtmbfudwDJGw0f3X9k+mON1XzBr5ciJB+6nBHweOb1TG/+Hxh++0T6acrW5iesWIHpmeojLqjzfHiwCJLf+TsxZ2yr79Nvu8tVjL5OyRNQNu3a1AvKzm5sbXh47x8suKh882lanC00R7/WR4ZHjfs0G8NAJixVrJ8X4j7NnVTUc71ghsXPiym8QfpFsnQJzC+dQAAAABJRU5ErkJggg==",
  },
  {
    name: "Italiano",
    shortName: "it",
    displayOrder: 4,
    isDeleted: false,
    idHash: "b3NlDa9sk0i=",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAACxAAAAsQHGLUmNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAlhJREFUSIljZMAD9lxeo2cq52r///9/bwYGBgUGBgYZqNQTBgaGB4yMjFs+zV13ULYo8TIuMxixCS45OsH01ef7y37++aacadONVQ0MvLGLY2AS5n/EZWUQLtFafAJdngldYO6hlt4LT/eevP/2qsrff3/xGs7AwMDA8OcPw6/9p+Q+Tlp67GFkYRdeC+YcaFh/8fHBop+/vxM2GA38//yV8fuK7aUPQvPWYbVgweGOzktPjwb8Z/hPqtlItvxn+LFmV+CjiIJuFAtWHJ1gevnZkVKKDEe2ZMvB4gfZDUZwC559ur/i158fJAcLLvDvyzfGv5dvr2RgYGBgWnN8ivnD9zeUqGU4DPw5dl7lUWGLCdPb7y+r/v3/S23zGf7/+cvw78HzKqaPP95ZUt10KPj7/JU104fvrwRpZsGj54JM3399ZaGVBf/ff2JlYqRa2sEEjIyM/5k4WLn/0MwGAd4/TAKcYu9pZT6znOR7Jj4OoWO0soBJQvQIkwi3dAszE/XjmZGFmYFZUaqdKcQ844y8oPpdalvAamV0S66/5gwTAwMDgwSPfAQbCwcVSjoIYOLh+s9jrhfOwAAt7CJtis5oS1i2MWKv4EgDjIwMbN52PWLdZRfgFjAwMDAk2VfX6ErZrKfIEiYmBs5wzzUKKyeWwYWQ5VMd64MMZGx72Fk4SQ4uRj6e/9wRnp3yK/pDUexEV5hkX1eqL2VtKC+kdZOJkYmwRSwsDGz2pvd44v2NZZf1VWBYjE/vzosrdCwUPGHNFkUG1GbLPUZGxq0fZ60+JFeacgWXGQCMnc/pa8nh0wAAAABJRU5ErkJggg==",
  },
  {
    name: "Español",
    shortName: "es",
    displayOrder: 5,
    isDeleted: false,
    idHash: "c2LJfxa8Y3o=",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAACxAAAAsQHGLUmNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAdNJREFUSIm1lT9rFEEYh593dk4Eo4h/wWgXs3NgyrTaREhvCHgBIRaC3ZkihR/AIoXfQJskmIuxF7TRj6CCOxet1KBoEP9BcGfvtbk71iSXM97ur9t3dp/nnWGHV9gj64yczYhqilwUdAw40V76oshLQZ8LuhzT/NCLIb3ALcyCItNAtFcTQABWBZ3fTbRDkBBPA/eAoT7g7fkJXHf4h/miyT94RueAlf+A0/6mkRDX88XuDl7jrgq6TI9j20dU0FpMc6Ur8IwOK/IKODogvJPvlnBhhLfvDIAiCwXCAY4E7B0A2ZwdP7e59uuxWA6KpSIVrEQcwBorERUsFYmwiPx9dKqqGYFAqhkpoRU047emBA2kGtg6PnVoUnR94hbK3QK7z0XqBmWiHDiAXjZAtTwBVQOcKlFw2vR/Z6CoAT6VKPhogKREgTcIT8vjy5PSLhqZbh27MjQpAAnxEjBTcPuLDn+t8xfNA18LhH+LyG5Dex44/IagNwEtAN4CbpznzfuuACCm2QDmBpSoInWHX+0UdhuZU8B94PA+4T8Uma2SPMoXd9xkh18DHLAEpP8AToFFwG2HQ5/xmBCfUaRmaF1SZAw42V76DLxQ5JmgDxx+oxfjD1UGrO9FOUf6AAAAAElFTkSuQmCC",
  },
  {
    name: "Deutsch",
    shortName: "de",
    displayOrder: 6,
    isDeleted: false,
    idHash: "d0LJeRb7Z4p=",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAtAAAALQB65csewAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALRSURBVEiJtZXfS1NhHMaf856zszPW3PHInO4is/BHKSGoV5GxGy+ECEY34Y1IhWRBGtRNu+lGusiYGPQDAr2ysP0DTmxDK0JIaN6FV6vjSM90Z7rjzq9ucmg7Y3O05+59eL+f53053/N9KdM0UUyhUKhtZWVlPJfLdadSqWZRFPn9/X2qq6srqarqL4/HExMEYXZqaupbMQZlFTAwMODxer3z0Wi0L5PJWBa2trZibW0NNpsNfr//czqdvhqJRLZLBgwNDY1Go9HQ3t4eXfRqABwOByRJwmG9IAhaT0/Po3A4PHl0Hzm6mJiYeLmwsDBdCg4A2WwWPM/n15IkMYuLi8+CweBryxsMDg6OLS0tTWqaVoqdlyAISCQSxzyWZdHf339vbm5uOh8QCATq4vH45s7ODlM2HQDHcZAkqcB3uVx6S0tLYywW+00AwO12h08KBwBFUUAIKfBlWaZ9Pt8HAKBpmu4Ih8NPVVU9KR8AYBgGDMMo8BOJRJMsy/PMrc3NkRscB3BcRQGaDhT7bK7N7RFiKkpvReQyZCpKL9El6Vy1AnRJOkdUURSqFaD+FIXCFvjPIkxDQ6pacKaxIUUIz29UK4Cu5TcY4rCvEidbcSeRnAZiWo8u4rCvUgfiZIe59S4OI1tRgH6wC0Pdt6KD9d3sJGzD2Do5dSlWER2Aqecsfcbdt8yeDq4TAFCUrQBF15Q/Rg9F2WEahWUU7dR1XbwO/H0PXO0z25Tz4kNQJ5x3lMV4oRgw7r77zs5IMh8AALYzL56T+uFXoGxl8w1V/vfosPnuvLG3z0wfWsd+NJt3dITUXL5LEadekk7s0BXxyMHrNNp95YG96fHtY5lWj37mx7CHY2vn9fSnPhgWHQIAtiaoqS8AxYLh/cs58+BazYX3Ba+PZUBeW2/bVPnrOEy1G9pus6kleRhZCtz5pK5kEsTu/UjR9bPs2SffiyH+AJplIhx+6FhOAAAAAElFTkSuQmCC",
  },

  {
    name: "Français",
    shortName: "fr",
    displayOrder: 7,
    isDeleted: false,
    idHash: "KqBjZfXsE9o=",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAACxAAAAsQHGLUmNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAeBJREFUSIm1lj1oU1EYhp/vtEnVLq2utpOLTVPp4mCarknMqiiKiJv/4Orsz24lcRJBFFTcpK2CUkkNjrYmuggF41Za41DRxJvXJSnqTdP8XF+4cDmc+zycc8/Hd4w2IsmAcP0B+AlUzUztfL9lxhOZ9Mv8yk1J6/Jn3SuXr5eisVQrRn+zwbFUdtKkGUHMjCVguMm0YUQa7GopOpWzGpf2FheX/p3kfPBk5qhJi0CszYUCxOV4W4rGTrYURJLZ4waPgF0dwBvZAXb/y0T8SFPBWCo7CboLWBfwRkzSvVJ0OuoTmDQD7OwB3sggeLf/EownMmk62/NtYtOfD8QTmwKZ+X5Oz/F0oiEwpJZnuZuYWRowty91K4wxFLQAtKcYiYRcX2gwvP3k7tL3a2jAV2hBZnd/SM6rblT+l2CV1Yr7NHe5AnwNHm9rkWKx6gBhzAWNFzwD5ABqcg+CFiDvIdQL7eP82VlgIUD869FC/sWmAACnK8D3AOAbstrFTWzjpTh74Z3JzgC9tEFhdnp0OV/wCQAKz889Fhyju5X8AJ0aWc49/XPQV2gf5s8/Qe4QkOsAvgDu4Mj7N50dlv3JO4df5VdubNH017zyt2ulialkK0Zb3at+bQkBA/Whtq8tvwF20sLa1txmBQAAAABJRU5ErkJggg==",
  },
];