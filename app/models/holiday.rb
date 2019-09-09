class Holiday
    # ===============================
    # SET UP
    # ===============================
    # add attribute readers for instance accesss
    attr_reader :id

    # connect to postgres
    DB = PG.connect({:host => "localhost", :port => 5432, :dbname => 'holiday_app_development'})

    # ===============================
    # PREPARED STATEMENTS
    # ===============================
    # create post
    DB.prepare("create_holiday",
      <<-SQL
        INSERT INTO holidays (name, description, date)
        VALUES ($1, $2, $3)
        RETURNING id, name, description, date;
      SQL
    )

    # update post
    DB.prepare("update_holiday",
      <<-SQL
        UPDATE holidays
        SET name = $2, description = $3, date = $4
        WHERE id = $1
        RETURNING id, name, description, date;
      SQL
    )

    # ===============================
    # ROUTES
    # ===============================
    # index
    def self.all
      results = DB.exec("SELECT * FROM holidays ORDER BY id ASC;")
      return results.map do |result|
        {
            "id" => result["id"].to_i,
            "name" => result["name"],
            "description" => result["description"],
            "date" => result["date"],
        }
      end
    end

    # # show
    # def self.find(id)
    #   # query to find the posts
    #   results = DB.exec("SELECT * FROM posts WHERE id=#{id};")
    #   # if there are results, return the hash
    #   if !results.num_tuples.zero?
    #     return {
    #       "id" => results.first["id"].to_i,
    #       "name" => results.first["name"],
    #       "image" => results.first["image"],
    #       "body" => results.first["body"]
    #     }
    #   # if there are no results, return an error
    #   else
    #     return {
    #       "error" => "no such post, check the id!"
    #     }, status: 400
    #   end
    # end

    # create
    def self.create(opts)
      results = DB.exec_prepared("create_holiday", [opts["name"], opts["description"], opts["date"]])
      return {
        "id" => results.first["id"].to_i,
        "name" => results.first["name"],
        "description" => results.first["description"],
        "date" => results.first["date"],
      }
    end

    # # delete
    def self.delete(id)
      results = DB.exec("DELETE FROM posts WHERE id=#{id};")
      return { "deleted" => true }
    end

    # update
    def self.update(id, opts)
      results = DB.exec_prepared("update_holiday", [id, opts["name"], opts["description"], opts["date"]])
      return {
        "id" => results.first["id"].to_i,
        "name" => results.first["name"],
        "description" => results.first["description"],
        "date" => results.first["date"]
      }
    end

  end
