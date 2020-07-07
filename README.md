# ReactNativeBridge
React Native Bridge Example

## React native bridge, JavaScript ile Native arasında iletişimi sağlamak amacıyla kullanılan bir mesajlaşma katmanıdır. İçerisinde safari tarayıcısının motoru olan JavaScript VM'i barınıdırır.

## Bunun amacı global değişkenler tanımlayarak, native metodların JS tarafına enjekte edilmesi ve bir kod arayüzü sağlanarak isteklerin JSON olarak native tarafa iletilmesidir.

## İşlemlerin yapılabilmesi için üç farklı thread yapısı kullanılır.

## JavaScript Thread: JS/React kodunun çalıştığı thread dir.
## Main/UI Thread: Android ve IOS tarafında bulunan native işlemlerden sorumlu ve arayüz birleşenlerinin düzenlediği thread dir.
## Shadow Thread: ShadowDom'un yönetilmesini sağlar ve NativeUI'a ait olan arayüz birimlerinin ekrana basılmasını sağlar.

## ShadowDom dom içerisinde ki bir ağaç yapısıdır. Değişkenler global olarak tutulmazlar. Bu durum güncellemeler sırasında yapılacak olan hataları en az indirger.

## Örnek olarak;

<input type="range" />

##  bir input tanımladığınız da daha inputun birden fazla div'den oluştuğu görülecektir. Bunu sağlayan ShadowDom'dur. 
