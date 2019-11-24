module ApplicationHelper
  # ページごとの完全なタイトルを返します。
  def full_title(page_title = '')
    base_title = "Kanata ToDo管理ツール"
    page_title.empty? ? base_title : page_title + " | " + base_title
  end
end
