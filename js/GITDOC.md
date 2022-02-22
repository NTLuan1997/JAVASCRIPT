<!--
    GIT CREATE REPOSITORY

        …or create a new repository on the command line
            echo "# JAVASCRIPT" >> README.md
            git init
            git add README.md
            git commit -m "first commit"
            git branch -M main
            git remote add origin https://github.com/NTLuan1997/JAVASCRIPT.git
            git push -u origin main


    GIT DELETE BRANCH
        - git branch -d <branch-name>
        - git branch -D <branch-name>

    GIT APP
        - git app .                                     => git add all.
        - git app -A                                    => git add all.
        - git add <path name file>                      => git add one file.
        - git add *.js                                  => git add all file has extension "js".


    GIT FETCH:
        - Công dụng: tải remote content.
        - Được sử dụng tải xuống các remote repository mà không làm thay đổi trạng thái local repository (các commit/ các file)
        hiểu một cách đơn giản, khi bạn thực hiện lệnh git fetch. Git sẽ thu thập và lưu trữ những thay đỗi mới từ các branch của remote repository về máy tính của bạn, nhưng không hợp nhất chúng với local repository. "BẠN CÓ THỂ THEO DÕI NHỮNG COMMIT NGƯỜI KHÁC ĐÃ CẬP NHẬT LÊN SERVER, ĐỒNG THỜI NẮM BẮT ĐƯỢC NHỮNG THÔNG TIN KHÁC NHAU GIỮA REMOTE VÀ LOCAL."

    GIT CHECKOUT:
        - Công dụng: chuyển đổi branch.

    GIT PULL:
        - Công dụng: tải remote content.
        - Cũng được sử dụng tải xuống các remote content và ngay lập tức thực hiện lệnh git merge để merge commit cho remote content mới. nếu bạn đang có thay đổi đang chờ sử lý, điều này có thể khiến local repository rơi vào trạng thái xung đột "complicit".

    GIT PUSH:
        - Công dụng: Upload commit từ local repository lên remote repository.
        - Thực hiện lệnh git push để tạo upstream, đẩy dữ liệu từ local repository lên remote repository, push các nhánh và xóa các nhánh của remote repository.
        - Lệnh "Git push" được sử dụng để đẩy các commit mới ở máy trạm "local repository" lên server "remote repository". Nguồn đẩy lên là nhánh mà con trở HEAD đang trỏ tới(nhánh làm việc).
        - Đích mà nó đẩy lên (ghi vào nhánh nào) có thể chỉ định trong tùy trọn của lệnh, tuy nhiên cũng không cần chỉ định nếu có thể thiết lập liên hệ giữa nguồn và đích trước. Lệnh "Git push" cũng có thể xóa nhánh của remote.
        - Một số tham số hay dung:
            + --all ( Đẩy tất cả các nhánh lên server).
            + --tags ( Đẩy tất cả các nhánh tag lên server).
            + --delete ( Xóa một nhánh được chỉ ra trên server).
            + --u ( Đẩy vào tạo upstream " luồng upload tương ứng với nhánh local", hay sử dụng cho lần đầu đẩy lên server).

        - Example:
            git push -u origin master

            git push

            git push origin beta

            git push origin --all

            git push origin --delete beta

            git push --force origin master


    GIT REVERT
        - Công dụng: được sử dụng để hoàn lại một số thay đổi.
        - "Git revert" không thay thế lệnh lệnh hủy bỏ truyền thống.
        - "Git revert" không xóa bất kỳ dữ liệu nào trong quá trình này. Thay vào đó nó tạo sự thay đổi có tác dụng ngược lại đó là hoàn lại commit đã tùy nào đó.
        - "Git revert" là một commit lấy commit nào đó muốn revert để làm commit mới và đưa nó lên trên HEAD.
        - Cú pháp:
            + git revert HEAD                           => git revert HEAD
            + git revert <id_commit>                    => get revert 1041c5f4b75e820d61ea578fe1d11a8a3de2f1ea

        - Example:

            # Giá trị ban đầu:
            $ git log
                #Coimmit 1:
                    commit 0d4a808c26908cd5fe4b6294a00150342d1a58be
                    Author: yourname <yourname@yourmail.com>
                    Date:   Mon Jul 16 23:19:26 2012 +0900

                    - Thêm giải thích pull

                # Commit 2:
                    commit 9a54fd4dd22dbe22dd966581bc78e83f16cee1d7
                    Author: yourname <yourname@yourmail.com>
                    Date:   Mon Jul 16 23:19:01 2012 +0900

                    - Thêm giải thích commit

                # Commit 3:
                    commit 326fc9f70d022afdd31b0072dbbae003783d77ed
                    Author: yourname <yourname@yourmail.com>
                    Date:   Mon Jul 16 23:17:56 2012 +0900

                    - Thêm giải thích add

                # Commit 4:
                    commit 48eec1ddf73a7fb508ef664efd6b3d873631742f
                    Author: yourname <yourname@yourmail.com>
                    Date:   Mon Jul 16 23:16:14 2012 +0900

                    - first commit


            # Thực hiện lệnh:
            $ git revert HEAD
                [master d47bb1d] Revert "Thêm giải thích pull"
                1 files changed, 1 insertions(+), 2 deletions(-)


            # Kết quả sau thực hiện:
            $ git log

                # Commit 1:
                    commit 7bcf5e3b6fc47e875ec226ce2b13a53df73cf626
                    Author: yourname <yourname@yourmail.com>
                    Date:   Wed Jul 18 15:46:28 2012 +0900

                    - Revert "Thêm giải thích pull"
                    - This reverts commit 0d4a808c26908cd5fe4b6294a00150342d1a58be.

                # Commit 2:
                    commit 0d4a808c26908cd5fe4b6294a00150342d1a58be
                    Author: yourname <yourname@yourmail.com>
                    Date:   Mon Jul 16 23:19:26 2012 +0900

                    - Thêm giải thích pull

                # Commit 3:
                    commit 9a54fd4dd22dbe22dd966581bc78e83f16cee1d7
                    Author: yourname <yourname@yourmail.com>
                    Date:   Mon Jul 16 23:19:01 2012 +0900

                    - Thêm giải thích commit

                # Commit 4:
                    commit 326fc9f70d022afdd31b0072dbbae003783d77ed
                    Author: yourname <yourname@yourmail.com>
                    Date:   Mon Jul 16 23:17:56 2012 +0900

                    - Thêm giải thích add

                # Commit 5:
                    commit 48eec1ddf73a7fb508ef664efd6b3d873631742f
                    Author: yourname <yourname@yourmail.com>
                    Date:   Mon Jul 16 23:16:14 2012 +0900

                    - first commit


    QUY TRINH LÀM VIỆC VỚI GIT

        - git checkout: chuyển sang nhánh mới bắt đầu làm việc.

        - git pull: lấy về những thay đổi được commit lên nhánh chính về.

        - Tiến hành công việc viết code -sau khi viết code xong.

        - git fetch: kiểm tra remote content trên nhánh chính có nhiều thay đổi không.

        - git pull: lấy về remote content lần nữa xem có complicit hay không.

        - Sử lý complicit nếu có.

        - git pull: về lẫn nữa đảm bảo an toàn.

        - git push: tiến hành push local repository lên nhánh của mình và merge vào nhánh chính.
-->