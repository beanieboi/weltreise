FROM ruby:4.0.1 AS builder
RUN apt-get update -qq && apt-get install -y build-essential
WORKDIR /srv/jekyll
COPY Gemfile Gemfile.lock .ruby-version ./
RUN bundle install
COPY . .
RUN chown 1000:1000 -R /srv/jekyll
RUN bundle exec jekyll build

FROM nginx:alpine
COPY --from=builder /srv/jekyll/_site /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
