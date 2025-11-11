FROM ruby:3.4.7 AS builder
RUN apt-get update -qq && apt-get install -y build-essential nodejs
WORKDIR /srv/middleman
COPY Gemfile Gemfile.lock .ruby-version ./
RUN bundle install
COPY . .
RUN chown 1000:1000 -R /srv/middleman
RUN bundle exec middleman build

FROM nginx:alpine
COPY --from=builder /srv/middleman/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
