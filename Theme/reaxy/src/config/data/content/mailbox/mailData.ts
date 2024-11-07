import Monster from "@config/assets/images/pages/mailbox/monster.jpg";
import Bruno from "@config/assets/images/pages/mailbox/bruno.jpg";
import MVS from "@config/assets/images/pages/mailbox/vs.jpg";
import Google from "@config/assets/images/pages/mailbox/google-platform.png";
import MailChimp from "@config/assets/images/pages/mailbox/mailchimp.jpg";
import BlueHost from "@config/assets/images/pages/mailbox/bluehost.jpg";
import Vimeo from "@config/assets/images/pages/mailbox/vimeo.jpg";
import Jonathan from "@config/assets/images/pages/mailbox/avatar-3.png";
import Jenifer from "@config/assets/images/pages/mailbox/julia.jpg";

import Sample from "@config/assets/images/mailbox/sample.jpg";
import Snow from "@config/assets/images/mailbox/snow.jpg";

export const mailData = [
  {
    id: 1,
    subject: "Your updated item has been approved",
    name: "Template Monster",
    email: "<do-not-reply@https://www.templatemonster.com>",
    date: "4:08 PM",
    img: Monster,
    trash: false,
    starred: true,
    draft: false,
    isRead: true,
    text: `
    <div  class="container">
      <div class="content">
        <p class="text">Congratulations! Your update to Reaxy - React ts Admin Template on Template Monster has been approved. You can view your item here:</p> 
        <a class="link" target="_blank" href="https://www.templatemonster.com">https://www.templatemonster.com</a>
        <p class="text">Thanks for your submission!</p>
        <p class="text">Regards,<br/> Template Monster Team</p>
      </div>
    </div>
    `,
  },
  {
    id: 2,
    subject: "Useful tool for those who are involved in SEO",
    name: "Josiah Fromdahl",
    email: "<Reekie8647@gmail.com>",
    date: "9:47 AM",
    img: Bruno,
    trash: false,
    starred: false,
    draft: false,
    isRead: true,
    text: `
    <div class="container">
      <div class="content">
        <p class="text">Hi, I want to introduce the Website Reviewer is an incredibly useful tool for those who are involved in SEO and web designing. This particular tool will provide you with q@configck website review and SEO audit of the websites you’ve created so you will be able to determine if and where any changes should be made so you can make it as effective as possible when it comes to getting visitors and keeping them interested. Unlike many similar tools, website reviewer is completely free.</p>
        <hr class="hr" />
        <div class="attachments">
          <h3 class:"textH">2 attachments</h3>
          <button  class="circle-button"><i class="fas fa-download"></i></button>
          <button  class="circle-button"><i class="fas fa-search"></i></button>
        </div>
        <div class="img">
          <img src="${Snow}" />
        </div>
        <h3 class="textH">image-1.jpg</h3>
        <div class="attachments">
          <h3>457K</h3>
          <button  class="circle-button"><i class="fas fa-download"></i></button>
          <button  class="circle-button"><i class="fas fa-search"></i></button>
      </div>
      <div class="img">
      <img src="${Sample}" />
      </div>
      <h3 class="textH">image-2.jpg</h3>
      <div class="attachments">
        <h3>420K</h3>
        <button  class="circle-button"><i class="fas fa-download"></i></button>
        <button  class="circle-button"><i class="fas fa-search"></i></button>
    </div>
      </div>
    </div>
    `,
  },
  {
    id: 3,
    subject:
      "Lessons from the field: surviving success with Customer Reliability Engineering",
    name: "Google Cloud Platform",
    email: "<CloudPlatform-noreply@google.com>",
    date: "Jan 5",
    img: Google,
    trash: false,
    starred: false,
    draft: false,
    isRead: false,
    text: `
    <div class="container">
      <div class="content">
        <h3 class="textH">TRENDING</h3> 
        <p class="text">For those who missed the early adoption of Infrastructure as a Service circa 2007,this in-depth history stresses why businesses need to begin b@configlding around "serverless" architectures.<p/>
        <p class="text">A stress test led by Pivotal’s Cloud Foundry team ran 250,000 real-life app containers on Google Compute Engine. GCP made it possible to stand the environment up in hours, and scaled it without pre-planning.
       Dig in to a new site packed with open-source tools and resources that aims to make it easy for anyone to explore, develop, and share AI creations. Play an AI duet, or have your phone guess what you’re drawing. </p>
      </div>
    </div>
    `,
  },
  {
    id: 4,
    subject: "Welcome to Visual Studio Team Services",
    name: "Microsoft Visual Studio",
    email: "<MVS@e-mail.microsoft.com>",
    date: "24.12.2023",
    img: MVS,
    trash: false,
    starred: false,
    draft: false,
    isRead: true,
    text: `
     <div class="container">
      <div class="content">
        <p class="text">Whether your teams develop in Java, .NET, or in multiple languages, Visual Studio Team Services offers an open,cloud-hosted development hub. Use your favorite IDE, develop in any language, and empower your teams to iterate rapidly.</p>
        <p class="text">Rogue security software scams. Rogue security software, also known as "scareware," is software that appears to be beneficial from a security perspective but provides limited or no security, generates erroneous or misleading alerts, or attempts to lure you into participating in fraudulent transactions. These scams can appear in email, online advertisements, your social networking site, search engine results, or even in pop-up windows on your computer that might appear to be part of your operating system, but are not.</p>
      </div> 
    </div>`,
  },
  {
    id: 5,
    subject: "Our 2023 annual report",
    name: "MailChimp",
    email: "<hello@mailchimp.com>",
    date: "22.12.2023",
    img: MailChimp,
    trash: false,
    starred: true,
    draft: false,
    isRead: false,
    text: `  
    <div class="container">
      <div class="content">
        <p class="text">For our 2023 annual report, we let our design team run wild with our most fun facts and proudest moments from the year. From GIFs in email campaigns to physical tons of infrastructure added to dollars raised for charity, it’s our year in numbers.</p>
        <p class="text">We’re proud of our new features, our customer support tickets solved, and our philanthropy in Atlanta. But we’re even more proud of you and the billions of emails you’ve sent to grow your businesses your way in 2023. Keep up the good work!</p>
        <p class="text">Cheers to the new year,</p>
        <p class="text">MailChimp</p>
      </div>
    </div>`,
  },
  {
    id: 6,
    subject: "Your updated item has been approved",
    name: "Bluehost",
    email: "<no-reply@e.bluehost.com>",
    date: "20.12.2023",
    img: BlueHost,
    trash: true,
    starred: false,
    draft: false,
    isRead: false,
    text: `
    <div class="container">
      <div class="content">
        <h3 class="textH">New ICANN Rules Req@configre Accurate Contact Information</h3>
        <p class="text">Your domain information may be at risk. However, you can protect your information with domain privacy.</p>
        <p class="text">Protect yourself with Domain Privacy.</p>
        <p class="text">Only $11.88 per year.**</p>
        <p class="text"><a href="http://bluehost.com/" target="blank" class="btn btn-success">Get started</a><p/>
      </div>
    </div>`,
  },
  {
    id: 7,
    subject: "The year's best videos and milestones",
    name: "Vimeo",
    email: "<vimeo@email.vimeo.com>",
    date: "20.12.2023",
    img: Vimeo,
    trash: false,
    starred: false,
    draft: false,
    isRead: false,
    text: `
    <div class="container">
      <div class="content">
        <h3 class="textH">Now presenting: 2023's best videos</h3>
        <p class="text">Every day, the world's best creators upload their videos to Vimeo. And now, the most inventive, most striking, most all-around mind-blowing videos of 2016 are in. Enjoy, wondrous humans.</p>
        <p class="text"><a class="link" href="https://vimeo.com/blog/post/The-Top-Videos-of-2016?utm_source=email&utm_medium=vimeo-decembernewsletter-201612&utm_campaign=30389" target="blank" class="btn btn-info">See the list</a> </p>
      </div>
    </div>
    `,
  },
  {
    id: 8,
    subject: "Author Driven Pricing on TemplateMonster, CodeCanyon and 3DOcean",
    name: "The Template Monster",
    email: "<donotreply@templatemonster.com>",
    date: "05.09.2023",
    img: Monster,
    trash: false,
    starred: true,
    draft: false,
    isRead: false,
    text: `
    <div class="container">
      <div class="content">
        <h3 class="textH">Hey TemplateMonster Community Members!</h3>
          <p class="text">As many of you know, over the past 12 months we have been rolling out Author Driven Pricing (ADP) across a range of different categories on Template Monster. So far this has included GraphicRiver and a handful of categories within TemplateMonster.</p>
            <p class="text">In a few weeks, we'll be moving on to the next stage of our Author Driven Pricing project. This will involve introducing ADP to three new areas of  Template Monster. These areas are:</p>
          <ul>
            <li class="text">All remaining TemplateMonster categories (including WordPress)</li>
            <li class="text">All categories on CodeCanyon.</li>
            <li class="text">All categories on 3DOcean</li>
            <p class="text">We strongly recommend reading the full announcement on our forums where you will find:</p>
          </ul>
          <ul>
            <li class="text">More details about the change.</li>
            <li class="text">How ADP has impacted pricing on previous categories.</li>
            <li class="text">Technical details regarding how to set prices.</li>
            <li class="text">Why we’ve made the change.</li>
            <p class="text">You will also be able to ask any questions you might have.</p>
          </ul>
          <p class="text">We will send you another email to let you know when this feature goes live.</p>
          <p class="text">All the best,</p>
          <p class="text">The TemplateMonster Team</p>
      </div>
    </div>
    `,
  },
  {
    id: 9,
    subject: "Ability to Customize",
    name: "Jonathan Cantu",
    email: "<JCantu@billingsleyco.com>",
    date: "09.02.2023",
    img: Jonathan,
    trash: false,
    starred: false,
    draft: false,
    isRead: false,
    text: `
    <div class="container">
      <div class="content">
        <p class="text">Hi,</p>
        <p class="text">Upon purchases, will I have the ability to modify color palette, font, etc. beyond your own design?</p>
        <p class="text">Thanks</p>
      </div>
    </div>
    `,
  },
  {
    id: 10,
    subject: "Guest Post Request - 2023 !!!",
    name: "Jennifer Adam",
    email: "<hello@mailchimp.com>",
    date: "09.05.2023",
    img: Jenifer,
    trash: false,
    starred: false,
    draft: false,
    isRead: false,
    text: `
    <div class="container">
      <div class="content">
        <h3 class="textH">Hello,</h3>
        <p class="text">I'm Jennifer, constant follower of your blog posts and I've liked most of the blog posts written here. I could realize you've already published some great guest posts from different authors with distinct styles and I'd be privileged if I were provided with an opportunity to delight your blog followers with some informative blog posts.</p>
        <p class="text">I'm a content expert and I've contributed some sensible and informative articles to surplus niche-specific blogs. I realize the value of content and its part in helping out numerous people out there in the space.</p>
      </div>
    </div>
    `,
  },
  {
    id: 11,
    subject: "no subject",
    name: "Draft",
    email: "",
    date: "4:46 PM",
    img: Vimeo,
    trash: false,
    starred: false,
    draft: true,
    isRead: false,
    text: ``,
  },
  {
    id: 12,
    subject: "Please confirm your email",
    name: "Draft",
    email: "",
    date: "4:46 PM",
    img: Vimeo,
    trash: false,
    starred: false,
    draft: true,
    isRead: false,
    text: `
    <div class="container">
      <div class="content">
      <p class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum interdum ex, sed aliquet nisl maximus imperdiet. Phasellus pharetra nunc eu d@config hendrerit, q@configs ullamcorper tortor malesuada. Nullam ante mi, auctor eu nunc vitae, gravida molestie arcu.
        </p>
        </div>
    </div>
        `,
  },
];
