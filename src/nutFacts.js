const facts = [
  "Cashews are in the same plant family as poison ivy and poison sumac, and their itch-inducing oil is contained in the shell. That’s why you won’t find cashews sold with the shells on the way some other nuts are.",
  "Pistachios are classified as a fruit, and they get their green color from chlorophyll – the same pigment that makes kale green.",
  "This is important, since your body cannot make omega-3 fats on its own, which is why you should try to include omega-3-rich foods in your diet. Aside from helping to protect against heart disease and stroke, omega-3 fats have been found to offer protection against wide range of illnesses, from cancer and rheumatoid arthritis to inflammatory bowel disease and depression. Just one-quarter cup of walnuts gives you nearly 91 percent of the recommended daily value for this healthy fat.",
  "Peanuts are actually legumes, not nuts, and although they were long recommended to be avoided during pregnancy due to allergy concerns, this advice has recently changed. Recent research shows women who eat peanuts or other tree nuts during pregnancy actually have children born with a significantly lower incidence of nut allergies.",
  "A specific type of fat found in almonds has been found to increase beneficial bacteria in your gut, helping to improve your gut flora. Almonds have also been shown to help you feel full without risking weight gain.",
  "When a macadamia nut is ripe and at its peak for harvest, it falls from the tree. That’s why farmers usually harvest macadamia nuts only after they’ve fallen to the ground.",
  "Brazil nuts are high in selenium, a mineral that supports prostate health, especially when it comes from dietary sources. Just a few Brazil nuts daily will provide plenty of selenium for most adults.",
  "The oldest, most senior, first to be known tree nuts is..... Walnuts! They are first documented at more than 12,000 years ago! It is undoubtedly also the healthiest nuts, as they are proven to fight cancer, delay aging and help in weight loss!  ",
  "Pistachio is known as 'happy nut' (开心果) in Chinese but 'smiling nut' in Iran. ",
  "Greenfaced pistachio is green thanks to the high antioxidant content! This has been attributed to the chlorophyll content, similar to other vegetables!",
  "Macadamia nuts are harvested by picking them off the ground. Their shells are also the hardest among all nuts, which is why you can't open them with bare hands, or teeth!",
  "Macadamias are harmful to dogs! It is unknown which chemical is causing a toxic reaction but vomiting, fever and depression have been confirmed in dog behaviors",
  "Peanuts do not grow on trees like other nuts, but grow underground. They grow alongside beans and peas and are classified as Legumes and not Tree Nuts as their seeds are enclosed within pods.",
  "Peanuts account for 60% of all nuts consumption. Thanks to their affordable price and peanut butter, we are actually eating a lot of nuts every day!",
  "Cashew nuts have incredibly toxic shells as they contain a horrible, corrosive liquid that can burn you similar to poison ivy.",
  "Cashew nuts are actually fruits, same as pistachio nuts!",
  "A coconut is not a nut! Coconut is a fruit as we all know, but the 'nut' word comes beause it is a one-seeded fruit, similar to other tree nuts. ",
  "Brazil nuts do not come from Brazil. Most of them come from Bolivia. Just like Japanese nuts do not come from Japan, they come from Mexico. Cashew should be called Brazil nuts as cashews do originate from Brazil. ",
  "Brazil nuts is the most expensive nuts as they require a special large-bodied bees, also known as Orchid Bees. Scientists have not yet understand how to manipulate the bees to effective pollination and lure them to other plantations, which is why harvest has been small and limited.",
  "Almonds are great for our guts! They have some probiotic benefits and help to keep our gut and intestines healthy.",
  "40% of the world's almonds are bought by chocolate manufactuers. It seems like not many people like almonds on its own unless they are accompanied by a layer of sweet chocolates.",
  "The daily limit of nuts is just one handful. No, I am not kidding but most people tend to overeat them as they are just too delicious.",
];

export const randomNutFact = () => {
  console.log(Math.random() * facts.length);
  return facts[parseInt(Math.random() * facts.length)];
};
