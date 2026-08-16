# Minimal Gallery

Create a modern, minimal UX/UI design portfolio website that feels confident, playful, editorial, and highly polished — not like a generic template portfolio.

Overall aesthetic

- Minimal layout with lots of whitespace.

- Strong typography and a clean editorial feel.

- Mostly neutral/monochrome base with one subtle accent color used for interactions and highlights.

- The design should feel creative and personal without becoming overly colorful or childish.

- Think: modern design studio + personal portfolio + slightly playful digital experience.

- Use generous spacing, strong visual hierarchy, and large project imagery.

- Avoid excessive cards, gradients, shadows, glassmorphism, or unnecessary UI elements.

Homepage structure

1. Minimal navigation

Top navigation:

Logo/name on the left.

"Work"

"About"

"Contact" on the right.

Keep the navigation simple and sticky.

Add a subtle hover interaction to navigation links — for example, an animated underline, slight movement, or changing accent color.

2. Hero section

Create a short, confident introduction.

Example:
"Hi, I'm Lana — a UX/UI designer creating digital experiences that are simple, useful, and a little more human."

Keep the hero visually minimal with large interesting typography.

Add a small playful interaction somewhere in the hero, such as:

a floating cursor-following element, subtle text movement, a small animated shape.

The animation should be subtle and elegant, not distracting.

3. Project gallery

The main section should be a large responsive gallery grid.

Display projects as large visual thumbnails rather than traditional cards.

Use a dynamic grid:

Desktop: 2-column grid.

Tablet: 2 columns.

Mobile: 1 column.

Each project should contain:

Large project image.

Project name.

Small category/type label.

Optional year.

Keep text minimal.

Example projects:

Billy — Personal Finance App

Cookable — Voice Cooking Experience

Feldenkrais Berlin — Website Redesign

Utopia OS — Landing Page

Use placeholder images if actual project images aren't available.

Project interaction

This is the most important interaction on the website.

When the user clicks a project image, do NOT navigate to a separate project page.

Instead, open a large fullscreen/lightbox carousel overlay.

The overlay should feel smooth and premium.

Each project contains exactly 2 images/screenshots.

Inside the carousel:

Display the two project images prominently.

Allow navigation between the two images using arrows.

Add swipe support on mobile.

Show a small indicator such as "01 / 02".

Show the project name and short description.

Include a clear close button.

Allow closing by clicking outside the content or pressing Escape.

Use a smooth transition when opening the project:

The clicked image should visually expand into the overlay.

Use a subtle scale/fade animation.

Avoid overly dramatic animations.

When switching between images, use a smooth horizontal slide or fade transition.

Hover interactions

Make the portfolio feel alive through subtle microinteractions.

On project hover:

Image can very slightly scale up.

Add a subtle image movement/parallax effect.

Project title can shift a few pixels or reveal an arrow.

Cursor could change when hovering over clickable projects.

Keep all animations fast, subtle, and sophisticated.

About section

Create a minimal About section with a short introduction and a small portrait/photo placeholder.

Include:

Short bio

UX/UI skills

Tools

Location

Contact link

Use typography and whitespace rather than a large collection of cards.

Contact section

End the page with a bold but simple contact section.

Example:
"Have a project in mind?"
"Let's make something useful."

Include email and social/LinkedIn links.

Footer

Minimal footer with:

Name

Copyright

LinkedIn

Email

Typography

Use a modern sans-serif typeface with excellent typography.

Use:

Large expressive headlines.

Small uppercase labels.

Comfortable body text.

Strong contrast between heading and supporting text.

Typography should be one of the main visual elements of the design.

Animation principles

Use Framer Motion or an equivalent animation library where appropriate.

Animations should include:

Smooth page-load reveal.

Subtle scroll reveals.

Project hover interactions.

Image expansion into carousel.

Smooth carousel transitions.

Navigation hover states.

Avoid:

Constant floating animations.

Excessive bouncing.

Long transitions.

Distracting effects.

Generic template animations.

The overall experience should feel calm, intentional, tactile, and slightly playful.

Responsive behavior

The site must be fully responsive.

On mobile:

Single-column project gallery.

Simplified navigation.

Fullscreen carousel optimized for touch/swiping.

Large readable typography.

Preserve generous whitespace.

Important UX requirement

The portfolio should feel like a visual gallery first, not a collection of traditional project cards.

The main focus should be:
beautiful imagery → interesting interaction → minimal information → easy exploration.

Make the final result feel like a designer built it, rather than an AI-generated portfolio template.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://view-play-showcase.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b748438b-d67e-4a46-8dbb-452e59026eea).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
